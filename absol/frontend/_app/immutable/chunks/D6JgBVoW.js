var Fe = Object.defineProperty;
var ce = (t) => {
  throw TypeError(t);
};
var Me = (t, e, r) =>
  e in t
    ? Fe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (t[e] = r);
var j = (t, e, r) => Me(t, typeof e != "symbol" ? e + "" : e, r),
  re = (t, e, r) => e.has(t) || ce("Cannot " + r);
var s = (t, e, r) => (
    re(t, e, "read from private field"), r ? r.call(t) : e.get(t)
  ),
  u = (t, e, r) =>
    e.has(t)
      ? ce("Cannot add the same private member more than once")
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, r),
  n = (t, e, r, a) => (
    re(t, e, "write to private field"), a ? a.call(t, r) : e.set(t, r), r
  ),
  p = (t, e, r) => (re(t, e, "access private method"), r);
import {
  aH as Le,
  w as Ee,
  o as Ce,
  ad as we,
  u as He,
  aI as de,
  am as V,
  e as L,
  h as O,
  q,
  aJ as _e,
  b as Ie,
  a as Ye,
  a0 as qe,
  aK as pe,
  a6 as M,
  _ as me,
  ag as se,
  a4 as ge,
  ak as Be,
  aL as Pe,
  aM as X,
  aN as Z,
  aO as ve,
  aP as Ve,
  aQ as We,
  aR as Te,
  m as Se,
  a3 as xe,
  al as ie,
  c as G,
  aq as $e,
  s as je,
  aS as z,
  E as ze,
  aT as Je,
  aU as Ue,
  aV as Ke,
  B as Qe,
  aW as Xe,
  C as Ze,
  aX as ae,
  $ as Ge,
  a1 as Re,
  H as et,
  an as tt,
  aE as ne,
  d as J,
  aY as rt,
  aj as st,
  aZ as it,
  aa as at,
  p as nt,
  a2 as ft,
  aD as ht,
  g as ot,
} from "./BYGgIge7.js";
import { d as lt } from "./DXITvGue.js";
function ut(t) {
  let e = 0,
    r = we(0),
    a;
  return () => {
    Le() &&
      (Ee(r),
      Ce(
        () => (
          e === 0 && (a = He(() => t(() => de(r)))),
          (e += 1),
          () => {
            V(() => {
              (e -= 1), e === 0 && (a == null || a(), (a = void 0), de(r));
            });
          }
        ),
      ));
  };
}
var ct = ze | Je;
function dt(t, e, r, a) {
  new _t(t, e, r, a);
}
var E,
  W,
  T,
  H,
  g,
  S,
  w,
  m,
  R,
  I,
  D,
  B,
  x,
  $,
  N,
  ee,
  o,
  Ne,
  Ae,
  De,
  fe,
  K,
  Q,
  he;
