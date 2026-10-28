var vt = Object.defineProperty;
var gn = (e) => {
  throw TypeError(e);
};
var dt = (e, n, t) =>
  n in e
    ? vt(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[n] = t);
var te = (e, n, t) => dt(e, typeof n != "symbol" ? n + "" : n, t),
  $e = (e, n, t) => n.has(e) || gn("Cannot " + t);
var v = (e, n, t) => (
    $e(e, n, "read from private field"), t ? t.call(e) : n.get(e)
  ),
  k = (e, n, t) =>
    n.has(e)
      ? gn("Cannot add the same private member more than once")
      : n instanceof WeakSet
        ? n.add(e)
        : n.set(e, t),
  Y = (e, n, t, r) => (
    $e(e, n, "write to private field"), r ? r.call(e, t) : n.set(e, t), t
  ),
  H = (e, n, t) => ($e(e, n, "access private method"), t);
var ht = Array.isArray,
  pt = Array.prototype.indexOf,
  Te = Array.prototype.includes,
  or = Array.from,
  cr = Object.defineProperty,
  xe = Object.getOwnPropertyDescriptor,
  wt = Object.getOwnPropertyDescriptors,
  yt = Object.prototype,
  Et = Array.prototype,
  kn = Object.getPrototypeOf,
  mn = Object.isExtensible;
function _r(e) {
  return typeof e == "function";
}
const gt = () => {};
function vr(e) {
  return e();
}
function mt(e) {
  for (var n = 0; n < e.length; n++) e[n]();
}
function Pn() {
  var e,
    n,
    t = new Promise((r, s) => {
      (e = r), (n = s);
    });
  return { promise: t, resolve: e, reject: n };
}
const T = 2,
  be = 4,
  Me = 8,
  Cn = 1 << 24,
  ee = 16,
  V = 32,
  ue = 64,
  Tt = 128,
  C = 512,
  E = 1024,
  N = 2048,
  B = 4096,
  q = 8192,
  U = 16384,
  he = 32768,
  Tn = 1 << 25,
  qe = 65536,
  bn = 1 << 17,
  bt = 1 << 18,
  Fe = 1 << 19,
  Mn = 1 << 20,
  dr = 1 << 25,
  oe = 65536,
  Je = 1 << 21,
  un = 1 << 22,
  W = 1 << 23,
  De = Symbol("$state"),
  hr = Symbol("legacy props"),
  pr = Symbol(""),
  K = new (class extends Error {
    constructor() {
      super(...arguments);
      te(this, "name", "StaleReactionError");
      te(
        this,
        "message",
        "The reaction that called `getAbortSignal()` was re-run or destroyed",
      );
    }
  })();
var Dn;
const yr =
    !!((Dn = globalThis.document) != null && Dn.contentType) &&
    globalThis.document.contentType.includes("xml"),
  ze = 3,
  Fn = 8;
