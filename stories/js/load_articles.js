const loadArticleList = (targetId, jsonPath, lang = 'jp') => {
  const target = document.getElementById(targetId);
  if (!target) return;

  fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
      let html = '<ul class="uk-list uk-list-divider">';
      data.forEach(article => {
        const title = lang === 'en' ? article.title_en : article.title_jp;
        const chapter = article.chapter;
        const date = article.date;
        const label = lang === 'en'
          ? `Chapter ${chapter}: ${title}`
          : `第${chapter}章 ${title}`;

        if (article.draft === true) {
          // グレー、リンクなし
          html += `
            <li class="article-item draft-entry">
              <div class="article-title" style="color: gray;">${label}${lang === 'en' ? ' (Coming Soon)' : '（編集中）'}</div>
              <div class="article-date" style="color: gray;">${date}</div>
            </li>`;
        } else {
          // 通常公開
          html += `
            <li class="article-item">
              <a href="article.html?file=${article.filename}&lang=${lang}" class="uk-link-reset">
                <div class="article-title">${label}</div>
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










