/* Unelected Power — call-number block at the bottom of every page.
   Reads unelected-power-data.js, finds this page by its file name, and shows:
   its call number and shelf, the previous and next call numbers (click to go),
   and the whole shelf list. Add a page to unelected-power-data.js and every
   page's list and next/previous buttons update on their own. */
(function () {
  var SHELF_NAMES = { "100": "Statewide", "200": "Weber County", "300": "Davis County", "400": "Wasatch County" };
  var box = document.getElementById("up-shelf");
  if (!box || typeof UNELECTED_POWER_PROFILES === "undefined") return;
  var list = UNELECTED_POWER_PROFILES.slice().sort(function (a, b) {
    return a.callNumber.localeCompare(b.callNumber, undefined, { numeric: true });
  });
  var file = (location.pathname.split("/").pop() || "").replace(/\.html$/, "");
  var i = list.findIndex(function (p) { return p.slug === file; });
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var me = list[i];
  var prev = i > 0 ? list[i - 1] : null;
  var next = i >= 0 && i < list.length - 1 ? list[i + 1] : null;
  var link = function (p, dir) {
    if (!p) return '<span class="up-nav-btn up-off">' + (dir === "prev" ? "← Start of shelf" : "End of shelf →") + "</span>";
    return '<a class="up-nav-btn" href="' + p.slug + '.html">' + (dir === "prev" ? "← " : "") +
      '<b>' + p.callNumber + "</b> " + esc(p.name) + (dir === "next" ? " →" : "") + "</a>";
  };
  var rows = "";
  Object.keys(SHELF_NAMES).forEach(function (no) {
    var items = list.filter(function (p) { return p.shelf === no; });
    if (!items.length) return;
    rows += '<li class="up-shelf-head">UP ' + no + " · " + SHELF_NAMES[no] + "</li>";
    items.forEach(function (p) {
      rows += '<li' + (me && p.slug === me.slug ? ' class="up-here"' : "") + '><a href="' + p.slug + '.html"><span class="up-cn">' +
        p.callNumber + "</span> " + esc(p.name) + (me && p.slug === me.slug ? " <em>(you are here)</em>" : "") + "</a></li>";
    });
  });
  box.innerHTML =
    (me ? '<div class="up-cn-big">Call number <b>' + me.callNumber + "</b> · Shelf UP " + me.shelf + " · " + SHELF_NAMES[me.shelf] + "</div>" : "") +
    '<div class="up-nav">' + link(prev, "prev") + link(next, "next") + "</div>" +
    '<details class="up-list"><summary>See every page on this shelf, by call number</summary><ol>' + rows + "</ol></details>" +
    '<div class="up-search">Search any call number on the <a href="index.html">Unelected Power shelf</a> or the <a href="https://weber-county-hive.github.io/-weber-county-hive-index/">Hive library</a>.</div>';
})();
