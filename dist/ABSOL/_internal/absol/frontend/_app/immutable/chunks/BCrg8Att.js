import {
  z as R,
  A as U,
  y as A,
  w as o,
  B as m,
  C as y,
  u as B,
  F as M,
  G as Y,
  P as w,
  I as $,
  J as q,
  q as x,
  K as z,
  L as C,
  M as G,
  N as h,
  O as F,
  Q as J,
  R as K,
  T as Q,
  S as Z,
  U as j,
} from "./BYGgIge7.js";
import { s as p, g as H } from "./D1hAezf3.js";
let c = !1,
  g = Symbol();
function k(e, r, u) {
  const n = u[r] ?? (u[r] = { store: null, source: U(void 0), unsubscribe: R });
  if (n.store !== e && !(g in u))
    if ((n.unsubscribe(), (n.store = e ?? null), e == null))
      (n.source.v = void 0), (n.unsubscribe = R);
    else {
      var a = !0;
      (n.unsubscribe = p(e, (t) => {
        a ? (n.source.v = t) : A(n.source, t);
      })),
        (a = !1);
    }
  return e && g in u ? H(e) : o(n.source);
}
function ee() {
  const e = {};
  function r() {
    m(() => {
      for (var u in e) e[u].unsubscribe();
      y(e, g, { enumerable: !1, value: !0 });
    });
  }
  return [e, r];
}
function V(e) {
  var r = c;
  try {
    return (c = !1), [e(), c];
  } finally {
    c = r;
  }
}
function re(e, r, u, n) {
  var O;
  var a = !h || (u & F) !== 0,
    t = (u & G) !== 0,
    T = (u & C) !== 0,
    f = n,
    b = !0,
    P = () => (b && ((b = !1), (f = T ? B(n) : n)), f);
  let _;
  if (t) {
    var L = Z in e || j in e;
    _ =
      ((O = M(e, r)) == null ? void 0 : O.set) ??
      (L && r in e ? (i) => (e[r] = i) : void 0);
  }
  var d,
    I = !1;
  t ? ([d, I] = V(() => e[r])) : (d = e[r]),
    d === void 0 && n !== void 0 && ((d = P()), _ && (a && Y(), _(d)));
  var s;
  if (
    (a
      ? (s = () => {
          var i = e[r];
          return i === void 0 ? P() : ((b = !0), i);
        })
      : (s = () => {
          var i = e[r];
          return i !== void 0 && (f = void 0), i === void 0 ? f : i;
        }),
    a && (u & w) === 0)
  )
    return s;
  if (_) {
    var D = e.$$legacy;
    return function (i, v) {
      return arguments.length > 0
        ? ((!a || !v || D || I) && _(v ? s() : i), i)
        : s();
    };
  }
  var S = !1,
    l = ((u & J) !== 0 ? K : Q)(() => ((S = !1), s()));
  t && o(l);
  var N = x;
  return function (i, v) {
    if (arguments.length > 0) {
      const E = v ? o(l) : a && t ? $(i) : i;
      return A(l, E), (S = !0), f !== void 0 && (f = E), i;
    }
    return (q && S) || (N.f & z) !== 0 ? l.v : o(l);
  };
}
export { k as a, re as p, ee as s };
