/* =============================
   V-Pro — Custom JS
   ============================= */

/**
 * Инициализация навигационного меню t815
 */
t_onReady(function () {
  t_onFuncLoad('t815_init', function () {
    t815_init('798373121');
  });
});

/**
 * Инициализация секции с карточками услуг t490
 */
t_onReady(function () {
  t_onFuncLoad('t490_init', function () {
    t490_init('798373125');
  });
});

/**
 * Инициализация мобильной кнопки звонка t943
 */
t_onReady(function () {
  t_onFuncLoad('t943_init', function () {
    t943_init('799304866', 'yes');
  });
});

/**
 * Инициализация слайдера галереи t670
 */
t_onReady(function () {
  t_onFuncLoad('t670_init', function () {
    t670_init('798394576', false);
  });
});

/**
 * Анимация появления страницы при первом посещении
 * (показывает блоки с плавным fade-in)
 */
(function () {
  var isBot = /bot|google|yandex|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|spider|robot|crawling|facebook/i.test(navigator.userAgent);
  var hasSessionStorage = typeof sessionStorage !== 'undefined';
  var alreadyVisited = hasSessionStorage && sessionStorage.getItem('visited') === 'y';

  if (!isBot && hasSessionStorage && !alreadyVisited && document.visibilityState) {
    function t_setvisRecs() {
      var allRecords = document.querySelectorAll('.t-records');
      Array.prototype.forEach.call(allRecords, function (el) {
        el.classList.add('t-records_animated');
      });
      setTimeout(function () {
        Array.prototype.forEach.call(allRecords, function (el) {
          el.classList.add('t-records_visible');
        });
        sessionStorage.setItem('visited', 'y');
      }, 400);
    }
    document.addEventListener('DOMContentLoaded', t_setvisRecs);
  }
})();

/* =============================
   Google Analytics (gtag.js)
   ============================= */
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

// Загружаем GA с задержкой 2 секунды чтобы не блокировать рендер
setTimeout(function () {
  (function (w, d, s, i) {
    var f = d.getElementsByTagName(s)[0];
    var j = d.createElement(s);
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtag/js?id=' + i;
    f.parentNode.insertBefore(j, f);
    gtag('js', new Date());
    gtag('config', i, {});
  })(window, document, 'script', 'G-NRWRRNZG1S');
}, 2000);

/* =============================
   Tilda Statistics (с задержкой)
   ============================= */
window.mainTracker = window.mainTracker || 'tilda';
window.tildastatcookie = 'no';

setTimeout(function () {
  (function (d, w, k, o, g) {
    var n = d.getElementsByTagName(o)[0];
    var s = d.createElement(o);
    var f = function () { n.parentNode.insertBefore(s, n); };
    s.type = 'text/javascript';
    s.async = true;
    s.key = k;
    s.id = 'tildastatscript';
    s.src = g;
    if (w.opera === '[object Opera]') {
      d.addEventListener('DOMContentLoaded', f, false);
    } else {
      f();
    }
  })(
    document,
    window,
    '13b017e02e35b9aa93035b2febb10047',
    'script',
    'https://static.tildacdn.pro/js/tilda-stat-1.0.min.js'
  );
}, 2000);
