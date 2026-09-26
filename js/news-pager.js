/* LEO Sat Lab — 全部新闻分页 / news archive pagination
 *
 * 每页条数由 _config.yml 的 news_per_page 决定，经 news.html 的
 * data-per-page 属性传入本页脚本；此处无需改动。
 * 未执行 JS 时（爬虫、无 JS 浏览器）列表按原样完整显示，不会丢内容。
 * 页码写入地址栏 hash（#page-2），因此可分享、可用浏览器前进后退。
 */
(function () {
  'use strict';

  var list = document.getElementById('news-list');
  var pager = document.getElementById('news-pager');
  var counter = document.getElementById('news-count');
  if (!list || !pager) { return; }

  var items = [].slice.call(list.querySelectorAll('.news-item'));
  var perPage = parseInt(list.getAttribute('data-per-page'), 10);
  if (!(perPage > 0)) { perPage = 7; }
  var pages = Math.max(1, Math.ceil(items.length / perPage));

  function range(from, to) {
    var out = [];
    for (var i = from; i <= to; i++) { out.push(i); }
    return out;
  }

  /* 页数多时折叠中间段：1 … 4 [5] 6 … 12 */
  function pageNumbers(page) {
    if (pages <= 7) { return range(1, pages); }
    var wanted = [1, pages];
    var i;
    for (i = page - 2; i <= page + 2; i++) {
      if (i >= 1 && i <= pages) { wanted.push(i); }
    }
    wanted.push(page);
    var uniq = wanted.filter(function (v, ix) { return wanted.indexOf(v) === ix; })
      .sort(function (a, b) { return a - b; });
    var out = [];
    var prev = 0;
    uniq.forEach(function (n) {
      if (prev && n - prev > 1) { out.push('gap'); }
      out.push(n);
      prev = n;
    });
    return out;
  }

  function pageFromHash() {
    var m = /^#page-([0-9]+)$/.exec(window.location.hash || '');
    if (!m) { return 1; }
    var p = parseInt(m[1], 10);
    return (p >= 1 && p <= pages) ? p : 1;
  }

  function render(page, scrollToTop) {
    var start = (page - 1) * perPage;
    var end = start + perPage;

    items.forEach(function (el, i) {
      var visible = (i >= start && i < end);
      el.style.display = visible ? '' : 'none';
    });

    if (pages < 2) {
      pager.innerHTML = '';
    } else {
      var html = [];
      html.push(page > 1
        ? '<a class="pager-edge" href="#page-' + (page - 1) + '">&lsaquo; 上一页 / Prev</a>'
        : '<span class="pager-edge is-disabled">&lsaquo; 上一页 / Prev</span>');

      pageNumbers(page).forEach(function (entry) {
        if (entry === 'gap') {
          html.push('<span class="pager-gap">&hellip;</span>');
        } else if (entry === page) {
          html.push('<span class="pager-num is-current">' + entry + '</span>');
        } else {
          html.push('<a class="pager-num" href="#page-' + entry + '">' + entry + '</a>');
        }
      });

      html.push(page < pages
        ? '<a class="pager-edge" href="#page-' + (page + 1) + '">下一页 / Next &rsaquo;</a>'
        : '<span class="pager-edge is-disabled">下一页 / Next &rsaquo;</span>');

      pager.innerHTML = html.join('');
    }

    if (counter) {
      counter.textContent = '共 ' + items.length + ' 篇 · 每页 ' + perPage +
        ' 篇 · 第 ' + page + ' / ' + pages + ' 页';
    }

    if (scrollToTop) {
      var top = list.getBoundingClientRect().top + window.pageYOffset - 24;
      window.scrollTo({ top: top < 0 ? 0 : top, behavior: 'smooth' });
    }
  }

  window.addEventListener('hashchange', function () {
    render(pageFromHash(), false);
  });

  render(pageFromHash(), false);
})();
