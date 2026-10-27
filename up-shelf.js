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
  if (i < 0 && /-plain$/.test(file)) { var base = file.replace(/-plain$/, ""); i = list.findIndex(function (p) { return p.slug === base; }); }
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
    '<form class="up-find" action="index.html" method="get" role="search">' +
      '<label for="up-q">Look up a call number, name or topic</label>' +
      '<div><input id="up-q" name="q" type="search" placeholder="e.g. UP 300.02 or Hemmert">' +
      '<button type="submit">Search</button></div></form>' +
    '<div class="up-search">Opens the <a href="index.html">Unelected Power shelf</a> with your search filled in. Every Hive repo: <a href="https://weber-county-hive.github.io/-weber-county-hive-index/">Hive library</a>.</div>';
  /* Page tools bar under the Where/Who box: call number, jump menu, share */
  var ww = document.querySelector(".up-ww");
  if (ww && me) {
    var heads = [].slice.call(document.querySelectorAll("h2")).filter(function (h) {
      return !h.closest("footer") && !h.closest(".hb-foot") && h.offsetParent !== null && h.textContent.trim();
    });
    var used = {};
    var jl = heads.map(function (h) {
      if (!h.id) {
        var id = "s-" + h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
        while (used[id] || document.getElementById(id)) id += "-x";
        h.id = id;
      }
      used[h.id] = 1;
      return '<li><a href="#' + h.id + '">' + esc(h.textContent.trim()) + "</a></li>";
    }).join("");
    var url = location.href.split("#")[0];
    var tools = document.createElement("div");
    tools.className = "up-tools";
    tools.innerHTML =
      '<a class="up-tool up-cnchip" href="#up-shelf" title="Jump to the call number and search">Call number <b>' + me.callNumber + "</b> ↓</a>" +
      (jl ? '<details class="up-jump"><summary>Jump to a section</summary><ol>' + jl + "</ol></details>" : "") +
      '<button type="button" class="up-tool" id="up-copy">Copy link</button>' +
      '<a class="up-tool" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '">Share on Facebook</a>';
    ww.parentNode.insertBefore(tools, ww.nextSibling);
    var cb = document.getElementById("up-copy");
    cb.addEventListener("click", function () {
      var done = function () { cb.textContent = "Link copied ✓"; setTimeout(function () { cb.textContent = "Copy link"; }, 2500); };
      try { navigator.clipboard.writeText(url).then(done, function () { window.prompt("Copy this link:", url); }); }
      catch (e) { window.prompt("Copy this link:", url); }
    });
    tools.querySelectorAll(".up-jump a").forEach(function (a) { a.addEventListener("click", function () { tools.querySelector(".up-jump").open = false; }); });
  }
  var top = document.createElement("a");
  top.href = "#"; top.className = "up-totop"; top.textContent = "↑ Top"; top.setAttribute("aria-label", "Back to top of page");
  top.addEventListener("click", function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.body.appendChild(top);
  var showTop = function () { top.style.display = window.scrollY > 900 ? "block" : "none"; };
  window.addEventListener("scroll", showTop, { passive: true }); showTop();

  var st = document.createElement("style");
  st.textContent = ".up-find{margin:14px 0 4px}.up-find label{display:block;font-weight:700;margin-bottom:6px;color:#e6ecf5}.up-find div{display:flex;gap:8px;flex-wrap:wrap}.up-find input{flex:1;min-width:200px;padding:12px 14px;font-size:17px;border:2px solid #4a6185;border-radius:6px}.up-find button{padding:12px 18px;font-size:16px;font-weight:700;background:#f3c9a6;color:#1c2a40;border:0;border-radius:6px;cursor:pointer}" +
    ".up-tools{max-width:900px;margin:12px auto 4px;padding:0 20px;display:flex;flex-wrap:wrap;gap:8px;align-items:flex-start}" +
    ".up-tool{display:inline-block;font:600 15px 'Source Sans 3',Arial,sans-serif;color:#2c3e5c;background:#eef2f7;border:1px solid #c9d3e1;border-radius:6px;padding:9px 13px;text-decoration:none;cursor:pointer;line-height:1.2}" +
    ".up-tool:hover{border-color:#2c3e5c}.up-cnchip b{color:#9a521f;font-family:'IBM Plex Mono',monospace}" +
    ".up-jump{flex-basis:100%;order:5;border:1px solid #c9d3e1;border-radius:6px;background:#fff}.up-jump summary{cursor:pointer;padding:9px 13px;font:600 15px 'Source Sans 3',Arial,sans-serif;color:#2c3e5c}" +
    ".up-jump ol{margin:0;padding:4px 16px 12px 36px}.up-jump li{margin:6px 0;font-size:16.5px}.up-jump a{color:#2c3e5c}" +
    ".up-totop{display:none;position:fixed;right:16px;bottom:16px;z-index:50;background:#1c2a40;color:#fff;border:2px solid #f3c9a6;border-radius:24px;padding:10px 16px;font:700 15px Arial,sans-serif;text-decoration:none;box-shadow:0 2px 8px rgba(0,0,0,.25)}" +
    "@media print{.up-tools,.up-totop{display:none}}";
  document.head.appendChild(st);
})();
