document.addEventListener("DOMContentLoaded", function () {
  // 現在のURLからディレクトリを判定
  var path = window.location.pathname;
  var directory = path.substring(0, path.lastIndexOf('/'));

  var navPath = "navigation.html";
  var footerPath = "footer.html";

  // サブディレクトリにいる場合、パスを修正
  if (directory !== "") {
    navPath = "../" + navPath;
    footerPath = "../" + footerPath;
  }

  // ヘッダーとフッターの非同期読み込み
  fetch(navPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById("nav-placeholder").innerHTML = data;
    });

  fetch(footerPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });


  // スライドショーのプレイとポーズボタンの制御
  var slideshow = UIkit.slideshow('.js-slideshow-animation');
  var pauseButton = document.getElementById('pauseButton');
  var playButton = document.getElementById('playButton');

  pauseButton.addEventListener('click', function () {
      slideshow.stopAutoplay();
      pauseButton.style.display = 'none';
      playButton.style.display = 'inline-block';
  });

  playButton.addEventListener('click', function () {
      slideshow.startAutoplay();
      playButton.style.display = 'none';
      pauseButton.style.display = 'inline-block';
  });

   // スライドショーの各スライドの表示時間を設定
   slideshow.on('beforeitemshow', function (e) {
    var duration = e.target.querySelector('.uk-active').getAttribute('data-duration');
    if (duration) {
      slideshow.$props.autoplayInterval = parseInt(duration, 10);
    }
  });
});

// スライドごとのテキスト表示（固定）制御 
    slideshow.on('beforeitemshow', function (e) {
      var index = e.detail[0].index; // 現在のスライドのインデックス
      var fixedTexts = document.querySelectorAll('.fixed-text');
  
      fixedTexts.forEach(function (fixedText, i) {
        if (index === i) {
          fixedText.style.display = 'block';
        } else {
          fixedText.style.display = 'none';
        }
      });
    });