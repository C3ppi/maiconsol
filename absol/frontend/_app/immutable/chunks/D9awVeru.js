import {
  _ as B,
  b as se,
  h as b,
  c as j,
  $ as te,
  a as ue,
  w as ee,
  r as ce,
  a0 as de,
  s as ne,
  d as y,
  e as H,
  a1 as pe,
  a2 as ge,
  a3 as ae,
  a4 as he,
  a5 as C,
  a6 as Y,
  a7 as ve,
  a8 as me,
  T as _e,
  a9 as Ee,
  aa as W,
  ab as Se,
  ac as Ce,
  A as Ie,
  ad as re,
  ae as we,
  K as Ae,
  af as fe,
  ag as oe,
  ah as P,
  ai as Re,
  aj as Ne,
  ak as Te,
  al as $e,
  am as De,
  an as Oe,
  ao as le,
  ap as be,
} from "./BYGgIge7.js";
import { C as Le } from "./5muZMSkm.js";
function je(e, n) {
  return n;
}
function ke(e, n, o) {
  for (var s = [], p = n.length, l, f = n.length, g = 0; g < p; g++) {
    let _ = n[g];
    oe(
      _,
      () => {
        if (l) {
          if ((l.pending.delete(_), l.done.add(_), l.pending.size === 0)) {
            var u = e.outrogroups;
            q(e, W(l.done)),
              u.delete(l),
              u.size === 0 && (e.outrogroups = null);
          }
        } else f -= 1;
      },
      !1,
    );
  }
  if (f === 0) {
    var i = s.length === 0 && o !== null;
    if (i) {
      var d = o,
        r = d.parentNode;
      Ne(r), r.append(d), e.items.clear();
    }
    q(e, n, !i);
  } else
    (l = { pending: new Set(n), done: new Set() }),
      (e.outrogroups ?? (e.outrogroups = new Set())).add(l);
}
function q(e, n, o = !0) {
  var s;
  if (e.pending.size > 0) {
    s = new Set();
    for (const f of e.pending.values())
      for (const g of f) s.add(e.items.get(g).e);
  }
  for (var p = 0; p < n.length; p++) {
    var l = n[p];
    if (s != null && s.has(l)) {
      l.f |= C;
      const f = document.createDocumentFragment();
      Te(l, f);
    } else $e(n[p], o);
  }
}
var ie;
function ye(e, n, o, s, p, l = null) {
  var f = e,
    g = new Map(),
    i = (n & le) !== 0;
  if (i) {
    var d = e;
    f = b ? j(te(d)) : d.appendChild(B());
  }
  b && ue();
  var r = null,
    _ = _e(() => {
      var c = o();
      return Ee(c) ? c : c == null ? [] : W(c);
    }),
    u,
    E = new Map(),
    S = !0;
  function T(c) {
    (w.effect.f & Ae) === 0 &&
      (w.pending.delete(c),
      (w.fallback = r),
      Me(w, u, f, n, s),
      r !== null &&
        (u.length === 0
          ? (r.f & C) === 0
            ? fe(r)
            : ((r.f ^= C), M(r, null, f))
          : oe(r, () => {
              r = null;
            })));
  }
  function a(c) {
    w.pending.delete(c);
  }
  var t = se(() => {
      u = ee(_);
      var c = u.length;
      let v = !1;
      if (b) {
        var K = ce(f) === de;
        K !== (c === 0) && ((f = ne()), j(f), y(!1), (v = !0));
      }
      for (var A = new Set(), h = he, D = me(), R = 0; R < c; R += 1) {
        b && H.nodeType === pe && H.data === ge && ((f = H), (v = !0), y(!1));
        var O = u[R],
          $ = s(O, R),
          m = S ? null : g.get($);
        m
          ? (m.v && ae(m.v, O), m.i && ae(m.i, R), D && h.unskip_effect(m.e))
          : ((m = Ke(g, S ? f : (ie ?? (ie = B())), O, $, R, p, n, o)),
            S || (m.e.f |= C),
            g.set($, m)),
          A.add($);
      }
      if (
        (c === 0 &&
          l &&
          !r &&
          (S
            ? (r = Y(() => l(f)))
            : ((r = Y(() => l(ie ?? (ie = B())))), (r.f |= C))),
        c > A.size && ve(),
        b && c > 0 && j(ne()),
        !S)
      )
        if ((E.set(h, A), D)) {
          for (const [V, x] of g) A.has(V) || h.skip_effect(x.e);
          h.oncommit(T), h.ondiscard(a);
        } else T(h);
      v && y(!0), ee(_);
    }),
    w = { effect: t, items: g, pending: E, outrogroups: null, fallback: r };
  (S = !1), b && (f = H);
}
function k(e) {
  for (; e !== null && (e.f & Re) === 0; ) e = e.next;
  return e;
}
function Me(e, n, o, s, p) {
  var O, $, m, V, x, G, J, X, Z;
  var l = (s & be) !== 0,
    f = n.length,
    g = e.items,
    i = k(e.effect.first),
    d,
    r = null,
    _,
    u = [],
    E = [],
    S,
    T,
    a,
    t;
  if (l)
    for (t = 0; t < f; t += 1)
      (S = n[t]),
        (T = p(S, t)),
        (a = g.get(T).e),
        (a.f & C) === 0 &&
          (($ = (O = a.nodes) == null ? void 0 : O.a) == null || $.measure(),
          (_ ?? (_ = new Set())).add(a));
  for (t = 0; t < f; t += 1) {
    if (((S = n[t]), (T = p(S, t)), (a = g.get(T).e), e.outrogroups !== null))
      for (const I of e.outrogroups) I.pending.delete(a), I.done.delete(a);
    if (
      ((a.f & P) !== 0 &&
        (fe(a),
        l &&
          ((V = (m = a.nodes) == null ? void 0 : m.a) == null || V.unfix(),
          (_ ?? (_ = new Set())).delete(a))),
      (a.f & C) !== 0)
    )
      if (((a.f ^= C), a === i)) M(a, null, o);
      else {
        var w = r ? r.next : i;
        a === e.effect.last && (e.effect.last = a.prev),
          a.prev && (a.prev.next = a.next),
          a.next && (a.next.prev = a.prev),
          N(e, r, a),
          N(e, a, w),
          M(a, w, o),
          (r = a),
          (u = []),
          (E = []),
          (i = k(r.next));
        continue;
      }
    if (a !== i) {
      if (d !== void 0 && d.has(a)) {
        if (u.length < E.length) {
          var c = E[0],
            v;
          r = c.prev;
          var K = u[0],
            A = u[u.length - 1];
          for (v = 0; v < u.length; v += 1) M(u[v], c, o);
          for (v = 0; v < E.length; v += 1) d.delete(E[v]);
          N(e, K.prev, A.next),
            N(e, r, K),
            N(e, A, c),
            (i = c),
            (r = A),
            (t -= 1),
            (u = []),
            (E = []);
        } else
          d.delete(a),
            M(a, i, o),
            N(e, a.prev, a.next),
            N(e, a, r === null ? e.effect.first : r.next),
            N(e, r, a),
            (r = a);
        continue;
      }
      for (u = [], E = []; i !== null && i !== a; )
        (d ?? (d = new Set())).add(i), E.push(i), (i = k(i.next));
      if (i === null) continue;
    }
    (a.f & C) === 0 && u.push(a), (r = a), (i = k(a.next));
  }
  if (e.outrogroups !== null) {
    for (const I of e.outrogroups)
      I.pending.size === 0 &&
        (q(e, W(I.done)), (x = e.outrogroups) == null || x.delete(I));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (i !== null || d !== void 0) {
    var h = [];
    if (d !== void 0) for (a of d) (a.f & P) === 0 && h.push(a);
    for (; i !== null; )
      (i.f & P) === 0 && i !== e.fallback && h.push(i), (i = k(i.next));
    var D = h.length;
    if (D > 0) {
      var R = (s & le) !== 0 && f === 0 ? o : null;
      if (l) {
        for (t = 0; t < D; t += 1)
          (J = (G = h[t].nodes) == null ? void 0 : G.a) == null || J.measure();
        for (t = 0; t < D; t += 1)
          (Z = (X = h[t].nodes) == null ? void 0 : X.a) == null || Z.fix();
      }
      ke(e, h, R);
    }
  }
  l &&
    De(() => {
      var I, Q;
      if (_ !== void 0)
        for (a of _)
          (Q = (I = a.nodes) == null ? void 0 : I.a) == null || Q.apply();
    });
}
function Ke(e, n, o, s, p, l, f, g) {
  var i = (f & Se) !== 0 ? ((f & Ce) === 0 ? Ie(o, !1, !1) : re(o)) : null,
    d = (f & we) !== 0 ? re(p) : null;
  return {
    v: i,
    i: d,
    e: Y(
      () => (
        l(n, i ?? o, d ?? p, g),
        () => {
          e.delete(s);
        }
      ),
    ),
  };
}
function M(e, n, o) {
  if (e.nodes)
    for (
      var s = e.nodes.start,
        p = e.nodes.end,
        l = n && (n.f & C) === 0 ? n.nodes.start : o;
      s !== null;

    ) {
      var f = Oe(s);
      if ((l.before(s), s === p)) return;
      s = f;
    }
}
function N(e, n, o) {
  n === null ? (e.effect.first = o) : (n.next = o),
    o === null ? (e.effect.last = n) : (o.prev = n);
}
const Ve = "https://ddragon.leagueoflegends.com/api/versions.json",
  xe = "16.9.1";
let L = xe,
  U = null;
async function He() {
  return (
    U ||
    ((U = fetch(Ve)
      .then((e) => e.json())
      .then((e) => ((L = e[0]), L))
      .catch(() => L)),
    U)
  );
}
function Pe(e) {
  return `https://ddragon.leagueoflegends.com/cdn/${L}/img/item/${e}.png`;
}
const Ue = {
    "Bel'Veth": "Belveth",
    "Cho'Gath": "Chogath",
    "Kai'Sa": "Kaisa",
    "K'Sante": "KSante",
    "Kog'Maw": "KogMaw",
    "Rek'Sai": "RekSai",
    "Vel'Koz": "Velkoz",
  },
  ze = Object.fromEntries(
    Object.entries(Ue).map(([e, n]) => [
      e.replace(/[\s']/g, "").toLowerCase(),
      n,
    ]),
  );
function F(e) {
  const n = e.replace(/[\s']/g, "");
  return ze[n.toLowerCase()] ?? n;
}
function Ye(e) {
  return `https://ddragon.leagueoflegends.com/cdn/${L}/img/champion/${F(e)}.png`;
}
function qe(e, n = 0) {
  return `${Le}/${F(e)}_${n}.webp`;
}
function We(e, n = 0) {
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${F(e)}_${n}.jpg`;
}
function Ge(e, n = 0) {
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${F(e)}_${n}.jpg`;
}
function Je(e) {
  const n = e.match(/^(.+)_(\d+)$/);
  return n
    ? { champion: n[1], skinNum: Number(n[2]) }
    : { champion: e, skinNum: 0 };
}
function Xe(e, n) {
  return n === 0 ? e : `${e}_${n}`;
}
function Ze(e) {
  return `https://ddragon.leagueoflegends.com/cdn/${L}/img/profileicon/${e}.png`;
}
let z = null;
async function Qe() {
  return (
    z ||
    ((z = He()
      .then((e) =>
        fetch(
          `https://ddragon.leagueoflegends.com/cdn/${e}/data/en_US/champion.json`,
        ),
      )
      .then((e) => e.json())
      .then((e) =>
        Object.values(e.data)
          .filter((n) => !n.id.startsWith("Jade_"))
          .map((n) => ({ id: n.id, name: n.name }))
          .sort((n, o) => n.name.localeCompare(o.name)),
      )
      .catch(() => [])),
    z)
  );
}
export {
  je as a,
  Qe as b,
  Ye as c,
  Ge as d,
  ye as e,
  Je as f,
  He as g,
  qe as h,
  Pe as i,
  We as j,
  Ze as p,
  Xe as w,
};
