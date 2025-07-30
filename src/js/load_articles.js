
/**
 * Flexible article list loader with:
 * - Single JSON schema support (articles.json) but backward-compatible with older fields
 * - Search by title/location/tags/summary (URL param ?q=...)
 * - Tag badges with clickable filtering
 * - Summary display (uses item.summary; falls back to summaries.json[file])
 */
function normalizeArticle(raw, lang) {
  // Flexible getters
  const title = raw.title
    || (lang === 'en' ? (raw.title_en || raw.titleEN) : (raw.title_jp || raw.titleJP || raw.title))
    || "";
  const file = raw.file || raw.filename || raw.path || "";
  const date = raw.date || "";
  const year = raw.year || (date ? (date.split("-")[0] || "") : "");
  const location = raw.location || raw.location_jp || "";
  const tags = Array.isArray(raw.tags) ? raw.tags
    : (typeof raw.tags === "string" ? raw.tags.split(",").map(t => t.trim()).filter(Boolean) : []);
  const draft = !!raw.draft;
  const summary = raw.summary || "";
  const date_inferred = !!raw.date_inferred;
  const id = raw.id ?? raw.index ?? raw.no ?? null;
  return { id, title, file, date, year, location, tags, draft, summary, date_inferred, _raw: raw };
}

function matchQuery(item, q) {
  if (!q) return true;
  const hay = [
    item.title || "",
    item.location || "",
    (item.tags || []).join(" "),
    item.summary || "",
    item.file || ""
  ].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());
}


function extractArcs(items){
  const arcs = new Set();
  items.forEach(a => (a.tags || []).forEach(t => {
    if (t.toLowerCase().startsWith("arc:")) arcs.add(t);
  }));
  return Array.from(arcs).sort();
}

function formatArcLabel(tag){
  // tag like 'arc:ghosts_of_the_model' -> 'Arc: Ghosts of the Model'
  const name = tag.replace(/^arc:\s*/i, "").replace(/_/g, " ");
  // simple title-case
  const titled = name.split(" ").map(w => w ? (w[0].toUpperCase() + w.slice(1)) : "").join(" ");
  return "Arc: " + titled;
}

function renderArcFilters(arcs){
  if (!arcs.length) return "";
  const params = new URLSearchParams(window.location.search);
  const q = (params.get('q') || "").toLowerCase();
  let html = '<div class="uk-margin-small">';
  arcs.forEach(tag => {
    const active = q.includes(tag.toLowerCase());
    const esc = encodeURIComponent(tag);
    html += `<a class="uk-badge uk-label uk-margin-small-right ${active?'uk-button-primary':''}" href="?q=${esc}">${formatArcLabel(tag)}</a>`;
  });
  html += '</div>';
  return html;
}

function tagBadge(tag) {
  const esc = encodeURIComponent(tag);
  return `<a class="uk-badge uk-label uk-margin-small-right" href="?q=${esc}">${tag}</a>`;
}

function renderItem(a, lang, summaries) {
  const label = a.title;
  const dateLabel = a.date ? a.date : (a.year ? `${a.year}` : "");
  const inferredIcon = a.date_inferred ? `<span title="inferred date">※</span>` : "";
  const sum = a.summary || (summaries && summaries[a.file]) || "";
  const tagsHtml = (a.tags || []).map(tagBadge).join("");
  const locationHtml = a.location ? `<span class="uk-text-meta uk-margin-small-left">${a.location}</span>` : "";
  const href = a.file ? `article.html?file=${encodeURIComponent(a.file)}&lang=${lang}` : "#";

  if (a.draft) {
    return `
      <li class="article-item draft-entry">
        <div class="article-title" style="color: gray;">${label} ${locationHtml}</div>
        <div class="article-date" style="color: gray;">${dateLabel}${inferredIcon}</div>
        ${sum ? `<div class="article-summary uk-text-muted">${sum}</div>` : ""}
        <div class="article-tags">${tagsHtml}</div>
      </li>`;
  } else {
    return `
      <li class="article-item">
        <a href="${href}" class="uk-link-reset">
          <div class="article-title">${label} ${locationHtml}</div>
          <div class="article-date">${dateLabel}${inferredIcon}</div>
          ${sum ? `<div class="article-summary uk-text-muted">${sum}</div>` : ""}
          <div class="article-tags">${tagsHtml}</div>
        </a>
      </li>`;
  }
}

/**
 * Load and render an article list.
 * targetId: container element id
 * jsonPath: path to a JSON array (articles.json)
 * lang: 'jp' or 'en'
 */
const loadArticleList = (targetId, jsonPath, lang = 'jp') => {
  const target = document.getElementById(targetId);
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const q = params.get('q') || "";

  Promise.all([
    fetch(jsonPath).then(r => r.json()),
    // Optional summaries.json for fallback when item.summary is missing
    fetch('summaries.json').then(r => r.ok ? r.json() : {}).catch(() => ({}))
  ]).then(([data, summaries]) => {
    const items = Array.isArray(data) ? data : (data.items || []);
    const normalized = items.map(x => normalizeArticle(x, lang));
    const arcs = extractArcs(normalized);

    // Filter by query
    const filtered = normalized.filter(x => matchQuery(x, q));

    // Render
    let html = '';
    if (q) {
      html += `<div class="uk-alert-primary" uk-alert>Filter: <strong>${q}</strong> &nbsp; <a class="uk-alert-close" uk-close href="?"></a></div>`;
    }
    html += renderArcFilters(arcs);
    html += '<ul class="uk-list uk-list-divider">';
    filtered.forEach(article => {
      html += renderItem(article, lang, summaries);
    });
    html += '</ul>';
    target.innerHTML = html;
  }).catch(err => {
    console.error("❌ loadArticleList error:", err);
  });
};

// Expose globally
window.loadArticleList = loadArticleList;
