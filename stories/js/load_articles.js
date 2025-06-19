const loadArticleCards = async (targetId, jsonPath, lang = 'jp') => {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    const response = await fetch(jsonPath);
    const data = await response.json();

    target.innerHTML = ''; // 初期化

    for (const article of data) {
      const title = lang === 'en' ? article.title_en : article.title_jp;
      const chapter = article.chapter;
      const date = article.date;
      const label = lang === 'en'
        ? `Chapter ${chapter}: ${title}`
        : `第${chapter}章 ${title}`;

      const isDraft = article.draft === true;
      const image = article.image || 'placeholder.jpg';
      const link = `article.html?file=${article.filename}&lang=${lang}`;

      const card = document.createElement('div');
      card.className = `uk-card uk-card-hover uk-margin uk-card-default ${isDraft ? 'draft-card' : ''}`;
      card.style.opacity = isDraft ? 0.6 : 1;

      card.innerHTML = `
        <div class="uk-card-media-top">
          <img src="${image}" alt="${title}" uk-img>
        </div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">${label}</h3>
          <p>${date}</p>
          ${isDraft
            ? `<span class="uk-text-muted">${lang === 'en' ? 'Coming Soon' : '（編集中）'}</span>`
            : `<a href="${link}" class="uk-button uk-button-text">${lang === 'en' ? 'Read more' : '続きを読む'}</a>`}
        </div>
      `;

      target.appendChild(card);
    }
  } catch (error) {
    console.error(`❌ Error loading ${jsonPath}:`, error);
  }
};





