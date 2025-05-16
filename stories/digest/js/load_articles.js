const loadArticleList = (targetId, jsonPath, lang = 'jp') => {
  const target = document.getElementById(targetId);
  if (!target) return;

  fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
      let html = '<ul class="uk-list uk-list-divider">';
      data.forEach(article => {
        const title = lang === 'en' ? article.title_en : article.title_jp;
        const filename = article.filename;
        const chapter = article.chapter;
        const date = article.date;

        if (article.draft === true) {
          // 🔹 draft:true → リンクなしでグレー表示
          html += `
            <li class="article-item draft-entry">
              <div class="article-title" style="color: gray;">第${chapter}章 ${title}（編集中）</div>
              <div class="article-date" style="color: gray;">${date}</div>
            </li>`;
        } else {
          // 🔸 通常表示
          html += `
            <li class="article-item">
              <a href="article.html?file=${filename}&lang=${lang}" class="uk-link-reset">
                <div class="article-title">第${chapter}章 ${title}</div>
                <div class="article-date">${date}</div>
              </a>
            </li>`;
        }
      });
      html += '</ul>';
      target.innerHTML = html;
    })
    .catch(error => console.error(`❌ Error loading ${jsonPath}:`, error));
};

const title = lang === 'en' ? article.title_en : article.title_jp;
const chapterLabel = lang === 'en'
  ? `Chapter ${chapter}: ${title}`
  : `第${chapter}章 ${title}`;
const dateLabel = date;
if (article.draft === true) {
  html += `
    <li class="article-item draft-entry">
      <div class="article-title" style="color: gray;">${chapterLabel}${lang === 'en' ? ' (Coming Soon)' : '（編集中）'}</div>
      <div class="article-date" style="color: gray;">${dateLabel}</div>
    </li>`;
} else {
  html += `
    <li class="article-item">
      <a href="article.html?file=${filename}&lang=${lang}" class="uk-link-reset">
        <div class="article-title">${chapterLabel}</div>
        <div class="article-date">${dateLabel}</div>
      </a>
    </li>`;
}