class _t {
  constructor(e, r, a, h) {
    u(this, o);
    j(this, "parent");
    j(this, "is_pending", !1);
    j(this, "transform_error");
    u(this, E);
    u(this, W, O ? L : null);
    u(this, T);
    u(this, H);
    u(this, g);
    u(this, S, null);
    u(this, w, null);
    u(this, m, null);
    u(this, R, null);
    u(this, I, 0);
    u(this, D, 0);
    u(this, B, !1);
    u(this, x, new Set());
    u(this, $, new Set());
    u(this, N, null);
    u(
      this,
      ee,
      ut(
        () => (
          n(this, N, we(s(this, I))),
          () => {
            n(this, N, null);
          }
        ),
      ),
    );
    var i;
    n(this, E, e),
      n(this, T, r),
      n(this, H, (f) => {
        var d = q;
        (d.b = this), (d.f |= _e), a(f);
      }),
      (this.parent = q.b),
      (this.transform_error =
        h ??
        ((i = this.parent) == null ? void 0 : i.transform_error) ??
        ((f) => f)),
      n(
        this,
        g,
        Ie(() => {
          if (O) {
            const f = s(this, W);
            Ye();
            const d = f.data === qe;
            if (f.data.startsWith(pe)) {
              const c = JSON.parse(f.data.slice(pe.length));
              p(this, o, Ae).call(this, c);
            } else d ? p(this, o, De).call(this) : p(this, o, Ne).call(this);
          } else p(this, o, fe).call(this);
        }, ct),
      ),
      O && n(this, E, L);
  }
  defer_effect(e) {
    Pe(e, s(this, x), s(this, $));
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, T).pending;
  }
  update_pending_count(e, r) {
    p(this, o, he).call(this, e, r),
      n(this, I, s(this, I) + e),
      !(!s(this, N) || s(this, B)) &&
        (n(this, B, !0),
        V(() => {
          n(this, B, !1), s(this, N) && xe(s(this, N), s(this, I));
        }));
  }
  get_effect_pending() {
    return s(this, ee).call(this), Ee(s(this, N));
  }
  error(e) {
    var r = s(this, T).onerror;
    let a = s(this, T).failed;
    if (!r && !a) throw e;
    s(this, S) && (ie(s(this, S)), n(this, S, null)),
      s(this, w) && (ie(s(this, w)), n(this, w, null)),
      s(this, m) && (ie(s(this, m)), n(this, m, null)),
      O && (G(s(this, W)), $e(), G(je()));
    var h = !1,
      i = !1;
    const f = () => {
        if (h) {
          Ke();
          return;
        }
        (h = !0),
          i && Ue(),
          s(this, m) !== null &&
            se(s(this, m), () => {
              n(this, m, null);
            }),
          p(this, o, Q).call(this, () => {
            p(this, o, fe).call(this);
          });
      },
      d = (l) => {
        try {
          (i = !0), r == null || r(l, f), (i = !1);
        } catch (c) {
          z(c, s(this, g) && s(this, g).parent);
        }
        a &&
          n(
            this,
            m,
            p(this, o, Q).call(this, () => {
              try {
                return M(() => {
                  var c = q;
                  (c.b = this),
                    (c.f |= _e),
                    a(
                      s(this, E),
                      () => l,
                      () => f,
                    );
                });
              } catch (c) {
                return z(c, s(this, g).parent), null;
              }
            }),
          );
      };
    V(() => {
      var l;
      try {
        l = this.transform_error(e);
      } catch (c) {
        z(c, s(this, g) && s(this, g).parent);
        return;
      }
      l !== null && typeof l == "object" && typeof l.then == "function"
        ? l.then(d, (c) => z(c, s(this, g) && s(this, g).parent))
        : d(l);
    });
  }
}
(E = new WeakMap()),
  (W = new WeakMap()),
  (T = new WeakMap()),
  (H = new WeakMap()),
  (g = new WeakMap()),
  (S = new WeakMap()),
  (w = new WeakMap()),
  (m = new WeakMap()),
  (R = new WeakMap()),
  (I = new WeakMap()),
  (D = new WeakMap()),
  (B = new WeakMap()),
  (x = new WeakMap()),
  ($ = new WeakMap()),
  (N = new WeakMap()),
  (ee = new WeakMap()),
  (o = new WeakSet()),
  (Ne = function () {
    try {
      n(
        this,
        S,
        M(() => s(this, H).call(this, s(this, E))),
      );
    } catch (e) {
      this.error(e);
    }
  }),
  (Ae = function (e) {
    const r = s(this, T).failed;
    r &&
      n(
        this,
        m,
        M(() => {
          r(
            s(this, E),
            () => e,
            () => () => {},
          );
        }),
      );
  }),
  (De = function () {
    const e = s(this, T).pending;
    e &&
      ((this.is_pending = !0),
      n(
        this,
        w,
        M(() => e(s(this, E))),
      ),
      V(() => {
        var r = n(this, R, document.createDocumentFragment()),
          a = me();
        r.append(a),
          n(
            this,
            S,
            p(this, o, Q).call(this, () => M(() => s(this, H).call(this, a))),
          ),
          s(this, D) === 0 &&
            (s(this, E).before(r),
            n(this, R, null),
            se(s(this, w), () => {
              n(this, w, null);
            }),
            p(this, o, K).call(this, ge));
      }));
  }),
  (fe = function () {
    try {
      if (
        ((this.is_pending = this.has_pending_snippet()),
        n(this, D, 0),
        n(this, I, 0),
        n(
          this,
          S,
          M(() => {
            s(this, H).call(this, s(this, E));
          }),
        ),
        s(this, D) > 0)
      ) {
        var e = n(this, R, document.createDocumentFragment());
        Be(s(this, S), e);
        const r = s(this, T).pending;
        n(
          this,
          w,
          M(() => r(s(this, E))),
        );
      } else p(this, o, K).call(this, ge);
    } catch (r) {
      this.error(r);
    }
  }),
  (K = function (e) {
    (this.is_pending = !1), e.transfer_effects(s(this, x), s(this, $));
  }),
  (Q = function (e) {
    var r = q,
      a = Te,
      h = Se;
    X(s(this, g)), Z(s(this, g)), ve(s(this, g).ctx);
    try {
      return Ve.ensure(), e();
    } catch (i) {
      return We(i), null;
    } finally {
      X(r), Z(a), ve(h);
    }
  }),
  (he = function (e, r) {
    var a;
    if (!this.has_pending_snippet()) {
      this.parent && p((a = this.parent), o, he).call(a, e, r);
      return;
    }
    n(this, D, s(this, D) + e),
      s(this, D) === 0 &&
        (p(this, o, K).call(this, r),
        s(this, w) &&
          se(s(this, w), () => {
            n(this, w, null);
          }),
        s(this, R) && (s(this, E).before(s(this, R)), n(this, R, null)));
  });
