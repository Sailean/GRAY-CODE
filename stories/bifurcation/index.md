<!-- stories/bifurcation_index.html （仮ファイル名） -->
<!-- 以下は digest版とほぼ同じ構成で、JSONファイルだけ切り替える！ -->

<ul class="uk-list uk-list-divider" id="bifurcation-articles-list-jp">📂 読み込み中...</ul>

<script>
fetch('bifurcation_articles.json?nocache=' + new Date().getTime())
  .then(response => response.json())
  .then(data => {
    let html = '<ul class="uk-list uk-list-divider">';
    data.forEach(article => {
      html += `
        <li>
          <a href="article.html?file=${article.filename}&lang=jp" class="uk-link-reset">
            <span class="uk-text-bold">第${article.chapter}章 ${article.title_jp}</span> - ${article.date}
          </a>
        </li>`;
    });
    document.getElementById('bifurcation-articles-list-jp').innerHTML = html;
  })
  .catch(error => {
    document.getElementById('bifurcation-articles-list-jp').innerHTML = '<p>⚠ 目次の読み込みに失敗しました。</p>';
  });
</script>

