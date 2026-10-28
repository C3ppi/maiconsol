import {
  t as A,
  h as c,
  c as m,
  $ as d,
  a as w,
  q as M,
  aC as S,
  e as y,
  a1 as T,
  an as C,
  aD as b,
  aE as g,
  au as N,
  aF as O,
  aG as D,
  n as H,
  u as R,
  o as k,
  at as q,
  V as G,
} from "./BYGgIge7.js";
import { d as _ } from "./DXITvGue.js";
import { t as I, g as p } from "./miXHpl0f.js";
function U(e, s, a = !1, t = !1, r = !1, i = !1) {
  var n = e,
    f = "";
  if (a) {
    var l = e;
    c && (n = m(d(l)));
  }
  A(() => {
    var u = M;
    if (f === (f = s() ?? "")) {
      c && w();
      return;
    }
    if (a && !c) {
      (u.nodes = null), (l.innerHTML = f), f !== "" && _(d(l), l.lastChild);
      return;
    }
    if (
      (u.nodes !== null && (S(u.nodes.start, u.nodes.end), (u.nodes = null)),
      f !== "")
    ) {
      if (c) {
        y.data;
        for (
          var o = w(), E = o;
          o !== null && (o.nodeType !== T || o.data !== "");

        )
          (E = o), (o = C(o));
        if (o === null) throw (b(), g);
        _(y, E), (n = m(o));
        return;
      }
      var L = t ? O : r ? D : void 0,
        h = N(t ? "svg" : r ? "math" : "template", L);
      h.innerHTML = f;
      var v = t || r ? h : h.content;
      if ((_(d(v), v.lastChild), t || r)) for (; d(v); ) n.before(d(v));
      else n.before(v);
    }
  });
}
function W(e, s, a) {
  H(() => {
    var t = R(() => s(e, a == null ? void 0 : a()) || {});
    if (a && t != null && t.update) {
      var r = !1,
        i = {};
      k(() => {
        var n = a();
        q(n), r && G(i, n) && ((i = n), t.update(n));
      }),
        (r = !0);
    }
    if (t != null && t.destroy) return () => t.destroy();
  });
}
function Y(e, s, a, t) {
  var r = e.__style;
  if (c || r !== s) {
    var i = I(s);
    (!c || i !== e.getAttribute("style")) &&
      (i == null ? e.removeAttribute("style") : (e.style.cssText = i)),
      (e.__style = s);
  }
  return t;
}
function $(e) {
  const s = e.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
  return s ? s[1] : "";
}
function j(e, s = {}) {
  const { scale: a = 0.9, duration: t = 0.2, pressScale: r } = s;
  let i = !1;
  function n() {
    (i = !0), p.to(e, { scale: a, duration: t, ease: "power2.out" });
  }
  function f() {
    (i = !1), p.to(e, { scale: 1, duration: t, ease: "power2.out" });
  }
  function l() {
    r !== void 0 &&
      p.to(e, { scale: r, duration: t * 0.6, ease: "power2.out" });
  }
  function u() {
    r !== void 0 &&
      p.to(e, { scale: i ? a : 1, duration: t, ease: "power2.out" });
  }
  return (
    e.addEventListener("mouseenter", n),
    e.addEventListener("mouseleave", f),
    e.addEventListener("pointerdown", l),
    e.addEventListener("pointerup", u),
    {
      destroy() {
        p.killTweensOf(e),
          e.removeEventListener("mouseenter", n),
          e.removeEventListener("mouseleave", f),
          e.removeEventListener("pointerdown", l),
          e.removeEventListener("pointerup", u);
      },
    }
  );
}
export { W as a, U as b, Y as c, j as h, $ as s };
