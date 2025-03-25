document.addEventListener("DOMContentLoaded", function () {
    const articlesList = document.getElementById('articles-list');

    // `articles-list` が存在しない場合のエラーハンドリング
    if (!articlesList) {
        console.error("❌ articles-list が見つかりません！HTML に <div id='articles-list'></div> があるか確認してください。");
        return;
    }

    fetch('articles.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("❌ Failed to load articles.json (HTTP status: " + response.status + ")");
            }
            return response.json();
        })
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
            articlesList.innerHTML = html;
        })
        .catch(error => console.error('❌ Error loading articles:', error));
});






