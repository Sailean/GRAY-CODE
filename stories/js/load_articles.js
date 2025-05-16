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

        html += `
          <li class="article-item">
            <a href="article.html?file=${filename}&lang=${lang}" class="uk-link-reset">
              <div class="article-title">第${chapter}章 ${title}</div>
              <div class="article-date">${date}</div>
            </a>
          </li>`;
      });
      html += '</ul>';
      target.innerHTML = html;
    })
    .catch(error => console.error(`❌ Error loading ${jsonPath}:`, error));
};









