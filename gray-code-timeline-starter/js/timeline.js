
async function loadTimeline({ containerId, sortBy = "chronology", base = "/GRAY-CODE" }) {
  try {
    const res = await fetch(`${base}/data/timeline.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const items = [...data].sort((a, b) => {
      if (sortBy === "chronology") {
        return (a.chronology || "").localeCompare(b.chronology || "");
      } else {
        return (a.tocOrder ?? 9999) - (b.tocOrder ?? 9999);
      }
    });

    const $root = document.getElementById(containerId);
    $root.innerHTML = "";
    items.forEach(n => {
      const card = document.createElement("article");
      card.className = "node-card";
      card.innerHTML = `
        <header class="node-head">
          <h3>${n.title}</h3>
          <small>${n.arc || ""}${n.chronology ? " — " + n.chronology : ""}</small>
          ${n.status ? `<span class="status ${n.status}">${n.status}</span>` : ""}
        </header>
        ${n.image ? `<img src="${n.image}" alt="${n.title}" loading="lazy">` : ""}
        <nav class="links">
          ${n.href ? `<a href="${n.href}">Page</a>` : ""}
          ${n.md   ? `<a href="${n.md}">Draft (md)</a>` : ""}
        </nav>
        ${Array.isArray(n.tags) && n.tags.length ? `<ul class="tags">${n.tags.map(t=>`<li>#${t}</li>`).join("")}</ul>` : ""}
      `;
      $root.appendChild(card);
    });
  } catch (err) {
    const $root = document.getElementById(containerId);
    $root.innerHTML = `<p style="color:#b00">Failed to load timeline: ${String(err)}</p>`;
    console.error(err);
  }
}
