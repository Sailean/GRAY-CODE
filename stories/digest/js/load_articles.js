// ✅ load_articles.js 拡張版

document.addEventListener("DOMContentLoaded", function () {
    const loadArticleList = (targetId, jsonPath) => {
      const target = document.getElementById(targetId);
      if (!target) return;
  
      fetch(jsonPath)
        .then(response => response.json())
        .then(data => {
          let html = '<ul class="uk-list uk-list-divider">';
          data.forEach(article => {
            html += `
              <li class="article-item">
                <a href="article.html?file=${article.file}" class="uk-link-reset">
                  <div class="article-title">${article.title}</div>
                  <div class="article-date">${article.date}</div>
                </a>
              </li>`;
          });
          html += '</ul>';
          target.innerHTML = html;
        })
        .catch(error => console.error(`❌ Error loading ${jsonPath}:`, error));
    };
  
    loadArticleList("articles-list-jp", "articles.json");
    loadArticleList("articles-list-en", "en_index.json");
  });