const pt = ["touchstart", "touchmove"];
function gt(t) {
  return pt.includes(t);
}
const C = Symbol("events"),
  Oe = new Set(),
  oe = new Set();
function mt(t) {
  if (!O) return;
  t.removeAttribute("onload"), t.removeAttribute("onerror");
  const e = t.__e;
  e !== void 0 &&
    ((t.__e = void 0),
    queueMicrotask(() => {
      t.isConnected && t.dispatchEvent(e);
    }));
}
function vt(t, e, r, a = {}) {
  function h(i) {
    if ((a.capture || le.call(e, i), !i.cancelBubble))
      return Xe(() => (r == null ? void 0 : r.call(this, i)));
  }
  return (
    t.startsWith("pointer") || t.startsWith("touch") || t === "wheel"
      ? V(() => {
          e.addEventListener(t, h, a);
        })
      : e.addEventListener(t, h, a),
    h
  );
}
function Tt(t, e, r, a, h) {
  var i = { capture: a, passive: h },
    f = vt(t, e, r, i);
  (e === document.body ||
    e === window ||
    e === document ||
    e instanceof HTMLMediaElement) &&
    Qe(() => {
      e.removeEventListener(t, f, i);
    });
}
function St(t, e, r) {
  (e[C] ?? (e[C] = {}))[t] = r;
}
function Rt(t) {
  for (var e = 0; e < t.length; e++) Oe.add(t[e]);
  for (var r of oe) r(t);
}
let ye = null;
function le(t) {
  var k, b;
  var e = this,
    r = e.ownerDocument,
    a = t.type,
    h = ((k = t.composedPath) == null ? void 0 : k.call(t)) || [],
    i = h[0] || t.target;
  ye = t;
  var f = 0,
    d = ye === t && t[C];
  if (d) {
    var l = h.indexOf(d);
    if (l !== -1 && (e === document || e === window)) {
      t[C] = e;
      return;
    }
    var c = h.indexOf(e);
    if (c === -1) return;
    l <= c && (f = l);
  }
  if (((i = h[f] || t.target), i !== e)) {
    Ze(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      },
    });
    var Y = Te,
      P = q;
    Z(null), X(null);
    try {
      for (var A, v = []; i !== null; ) {
        var _ = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var y = (b = i[C]) == null ? void 0 : b[a];
          y != null && (!i.disabled || t.target === i) && y.call(i, t);
        } catch (F) {
          A ? v.push(F) : (A = F);
        }
        if (t.cancelBubble || _ === e || _ === null) break;
        i = _;
      }
      if (A) {
        for (let F of v)
          queueMicrotask(() => {
            throw F;
          });
        throw A;
      }
    } finally {
      (t[C] = e), delete t.currentTarget, Z(Y), X(P);
    }
  }
}
let be = !0;
function Nt(t, e) {
  var r = e == null ? "" : typeof e == "object" ? `${e}` : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) &&
    ((t.__t = r), (t.nodeValue = `${r}`));
}
function yt(t, e) {
  return ke(t, e);
}
function At(t, e) {
  ae(), (e.intro = e.intro ?? !1);
  const r = e.target,
    a = O,
    h = L;
  try {
    for (var i = Ge(r); i && (i.nodeType !== Re || i.data !== et); ) i = tt(i);
    if (!i) throw ne;
    J(!0), G(i);
    const f = ke(t, { ...e, anchor: i });
    return J(!1), f;
  } catch (f) {
    if (
      f instanceof Error &&
      f.message
        .split(
          `
`,
        )
        .some((d) => d.startsWith("https://svelte.dev/e/"))
    )
      throw f;
    return e.recover === !1 && rt(), ae(), st(r), J(!1), yt(t, e);
  } finally {
    J(a), G(h);
  }
}
const U = new Map();
function ke(
  t,
  {
    target: e,
    anchor: r,
    props: a = {},
    events: h,
    context: i,
    intro: f = !0,
    transformError: d,
  },
) {
  ae();
  var l = void 0,
    c = it(() => {
      var Y = r ?? e.appendChild(me());
      dt(
        Y,
        { pending: () => {} },
        (v) => {
          nt({});
          var _ = Se;
          if (
            (i && (_.c = i),
            h && (a.$$events = h),
            O && lt(v, null),
            (be = f),
            (l = t(v, a) || {}),
            (be = !0),
            O &&
              ((q.nodes.end = L),
              L === null || L.nodeType !== Re || L.data !== ft))
          )
            throw (ht(), ne);
          ot();
        },
        d,
      );
      var P = new Set(),
        A = (v) => {
          for (var _ = 0; _ < v.length; _++) {
            var y = v[_];
            if (!P.has(y)) {
              P.add(y);
              var k = gt(y);
              for (const te of [e, document]) {
                var b = U.get(te);
                b === void 0 && ((b = new Map()), U.set(te, b));
                var F = b.get(y);
                F === void 0
                  ? (te.addEventListener(y, le, { passive: k }), b.set(y, 1))
                  : b.set(y, F + 1);
              }
            }
          }
        };
      return (
        A(at(Oe)),
        oe.add(A),
        () => {
          var k;
          for (var v of P)
            for (const b of [e, document]) {
              var _ = U.get(b),
                y = _.get(v);
              --y == 0
                ? (b.removeEventListener(v, le),
                  _.delete(v),
                  _.size === 0 && U.delete(b))
                : _.set(v, y);
            }
          oe.delete(A),
            Y !== r && ((k = Y.parentNode) == null || k.removeChild(Y));
        }
      );
    });
  return ue.set(l, c), l;
}
let ue = new WeakMap();
function Dt(t, e) {
  const r = ue.get(t);
  return r ? (ue.delete(t), r(e)) : Promise.resolve();
}
export {
  St as a,
  be as b,
  Rt as d,
  Tt as e,
  At as h,
  yt as m,
  mt as r,
  Nt as s,
  Dt as u,
};
