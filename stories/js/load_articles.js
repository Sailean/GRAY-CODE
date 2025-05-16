data.forEach(article => {
  const title = lang === 'en' ? article.title_en : article.title_jp;
  const filename = article.filename;
  const chapter = article.chapter;
  const date = article.date;

  if (article.draft) {
    // draft:true → グレー文字でリンクなし表示
    html += `
      <li class="article-item draft-entry">
        <div class="article-title" style="color: gray;">第${chapter}章 ${title}（編集中）</div>
        <div class="article-date" style="color: gray;">${date}</div>
      </li>`;
  } else {
    html += `
      <li class="article-item">
        <a href="enedited_article.html?file=${filename}&lang=${lang}" class="uk-link-reset">
          <div class="article-title">第${chapter}章 ${title}</div>
          <div class="article-date">${date}</div>
        </a>
      </li>`;
  }
});









