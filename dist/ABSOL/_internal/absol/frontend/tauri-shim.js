/* Ponte Tauri -> servidor Python local. Implementa o mínimo de window.__TAURI_INTERNALS__ que o frontend original usa. */
(function () {
  var path = location.pathname.replace(/^\/+|\/+$/g, "");
  var label = path === "overlay" ? "overlay" : path === "overlay-gold" ? "overlay-gold" : path === "notification" ? "notification" : "main";
  var cbs = {}, listeners = {}, nextId = 1, lastEv = 0;
  function transformCallback(cb, once) {
    var id = nextId++; var key = "_" + id;
    window[key] = function (v) { if (once) delete window[key]; return cb && cb(v); };
    return id;
  }
  function unregisterCallback(id) { delete window["_" + id]; }
  function winDefault(cmd) {
    var c = cmd.replace("plugin:window|", "");
    if (c.indexOf("size") >= 0 && c.indexOf("set_") !== 0) return { width: 1366, height: 768 };
    if (c.indexOf("position") >= 0 && c.indexOf("set_") !== 0) return { x: 100, y: 100 };
    if (c === "scale_factor") return 1;
    if (c === "get_all_windows") return [label];
    if (c === "title") return "ABSOL";
    if (c === "theme") return "dark";
    if (/^(is_|has_)/.test(c)) return c === "is_visible" || c === "is_focused" ? true : false;
    return null;
  }
  async function invoke(cmd, args) {
    if (cmd === "plugin:event|listen") {
      var id = nextId++;
      (listeners[args.event] = listeners[args.event] || []).push({ id: id, handler: args.handler });
      return id;
    }
    if (cmd === "plugin:event|unlisten") {
      var l = listeners[args.event] || [];
      listeners[args.event] = l.filter(function (x) { return x.id !== args.eventId; });
      return null;
    }
    if (cmd === "plugin:event|emit" || cmd === "plugin:event|emit_to") { dispatch(args.event, args.payload); return null; }
    if (cmd.indexOf("plugin:window|") === 0 || cmd.indexOf("plugin:webview|") === 0) {
      if (cmd.indexOf("set_ignore_cursor") < 0 && cmd.indexOf("show") < 0 && cmd.indexOf("hide") < 0 && cmd.indexOf("close") < 0)
        return winDefault(cmd);
    }
    try {
      var r = await fetch("/__ipc/" + encodeURIComponent(cmd) + "?label=" + label, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(args || {}) });
      if (!r.ok) return null;
      var t = await r.text(); return t ? JSON.parse(t) : null;
    } catch (e) { return null; }
  }
  function dispatch(ev, payload) {
    (listeners[ev] || []).slice().forEach(function (l) {
      var f = window["_" + l.handler]; if (f) f({ event: ev, id: l.id, payload: payload });
    });
  }
  async function poll() {
    for (;;) {
      try {
        var r = await fetch("/__events?since=" + lastEv + "&label=" + label);
        var d = await r.json(); lastEv = d.last;
        d.events.forEach(function (e) { dispatch(e.event, e.payload); });
      } catch (e) { await new Promise(function (r) { setTimeout(r, 1500); }); }
    }
  }
  window.__TAURI_INTERNALS__ = {
    invoke: invoke, transformCallback: transformCallback, unregisterCallback: unregisterCallback,
    convertFileSrc: function (p) { return p; },
    metadata: { currentWindow: { label: label }, currentWebview: { windowLabel: label, label: label } },
    plugins: {}
  };
  window.__TAURI_EVENT_PLUGIN_INTERNALS__ = { unregisterListener: function () {} };
  window.isTauri = true;

  /* Painel "Extras ABSOL Python": botões dos recursos novos (fora do app original). Só na janela principal. */
  if (label === "main") window.addEventListener("DOMContentLoaded", function () {
    var box = document.createElement("div");
    box.style.cssText = "position:fixed;right:12px;bottom:12px;z-index:99999;font:12px system-ui,sans-serif;color:#eee;background:#181a22ee;border:1px solid #444;border-radius:10px;padding:8px 10px;max-width:260px";
    var head = document.createElement("div"); head.textContent = "Extras (ABSOL Python)"; head.style.cssText = "font-weight:600;cursor:pointer;margin-bottom:4px";
    var body = document.createElement("div"); box.appendChild(head); box.appendChild(body);
    head.onclick = function () { body.style.display = body.style.display === "none" ? "" : "none"; };
    function render(list) {
      body.innerHTML = "";
      (list || []).forEach(function (x) {
        var row = document.createElement("label"); row.title = x.desc; row.style.cssText = "display:flex;gap:6px;align-items:center;margin:3px 0;cursor:pointer";
        var cb = document.createElement("input"); cb.type = "checkbox"; cb.checked = x.on;
        cb.onchange = function () { invoke("set_extra", { id: x.id, on: cb.checked }).then(render); };
        var t = document.createElement("span"); t.textContent = x.nome; row.appendChild(cb); row.appendChild(t); body.appendChild(row);
      });
    }
    document.body.appendChild(box); invoke("get_extras", {}).then(render);
  });
  poll();
})();