function At() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Er(e, n, t) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function St(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Rt() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Nt(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ot() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function gr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function mr(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function It() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function xt() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Dt() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Tr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const br = 1,
  Ar = 2,
  Sr = 4,
  Rr = 8,
  Nr = 16,
  Or = 1,
  Ir = 2,
  xr = 4,
  Dr = 8,
  kr = 16,
  Pr = 1,
  Cr = 2,
  Mr = 4,
  Fr = 1,
  Lr = 2,
  kt = "[",
  Pt = "[!",
  jr = "[?",
  Ct = "]",
  on = {},
  b = Symbol(),
  Mt = "http://www.w3.org/1999/xhtml",
  Yr = "http://www.w3.org/2000/svg",
  Hr = "http://www.w3.org/1998/Math/MathML";
function qr(e) {}
function Ur() {}
let ce = !1;
function Vr(e) {
  ce = e;
}
let m;
function Ae(e) {
  if (e === null) throw on;
  return (m = e);
}
function Br() {
  return Ae(ne(m));
}
function Gr(e) {
  if (ce) {
    if (ne(m) !== null) throw on;
    m = e;
  }
}
function Kr(e = 1) {
  if (ce) {
    for (var n = e, t = m; n--; ) t = ne(t);
    m = t;
  }
}
function zr(e = !0) {
  for (var n = 0, t = m; ; ) {
    if (t.nodeType === Fn) {
      var r = t.data;
      if (r === Ct) {
        if (n === 0) return t;
        n -= 1;
      } else
        (r === kt ||
          r === Pt ||
          (r[0] === "[" && !isNaN(Number(r.slice(1))))) &&
          (n += 1);
    }
    var s = ne(t);
    e && t.remove(), (t = s);
  }
}
function Xr(e) {
  if (!e || e.nodeType !== Fn) throw on;
  return e.data;
}
function Ln(e) {
  return e === this.v;
}
function Ft(e, n) {
  return e != e
    ? n == n
    : e !== n || (e !== null && typeof e == "object") || typeof e == "function";
}
function jn(e) {
  return !Ft(e, this.v);
}
let Xe = !1;
function $r() {
  Xe = !0;
}
let R = null;
function Ue(e) {
  R = e;
}
function Zr(e, n = !1, t) {
  R = {
    p: R,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: w,
    l: Xe && !n ? { s: null, u: null, $: [] } : null,
  };
}
function Wr(e) {
  var n = R,
    t = n.e;
  if (t !== null) {
    n.e = null;
    for (var r of t) nt(r);
  }
  return e !== void 0 && (n.x = e), (n.i = !0), (R = n.p), e ?? {};
}
function Le() {
  return !Xe || (R !== null && R.l === null);
}
let se = [];
function Yn() {
  var e = se;
  (se = []), mt(e);
}
function An(e) {
  if (se.length === 0 && !ke) {
    var n = se;
    queueMicrotask(() => {
      n === se && Yn();
    });
  }
  se.push(e);
}
function Lt() {
  for (; se.length > 0; ) Yn();
}
function jt(e) {
  var n = w;
  if (n === null) return (d.f |= W), e;
  if ((n.f & he) === 0 && (n.f & be) === 0) throw e;
  Ve(e, n);
}
function Ve(e, n) {
  for (; n !== null; ) {
    if ((n.f & Tt) !== 0) {
      if ((n.f & he) === 0) throw e;
      try {
        n.b.error(e);
        return;
      } catch (t) {
        e = t;
      }
    }
    n = n.parent;
  }
  throw e;
}
const Yt = -7169;
function y(e, n) {
  e.f = (e.f & Yt) | n;
}
function cn(e) {
  (e.f & C) !== 0 || e.deps === null ? y(e, E) : y(e, B);
}
function Hn(e) {
  if (e !== null)
    for (const n of e)
      (n.f & T) === 0 || (n.f & oe) === 0 || ((n.f ^= oe), Hn(n.deps));
}
function Ht(e, n, t) {
  (e.f & N) !== 0 ? n.add(e) : (e.f & B) !== 0 && t.add(e), Hn(e.deps), y(e, E);
}
const re = new Set();
let h = null,
  A = null,
  Qe = null,
  ke = !1,
  Ze = !1,
  pe = null,
  Ye = null;
var Sn = 0;
let qt = 1;
var we, ye, Ee, ge, Ce, D, ae, X, $, me, S, en, nn, tn, rn, qn;
const Ke = class Ke {
  constructor() {
    k(this, S);
    te(this, "id", qt++);
    te(this, "current", new Map());
    te(this, "previous", new Map());
    k(this, we, new Set());
    k(this, ye, new Set());
    k(this, Ee, 0);
    k(this, ge, 0);
    k(this, Ce, null);
    k(this, D, []);
    k(this, ae, new Set());
    k(this, X, new Set());
    k(this, $, new Map());
    te(this, "is_fork", !1);
    k(this, me, !1);
  }
  skip_effect(n) {
    v(this, $).has(n) || v(this, $).set(n, { d: [], m: [] });
  }
  unskip_effect(n) {
    var t = v(this, $).get(n);
    if (t) {
      v(this, $).delete(n);
      for (var r of t.d) y(r, N), this.schedule(r);
      for (r of t.m) y(r, B), this.schedule(r);
    }
  }
  capture(n, t) {
    t !== b && !this.previous.has(n) && this.previous.set(n, t),
      (n.f & W) === 0 && (this.current.set(n, n.v), A == null || A.set(n, n.v));
  }
  activate() {
    h = this;
  }
  deactivate() {
    (h = null), (A = null);
  }
  flush() {
    try {
      (Ze = !0), (h = this), H(this, S, nn).call(this);
    } finally {
      (Sn = 0),
        (Qe = null),
        (pe = null),
        (Ye = null),
        (Ze = !1),
        (h = null),
        (A = null),
        J.clear();
    }
  }
  discard() {
    for (const n of v(this, ye)) n(this);
    v(this, ye).clear(), re.delete(this);
  }
  increment(n) {
    Y(this, Ee, v(this, Ee) + 1), n && Y(this, ge, v(this, ge) + 1);
  }
  decrement(n, t) {
    Y(this, Ee, v(this, Ee) - 1),
      n && Y(this, ge, v(this, ge) - 1),
      !(v(this, me) || t) &&
        (Y(this, me, !0),
        An(() => {
          Y(this, me, !1), this.flush();
        }));
  }
  transfer_effects(n, t) {
    for (const r of n) v(this, ae).add(r);
    for (const r of t) v(this, X).add(r);
    n.clear(), t.clear();
  }
  oncommit(n) {
    v(this, we).add(n);
  }
  ondiscard(n) {
    v(this, ye).add(n);
  }
  settled() {
    return (v(this, Ce) ?? Y(this, Ce, Pn())).promise;
  }
  static ensure() {
    if (h === null) {
      const n = (h = new Ke());
      Ze ||
        (re.add(h),
        ke ||
          An(() => {
            h === n && n.flush();
          }));
    }
    return h;
  }
  apply() {
    {
      A = null;
      return;
    }
  }
  schedule(n) {
    var s;
    if (
      ((Qe = n),
      (s = n.b) != null &&
        s.is_pending &&
        (n.f & (be | Me | Cn)) !== 0 &&
        (n.f & he) === 0)
    ) {
      n.b.defer_effect(n);
      return;
    }
    for (var t = n; t.parent !== null; ) {
      t = t.parent;
      var r = t.f;
      if (pe !== null && t === w && (d === null || (d.f & T) === 0)) return;
      if ((r & (ue | V)) !== 0) {
        if ((r & E) === 0) return;
        t.f ^= E;
      }
    }
    v(this, D).push(t);
  }
};
(we = new WeakMap()),
  (ye = new WeakMap()),
  (Ee = new WeakMap()),
  (ge = new WeakMap()),
  (Ce = new WeakMap()),
  (D = new WeakMap()),
  (ae = new WeakMap()),
  (X = new WeakMap()),
  ($ = new WeakMap()),
  (me = new WeakMap()),
  (S = new WeakSet()),
  (en = function () {
    return this.is_fork || v(this, ge) > 0;
  }),
  (nn = function () {
    var i, a;
    if ((Sn++ > 1e3 && (re.delete(this), Vt()), !H(this, S, en).call(this))) {
      for (const l of v(this, ae))
        v(this, X).delete(l), y(l, N), this.schedule(l);
      for (const l of v(this, X)) y(l, B), this.schedule(l);
    }
    const n = v(this, D);
    Y(this, D, []), this.apply();
    var t = (pe = []),
      r = [],
      s = (Ye = []);
    for (const l of n)
      try {
        H(this, S, tn).call(this, l, t, r);
      } catch (o) {
        throw (Gn(l), o);
      }
    if (((h = null), s.length > 0)) {
      var f = Ke.ensure();
      for (const l of s) f.schedule(l);
    }
    if (((pe = null), (Ye = null), H(this, S, en).call(this))) {
      H(this, S, rn).call(this, r), H(this, S, rn).call(this, t);
      for (const [l, o] of v(this, $)) Bn(l, o);
    } else {
      v(this, Ee) === 0 && re.delete(this),
        v(this, ae).clear(),
        v(this, X).clear();
      for (const l of v(this, we)) l(this);
      v(this, we).clear(),
        Rn(r),
        Rn(t),
        (i = v(this, Ce)) == null || i.resolve();
    }
    var u = h;
    if (v(this, D).length > 0) {
      const l = u ?? (u = this);
      v(l, D).push(...v(this, D).filter((o) => !v(l, D).includes(o)));
    }
    u !== null && (re.add(u), H((a = u), S, nn).call(a)),
      re.has(this) || H(this, S, qn).call(this);
  }),
  (tn = function (n, t, r) {
    n.f ^= E;
    for (var s = n.first; s !== null; ) {
      var f = s.f,
        u = (f & (V | ue)) !== 0,
        i = u && (f & E) !== 0,
        a = i || (f & q) !== 0 || v(this, $).has(s);
      if (!a && s.fn !== null) {
        u
          ? (s.f ^= E)
          : (f & be) !== 0
            ? t.push(s)
            : je(s) && ((f & ee) !== 0 && v(this, X).add(s), Re(s));
        var l = s.first;
        if (l !== null) {
          s = l;
          continue;
        }
      }
      for (; s !== null; ) {
        var o = s.next;
        if (o !== null) {
          s = o;
          break;
        }
        s = s.parent;
      }
    }
  }),
  (rn = function (n) {
    for (var t = 0; t < n.length; t += 1) Ht(n[t], v(this, ae), v(this, X));
  }),
  (qn = function () {
    var a;
    for (const l of re) {
      var n = l.id < this.id,
        t = [];
      for (const [o, _] of this.current) {
        if (l.current.has(o))
          if (n && _ !== l.current.get(o)) l.current.set(o, _);
          else continue;
        t.push(o);
      }
      var r = [...l.current.keys()].filter((o) => !this.current.has(o));
      if (r.length === 0) n && l.discard();
      else if (t.length > 0) {
        l.activate();
        var s = new Set(),
          f = new Map();
        for (var u of t) Un(u, r, s, f);
        if (v(l, D).length > 0) {
          l.apply();
          for (var i of v(l, D)) H((a = l), S, tn).call(a, i, [], []);
          Y(l, D, []);
        }
        l.deactivate();
      }
    }
  });
let _e = Ke;
function Ut(e) {
  var n = ke;
  ke = !0;
  try {
    for (var t; ; ) {
      if ((Lt(), h === null)) return t;
      h.flush();
    }
  } finally {
    ke = n;
  }
}
function Vt() {
  try {
    Ot();
  } catch (e) {
    Ve(e, Qe);
  }
}
let L = null;
function Rn(e) {
  var n = e.length;
  if (n !== 0) {
    for (var t = 0; t < n; ) {
      var r = e[t++];
      if (
        (r.f & (U | q)) === 0 &&
        je(r) &&
        ((L = new Set()),
        Re(r),
        r.deps === null &&
          r.first === null &&
          r.nodes === null &&
          r.teardown === null &&
          r.ac === null &&
          rt(r),
        (L == null ? void 0 : L.size) > 0)
      ) {
        J.clear();
        for (const s of L) {
          if ((s.f & (U | q)) !== 0) continue;
          const f = [s];
          let u = s.parent;
          for (; u !== null; )
            L.has(u) && (L.delete(u), f.push(u)), (u = u.parent);
          for (let i = f.length - 1; i >= 0; i--) {
            const a = f[i];
            (a.f & (U | q)) === 0 && Re(a);
          }
        }
        L.clear();
      }
    }
    L = null;
  }
}
function Un(e, n, t, r) {
  if (!t.has(e) && (t.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const f = s.f;
      (f & T) !== 0
        ? Un(s, n, t, r)
        : (f & (un | ee)) !== 0 &&
          (f & N) === 0 &&
          Vn(s, n, r) &&
          (y(s, N), _n(s));
    }
}
function Vn(e, n, t) {
  const r = t.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Te.call(n, s)) return !0;
      if ((s.f & T) !== 0 && Vn(s, n, t)) return t.set(s, !0), !0;
    }
  return t.set(e, !1), !1;
}
function _n(e) {
  h.schedule(e);
}
function Bn(e, n) {
  if (!((e.f & V) !== 0 && (e.f & E) !== 0)) {
    (e.f & N) !== 0 ? n.d.push(e) : (e.f & B) !== 0 && n.m.push(e), y(e, E);
    for (var t = e.first; t !== null; ) Bn(t, n), (t = t.next);
  }
}
function Gn(e) {
  y(e, E);
  for (var n = e.first; n !== null; ) Gn(n), (n = n.next);
}
function Bt(e, n, t, r) {
  const s = Le() ? vn : zt;
  var f = e.filter((c) => !c.settled);
  if (t.length === 0 && f.length === 0) {
    r(n.map(s));
    return;
  }
  var u = w,
    i = Gt(),
    a =
      f.length === 1
        ? f[0].promise
        : f.length > 1
          ? Promise.all(f.map((c) => c.promise))
          : null;
  function l(c) {
    i();
    try {
      r(c);
    } catch (g) {
      (u.f & U) === 0 && Ve(g, u);
    }
    Be();
  }
  if (t.length === 0) {
    a.then(() => l(n.map(s)));
    return;
  }
  var o = Kn();
  function _() {
    Promise.all(t.map((c) => Kt(c)))
      .then((c) => l([...n.map(s), ...c]))
      .catch((c) => Ve(c, u))
      .finally(() => o());
  }
  a
    ? a.then(() => {
        i(), _(), Be();
      })
    : _();
}
function Gt() {
  var e = w,
    n = d,
    t = R,
    r = h;
  return function (f = !0) {
    Se(e),
      Q(n),
      Ue(t),
      f &&
        (e.f & U) === 0 &&
        (r == null || r.activate(), r == null || r.apply());
  };
}
function Be(e = !0) {
  Se(null), Q(null), Ue(null), e && (h == null || h.deactivate());
}
function Kn() {
  var e = w.b,
    n = h,
    t = e.is_rendered();
  return (
    e.update_pending_count(1, n),
    n.increment(t),
    (r = !1) => {
      e.update_pending_count(-1, n), n.decrement(t, r);
    }
  );
}
function vn(e) {
  var n = T | N,
    t = d !== null && (d.f & T) !== 0 ? d : null;
  return (
    w !== null && (w.f |= Fe),
    {
      ctx: R,
      deps: null,
      effects: null,
      equals: Ln,
      f: n,
      fn: e,
      reactions: null,
      rv: 0,
      v: b,
      wv: 0,
      parent: t ?? w,
      ac: null,
    }
  );
}
function Kt(e, n, t) {
  let r = w;
  r === null && At();
  var s = void 0,
    f = hn(b),
    u = !d,
    i = new Map();
  return (
    tr(() => {
      var g;
      var a = w,
        l = Pn();
      s = l.promise;
      try {
        Promise.resolve(e()).then(l.resolve, l.reject).finally(Be);
      } catch (p) {
        l.reject(p), Be();
      }
      var o = h;
      if (u) {
        if ((a.f & he) !== 0) var _ = Kn();
        if (r.b.is_rendered())
          (g = i.get(o)) == null || g.reject(K), i.delete(o);
        else {
          for (const p of i.values()) p.reject(K);
          i.clear();
        }
        i.set(o, l);
      }
      const c = (p, F = void 0) => {
        if (_) {
          var O = F === K;
          _(O);
        }
        if (!(F === K || (a.f & U) !== 0)) {
          if ((o.activate(), F)) (f.f |= W), ln(f, F);
          else {
            (f.f & W) !== 0 && (f.f ^= W), ln(f, p);
            for (const [Ne, Oe] of i) {
              if ((i.delete(Ne), Ne === o)) break;
              Oe.reject(K);
            }
          }
          o.deactivate();
        }
      };
      l.promise.then(c, (p) => c(null, p || "unknown"));
    }),
    nr(() => {
      for (const a of i.values()) a.reject(K);
    }),
    new Promise((a) => {
      function l(o) {
        function _() {
          o === s ? a(f) : l(s);
        }
        o.then(_, _);
      }
      l(s);
    })
  );
}
function Jr(e) {
  const n = vn(e);
  return ft(n), n;
}
function zt(e) {
  const n = vn(e);
  return (n.equals = jn), n;
}
function Xt(e) {
  var n = e.effects;
  if (n !== null) {
    e.effects = null;
    for (var t = 0; t < n.length; t += 1) ve(n[t]);
  }
}
function $t(e) {
  for (var n = e.parent; n !== null; ) {
    if ((n.f & T) === 0) return (n.f & U) === 0 ? n : null;
    n = n.parent;
  }
  return null;
}
function dn(e) {
  var n,
    t = w;
  Se($t(e));
  try {
    (e.f &= ~oe), Xt(e), (n = ot(e));
  } finally {
    Se(t);
  }
  return n;
}
function zn(e) {
  var n = e.v,
    t = dn(e);
  if (
    !e.equals(t) &&
    ((e.wv = it()),
    (!(h != null && h.is_fork) || e.deps === null) &&
      ((e.v = t), h == null || h.capture(e, n), e.deps === null))
  ) {
    y(e, E);
    return;
  }
  de ||
    (A !== null ? (et() || (h != null && h.is_fork)) && A.set(e, t) : cn(e));
}
function Zt(e) {
  var n, t;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) &&
        ((n = r.teardown) == null || n.call(r),
        (t = r.ac) == null || t.abort(K),
        (r.teardown = gt),
        (r.ac = null),
        Pe(r, 0),
        yn(r));
}
function Xn(e) {
  if (e.effects !== null) for (const n of e.effects) n.teardown && Re(n);
}
let sn = new Set();
const J = new Map();
let $n = !1;
function hn(e, n) {
  var t = { f: 0, v: e, reactions: null, equals: Ln, rv: 0, wv: 0 };
  return t;
}
function Z(e, n) {
  const t = hn(e);
  return ft(t), t;
}
function Qr(e, n = !1, t = !0) {
  var s;
  const r = hn(e);
  return (
    n || (r.equals = jn),
    Xe &&
      t &&
      R !== null &&
      R.l !== null &&
      ((s = R.l).s ?? (s.s = [])).push(r),
    r
  );
}
function es(e, n) {
  return (
    z(
      e,
      ir(() => fe(e)),
    ),
    n
  );
}
function z(e, n, t = !1) {
  d !== null &&
    (!j || (d.f & bn) !== 0) &&
    Le() &&
    (d.f & (T | ee | un | bn)) !== 0 &&
    (M === null || !Te.call(M, e)) &&
    Dt();
  let r = t ? Ie(n) : n;
  return ln(e, r, Ye);
}
function ln(e, n, t = null) {
  if (!e.equals(n)) {
    var r = e.v;
    de ? J.set(e, n) : J.set(e, r), (e.v = n);
    var s = _e.ensure();
    if ((s.capture(e, r), (e.f & T) !== 0)) {
      const f = e;
      (e.f & N) !== 0 && dn(f), A === null && cn(f);
    }
    (e.wv = it()),
      Zn(e, N, t),
      Le() &&
        w !== null &&
        (w.f & E) !== 0 &&
        (w.f & (V | ue)) === 0 &&
        (P === null ? fr([e]) : P.push(e)),
      !s.is_fork && sn.size > 0 && !$n && Wt();
  }
  return n;
}
function Wt() {
  $n = !1;
  for (const e of sn) (e.f & E) !== 0 && y(e, B), je(e) && Re(e);
  sn.clear();
}
function ns(e, n = 1) {
  var t = fe(e),
    r = n === 1 ? t++ : t--;
  return z(e, t), r;
}
function We(e) {
  z(e, e.v + 1);
}
function Zn(e, n, t) {
  var r = e.reactions;
  if (r !== null)
    for (var s = Le(), f = r.length, u = 0; u < f; u++) {
      var i = r[u],
        a = i.f;
      if (!(!s && i === w)) {
        var l = (a & N) === 0;
        if ((l && y(i, n), (a & T) !== 0)) {
          var o = i;
          A == null || A.delete(o),
            (a & oe) === 0 && (a & C && (i.f |= oe), Zn(o, B, t));
        } else if (l) {
          var _ = i;
          (a & ee) !== 0 && L !== null && L.add(_),
            t !== null ? t.push(_) : _n(_);
        }
      }
    }
}
function Ie(e) {
  if (typeof e != "object" || e === null || De in e) return e;
  const n = kn(e);
  if (n !== yt && n !== Et) return e;
  var t = new Map(),
    r = ht(e),
    s = Z(0),
    f = ie,
    u = (i) => {
      if (ie === f) return i();
      var a = d,
        l = ie;
      Q(null), xn(f);
      var o = i();
      return Q(a), xn(l), o;
    };
  return (
    r && t.set("length", Z(e.length)),
    new Proxy(e, {
      defineProperty(i, a, l) {
        (!("value" in l) ||
          l.configurable === !1 ||
          l.enumerable === !1 ||
          l.writable === !1) &&
          It();
        var o = t.get(a);
        return (
          o === void 0
            ? u(() => {
                var _ = Z(l.value);
                return t.set(a, _), _;
              })
            : z(o, l.value, !0),
          !0
        );
      },
      deleteProperty(i, a) {
        var l = t.get(a);
        if (l === void 0) {
          if (a in i) {
            const o = u(() => Z(b));
            t.set(a, o), We(s);
          }
        } else z(l, b), We(s);
        return !0;
      },
      get(i, a, l) {
        var g;
        if (a === De) return e;
        var o = t.get(a),
          _ = a in i;
        if (
          (o === void 0 &&
            (!_ || ((g = xe(i, a)) != null && g.writable)) &&
            ((o = u(() => {
              var p = Ie(_ ? i[a] : b),
                F = Z(p);
              return F;
            })),
            t.set(a, o)),
          o !== void 0)
        ) {
          var c = fe(o);
          return c === b ? void 0 : c;
        }
        return Reflect.get(i, a, l);
      },
      getOwnPropertyDescriptor(i, a) {
        var l = Reflect.getOwnPropertyDescriptor(i, a);
        if (l && "value" in l) {
          var o = t.get(a);
          o && (l.value = fe(o));
        } else if (l === void 0) {
          var _ = t.get(a),
            c = _ == null ? void 0 : _.v;
          if (_ !== void 0 && c !== b)
            return { enumerable: !0, configurable: !0, value: c, writable: !0 };
        }
        return l;
      },
      has(i, a) {
        var c;
        if (a === De) return !0;
        var l = t.get(a),
          o = (l !== void 0 && l.v !== b) || Reflect.has(i, a);
        if (
          l !== void 0 ||
          (w !== null && (!o || ((c = xe(i, a)) != null && c.writable)))
        ) {
          l === void 0 &&
            ((l = u(() => {
              var g = o ? Ie(i[a]) : b,
                p = Z(g);
              return p;
            })),
            t.set(a, l));
          var _ = fe(l);
          if (_ === b) return !1;
        }
        return o;
      },
      set(i, a, l, o) {
        var En;
        var _ = t.get(a),
          c = a in i;
        if (r && a === "length")
          for (var g = l; g < _.v; g += 1) {
            var p = t.get(g + "");
            p !== void 0
              ? z(p, b)
              : g in i && ((p = u(() => Z(b))), t.set(g + "", p));
          }
        if (_ === void 0)
          (!c || ((En = xe(i, a)) != null && En.writable)) &&
            ((_ = u(() => Z(void 0))), z(_, Ie(l)), t.set(a, _));
        else {
          c = _.v !== b;
          var F = u(() => Ie(l));
          z(_, F);
        }
        var O = Reflect.getOwnPropertyDescriptor(i, a);
        if ((O != null && O.set && O.set.call(o, l), !c)) {
          if (r && typeof a == "string") {
            var Ne = t.get("length"),
              Oe = Number(a);
            Number.isInteger(Oe) && Oe >= Ne.v && z(Ne, Oe + 1);
          }
          We(s);
        }
        return !0;
      },
      ownKeys(i) {
        fe(s);
        var a = Reflect.ownKeys(i).filter((_) => {
          var c = t.get(_);
          return c === void 0 || c.v !== b;
        });
        for (var [l, o] of t) o.v !== b && !(l in i) && a.push(l);
        return a;
      },
      setPrototypeOf() {
        xt();
      },
    })
  );
}
var Nn, Jt, Wn, Jn;
function ts() {
  if (Nn === void 0) {
    (Nn = window), (Jt = /Firefox/.test(navigator.userAgent));
    var e = Element.prototype,
      n = Node.prototype,
      t = Text.prototype;
    (Wn = xe(n, "firstChild").get),
      (Jn = xe(n, "nextSibling").get),
      mn(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      mn(t) && (t.__t = void 0);
  }
}
function Ge(e = "") {
  return document.createTextNode(e);
}
function fn(e) {
  return Wn.call(e);
}
function ne(e) {
  return Jn.call(e);
}
function rs(e, n) {
  if (!ce) return fn(e);
  var t = fn(m);
  if (t === null) t = m.appendChild(Ge());
  else if (n && t.nodeType !== ze) {
    var r = Ge();
    return t == null || t.before(r), Ae(r), r;
  }
  return n && pn(t), Ae(t), t;
}
function ss(e, n = !1) {
  if (!ce) {
    var t = fn(e);
    return t instanceof Comment && t.data === "" ? ne(t) : t;
  }
  if (n) {
    if ((m == null ? void 0 : m.nodeType) !== ze) {
      var r = Ge();
      return m == null || m.before(r), Ae(r), r;
    }
    pn(m);
  }
  return m;
}
function ls(e, n = 1, t = !1) {
  let r = ce ? m : e;
  for (var s; n--; ) (s = r), (r = ne(r));
  if (!ce) return r;
  if (t) {
    if ((r == null ? void 0 : r.nodeType) !== ze) {
      var f = Ge();
      return r === null ? s == null || s.after(f) : r.before(f), Ae(f), f;
    }
    pn(r);
  }
  return Ae(r), r;
}
function fs(e) {
  e.textContent = "";
}
function as() {
  return !1;
}
function is(e, n, t) {
  return document.createElementNS(n ?? Mt, e, void 0);
}
function pn(e) {
  if (e.nodeValue.length < 65536) return;
  let n = e.nextSibling;
  for (; n !== null && n.nodeType === ze; )
    n.remove(), (e.nodeValue += n.nodeValue), (n = e.nextSibling);
}
let On = !1;
function Qt() {
  On ||
    ((On = !0),
    document.addEventListener(
      "reset",
      (e) => {
        Promise.resolve().then(() => {
          var n;
          if (!e.defaultPrevented)
            for (const t of e.target.elements)
              (n = t.__on_r) == null || n.call(t);
        });
      },
      { capture: !0 },
    ));
}
function wn(e) {
  var n = d,
    t = w;
  Q(null), Se(null);
  try {
    return e();
  } finally {
    Q(n), Se(t);
  }
}
function us(e, n, t, r = t) {
  e.addEventListener(n, () => wn(t));
  const s = e.__on_r;
  s
    ? (e.__on_r = () => {
        s(), r(!0);
      })
    : (e.__on_r = () => r(!0)),
    Qt();
}
function Qn(e) {
  w === null && (d === null && Nt(), Rt()), de && St();
}
function er(e, n) {
  var t = n.last;
  t === null
    ? (n.last = n.first = e)
    : ((t.next = e), (e.prev = t), (n.last = e));
}
function G(e, n) {
  var t = w;
  t !== null && (t.f & q) !== 0 && (e |= q);
  var r = {
      ctx: R,
      deps: null,
      nodes: null,
      f: e | N | C,
      first: null,
      fn: n,
      last: null,
      next: null,
      parent: t,
      b: t && t.b,
      prev: null,
      teardown: null,
      wv: 0,
      ac: null,
    },
    s = r;
  if ((e & be) !== 0) pe !== null ? pe.push(r) : _e.ensure().schedule(r);
  else if (n !== null) {
    try {
      Re(r);
    } catch (u) {
      throw (ve(r), u);
    }
    s.deps === null &&
      s.teardown === null &&
      s.nodes === null &&
      s.first === s.last &&
      (s.f & Fe) === 0 &&
      ((s = s.first),
      (e & ee) !== 0 && (e & qe) !== 0 && s !== null && (s.f |= qe));
  }
  if (
    s !== null &&
    ((s.parent = t),
    t !== null && er(s, t),
    d !== null && (d.f & T) !== 0 && (e & ue) === 0)
  ) {
    var f = d;
    (f.effects ?? (f.effects = [])).push(s);
  }
  return r;
}
function et() {
  return d !== null && !j;
}
function nr(e) {
  const n = G(Me, null);
  return y(n, E), (n.teardown = e), n;
}
function os(e) {
  Qn();
  var n = w.f,
    t = !d && (n & V) !== 0 && (n & he) === 0;
  if (t) {
    var r = R;
    (r.e ?? (r.e = [])).push(e);
  } else return nt(e);
}
function nt(e) {
  return G(be | Mn, e);
}
function cs(e) {
  return Qn(), G(Me | Mn, e);
}
function _s(e) {
  _e.ensure();
  const n = G(ue | Fe, e);
  return (t = {}) =>
    new Promise((r) => {
      t.outro
        ? lr(n, () => {
            ve(n), r(void 0);
          })
        : (ve(n), r(void 0));
    });
}
function vs(e) {
  return G(be, e);
}
function tr(e) {
  return G(un | Fe, e);
}
function ds(e, n = 0) {
  return G(Me | n, e);
}
function hs(e, n = [], t = [], r = []) {
  Bt(r, n, t, (s) => {
    G(Me, () => e(...s.map(fe)));
  });
}
function ps(e, n = 0) {
  var t = G(ee | n, e);
  return t;
}
function ws(e) {
  return G(V | Fe, e);
}
function tt(e) {
  var n = e.teardown;
  if (n !== null) {
    const t = de,
      r = d;
    In(!0), Q(null);
    try {
      n.call(null);
    } finally {
      In(t), Q(r);
    }
  }
}
function yn(e, n = !1) {
  var t = e.first;
  for (e.first = e.last = null; t !== null; ) {
    const s = t.ac;
    s !== null &&
      wn(() => {
        s.abort(K);
      });
    var r = t.next;
    (t.f & ue) !== 0 ? (t.parent = null) : ve(t, n), (t = r);
  }
}
function rr(e) {
  for (var n = e.first; n !== null; ) {
    var t = n.next;
    (n.f & V) === 0 && ve(n), (n = t);
  }
}
function ve(e, n = !0) {
  var t = !1;
  (n || (e.f & bt) !== 0) &&
    e.nodes !== null &&
    e.nodes.end !== null &&
    (sr(e.nodes.start, e.nodes.end), (t = !0)),
    y(e, Tn),
    yn(e, n && !t),
    Pe(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const f of r) f.stop();
  tt(e), (e.f ^= Tn), (e.f |= U);
  var s = e.parent;
  s !== null && s.first !== null && rt(e),
    (e.next =
      e.prev =
      e.teardown =
      e.ctx =
      e.deps =
      e.fn =
      e.nodes =
      e.ac =
        null);
}
function sr(e, n) {
  for (; e !== null; ) {
    var t = e === n ? null : ne(e);
    e.remove(), (e = t);
  }
}
function rt(e) {
  var n = e.parent,
    t = e.prev,
    r = e.next;
  t !== null && (t.next = r),
    r !== null && (r.prev = t),
    n !== null &&
      (n.first === e && (n.first = r), n.last === e && (n.last = t));
}
function lr(e, n, t = !0) {
  var r = [];
  st(e, r, !0);
  var s = () => {
      t && ve(e), n && n();
    },
    f = r.length;
  if (f > 0) {
    var u = () => --f || s();
    for (var i of r) i.out(u);
  } else s();
}
function st(e, n, t) {
  if ((e.f & q) === 0) {
    e.f ^= q;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const i of r) (i.is_global || t) && n.push(i);
    for (var s = e.first; s !== null; ) {
      var f = s.next,
        u = (s.f & qe) !== 0 || ((s.f & V) !== 0 && (e.f & ee) !== 0);
      st(s, n, u ? t : !1), (s = f);
    }
  }
}
function ys(e) {
  lt(e, !0);
}
function lt(e, n) {
  if ((e.f & q) !== 0) {
    (e.f ^= q), (e.f & E) === 0 && (y(e, N), _e.ensure().schedule(e));
    for (var t = e.first; t !== null; ) {
      var r = t.next,
        s = (t.f & qe) !== 0 || (t.f & V) !== 0;
      lt(t, s ? n : !1), (t = r);
    }
    var f = e.nodes && e.nodes.t;
    if (f !== null) for (const u of f) (u.is_global || n) && u.in();
  }
}
function Es(e, n) {
  if (e.nodes)
    for (var t = e.nodes.start, r = e.nodes.end; t !== null; ) {
      var s = t === r ? null : ne(t);
      n.append(t), (t = s);
    }
}
let He = !1,
  de = !1;
function In(e) {
  de = e;
}
let d = null,
  j = !1;
function Q(e) {
  d = e;
}
let w = null;
function Se(e) {
  w = e;
}
let M = null;
function ft(e) {
  d !== null && (M === null ? (M = [e]) : M.push(e));
}
let I = null,
  x = 0,
  P = null;
function fr(e) {
  P = e;
}
let at = 1,
  le = 0,
  ie = le;
function xn(e) {
  ie = e;
}
function it() {
  return ++at;
}
function je(e) {
  var n = e.f;
  if ((n & N) !== 0) return !0;
  if ((n & T && (e.f &= ~oe), (n & B) !== 0)) {
    for (var t = e.deps, r = t.length, s = 0; s < r; s++) {
      var f = t[s];
      if ((je(f) && zn(f), f.wv > e.wv)) return !0;
    }
    (n & C) !== 0 && A === null && y(e, E);
  }
  return !1;
}
function ut(e, n, t = !0) {
  var r = e.reactions;
  if (r !== null && !(M !== null && Te.call(M, e)))
    for (var s = 0; s < r.length; s++) {
      var f = r[s];
      (f.f & T) !== 0
        ? ut(f, n, !1)
        : n === f && (t ? y(f, N) : (f.f & E) !== 0 && y(f, B), _n(f));
    }
}
function ot(e) {
  var F;
  var n = I,
    t = x,
    r = P,
    s = d,
    f = M,
    u = R,
    i = j,
    a = ie,
    l = e.f;
  (I = null),
    (x = 0),
    (P = null),
    (d = (l & (V | ue)) === 0 ? e : null),
    (M = null),
    Ue(e.ctx),
    (j = !1),
    (ie = ++le),
    e.ac !== null &&
      (wn(() => {
        e.ac.abort(K);
      }),
      (e.ac = null));
  try {
    e.f |= Je;
    var o = e.fn,
      _ = o();
    e.f |= he;
    var c = e.deps,
      g = h == null ? void 0 : h.is_fork;
    if (I !== null) {
      var p;
      if ((g || Pe(e, x), c !== null && x > 0))
        for (c.length = x + I.length, p = 0; p < I.length; p++) c[x + p] = I[p];
      else e.deps = c = I;
      if (et() && (e.f & C) !== 0)
        for (p = x; p < c.length; p++)
          ((F = c[p]).reactions ?? (F.reactions = [])).push(e);
    } else !g && c !== null && x < c.length && (Pe(e, x), (c.length = x));
    if (Le() && P !== null && !j && c !== null && (e.f & (T | B | N)) === 0)
      for (p = 0; p < P.length; p++) ut(P[p], e);
    if (s !== null && s !== e) {
      if ((le++, s.deps !== null))
        for (let O = 0; O < t; O += 1) s.deps[O].rv = le;
      if (n !== null) for (const O of n) O.rv = le;
      P !== null && (r === null ? (r = P) : r.push(...P));
    }
    return (e.f & W) !== 0 && (e.f ^= W), _;
  } catch (O) {
    return jt(O);
  } finally {
    (e.f ^= Je),
      (I = n),
      (x = t),
      (P = r),
      (d = s),
      (M = f),
      Ue(u),
      (j = i),
      (ie = a);
  }
}
function ar(e, n) {
  let t = n.reactions;
  if (t !== null) {
    var r = pt.call(t, e);
    if (r !== -1) {
      var s = t.length - 1;
      s === 0 ? (t = n.reactions = null) : ((t[r] = t[s]), t.pop());
    }
  }
  if (t === null && (n.f & T) !== 0 && (I === null || !Te.call(I, n))) {
    var f = n;
    (f.f & C) !== 0 && ((f.f ^= C), (f.f &= ~oe)), cn(f), Zt(f), Pe(f, 0);
  }
}
function Pe(e, n) {
  var t = e.deps;
  if (t !== null) for (var r = n; r < t.length; r++) ar(e, t[r]);
}
function Re(e) {
  var n = e.f;
  if ((n & U) === 0) {
    y(e, E);
    var t = w,
      r = He;
    (w = e), (He = !0);
    try {
      (n & (ee | Cn)) !== 0 ? rr(e) : yn(e), tt(e);
      var s = ot(e);
      (e.teardown = typeof s == "function" ? s : null), (e.wv = at);
      var f;
    } finally {
      (He = r), (w = t);
    }
  }
}
async function gs() {
  await Promise.resolve(), Ut();
}
function ms() {
  return _e.ensure().settled();
}
function fe(e) {
  var n = e.f,
    t = (n & T) !== 0;
  if (d !== null && !j) {
    var r = w !== null && (w.f & U) !== 0;
    if (!r && (M === null || !Te.call(M, e))) {
      var s = d.deps;
      if ((d.f & Je) !== 0)
        e.rv < le &&
          ((e.rv = le),
          I === null && s !== null && s[x] === e
            ? x++
            : I === null
              ? (I = [e])
              : I.push(e));
      else {
        (d.deps ?? (d.deps = [])).push(e);
        var f = e.reactions;
        f === null ? (e.reactions = [d]) : Te.call(f, d) || f.push(d);
      }
    }
  }
  if (de && J.has(e)) return J.get(e);
  if (t) {
    var u = e;
    if (de) {
      var i = u.v;
      return (
        (((u.f & E) === 0 && u.reactions !== null) || _t(u)) && (i = dn(u)),
        J.set(u, i),
        i
      );
    }
    var a = (u.f & C) === 0 && !j && d !== null && (He || (d.f & C) !== 0),
      l = (u.f & he) === 0;
    je(u) && (a && (u.f |= C), zn(u)), a && !l && (Xn(u), ct(u));
  }
  if (A != null && A.has(e)) return A.get(e);
  if ((e.f & W) !== 0) throw e.v;
  return e.v;
}
function ct(e) {
  if (((e.f |= C), e.deps !== null))
    for (const n of e.deps)
      (n.reactions ?? (n.reactions = [])).push(e),
        (n.f & T) !== 0 && (n.f & C) === 0 && (Xn(n), ct(n));
}
function _t(e) {
  if (e.v === b) return !0;
  if (e.deps === null) return !1;
  for (const n of e.deps) if (J.has(n) || ((n.f & T) !== 0 && _t(n))) return !0;
  return !1;
}
function ir(e) {
  var n = j;
  try {
    return (j = !0), e();
  } finally {
    j = n;
  }
}
function Ts(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (De in e) an(e);
    else if (!Array.isArray(e))
      for (let n in e) {
        const t = e[n];
        typeof t == "object" && t && De in t && an(t);
      }
  }
}
function an(e, n = new Set()) {
  if (
    typeof e == "object" &&
    e !== null &&
    !(e instanceof EventTarget) &&
    !n.has(e)
  ) {
    n.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        an(e[r], n);
      } catch {}
    const t = kn(e);
    if (
      t !== Object.prototype &&
      t !== Array.prototype &&
      t !== Map.prototype &&
      t !== Set.prototype &&
      t !== Date.prototype
    ) {
      const r = wt(t);
      for (let s in r) {
        const f = r[s].get;
        if (f)
          try {
            f.call(e);
          } catch {}
      }
    }
  }
}
export {
  fn as $,
  Qr as A,
  nr as B,
  cr as C,
  Tn as D,
  qe as E,
  xe as F,
  mr as G,
  kt as H,
  Ie as I,
  de as J,
  U as K,
  kr as L,
  Dr as M,
  Xe as N,
  Ir as O,
  xr as P,
  Or as Q,
  vn as R,
  De as S,
  zt as T,
  hr as U,
  Ft as V,
  mt as W,
  os as X,
  gs as Y,
  Jr as Z,
  Ge as _,
  Br as a,
  Mt as a$,
  Pt as a0,
  Fn as a1,
  Ct as a2,
  ln as a3,
  h as a4,
  dr as a5,
  ws as a6,
  Er as a7,
  as as a8,
  ht as a9,
  pn as aA,
  Ut as aB,
  sr as aC,
  qr as aD,
  on as aE,
  Yr as aF,
  Hr as aG,
  et as aH,
  We as aI,
  Tt as aJ,
  jr as aK,
  Ht as aL,
  Se as aM,
  Q as aN,
  Ue as aO,
  _e as aP,
  jt as aQ,
  d as aR,
  Ve as aS,
  Fe as aT,
  Tr as aU,
  Ur as aV,
  wn as aW,
  ts as aX,
  gr as aY,
  _s as aZ,
  pr as a_,
  or as aa,
  br as ab,
  Nr as ac,
  hn as ad,
  Ar as ae,
  ys as af,
  lr as ag,
  q as ah,
  V as ai,
  fs as aj,
  Es as ak,
  ve as al,
  An as am,
  ne as an,
  Sr as ao,
  Rr as ap,
  Kr as aq,
  cs as ar,
  vr as as,
  Ts as at,
  is as au,
  Jt as av,
  Fr as aw,
  Lr as ax,
  he as ay,
  ze as az,
  ps as b,
  yr as b0,
  kn as b1,
  Qt as b2,
  wt as b3,
  ie as b4,
  ee as b5,
  Mr as b6,
  Pr as b7,
  Cr as b8,
  _r as b9,
  us as ba,
  es as bb,
  ns as bc,
  ms as bd,
  Ae as c,
  Vr as d,
  m as e,
  ss as f,
  Wr as g,
  ce as h,
  rs as i,
  Gr as j,
  ls as k,
  Le as l,
  R as m,
  vs as n,
  ds as o,
  Zr as p,
  w as q,
  Xr as r,
  zr as s,
  hs as t,
  ir as u,
  $r as v,
  fe as w,
  Z as x,
  z as y,
  gt as z,
};
