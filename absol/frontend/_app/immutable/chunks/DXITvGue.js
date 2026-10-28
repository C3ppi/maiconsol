import {
  au as N,
  _ as m,
  $ as o,
  av as x,
  q as T,
  aw as g,
  ax as A,
  h as l,
  e as i,
  ay as M,
  a as C,
  az as L,
  c as b,
  aA as O,
} from "./BYGgIge7.js";
var h;
const v =
  ((h = globalThis == null ? void 0 : globalThis.window) == null
    ? void 0
    : h.trustedTypes) &&
  globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    createHTML: (e) => e,
  });
function P(e) {
  return (v == null ? void 0 : v.createHTML(e)) ?? e;
}
function w(e) {
  var t = N("template");
  return (t.innerHTML = P(e.replaceAll("<!>", "<!---->"))), t.content;
}
function n(e, t) {
  var r = T;
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
function $(e, t) {
  var r = (t & g) !== 0,
    f = (t & A) !== 0,
    s,
    _ = !e.startsWith("<!>");
  return () => {
    if (l) return n(i, null), i;
    s === void 0 && ((s = w(_ ? e : "<!>" + e)), r || (s = o(s)));
    var a = f || x ? document.importNode(s, !0) : s.cloneNode(!0);
    if (r) {
      var c = o(a),
        u = a.lastChild;
      n(c, u);
    } else n(a, a);
    return a;
  };
}
function R(e, t, r = "svg") {
  var f = !e.startsWith("<!>"),
    s = (t & g) !== 0,
    _ = `<${r}>${f ? e : "<!>" + e}</${r}>`,
    a;
  return () => {
    if (l) return n(i, null), i;
    if (!a) {
      var c = w(_),
        u = o(c);
      if (s)
        for (a = document.createDocumentFragment(); o(u); ) a.appendChild(o(u));
      else a = o(u);
    }
    var d = a.cloneNode(!0);
    if (s) {
      var E = o(d),
        y = d.lastChild;
      n(E, y);
    } else n(d, d);
    return d;
  };
}
function F(e, t) {
  return R(e, t, "svg");
}
function H(e = "") {
  if (!l) {
    var t = m(e + "");
    return n(t, t), t;
  }
  var r = i;
  return r.nodeType !== L ? (r.before((r = m())), b(r)) : O(r), n(r, r), r;
}
function S() {
  if (l) return n(i, null), i;
  var e = document.createDocumentFragment(),
    t = document.createComment(""),
    r = m();
  return e.append(t, r), n(t, r), e;
}
function U(e, t) {
  if (l) {
    var r = T;
    ((r.f & M) === 0 || r.nodes.end === null) && (r.nodes.end = i), C();
    return;
  }
  e !== null && e.before(t);
}
const D = "5";
var p;
typeof window < "u" &&
  ((p = window.__svelte ?? (window.__svelte = {})).v ?? (p.v = new Set())).add(
    D,
  );
export { U as a, F as b, S as c, n as d, $ as f, H as t };
