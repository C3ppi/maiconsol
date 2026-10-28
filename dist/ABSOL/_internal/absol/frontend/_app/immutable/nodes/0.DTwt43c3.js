const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["../chunks/miXHpl0f.js", "../chunks/BYGgIge7.js"]),
) => i.map((i) => d[i]);
var vo = Object.defineProperty;
var Bl = (i) => {
  throw TypeError(i);
};
var co = (i, t, o) =>
  t in i
    ? vo(i, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (i[t] = o);
var Pl = (i, t, o) => co(i, typeof t != "symbol" ? t + "" : t, o),
  Ps = (i, t, o) => t.has(i) || Bl("Cannot " + o);
var xa = (i, t, o) => (
    Ps(i, t, "read from private field"), o ? o.call(i) : t.get(i)
  ),
  Fa = (i, t, o) =>
    t.has(i)
      ? Bl("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(i)
        : t.set(i, o),
  js = (i, t, o, v) => (
    Ps(i, t, "write to private field"), v ? v.call(i, o) : t.set(i, o), o
  ),
  jl = (i, t, o) => (Ps(i, t, "access private method"), o);
import {
  a as n,
  f as u,
  b as tt,
  c as ma,
  t as Ca,
} from "../chunks/DXITvGue.js";
import { a as dl, o as $t } from "../chunks/zmacCIoP.js";
import {
  b as uo,
  E as ni,
  q as po,
  b5 as ho,
  ay as fo,
  n as vi,
  u as ws,
  b6 as mo,
  b7 as go,
  b8 as wo,
  b9 as _o,
  am as bo,
  z as Ha,
  aW as di,
  ba as xo,
  a4 as Qa,
  Y as ci,
  h as yo,
  o as qo,
  B as ko,
  F as So,
  p as Me,
  x as oe,
  I as va,
  X as Gt,
  w as e,
  y as h,
  k as r,
  i as l,
  j as a,
  aq as _t,
  t as w,
  g as Ce,
  Z as q,
  f as Lt,
  A as To,
  bb as ls,
  T as zo,
  bc as is,
} from "../chunks/BYGgIge7.js";
import {
  b as Mo,
  s as x,
  d as Bt,
  a as pe,
  e as Pa,
  r as cl,
} from "../chunks/D6JgBVoW.js";
import { p as R, s as ta, a as kt } from "../chunks/BCrg8Att.js";
import { B as Co, i as K } from "../chunks/BQhwzbP1.js";
import {
  i as Ve,
  s as N,
  a as y,
  c as dt,
  g as $e,
  r as ja,
  d as Eo,
  l as Ht,
} from "../chunks/miXHpl0f.js";
import { b as St } from "../chunks/DdrE9EQ-.js";
import { i as Xa, p as Ao } from "../chunks/CkDG_ZqL.js";
import {
  e as We,
  a as it,
  c as wa,
  i as ui,
  p as Lo,
  b as Zo,
  d as Ro,
  f as Io,
  h as Ks,
  j as $s,
  g as Do,
} from "../chunks/D9awVeru.js";
import {
  a as Ja,
  L as Ol,
  b as Bo,
  P as Po,
  c as jo,
  g as Os,
} from "../chunks/BloJ8z93.js";
import { X as La, s as cs, o as ra } from "../chunks/Bh1kG0_E.js";
import {
  b as vt,
  c as Oe,
  s as ct,
  a as Ne,
  h as wt,
} from "../chunks/DfOSvqDi.js";
import "../chunks/Dz8sSeHc.js";
import {
  I as Ns,
  s as pi,
  a as oa,
  c as Oo,
  L as No,
  n as us,
  b as Fo,
  m as fa,
  f as ha,
  d as Ho,
  e as Qo,
  g as Wa,
  r as rs,
  h as hi,
  i as Nl,
  w as Ys,
  j as fi,
  k as ya,
  A as pa,
  H as Vo,
  l as Ct,
  M as Wo,
  q as Uo,
  t as Go,
  o as Ko,
  p as Va,
  u as $o,
  v as Yo,
  x as Xo,
} from "../chunks/mIlz5070.js";
import { c as _s } from "../chunks/Crj0KilV.js";
import { k as mi } from "../chunks/BeJYRrUC.js";
import { w as Xt, d as Fl, g as Jo } from "../chunks/D1hAezf3.js";
import { _ as Hl } from "../chunks/Dp1pzeXC.js";
import { U as _a, A as ul, C as Ql } from "../chunks/5muZMSkm.js";
function er(i, t, ...o) {
  var v = new Co(i);
  uo(() => {
    const c = t() ?? null;
    v.ensure(c, c && ((d) => c(d, ...o)));
  }, ni);
}
const tr = () => performance.now(),
  qa = {
    tick: (i) => requestAnimationFrame(i),
    now: () => tr(),
    tasks: new Set(),
  };
function gi() {
  const i = qa.now();
  qa.tasks.forEach((t) => {
    t.c(i) || (qa.tasks.delete(t), t.f());
  }),
    qa.tasks.size !== 0 && qa.tick(gi);
}
function ar(i) {
  let t;
  return (
    qa.tasks.size === 0 && qa.tick(gi),
    {
      promise: new Promise((o) => {
        qa.tasks.add((t = { c: i, f: o }));
      }),
      abort() {
        qa.tasks.delete(t);
      },
    }
  );
}
function ps(i, t) {
  di(() => {
    i.dispatchEvent(new CustomEvent(t));
  });
}
function sr(i) {
  if (i === "float") return "cssFloat";
  if (i === "offset") return "cssOffset";
  if (i.startsWith("--")) return i;
  const t = i.split("-");
  return t.length === 1
    ? t[0]
    : t[0] +
        t
          .slice(1)
          .map((o) => o[0].toUpperCase() + o.slice(1))
          .join("");
}
function Vl(i) {
  const t = {},
    o = i.split(";");
  for (const v of o) {
    const [c, d] = v.split(":");
    if (!c || d === void 0) break;
    const s = sr(c.trim());
    t[s] = d.trim();
  }
  return t;
}
const lr = (i) => i;
function Ga(i, t, o, v) {
  var re;
  var c = (i & go) !== 0,
    d = (i & wo) !== 0,
    s = c && d,
    b = (i & mo) !== 0,
    g = s ? "both" : c ? "in" : "out",
    _,
    F = t.inert,
    V = t.style.overflow,
    T,
    Z;
  function M() {
    return di(
      () =>
        _ ?? (_ = o()(t, (v == null ? void 0 : v()) ?? {}, { direction: g })),
    );
  }
  var S = {
      is_global: b,
      in() {
        var I;
        if (((t.inert = F), !c)) {
          Z == null || Z.abort(),
            (I = Z == null ? void 0 : Z.reset) == null || I.call(Z);
          return;
        }
        d || T == null || T.abort(),
          (T = Xs(t, M(), Z, 1, () => {
            ps(t, "introend"),
              T == null || T.abort(),
              (T = _ = void 0),
              (t.style.overflow = V);
          }));
      },
      out(I) {
        if (!d) {
          I == null || I(), (_ = void 0);
          return;
        }
        (t.inert = !0),
          (Z = Xs(t, M(), T, 0, () => {
            ps(t, "outroend"), I == null || I();
          }));
      },
      stop: () => {
        T == null || T.abort(), Z == null || Z.abort();
      },
    },
    ae = po;
  if ((((re = ae.nodes).t ?? (re.t = [])).push(S), c && Mo)) {
    var D = b;
    if (!D) {
      for (var z = ae.parent; z && (z.f & ni) !== 0; )
        for (; (z = z.parent) && (z.f & ho) === 0; );
      D = !z || (z.f & fo) !== 0;
    }
    D &&
      vi(() => {
        ws(() => S.in());
      });
  }
}
function Xs(i, t, o, v, c) {
  var d = v === 1;
  if (_o(t)) {
    var s,
      b = !1;
    return (
      bo(() => {
        if (!b) {
          var ae = t({ direction: d ? "in" : "out" });
          s = Xs(i, ae, o, v, c);
        }
      }),
      {
        abort: () => {
          (b = !0), s == null || s.abort();
        },
        deactivate: () => s.deactivate(),
        reset: () => s.reset(),
        t: () => s.t(),
      }
    );
  }
  if (
    (o == null || o.deactivate(),
    !(t != null && t.duration) && !(t != null && t.delay))
  )
    return (
      ps(i, d ? "introstart" : "outrostart"),
      c(),
      { abort: Ha, deactivate: Ha, reset: Ha, t: () => v }
    );
  const { delay: g = 0, css: _, tick: F, easing: V = lr } = t;
  var T = [];
  if (d && o === void 0 && (F && F(0, 1), _)) {
    var Z = Vl(_(0, 1));
    T.push(Z, Z);
  }
  var M = () => 1 - v,
    S = i.animate(T, { duration: g, fill: "forwards" });
  return (
    (S.onfinish = () => {
      S.cancel(), ps(i, d ? "introstart" : "outrostart");
      var ae = (o == null ? void 0 : o.t()) ?? 1 - v;
      o == null || o.abort();
      var D = v - ae,
        z = t.duration * Math.abs(D),
        re = [];
      if (z > 0) {
        var I = !1;
        if (_)
          for (
            var W = Math.ceil(z / 16.666666666666668), ve = 0;
            ve <= W;
            ve += 1
          ) {
            var Y = ae + D * V(ve / W),
              X = Vl(_(Y, 1 - Y));
            re.push(X), I || (I = X.overflow === "hidden");
          }
        I && (i.style.overflow = "hidden"),
          (M = () => {
            var ie = S.currentTime;
            return ae + D * V(ie / z);
          }),
          F &&
            ar(() => {
              if (S.playState !== "running") return !1;
              var ie = M();
              return F(ie, 1 - ie), !0;
            });
      }
      (S = i.animate(re, { duration: z, fill: "forwards" })),
        (S.onfinish = () => {
          (M = () => v), F == null || F(v, 1 - v), c();
        });
    }),
    {
      abort: () => {
        S && (S.cancel(), (S.effect = null), (S.onfinish = Ha));
      },
      deactivate: () => {
        c = Ha;
      },
      reset: () => {
        v === 0 && (F == null || F(1, 0));
      },
      t: () => M(),
    }
  );
}
function Ka(i, t, o = t) {
  var v = new WeakSet();
  xo(i, "input", async (c) => {
    var d = c ? i.defaultValue : i.value;
    if (
      ((d = Fs(i) ? Hs(d) : d),
      o(d),
      Qa !== null && v.add(Qa),
      await ci(),
      d !== (d = t()))
    ) {
      var s = i.selectionStart,
        b = i.selectionEnd,
        g = i.value.length;
      if (((i.value = d ?? ""), b !== null)) {
        var _ = i.value.length;
        s === b && b === g && _ > g
          ? ((i.selectionStart = _), (i.selectionEnd = _))
          : ((i.selectionStart = s), (i.selectionEnd = Math.min(b, _)));
      }
    }
  }),
    ((yo && i.defaultValue !== i.value) || (ws(t) == null && i.value)) &&
      (o(Fs(i) ? Hs(i.value) : i.value), Qa !== null && v.add(Qa)),
    qo(() => {
      var c = t();
      if (i === document.activeElement) {
        var d = Qa;
        if (v.has(d)) return;
      }
      (Fs(i) && c === Hs(i.value)) ||
        (i.type === "date" && !c && !i.value) ||
        (c !== i.value && (i.value = c ?? ""));
    });
}
function Fs(i) {
  var t = i.type;
  return t === "number" || t === "range";
}
function Hs(i) {
  return i === "" ? null : +i;
}
function ir(i, t, o) {
  var v = So(i, t);
  v &&
    v.set &&
    ((i[t] = o),
    ko(() => {
      i[t] = null;
    }));
}
var Sa, Ba, Ya, ms, wi;
const gs = class gs {
  constructor(t) {
    Fa(this, ms);
    Fa(this, Sa, new WeakMap());
    Fa(this, Ba);
    Fa(this, Ya);
    js(this, Ya, t);
  }
  observe(t, o) {
    var v = xa(this, Sa).get(t) || new Set();
    return (
      v.add(o),
      xa(this, Sa).set(t, v),
      jl(this, ms, wi).call(this).observe(t, xa(this, Ya)),
      () => {
        var c = xa(this, Sa).get(t);
        c.delete(o),
          c.size === 0 && (xa(this, Sa).delete(t), xa(this, Ba).unobserve(t));
      }
    );
  }
};
(Sa = new WeakMap()),
  (Ba = new WeakMap()),
  (Ya = new WeakMap()),
  (ms = new WeakSet()),
  (wi = function () {
    return (
      xa(this, Ba) ??
      js(
        this,
        Ba,
        new ResizeObserver((t) => {
          for (var o of t) {
            gs.entries.set(o.target, o);
            for (var v of xa(this, Sa).get(o.target) || []) v(o);
          }
        }),
      )
    );
  }),
  Pl(gs, "entries", new WeakMap());
let Js = gs;
var or = new Js({ box: "border-box" });
function $a(i, t, o) {
  var v = or.observe(i, () => o(i[t]));
  vi(() => (ws(() => o(i[t])), v));
}
const rr = !1,
  w2 = Object.freeze(
    Object.defineProperty({ __proto__: null, ssr: rr }, Symbol.toStringTag, {
      value: "Module",
    }),
  );
var nr = u(
    '<div class="log-line svelte-1a5pdw0"><span class="log-text svelte-1a5pdw0"> </span> <span class="ok svelte-1a5pdw0">OK</span></div>',
  ),
  vr = u(
    '<div class="log-line active svelte-1a5pdw0"><span class="log-text svelte-1a5pdw0"> </span> <span class="cursor svelte-1a5pdw0">_</span></div>',
  ),
  dr = u("<span></span>"),
  cr = u(
    '<div data-tauri-drag-region=""><div class="scanlines svelte-1a5pdw0" aria-hidden="true"></div> <div class="vignette svelte-1a5pdw0" aria-hidden="true"></div> <div class="terminal svelte-1a5pdw0"><div class="term-header svelte-1a5pdw0"><img src="/logo.svg" alt="" class="term-logo svelte-1a5pdw0"/></div> <div class="term-log svelte-1a5pdw0"><!> <!></div></div> <div class="boot-bar svelte-1a5pdw0"><div class="bar-frame svelte-1a5pdw0"><div class="bar-track svelte-1a5pdw0"></div></div> <span> </span></div> <div>Acesso liberado</div></div>',
  );
function Wl(i, t) {
  Me(t, !0);
  let o = R(t, "onDone", 3, () => {}),
    v = R(t, "onAuthFail", 3, () => {}),
    c = R(t, "onServerOffline", 3, (L) => {}),
    d = R(t, "isReload", 3, !1),
    s = oe(0),
    b = oe("Conectando ao cliente..."),
    g = oe(!1),
    _ = oe(!1);
  const F = [
      { pct: 15, msg: "Conectando ao cliente...", delay: 100 },
      { pct: 30, msg: "Carregando base de dados...", delay: 400 },
      { pct: 45, msg: "Iniciando módulos...", delay: 700 },
      { pct: 60, msg: "Sincronizando partidas...", delay: 1e3 },
      { pct: 75, msg: "Calibrando coach de voz...", delay: 1300 },
      { pct: 90, msg: "Verificando assinatura...", delay: 1600 },
    ],
    V = 8,
    T = 12e3,
    Z = 14;
  let M = oe(va([])),
    S = oe(""),
    ae = oe(!1),
    D = null,
    z = "";
  function re() {
    D && (clearInterval(D), (D = null)),
      z && (h(M, [...e(M), z], !0), (z = "")),
      h(ae, !0);
  }
  function I(L) {
    D && clearInterval(D), h(S, "");
    let k = 0;
    D = setInterval(() => {
      k++,
        h(S, L.slice(0, k), !0),
        k >= L.length && D && (clearInterval(D), (D = null));
    }, Z);
  }
  Gt(() => {
    const L = e(b);
    z &&
      ws(() => {
        h(M, [...e(M), z], !0);
      }),
      (z = L),
      I(L);
  }),
    dl(() => {
      D && clearInterval(D);
    });
  let W = q(() => {
    const L = Math.round((e(s) / 100) * V);
    return Array.from({ length: V }, (k, B) => B < L);
  });
  Gt(() => {
    const L = [];
    return (
      F.forEach((k) => {
        L.push(
          setTimeout(() => {
            h(s, k.pct, !0), h(b, k.msg, !0);
          }, k.delay),
        );
      }),
      d()
        ? L.push(
            setTimeout(async () => {
              let k = "";
              try {
                const B = new Promise((ee, me) =>
                  setTimeout(() => me(new Error("timeout")), T),
                );
                await Promise.race([Ve("validate_session"), B]);
              } catch (B) {
                const ee = String(B);
                if (ee.includes("unauthorized")) {
                  v()();
                  return;
                }
                k = ee;
              }
              if ((h(s, 100), k)) {
                h(b, "Servidor indisponível"), c()(k);
                return;
              }
              h(_, !0),
                re(),
                Ve("set_active_pack", {
                  pack: localStorage.getItem("absol_voice_pack") ?? "padrao",
                }),
                Ve("set_volume", {
                  volume: Number(localStorage.getItem("absol_volume") ?? "60"),
                }),
                Ve("play_welcome"),
                setTimeout(o(), 500);
            }, 1600),
          )
        : L.push(
            setTimeout(async () => {
              try {
                const k = new Promise((B, ee) =>
                  setTimeout(() => ee(new Error("timeout")), T),
                );
                await Promise.race([Ve("validate_session"), k]);
              } catch (k) {
                if (String(k).includes("unauthorized")) {
                  v()();
                  return;
                }
              }
              h(s, 100),
                h(_, !0),
                re(),
                h(g, !0),
                Ve("set_active_pack", {
                  pack: localStorage.getItem("absol_voice_pack") ?? "padrao",
                }),
                Ve("set_volume", {
                  volume: Number(localStorage.getItem("absol_volume") ?? "60"),
                }),
                Ve("play_welcome"),
                setTimeout(o(), 500);
            }, 1600),
          ),
      () => L.forEach(clearTimeout)
    );
  });
  var ve = cr();
  let Y;
  var X = r(l(ve), 4),
    ie = r(l(X), 2),
    P = l(ie);
  We(
    P,
    17,
    () => e(M),
    it,
    (L, k) => {
      var B = nr(),
        ee = l(B),
        me = l(ee, !0);
      a(ee), _t(2), a(B), w(() => x(me, e(k))), n(L, B);
    },
  );
  var ue = r(P, 2);
  {
    var E = (L) => {
      var k = vr(),
        B = l(k),
        ee = l(B, !0);
      a(B), _t(2), a(k), w(() => x(ee, e(S))), n(L, k);
    };
    K(ue, (L) => {
      e(ae) || L(E);
    });
  }
  a(ie), a(X);
  var de = r(X, 2),
    _e = l(de),
    Ee = l(_e);
  We(
    Ee,
    21,
    () => e(W),
    it,
    (L, k) => {
      var B = dr();
      let ee;
      w(
        () =>
          (ee = N(B, 1, "bar-square svelte-1a5pdw0", null, ee, {
            filled: e(k),
            done: e(s) === 100,
          })),
      ),
        n(L, B);
    },
  ),
    a(Ee),
    a(_e);
  var be = r(_e, 2);
  let Q;
  var le = l(be);
  a(be), a(de);
  var m = r(de, 2);
  let O;
  a(ve),
    w(
      (L) => {
        (Y = N(ve, 1, "loading svelte-1a5pdw0", null, Y, { exit: e(g) })),
          (Q = N(be, 1, "bar-pct svelte-1a5pdw0", null, Q, {
            done: e(s) === 100,
          })),
          x(le, `${L ?? ""}%`),
          (O = N(m, 1, "access-msg svelte-1a5pdw0", null, O, {
            visible: e(_),
          }));
      },
      [() => String(e(s)).padStart(3, "0")],
    ),
    n(i, ve),
    Ce();
}
const ur =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M336-120v-35l84-85H140q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h680q24 0 42 18t18 42v480q0 24-18 42t-42 18H540l84 85v35H336ZM140-396h680v-384H140v384Zm0 0v-384 384Z"/></svg>',
  pr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M336-120v-35l84-85H140q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h680q24 0 42 18t18 42v480q0 24-18 42t-42 18H540l84 85v35H336Z"/></svg>';
var hr = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function fr(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? pr : ur));
  var s = hr();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const mr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M297-160q-8 0-15-4t-11-11l-84-150h71l42 80h90v-30h-72l-42-80H171l-63-110q-2-4-3-7.5t-1-7.5q0-2 4-15l63-110h105l42-80h72v-30h-90l-42 80h-71l84-150q4-7 11-11t15-4h118q13 0 21.5 8.5T445-770v175h-85l-30 30h115v130h-98l-39-80h-98l-30 30h108l40 80h117v215q0 13-8.5 21.5T415-160H297Zm223.5-20.5Q500-201 500-230q0-21 11-38t29-25v-374q-18-8-29-25t-11-38q0-29 20.5-49.5T570-800q29 0 49.5 20.5T640-730q0 21-11 38t-29 25v114l100-60q-3-31 18-54t52-23q29 0 49.5 20.5T840-620q0 29-20.5 49.5T770-550q-11 0-21-3t-18-8l-108 65 116 93q7-3 15-5t16-2q29 0 49.5 20.5T840-340q0 29-20.5 49.5T770-270q-35 0-55.5-27T702-356l-102-82v146q17 8 28 24.5t11 37.5q0 29-20 49.5T570-160q-29 0-49.5-20.5Z"/></svg>',
  gr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M297-160q-8 0-15-4t-11-11l-84-150h71l42 80h90v-30h-72l-42-80H171l-63-110q-2-4-3-7.5t-1-7.5q0-2 4-15l63-110h105l42-80h72v-30h-90l-42 80h-71l84-150q4-7 11-11t15-4h118q13 0 21.5 8.5T445-770v175h-85l-30 30h115v130h-98l-39-80h-98l-30 30h108l40 80h117v215q0 13-8.5 21.5T415-160H297Zm223.5-20.5Q500-201 500-230q0-21 11-38t29-25v-374q-18-8-29-25t-11-38q0-29 20.5-49.5T570-800q29 0 49.5 20.5T640-730q0 21-11 38t-29 25v114l100-60q-3-31 18-54t52-23q29 0 49.5 20.5T840-620q0 29-20.5 49.5T770-550q-11 0-21-3t-18-8l-108 65 116 93q7-3 15-5t16-2q29 0 49.5 20.5T840-340q0 29-20.5 49.5T770-270q-35 0-55.5-27T702-356l-102-82v146q17 8 28 24.5t11 37.5q0 29-20 49.5T570-160q-29 0-49.5-20.5Z"/></svg>';
var wr = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function _r(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? gr : mr));
  var s = wr();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const br =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M560-131v-62q97-28 158.5-107.5T780-481q0-101-61-181T560-769v-62q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm420 48v-337q55 17 87.5 64T660-480q0 57-33 104t-87 64ZM420-648 307-540H180v120h127l113 109v-337Zm-94 168Z"/></svg>',
  xr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M560-131v-62q97-28 158.5-107.5T780-481q0-101-61-181T560-769v-62q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm420 48v-337q55 17 87.5 64T660-480q0 57-33 104t-87 64Z"/></svg>';
var yr = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function _i(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? xr : br));
  var s = yr();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const qr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M328-120H180q-24 0-42-18t-18-42v-300q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v300q0 24-18 42t-42 18H632v-296h148v-64q0-125.36-87.5-212.68Q605-780 480-780t-212.5 87.32Q180-605.36 180-480v64h148v296Zm-60-236h-88v176h88v-176Zm424 0v176h88v-176h-88Zm-424 0h-88 88Zm424 0h88-88Z"/></svg>',
  kr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M328-120H180q-24 0-42-18t-18-42v-300q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v300q0 24-18 42t-42 18H632v-296h148v-64q0-125-87.5-212.5T480-780q-125 0-212.5 87.5T180-480v64h148v296Z"/></svg>';
var Sr = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Tr(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? kr : qr));
  var s = Sr();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const zr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm48-60h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715-480q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538-708l-14-112h-88l-14 112q-34 7-63.5 24T306-642l-106-46-40 72 94 69q-4 17-6.5 33.5T245-480q0 17 2.5 33.5T254-413l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Zm44-210q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-130Z"/></svg>',
  Mr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z"/></svg>';
var Cr = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Er(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Mr : zr));
  var s = Cr();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Ar =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M660-160v-280h140v280H660Zm-250 0v-640h140v640H410Zm-250 0v-440h140v440H160Z"/></svg>',
  Lr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M660-160v-280h140v280H660Zm-250 0v-640h140v640H410Zm-250 0v-440h140v440H160Z"/></svg>';
var Zr = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Rr(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Lr : Ar));
  var s = Zr();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Ir =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M372-523q-42-42-42-108t42-108q42-42 108-42t108 42q42 42 42 108t-42 108q-42 42-108 42t-108-42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5T731-360q31 14 50 41t19 65v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm324.5-346.5Q570-592 570-631t-25.5-64.5Q519-721 480-721t-64.5 25.5Q390-670 390-631t25.5 64.5Q441-541 480-541t64.5-25.5ZM480-631Zm0 411Z"/></svg>',
  Dr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M372-523q-42-42-42-108t42-108q42-42 108-42t108 42q42 42 42 108t-42 108q-42 42-108 42t-108-42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5T731-360q31 14 50 41t19 65v94H160Z"/></svg>';
var Br = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Pr(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Dr : Ir));
  var s = Br();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const jr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"/></svg>',
  Or =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm56-157h489L578-473 446-302l-93-127-117 152Z"/></svg>';
var Nr = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Fr(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Or : jr));
  var s = Nr();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Hr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M730-450v-60h150v60H730Zm50 290-121-90 36-48 121 90-36 48Zm-82-503-36-48 118-89 36 48-118 89ZM210-200v-160h-70q-24.75 0-42.37-17.63Q80-395.25 80-420v-120q0-24.75 17.63-42.38Q115.25-600 140-600h180l200-120v480L320-360h-50v160h-60Zm250-146v-268l-124 74H140v120h196l124 74Zm100 0v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z"/></svg>',
  Qr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M730-450v-60h150v60H730Zm50 290-121-90 36-48 121 90-36 48Zm-82-503-36-48 118-89 36 48-118 89ZM210-200v-160h-70q-25 0-42.5-17.5T80-420v-120q0-25 17.5-42.5T140-600h180l200-120v480L320-360h-50v160h-60Zm350-146v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346Z"/></svg>';
var Vr = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Wr(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Qr : Hr));
  var s = Vr();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Ur =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m363-310 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM481-29 346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614L481-29Zm0-84 108-107h151v-151l109-109-109-109v-151H589L481-849 371-740H220v151L111-480l109 109v151h150l111 107Zm0-368Z"/></svg>',
  Gr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m363-310 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM481-29 346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614L481-29Z"/></svg>';
var Kr = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function $r(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Gr : Ur));
  var s = Kr();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Yr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Z"/></svg>',
  Xr =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Z"/></svg>';
var Jr = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function en(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Xr : Yr));
  var s = Jr();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const tn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M530-410h230v-270H530v270ZM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"/></svg>',
  an =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M530-410h230v-270H530v270ZM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Z"/></svg>';
var sn = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function ln(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? an : tn));
  var s = sn();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const on =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-84 32-156.5T198-763l42 42q-47 46-73.5 108T140-480q0 141 99.5 240.5T480-140q142 0 241-99.5T820-480q0-71-26-133t-73-108l42-42q54 54 85.5 126.5T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm-30-360v-440h60v440h-60Z"/></svg>',
  rn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-84 32-156.5T198-763l42 42q-47 46-73.5 108T140-480q0 141 99.5 240.5T480-140q142 0 241-99.5T820-480q0-71-26-133t-73-108l42-42q54 54 85.5 126.5T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm-30-360v-440h60v440h-60Z"/></svg>';
var nn = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function vn(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? rn : on));
  var s = nn();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const dn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M240-120v-60h481v60H240Z"/></svg>',
  cn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M240-120v-60h481v60H240Z"/></svg>';
var un = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function pn(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? cn : dn));
  var s = un();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const hn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M796-121 533-384q-30 26-70 40.5T378-329q-108 0-183-75t-75-181q0-106 75-181t182-75q106 0 180.5 75T632-585q0 43-14 83t-42 75l264 262-44 44ZM377-389q81 0 138-57.5T572-585q0-81-57-138.5T377-781q-82 0-139.5 57.5T180-585q0 81 57.5 138.5T377-389Z"/></svg>',
  fn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M796-121 533-384q-30 26-70 40.5T378-329q-108 0-183-75t-75-181q0-106 75-181t182-75q106 0 180.5 75T632-585q0 43-14 83t-42 75l264 262-44 44ZM377-389q81 0 138-57.5T572-585q0-81-57-138.5T377-781q-82 0-139.5 57.5T180-585q0 81 57.5 138.5T377-389Z"/></svg>';
var mn = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function bi(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? fn : hn));
  var s = mn();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const gn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z"/></svg>',
  wn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z"/></svg>';
var _n = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function bn(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? wn : gn));
  var s = _n();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const xn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M504-344q10-10 10-24t-10-24q-10-10-24-10t-24 10q-10 10-10 24t10 24q10 10 24 10t24-10Zm-54-124h60v-207h-60v207Zm30 387q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z"/></svg>',
  yn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M504-344q10-10 10-24t-10-24q-10-10-24-10t-24 10q-10 10-10 24t10 24q10 10 24 10t24-10Zm-54-124h60v-207h-60v207Zm30 387q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Z"/></svg>';
var qn = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function kn(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? yn : xn));
  var s = qn();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Sn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z"/></svg>',
  Tn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z"/></svg>';
var zn = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function xi(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Tn : Sn));
  var s = zn();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Mn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M453-280h60v-240h-60v240Zm50.5-323.2q9.5-9.2 9.5-22.8 0-14.45-9.48-24.22-9.48-9.78-23.5-9.78t-23.52 9.78Q447-640.45 447-626q0 13.6 9.48 22.8 9.48 9.2 23.5 9.2t23.52-9.2ZM480.27-80q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg>',
  Cn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M453-280h60v-240h-60v240Zm50.5-323.2q9.5-9.2 9.5-22.8 0-14.45-9.48-24.22-9.48-9.78-23.5-9.78t-23.52 9.78Q447-640.45 447-626q0 13.6 9.48 22.8 9.48 9.2 23.5 9.2t23.52-9.2ZM480.27-80q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Z"/></svg>';
var En = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function An(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Cn : Mn));
  var s = En();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Ln =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm104-60h672L480-760 144-180Zm361.5-65.68q8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5 12.82 0 21.32-8.68ZM454-348h60v-224h-60v224Zm26-122Z"/></svg>',
  Zn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm465.5-125.68q8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5 12.82 0 21.32-8.68ZM454-348h60v-224h-60v224Z"/></svg>';
var Rn = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function In(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Zn : Ln));
  var s = Rn();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Dn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M503.5-289.48q9.5-9.48 9.5-23.5t-9.48-23.52q-9.48-9.5-23.5-9.5t-23.52 9.48q-9.5 9.48-9.5 23.5t9.48 23.52q9.48 9.5 23.5 9.5t23.52-9.48ZM453-433h60v-253h-60v253Zm27.27 353q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/></svg>',
  Bn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M503.5-289.48q9.5-9.48 9.5-23.5t-9.48-23.52q-9.48-9.5-23.5-9.5t-23.52 9.48q-9.5 9.48-9.5 23.5t9.48 23.52q9.48 9.5 23.5 9.5t23.52-9.48ZM453-433h60v-253h-60v253Zm27.27 353q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Z"/></svg>';
var Pn = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function jn(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Bn : Dn));
  var s = Pn();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const On =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M805-69 411-463q-54 13-99.5 42T232-357l-63-63q37-37 76.5-65t94.5-50L229-646q-47 23-89 54.5T63-526L0-589q36-37 77-69t84-55l-92-92 43-43 736 736-43 43Zm-388-85q-27-27-27-63t27-63q27-27 63-27t63 27q27 27 27 63t-27 63q-27 27-63 27t-63-27Zm311-203q-33-32-60-51.5T599-447L486-560q95 2 167.5 39T791-420l-63 63Zm169-169q-88-84-192.5-134T480-710q-37 0-71 4.5T352-693l-73-73q44-16 95.5-25t105.5-9q140 0 263.5 58T960-589l-63 63Z"/></svg>',
  Nn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M805-69 411-463q-54 13-99.5 42T232-357l-63-63q37-37 76.5-65t94.5-50L229-646q-47 23-89 54.5T63-526L0-589q36-37 77-69t84-55l-92-92 43-43 736 736-43 43Zm-388-85q-27-27-27-63t27-63q27-27 63-27t63 27q27 27 27 63t-27 63q-27 27-63 27t-63-27Zm311-203q-33-32-60-51.5T599-447L486-560q95 2 167.5 39T791-420l-63 63Zm169-169q-88-84-192.5-134T480-710q-37 0-71 4.5T352-693l-73-73q44-16 95.5-25t105.5-9q140 0 263.5 58T960-589l-63 63Z"/></svg>';
var Fn = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Hn(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Nn : On));
  var s = Fn();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Qn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M200-450v-60h560v60H200Z"/></svg>',
  Vn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M200-450v-60h560v60H200Z"/></svg>';
var Wn = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Un(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Vn : Qn));
  var s = Wn();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Gn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>',
  Kn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z"/></svg>';
var $n = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Yn(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Kn : Gn));
  var s = $n();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Xn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M220-80q-24.75 0-42.37-17.63Q160-115.25 160-140v-434q0-24.75 17.63-42.38Q195.25-634 220-634h70v-96q0-78.85 55.61-134.42Q401.21-920 480.11-920q78.89 0 134.39 55.58Q670-808.85 670-730v96h70q24.75 0 42.38 17.62Q800-598.75 800-574v434q0 24.75-17.62 42.37Q764.75-80 740-80H220Zm0-60h520v-434H220v434Zm314.5-162.03Q557-324.06 557-355q0-30-22.67-54.5t-54.5-24.5q-31.83 0-54.33 24.5t-22.5 55q0 30.5 22.67 52.5t54.5 22q31.83 0 54.33-22.03ZM350-634h260v-96q0-54.17-37.88-92.08-37.88-37.92-92-37.92T388-822.08q-38 37.91-38 92.08v96ZM220-140v-434 434Z"/></svg>',
  Jn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M220-80q-24.75 0-42.37-17.63Q160-115.25 160-140v-434q0-24.75 17.63-42.38Q195.25-634 220-634h70v-96q0-78.85 55.61-134.42Q401.21-920 480.11-920q78.89 0 134.39 55.58Q670-808.85 670-730v96h70q24.75 0 42.38 17.62Q800-598.75 800-574v434q0 24.75-17.62 42.37Q764.75-80 740-80H220Zm314.5-222.03Q557-324.06 557-355q0-30-22.67-54.5t-54.5-24.5q-31.83 0-54.33 24.5t-22.5 55q0 30.5 22.67 52.5t54.5 22q31.83 0 54.33-22.03ZM350-634h260v-96q0-54.17-37.88-92.08-37.88-37.92-92-37.92T388-822.08q-38 37.91-38 92.08v96Z"/></svg>';
var ev = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function ns(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Jn : Xn));
  var s = ev();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const tv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/></svg>',
  av =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/></svg>';
var sv = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Ea(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? av : tv));
  var s = sv();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const lv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z"/></svg>',
  iv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z"/></svg>';
var ov = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function yi(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? iv : lv));
  var s = ov();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const rv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg>',
  nv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg>';
var vv = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function qi(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? nv : rv));
  var s = vv();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const dv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M377-377v-205h205v205H377Zm60-60h85v-85h-85v85Zm-77 317v-80H260q-24 0-42-18t-18-42v-100h-80v-60h80v-124h-80v-60h80v-100q0-24 18-42t42-18h100v-76h60v76h124v-76h60v76h100q24 0 42 18t18 42v100h76v60h-76v124h76v60h-76v100q0 24-18 42t-42 18H604v80h-60v-80H420v80h-60Zm344-140v-444H260v444h444ZM480-480Z"/></svg>',
  cv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M377-377v-205h205v205H377Zm-17 257v-80H260q-24 0-42-18t-18-42v-100h-80v-60h80v-124h-80v-60h80v-100q0-24 18-42t42-18h100v-76h60v76h124v-76h60v76h100q24 0 42 18t18 42v100h76v60h-76v124h76v60h-76v100q0 24-18 42t-42 18H604v80h-60v-80H420v80h-60Zm344-140v-444H260v444h444Z"/></svg>';
var uv = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function pv(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? cv : dv));
  var s = uv();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const hv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M334-120v-60h86v-100H140q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 24-18 42t-42 18H540v100h86v60H334ZM140-340h680v-440H140v440Zm0 0v-440 440Z"/></svg>',
  fv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M335-120v-60h86v-100H141q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 24-18 42t-42 18H541v100h86v60H335Z"/></svg>';
var mv = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function gv(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? fv : hv));
  var s = mv();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const wv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M863-404 557-97q-9 8.5-20.25 12.75T514.25-80Q503-80 492-84.5T472-97L98-472q-8-8-13-18.96-5-10.95-5-23.04v-306q0-24.75 17.63-42.38Q115.25-880 140-880h307q12.07 0 23.39 4.87Q481.7-870.25 490-862l373 373q9.39 9 13.7 20.25 4.3 11.25 4.3 22.5t-4.5 22.75Q872-412 863-404ZM516-138l306-307-375-375H140v304l376 378ZM245-664q21 0 36.5-15.5T297-716q0-21-15.5-36.5T245-768q-21 0-36.5 15.5T193-716q0 21 15.5 36.5T245-664Zm236 185Z"/></svg>',
  _v =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M863-404 557-97q-9 8.5-20.25 12.75T514.25-80Q503-80 492-84.5T472-97L98-472q-8-8-13-18.96-5-10.95-5-23.04v-306q0-24.75 17.63-42.38Q115.25-880 140-880h307q12.07 0 23.39 4.87Q481.7-870.25 490-862l373 373q9.39 9 13.7 20.25 4.3 11.25 4.3 22.5t-4.5 22.75Q872-412 863-404ZM245-664q21 0 36.5-15.5T297-716q0-21-15.5-36.5T245-768q-21 0-36.5 15.5T193-716q0 21 15.5 36.5T245-664Z"/></svg>';
var bv = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function xv(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? _v : wv));
  var s = bv();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const yv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/></svg>',
  qv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M261-120q-24 0-42-18t-18-42v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm106-146h60v-399h-60v399Zm166 0h60v-399h-60v399Z"/></svg>';
var kv = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Sv(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? qv : yv));
  var s = kv();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Tv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M320-203v-560l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z"/></svg>',
  zv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M320-203v-560l440 280-440 280Z"/></svg>';
var Mv = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Qs(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? zv : Tv));
  var s = Mv();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Cv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M525-200v-560h235v560H525Zm-325 0v-560h235v560H200Zm385-60h115v-440H585v440Zm-325 0h115v-440H260v440Zm0-440v440-440Zm325 0v440-440Z"/></svg>',
  Ev =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M555-200v-560h175v560H555Zm-325 0v-560h175v560H230Z"/></svg>';
var Av = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Lv(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Ev : Cv));
  var s = Av();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Zv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M813-56 681-188q-28 20-60.5 34.5T553-131v-62q23-7 44.5-15.5T638-231L473-397v237L273-360H113v-240h156L49-820l43-43 764 763-43 44Zm-36-232-43-43q20-34 29.5-71.92Q773-440.85 773-481q0-103.32-60-184.66T553-769v-62q124 28 202 125.5T833-481q0 51-14 100t-42 93ZM643-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T643-422ZM473-592 369-696l104-104v208Zm-60 286v-150l-84-84H173v120h126l114 114Zm-42-192Z"/></svg>',
  Rv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M813-56 681-188q-28 20-60.5 34.5T553-131v-62q23-7 44.5-15.5T638-231L473-397v237L273-360H113v-240h156L49-820l43-43 764 763-43 44Zm-36-232-43-43q20-34 29.5-72t9.5-78q0-103-60-184.5T553-769v-62q124 28 202 125.5T833-481q0 51-14 100t-42 93ZM643-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T643-422ZM473-592 369-696l104-104v208Z"/></svg>';
var Iv = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Dv(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Rv : Zv));
  var s = Iv();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Bv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M600.5-379.5Q650-429 650-500t-49.5-120.5Q551-670 480-670t-120.5 49.5Q310-571 310-500t49.5 120.5Q409-330 480-330t120.5-49.5Zm-200-41Q368-453 368-500t32.5-79.5Q433-612 480-612t79.5 32.5Q592-547 592-500t-32.5 79.5Q527-388 480-388t-79.5-32.5ZM216-283Q98-366 40-500q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83q-146 0-264-83Zm264-217Zm222.5 174.5Q804-391 857-500q-53-109-154.5-174.5T480-740q-121 0-222.5 65.5T102-500q54 109 155.5 174.5T480-260q121 0 222.5-65.5Z"/></svg>',
  Pv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M600.5-379.5Q650-429 650-500t-49.5-120.5Q551-670 480-670t-120.5 49.5Q310-571 310-500t49.5 120.5Q409-330 480-330t120.5-49.5Zm-200-41Q368-453 368-500t32.5-79.5Q433-612 480-612t79.5 32.5Q592-547 592-500t-32.5 79.5Q527-388 480-388t-79.5-32.5ZM216-283Q98-366 40-500q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83q-146 0-264-83Z"/></svg>';
var jv = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Ov(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Pv : Bv));
  var s = jv();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Nv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m629-419-44-44q26-71-27-118t-115-24l-44-44q17-11 38-16t43-5q71 0 120.5 49.5T650-500q0 22-5.5 43.5T629-419Zm129 129-40-40q49-36 85.5-80.5T857-500q-50-111-150-175.5T490-740q-42 0-86 8t-69 19l-46-47q35-16 89.5-28T485-800q143 0 261.5 81.5T920-500q-26 64-67 117t-95 93Zm58 226L648-229q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40-500q20-52 55.5-101.5T182-696L56-822l42-43 757 757-39 44ZM223-654q-37 27-71.5 71T102-500q51 111 153.5 175.5T488-260q33 0 65-4t48-12l-64-64q-11 5-27 7.5t-30 2.5q-70 0-120-49t-50-121q0-15 2.5-30t7.5-27l-97-97Zm305 142Zm-116 58Z"/></svg>',
  Fv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M816-64 648-229q-35 14-79 21.5t-89 7.5q-146 0-265-81.5T40-500q20-52 55.5-101.5T182-696L56-822l42-43 757 757-39 44ZM480-330q14 0 30-2.5t27-7.5L320-557q-5 12-7.5 27t-2.5 30q0 72 50 121t120 49Zm278 40L629-419q10-16 15.5-37.5T650-500q0-71-49.5-120.5T480-670q-22 0-43 5t-38 16L289-760q35-16 89.5-28T485-800q143 0 261.5 81.5T920-500q-26 64-67 117t-95 93ZM585-463 443-605q29-11 60-4.5t54 28.5q23 23 32 51.5t-4 66.5Z"/></svg>';
var Hv = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Qv(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Fv : Nv));
  var s = Hv();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Vv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0 0v-600 600Z"/></svg>',
  Wv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Z"/></svg>';
var Uv = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Gv(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? Wv : Vv));
  var s = Uv();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Kv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"/></svg>',
  $v =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Z"/></svg>';
var Yv = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Xv(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? $v : Kv));
  var s = Yv();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
const Jv =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m627-287 45-45-159-160v-201h-60v225l174 181ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480-820q-140 0-240 100T140-480q0 140 100 240t240 100Z"/></svg>',
  ed =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m627-287 45-45-159-160v-201h-60v225l174 181ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Z"/></svg>';
var td = tt(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function ad(i, t) {
  Me(t, !0);
  let o = R(t, "size", 3, 20),
    v = R(t, "filled", 3, !1),
    c = R(t, "class", 3, ""),
    d = q(() => ct(v() ? ed : Jv));
  var s = td();
  vt(s, () => e(d), !0),
    a(s),
    w(() => {
      y(s, "width", o()),
        y(s, "height", o()),
        N(s, 0, dt(c())),
        Oe(s, t.color ? `color:${t.color}` : void 0);
    }),
    n(i, s),
    Ce();
}
var sd = u(
  '<div class="overlay svelte-80pxlv" role="presentation"><div class="modal svelte-80pxlv" role="dialog" aria-modal="true" tabindex="-1"><p class="desc svelte-80pxlv">Escolha como encerrar esta sessão.</p> <div class="divider svelte-80pxlv"></div> <div class="options svelte-80pxlv"><div class="opt-wrap svelte-80pxlv"><button class="opt svelte-80pxlv"><div class="opt-icon bg svelte-80pxlv"><!></div> <div class="opt-text svelte-80pxlv"><span class="opt-title svelte-80pxlv">Manter em segundo plano</span></div></button> <span class="badge svelte-80pxlv">Recomendado</span></div> <button class="opt close svelte-80pxlv"><div class="opt-icon cl svelte-80pxlv"><!></div> <div class="opt-text svelte-80pxlv"><span class="opt-title svelte-80pxlv">Encerrar o ABSOL</span></div></button></div> <div class="divider svelte-80pxlv"></div> <button class="cancel svelte-80pxlv">Cancelar</button></div></div>',
);
function ld(i, t) {
  Me(t, !0), Ja();
  let o;
  $t(() => {
    (o.style.willChange = "transform"),
      $e.fromTo(
        o,
        { scaleY: 0.85, y: -8 },
        {
          scaleY: 1,
          y: 0,
          duration: 0.32,
          ease: "back.out(1.4)",
          clearProps: "transform",
          onComplete: () => {
            o.style.willChange = "auto";
          },
        },
      );
  });
  function v(z) {
    (o.style.willChange = "transform, opacity"),
      $e.to(o, {
        opacity: 0,
        scaleY: 0.85,
        y: -8,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          (o.style.willChange = "auto"), z();
        },
      });
  }
  function c() {
    v(() => {
      Ve("quit_app"), t.onCancel();
    });
  }
  function d() {
    v(() => {
      Ve("minimize_to_tray"), t.onCancel();
    });
  }
  function s() {
    v(t.onCancel);
  }
  var b = sd(),
    g = l(b),
    _ = r(l(g), 4),
    F = l(_),
    V = l(F),
    T = l(V),
    Z = l(T);
  pn(Z, { size: 14 }),
    a(T),
    _t(2),
    a(V),
    Ne(
      V,
      (z, re) => {
        var I;
        return (I = wt) == null ? void 0 : I(z, re);
      },
      () => ({ scale: 1.05, pressScale: 0.97 }),
    ),
    _t(2),
    a(F);
  var M = r(F, 2),
    S = l(M),
    ae = l(S);
  vn(ae, { size: 14 }),
    a(S),
    _t(2),
    a(M),
    Ne(
      M,
      (z, re) => {
        var I;
        return (I = wt) == null ? void 0 : I(z, re);
      },
      () => ({ scale: 1.05, pressScale: 0.97 }),
    ),
    a(_);
  var D = r(_, 4);
  Ne(
    D,
    (z, re) => {
      var I;
      return (I = wt) == null ? void 0 : I(z, re);
    },
    () => ({ scale: 1.05, pressScale: 0.97 }),
  ),
    a(g),
    St(
      g,
      (z) => (o = z),
      () => o,
    ),
    a(b),
    pe("click", b, s),
    pe("keydown", b, () => {}),
    pe("click", g, (z) => z.stopPropagation()),
    pe("keydown", g, () => {}),
    pe("click", V, d),
    pe("click", M, c),
    pe("click", D, s),
    n(i, b),
    Ce();
}
Bt(["click", "keydown"]);
var id = u(
  '<div data-tauri-drag-region=""><span class="dot svelte-o2m3t2" aria-hidden="true"></span> <span class="label svelte-o2m3t2"> </span> <!></div>',
);
function od(i, t) {
  Me(t, !1), Xa();
  var o = ma(),
    v = Lt(o);
  {
    var c = (d) => {
      var s = id();
      let b;
      var g = r(l(s), 2),
        _ = l(g, !0);
      a(g);
      var F = r(g, 2);
      K(F, (V) => {}),
        a(s),
        w(() => {
          (b = N(s, 1, "dev-banner svelte-o2m3t2", null, b, { staging: Ns })),
            x(_, Ns ? "Staging Mode" : "Dev Mode");
        }),
        n(d, s);
    };
    K(v, (d) => {
      Ns && d(c);
    });
  }
  n(i, o), Ce();
}
Bt(["click"]);
var rd = u(
  '<div data-tauri-drag-region=""><!> <div class="controls svelte-hhath1"><button class="ctrl svelte-hhath1"><!></button> <button class="ctrl svelte-hhath1"><!></button> <button class="ctrl close-btn svelte-hhath1"><!></button></div></div>',
);
function ki(i, t) {
  Me(t, !0);
  let o = R(t, "transparent", 3, !1),
    v = R(t, "fixed", 3, !1);
  const c = Ja();
  let d = oe(!1);
  function s() {
    c.minimize();
  }
  async function b() {
    await c.toggleMaximize(), h(d, await c.isMaximized(), !0);
  }
  function g() {
    var W;
    (W = t.onCloseRequest) == null || W.call(t);
  }
  $t(() => {
    c.isMaximized().then((ve) => h(d, ve, !0));
    const W = c.onResized(() => {
      c.isMaximized().then((ve) => h(d, ve, !0));
    });
    return () => {
      W.then((ve) => ve());
    };
  });
  var _ = rd();
  let F;
  var V = l(_);
  od(V, {});
  var T = r(V, 2),
    Z = l(T),
    M = l(Z);
  Un(M, { size: 13 }), a(Z);
  var S = r(Z, 2),
    ae = l(S);
  {
    var D = (W) => {
        Xv(W, { size: 13 });
      },
      z = (W) => {
        Gv(W, { size: 13 });
      };
    K(ae, (W) => {
      e(d) ? W(D) : W(z, -1);
    });
  }
  a(S);
  var re = r(S, 2),
    I = l(re);
  La(I, { size: 13 }),
    a(re),
    a(T),
    a(_),
    w(
      () =>
        (F = N(_, 1, "titlebar svelte-hhath1", null, F, {
          transparent: o(),
          fixed: v(),
        })),
    ),
    pe("click", Z, s),
    pe("click", S, b),
    pe("click", re, g),
    n(i, _),
    Ce();
}
Bt(["click"]);
var nd = u(
  '<div class="pixel-transition svelte-gya4gr" aria-hidden="true"><canvas class="pixel-canvas svelte-gya4gr"></canvas></div>',
);
function vd(i, t) {
  Me(t, !1);
  const o = 70,
    v = 1.1,
    c = 0.17,
    d = 0.2;
  let s = To(),
    b = null,
    g = 0,
    _ = 0,
    F = !1,
    V = [],
    T = "#000";
  function Z() {
    if (!e(s)) return;
    const I = window.devicePixelRatio || 1,
      W = window.innerWidth,
      ve = window.innerHeight;
    ls(s, (e(s).width = Math.round(W * I))),
      ls(s, (e(s).height = Math.round(ve * I))),
      ls(s, (e(s).style.width = `${W}px`)),
      ls(s, (e(s).style.height = `${ve}px`)),
      (b = e(s).getContext("2d")),
      b == null || b.setTransform(I, 0, 0, I, 0, 0);
  }
  function M(I) {
    if (!e(s)) return;
    Z(), (F = I);
    const W = window.innerWidth,
      ve = window.innerHeight,
      Y = (I ? ve : W) / o || 1,
      X = Math.max(1, Math.ceil((I ? W : ve) / Y));
    (g = o),
      (_ = X),
      (V = Array.from({ length: g * _ }, () => ({ opacity: 0 }))),
      (T =
        getComputedStyle(e(s)).getPropertyValue("--active").trim() || "#000");
  }
  function S() {
    if (!b) return;
    const I = window.innerWidth,
      W = window.innerHeight;
    if ((b.clearRect(0, 0, I, W), !V.length)) return;
    b.fillStyle = T;
    const ve = (F ? W : I) / g,
      Y = (F ? I : W) / _;
    for (let X = 0; X < g; X++)
      for (let ie = 0; ie < _; ie++) {
        const P = V[X * _ + ie].opacity;
        P <= 0 ||
          ((b.globalAlpha = P),
          F
            ? b.fillRect(ie * Y, X * ve, Y + 1, ve + 1)
            : b.fillRect(X * ve, ie * Y, ve + 1, Y + 1));
      }
    b.globalAlpha = 1;
  }
  function ae(I, W) {
    const ve = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (($e.set(I, { clipPath: "inset(0% 50% 0% 50%)" }), W(), ve || !e(s)))
      return $e.set(I, { clearProps: "clipPath" }), Promise.resolve();
    M(window.innerHeight > window.innerWidth);
    const Y = (o - 1) / 2,
      X = Array.from({ length: o }, (m, O) => Math.abs(O - Y)),
      ie = [...new Set(X)].sort((m, O) => m - O),
      P = ie.length,
      ue = ie[P - 1] || 1,
      E = Math.max(0, Math.min(1, d)),
      de = Math.min(c, v * 0.5),
      Ee = Math.max(0.001, v - 2 * de) / Math.max(1, P),
      be = Array.from({ length: P }, () => []);
    X.forEach((m, O) => be[ie.indexOf(m)].push(O));
    const Q = [],
      le = $e.timeline();
    return (
      be.forEach((m, O) => {
        const L = m.flatMap((H) => {
          const U = [];
          for (let G = 0; G < _; G++) U.push(V[H * _ + G]);
          return U;
        });
        if (!L.length) {
          Q[O] = O === 0 ? 0 : Q[O - 1];
          return;
        }
        const k = de + O * Ee,
          B = Math.max(0, k - c),
          ee = Math.min(v, k + Ee),
          J = (c / L.length) * (1 - E) + c * E,
          se = Math.max(0, c - J);
        le.to(
          L,
          {
            opacity: 1,
            duration: Math.max(0.001, J),
            ease: "none",
            stagger: { amount: se, from: "random" },
          },
          B,
        ),
          le.to(
            L,
            {
              opacity: 0,
              duration: Math.max(0.001, J),
              ease: "none",
              stagger: { amount: se, from: "random" },
            },
            ee,
          ),
          (Q[O] = B + se + J);
      }),
      le.eventCallback("onUpdate", () => {
        const m = le.time();
        let O = -1;
        for (let B = 0; B < P && m >= Q[B]; B++) O = ie[B];
        const k = 50 * (1 - (O >= 0 ? Math.min(1, O / ue) : 0));
        (I.style.clipPath = `inset(0% ${k}% 0% ${k}%)`), S();
      }),
      le.set(I, { clearProps: "clipPath" }, v),
      new Promise((m) => {
        le.eventCallback("onComplete", () => {
          b == null || b.clearRect(0, 0, window.innerWidth, window.innerHeight),
            (V = []),
            m();
        });
      })
    );
  }
  var D = { revealFromCenter: ae };
  Xa();
  var z = nd(),
    re = l(z);
  return (
    St(
      re,
      (I) => h(s, I),
      () => e(s),
    ),
    a(z),
    n(i, z),
    ir(t, "revealFromCenter", ae),
    Ce(D)
  );
}
function dd() {
  const { subscribe: i, update: t } = Xt([]);
  function o(d) {
    const s = crypto.randomUUID();
    return (
      t((b) =>
        b.some((g) => g.type === d.type && g.message === d.message)
          ? b
          : [...b, { ...d, id: s }],
      ),
      s
    );
  }
  function v(d) {
    t((s) => s.filter((b) => b.id !== d));
  }
  function c() {
    t(() => []);
  }
  return { subscribe: i, push: o, dismiss: v, clear: c };
}
const Aa = dd();
function cd(i) {
  return --i * i * ((1.70158 + 1) * i + 1.70158) + 1;
}
function ud(i) {
  return i * i;
}
var pd = u('<span class="queue-badge svelte-1lxai0f"> </span>'),
  hd = u(
    '<button class="action-btn svelte-1lxai0f"><span class="action-label svelte-1lxai0f"> </span></button>',
  ),
  fd = u('<div class="bottom svelte-1lxai0f"><!> <!></div>'),
  md = u(
    '<div class="banner svelte-1lxai0f" role="alert"><div class="top svelte-1lxai0f"><!> <span class="msg svelte-1lxai0f"> </span> <button class="dismiss-btn svelte-1lxai0f" aria-label="Fechar"><!></button></div> <!></div>',
  ),
  gd = u('<div class="notify-stack svelte-1lxai0f"><!></div>');
function wd(i, t) {
  Me(t, !0);
  const o = () => kt(Aa, "$notify", v),
    [v, c] = ta(),
    d = { update: xi, info: An, warning: In, error: jn };
  let s = q(o),
    b = q(() => e(s)[0]),
    g = q(() => Math.max(e(s).length - 1, 0));
  function _(M, { duration: S, easing: ae }) {
    return {
      duration: S,
      easing: ae,
      css: (D) => {
        const z = 0.85 + 0.15 * D,
          re = 8 * (1 - D);
        return `opacity: ${D}; transform: scaleX(${z}) translateX(${re}px);`;
      },
    };
  }
  function F(M) {
    Aa.dismiss(M.id),
      M.serverId !== void 0 &&
        Ve("mark_notification_read", { id: M.serverId }).catch((S) => {});
  }
  var V = ma(),
    T = Lt(V);
  {
    var Z = (M) => {
      var S = gd(),
        ae = l(S);
      mi(
        ae,
        () => e(b).id,
        (D) => {
          var z = md(),
            re = l(z),
            I = l(re);
          _s(
            I,
            () => d[e(b).type],
            (ue, E) => {
              E(ue, { size: 13, filled: !0 });
            },
          );
          var W = r(I, 2),
            ve = l(W, !0);
          a(W);
          var Y = r(W, 2),
            X = l(Y);
          La(X, { size: 18, filled: !0 }), a(Y), a(re);
          var ie = r(re, 2);
          {
            var P = (ue) => {
              var E = fd(),
                de = l(E);
              {
                var _e = (Q) => {
                  var le = pd(),
                    m = l(le);
                  a(le), w(() => x(m, `+${e(g) ?? ""}`)), n(Q, le);
                };
                K(de, (Q) => {
                  e(g) > 0 && Q(_e);
                });
              }
              var Ee = r(de, 2);
              {
                var be = (Q) => {
                  var le = hd(),
                    m = l(le),
                    O = l(m, !0);
                  a(m),
                    a(le),
                    w(() => {
                      y(le, "title", e(b).action.label),
                        x(O, e(b).action.label);
                    }),
                    pe("click", le, () => {
                      e(b).action.fn(), F(e(b));
                    }),
                    n(Q, le);
                };
                K(Ee, (Q) => {
                  e(b).action && Q(be);
                });
              }
              a(E), n(ue, E);
            };
            K(ie, (ue) => {
              (e(g) > 0 || e(b).action) && ue(P);
            });
          }
          a(z),
            w(() => x(ve, e(b).message)),
            pe("click", Y, () => F(e(b))),
            Ga(
              1,
              z,
              () => _,
              () => ({ duration: 320, easing: cd }),
            ),
            Ga(
              2,
              z,
              () => _,
              () => ({ duration: 220, easing: ud }),
            ),
            n(D, z);
        },
      ),
        a(S),
        n(M, S);
    };
    K(T, (M) => {
      e(b) && M(Z);
    });
  }
  n(i, V), Ce(), c();
}
Bt(["click"]);
var _d = u(
  '<button role="switch"><span class="knob svelte-d39fdc"></span></button>',
);
function Da(i, t) {
  Me(t, !0);
  let o = R(t, "checked", 15, !1),
    v = R(t, "disabled", 3, !1),
    c = oe(!1);
  function d() {
    var g;
    v() ||
      (o(!o()),
      h(c, !0),
      setTimeout(() => h(c, !1), 300),
      (g = t.onchange) == null || g.call(t, o()));
  }
  var s = _d();
  let b;
  Ne(
    s,
    (g, _) => {
      var F;
      return (F = wt) == null ? void 0 : F(g, _);
    },
    () => ({ scale: 1.07, pressScale: 0.95 }),
  ),
    w(() => {
      (b = N(s, 1, "toggle svelte-d39fdc", null, b, {
        on: o(),
        pop: e(c),
        disabled: v(),
      })),
        (s.disabled = v()),
        y(s, "aria-checked", o());
    }),
    pe("click", s, d),
    n(i, s),
    Ce();
}
Bt(["click"]);
const hs = "!<>-_\\/[]{}—=+*^?#";
function bd(i, t) {
  return (
    i.slice(0, t) +
    Array.from(
      { length: i.length - t },
      () => hs[Math.floor(Math.random() * hs.length)],
    ).join("")
  );
}
function Tt(i, t = {}) {
  const {
      color: o = "var(--lime)",
      duration: v = 1,
      revealOnMount: c = !0,
    } = t,
    d = i.textContent ?? "",
    s = d.length;
  i.textContent = "";
  const b = Array.from({ length: s }, (T, Z) => {
    const M = document.createElement("span");
    return (M.textContent = d[Z]), i.appendChild(M), M;
  });
  function g() {
    for (let T = 0; T < s; T++)
      (b[T].textContent = d[T]), (b[T].style.color = "");
  }
  let _ = null;
  function F() {
    _ == null || _.kill();
    for (let M = 0; M < s; M++) b[M].style.color = o;
    let T = 0;
    const Z = { t: 0 };
    _ = $e.to(Z, {
      t: 1,
      duration: v,
      ease: "power2.inOut",
      onUpdate() {
        const M = Math.floor(Z.t * s);
        for (let S = T; S < M; S++)
          (b[S].textContent = d[S]), (b[S].style.color = "");
        T = M;
        for (let S = T; S < s; S++)
          b[S].textContent = hs[Math.floor(Math.random() * hs.length)];
      },
      onComplete() {
        g(), (_ = null);
      },
    });
  }
  function V() {
    _ == null || _.kill(), (_ = null), g();
  }
  return (
    c ? F() : g(),
    i.addEventListener("mouseenter", F),
    i.addEventListener("mouseleave", V),
    {
      destroy() {
        _ == null || _.kill(),
          i.removeEventListener("mouseenter", F),
          i.removeEventListener("mouseleave", V);
      },
    }
  );
}
function Vs(i, t = document.body) {
  const o = typeof t == "string" ? document.querySelector(t) : t;
  return (
    o == null || o.appendChild(i),
    {
      destroy() {
        i.remove();
      },
    }
  );
}
const Si = "absol_modules_state",
  Ws = [
    { id: "champ_select", title: "Seleção de Campeão", enabled: !0 },
    { id: "minimap", title: "Minimapa", enabled: !0 },
    { id: "jungle", title: "Jungle Inimigo", enabled: !0 },
    { id: "kill", title: "Kill / Morte", enabled: !0 },
    { id: "ward", title: "Ward Bot", enabled: !0 },
    { id: "tips", title: "Dicas e Fofoca", enabled: !0 },
    { id: "objectives", title: "Objetivos", enabled: !0 },
    { id: "build", title: "Build", enabled: !0 },
    { id: "role", title: "Coaching Role", enabled: !0 },
    { id: "mental", title: "Mental", enabled: !0 },
    { id: "auto_runes", title: "Runas Automáticas", enabled: !0 },
  ];
function xd() {
  if (typeof localStorage > "u") return Ws;
  try {
    const i = localStorage.getItem(Si);
    return i ? JSON.parse(i) : Ws;
  } catch {
    return Ws;
  }
}
function yd() {
  const { subscribe: i, set: t, update: o } = Xt(xd());
  return {
    subscribe: i,
    save(v) {
      localStorage.setItem(Si, JSON.stringify(v)), t(v);
    },
  };
}
const el = yd(),
  Ti = {
    champ_select: "free",
    minimap: "free",
    jungle: "free",
    kill: "free",
    ward: "free",
    tips: "free",
    objectives: "free",
    build: "free",
    role: "free",
    mental: "free",
    auto_runes: "free",
    opcionais: "soon",
  };
function vs(i, t) {
  const o = Ti[i] ?? "soon";
  return o === "soon" ? !1 : o === "pro" ? t === "PRO" : !0;
}
var qd = u(
    '<button type="button"><img alt="" loading="lazy" decoding="async" class="svelte-7i0ju7"/> <span class="thumb-play svelte-7i0ju7"><!></span></button>',
  ),
  kd = u(
    '<div><div class="mod-balloon-wrap svelte-7i0ju7" aria-hidden="true"><div class="mod-balloon svelte-7i0ju7"><span class="mod-balloon-dot svelte-7i0ju7"></span> <span class="mod-balloon-dot svelte-7i0ju7"></span> <span class="mod-balloon-dot svelte-7i0ju7"></span></div> <span class="mod-balloon-tail svelte-7i0ju7"></span></div> <span class="mod-no-video svelte-7i0ju7">Prévia ainda não disponível</span></div>',
  ),
  Sd = u('<span class="badge soon-badge svelte-7i0ju7">Em breve</span>'),
  Td = u('<span class="badge pro-badge svelte-7i0ju7"><!> PRO</span>'),
  zd = u('<span class="badge pro-badge svelte-7i0ju7"><!> INDISPONÍVEL</span>'),
  Md = u('<span class="badge pro-badge svelte-7i0ju7"><!> ESGOTADO</span>'),
  Cd = u(
    '<div><!> <div class="card-body svelte-7i0ju7"><div class="card-body-top svelte-7i0ju7"><h3 class="svelte-7i0ju7"> </h3> <div class="card-top-right svelte-7i0ju7"><!></div></div> <p class="svelte-7i0ju7"> </p></div></div>',
  ),
  Ed = u('<img alt="" class="video-loading-thumb svelte-7i0ju7"/>'),
  Ad = u('<div class="video-spinner svelte-7i0ju7"></div>'),
  Ld = u(
    '<iframe title="Demonstração do módulo" allow="autoplay; fullscreen" frameborder="0" class="svelte-7i0ju7"></iframe>',
  ),
  Zd = u(
    '<div class="video-vol-segment svelte-7i0ju7"><div class="video-vol-segment-fill svelte-7i0ju7"></div></div>',
  ),
  Rd = u(
    '<div class="video-overlay svelte-7i0ju7" role="presentation"><div class="video-modal svelte-7i0ju7" role="dialog" aria-modal="true" tabindex="-1"><button type="button" class="video-close svelte-7i0ju7" aria-label="Fechar vídeo"><!></button> <div class="video-frame svelte-7i0ju7"><div><!> <!></div> <!> <div class="video-click-area svelte-7i0ju7" role="presentation"></div></div> <div class="video-controls svelte-7i0ju7"><button type="button" class="video-play-btn svelte-7i0ju7"><!></button> <div class="video-scrubber svelte-7i0ju7" role="presentation"><div class="video-scrubber-fill svelte-7i0ju7"></div></div> <span class="video-time svelte-7i0ju7"> </span> <button type="button" class="video-vol-btn svelte-7i0ju7" aria-label="Volume"><!></button> <div class="video-vol-wrap svelte-7i0ju7"><input type="range" class="video-vol-input svelte-7i0ju7" min="0" max="1" step="0.05" aria-label="Volume"/> <div class="video-vol-track svelte-7i0ju7"></div></div> <span> </span></div></div></div>',
  ),
  Id = u(
    '<div class="page svelte-7i0ju7"><header class="page-header svelte-7i0ju7"><div><h1 class="svelte-7i0ju7">> Coaching</h1> <p class="svelte-7i0ju7">Sobre o que o ABSOL fala com você durante a partida</p></div> <div class="count-badge svelte-7i0ju7"><span class="count-label svelte-7i0ju7">ATIVOS</span> <span class="count-value svelte-7i0ju7"><span class="count-slider svelte-7i0ju7"><span class="count-num svelte-7i0ju7"></span></span> </span></div></header> <div class="info-note svelte-7i0ju7"><div class="info-note-pixels svelte-7i0ju7" aria-hidden="true"><span class="px-solid svelte-7i0ju7"></span> <span class="px-fade px-fade-a svelte-7i0ju7"></span> <span class="px-fade px-fade-b svelte-7i0ju7"></span> <span class="px-fade px-fade-c svelte-7i0ju7"></span> <span class="px-fade px-fade-d svelte-7i0ju7"></span></div> <div class="info-note-body svelte-7i0ju7"><span class="info-note-icon svelte-7i0ju7">!</span> <span class="info-note-text">O Modo Streamer do LoL limita dados do cliente e pode prejudicar a IA. Recomendamos mantê-lo desativado.</span></div> <div class="info-note-pixels flipped svelte-7i0ju7" aria-hidden="true"><span class="px-solid svelte-7i0ju7"></span> <span class="px-fade px-fade-a svelte-7i0ju7"></span> <span class="px-fade px-fade-b svelte-7i0ju7"></span> <span class="px-fade px-fade-c svelte-7i0ju7"></span> <span class="px-fade px-fade-d svelte-7i0ju7"></span></div></div> <div class="grid svelte-7i0ju7"></div></div> <!>',
    1,
  );
function Dd(i, t) {
  Me(t, !0);
  const o = () => kt(el, "$modulesStore", s),
    v = () => kt(oa, "$auth", s),
    c = () => kt(pi, "$serverReachable", s),
    d = () => kt(Oo, "$coachPaused", s),
    [s, b] = ta();
  async function g(j) {
    try {
      const { invoke: $ } = await Hl(
        async () => {
          const { invoke: Ze } = await import("../chunks/miXHpl0f.js").then(
            (ye) => ye.f,
          );
          return { invoke: Ze };
        },
        __vite__mapDeps([0, 1]),
        import.meta.url,
      );
      await $("set_modules", { ids: j });
    } catch {}
  }
  function _(j) {
    return `https://player.vimeo.com/video/${j}?badge=0&autopause=0&player_id=0&app_id=58479`;
  }
  const F = [
    {
      id: "champ_select",
      title: "Seleção de Campeão",
      desc: "Coaching via cliente: ban sugerido, pick, matchup, arsenal de builds e composição de time",
      enabled: !0,
      video: _("1198477480"),
      thumb: "/thumbs/ChampionSelect.webp",
    },
    {
      id: "auto_runes",
      title: "Runas Automáticas",
      desc: "Importa automaticamente a página de runas do meta ao confirmar campeão",
      enabled: !0,
      video: null,
      thumb: null,
    },
    {
      id: "minimap",
      title: "Minimapa",
      desc: "Avisa para olhar o minimapa durante a partida",
      enabled: !0,
      video: _("1198486872"),
      thumb: "/thumbs/Mapa.webp",
    },
    {
      id: "jungle",
      title: "Jungle Inimigo",
      desc: "Alerta quando o jungler inimigo aparece no mapa",
      enabled: !0,
      video: _("1198478152"),
      thumb: "/thumbs/JungleInimigo.webp",
    },
    {
      id: "kill",
      title: "Kill / Morte",
      desc: "Reage a kills, mortes, multikills e inimigos fedados",
      enabled: !0,
      video: _("1198490078"),
      thumb: "/thumbs/KillMorte.webp",
    },
    {
      id: "ward",
      title: "Ward Bot",
      desc: "Trinket, colocar ward e elogia limpeza de visão",
      enabled: !0,
      video: _("1198476827"),
      thumb: "/thumbs/Ward.webp",
    },
    {
      id: "tips",
      title: "Dicas e Fofoca",
      desc: "Dicas de campeão, CS coaching, farm e level spikes",
      enabled: !0,
      video: _("1198474880"),
      thumb: "/thumbs/Fofoca.webp",
    },
    {
      id: "objectives",
      title: "Objetivos",
      desc: "Dragon, Baron, Herald, torres e fim de jogo",
      enabled: !0,
      video: _("1198476992"),
      thumb: "/thumbs/Objetivos.webp",
    },
    {
      id: "build",
      title: "Build",
      desc: "Progresso de build, itens recomendados e anti-heal",
      enabled: !0,
      video: _("1198477638"),
      thumb: "/thumbs/Build.webp",
    },
    {
      id: "role",
      title: "Coaching Role",
      desc: "Dicas para jungle, top, mid, ADC e suporte",
      enabled: !0,
      video: null,
      thumb: null,
    },
    {
      id: "mental",
      title: "Mental",
      desc: "Motivação, late game e vantagem numérica",
      enabled: !0,
      video: _("1198493330"),
      thumb: "/thumbs/Mental.webp",
    },
  ];
  let V = oe(null),
    T = oe(null),
    Z,
    M,
    S = oe(!1),
    ae = oe(!1),
    D = oe(null),
    z = null,
    re = oe(!1),
    I = oe(!1),
    W = oe(0),
    ve = oe(0),
    Y = oe(0),
    X = oe(!1),
    ie = oe(0.8),
    P = oe(!1);
  const ue = 10;
  let E = q(() => {
    const j = (e(X) ? 0 : e(ie)) * 100;
    return Array.from({ length: ue }, ($, Ze) => {
      const ye = (Ze / ue) * 100,
        he = ((Ze + 1) / ue) * 100;
      return j >= he ? 1 : j <= ye ? 0 : (j - ye) / (he - ye);
    });
  });
  function de(j, $, Ze, ye) {
    j &&
      ((L = ye ? ye.currentTarget.getBoundingClientRect() : null),
      h(D, Ze, !0),
      h(re, !1),
      h(I, !1),
      h(ae, !1),
      h(W, 0),
      h(ve, 0),
      h(Y, 0),
      h(X, !1),
      h(V, j, !0),
      h(T, $, !0));
  }
  function _e() {
    if (e(S)) return;
    if (
      (z == null || z.pause(),
      M && $e.to(M, { rotate: 180, duration: 0.25, ease: "power2.out" }),
      !Z || !L)
    ) {
      h(V, null), h(T, null), h(D, null);
      return;
    }
    h(S, !0);
    const j = L,
      $ = Z.getBoundingClientRect(),
      Ze = j.width / $.width,
      ye = j.height / $.height,
      he = j.left + j.width / 2 - ($.left + $.width / 2),
      te = j.top + j.height / 2 - ($.top + $.height / 2);
    (Z.style.willChange = "transform"),
      $e.to(Z, {
        x: he,
        y: te,
        scaleX: Ze,
        scaleY: ye,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          Z && (Z.style.willChange = "auto"),
            h(S, !1),
            h(V, null),
            h(T, null),
            h(D, null);
        },
      });
  }
  function Ee(j) {
    let $ = null,
      Ze = !1;
    return (
      Hl(
        async () => {
          const { default: ye } = await import("../chunks/DMsBp5h-.js");
          return { default: ye };
        },
        [],
        import.meta.url,
      ).then(({ default: ye }) => {
        Ze ||
          (($ = new ye(j)),
          (z = $),
          $.on("play", () => {
            h(re, !0),
              setTimeout(() => {
                h(I, !0);
              }, 300);
          }),
          $.on("pause", () => {
            h(re, !1);
          }),
          $.on("ended", () => {
            h(re, !1);
          }),
          $.on("timeupdate", ({ seconds: he, duration: te }) => {
            h(Y, he, !0), h(ve, te, !0), h(W, te > 0 ? he / te : 0, !0);
          }),
          $.setVolume(e(ie)),
          $.play().catch(() => {}));
      }),
      {
        destroy() {
          (Ze = !0), $ == null || $.destroy(), (z = null);
        },
      }
    );
  }
  function be() {
    z && (e(re) ? z.pause() : z.play().catch(() => {}));
  }
  function Q(j) {
    z == null || z.setCurrentTime(j * e(ve));
  }
  function le() {
    h(X, !e(X)), z == null || z.setVolume(e(X) ? 0 : e(ie));
  }
  function m(j) {
    h(ie, j, !0), h(X, j === 0), z == null || z.setVolume(j);
  }
  function O(j) {
    return `${Math.floor(j / 60)}:${Math.floor(j % 60)
      .toString()
      .padStart(2, "0")}`;
  }
  let L = null;
  function k(j) {
    const $ = L;
    if (!$) return;
    const Ze = j.getBoundingClientRect(),
      ye = $.width / Ze.width,
      he = $.height / Ze.height,
      te = $.left + $.width / 2 - (Ze.left + Ze.width / 2),
      ne = $.top + $.height / 2 - (Ze.top + Ze.height / 2);
    (j.style.willChange = "transform"),
      $e.fromTo(
        j,
        {
          x: te,
          y: ne,
          scaleX: ye,
          scaleY: he,
          transformOrigin: "center center",
        },
        {
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          duration: 0.45,
          ease: "power3.out",
          onComplete: () => {
            (j.style.willChange = "auto"), h(ae, !0);
          },
        },
      );
  }
  const B = o();
  let ee = va(
      F.map((j) => {
        const $ = B.find((Ze) => Ze.id === j.id);
        return { ...j, enabled: $ ? $.enabled : j.enabled };
      }),
    ),
    me = q(() => {
      var j;
      return ((j = v()) == null ? void 0 : j.user.plan) ?? "FREE";
    }),
    J = q(() => {
      var j, $;
      return (
        ((j = v()) == null ? void 0 : j.user.subscriptionStatus) === "active" ||
        (($ = v()) == null ? void 0 : $.user.subscriptionStatus) === "cancelled"
      );
    }),
    se = q(() => {
      var j;
      return (
        (((j = v()) == null ? void 0 : j.user.freeDailyRemaining) ?? 0) > 0 &&
        c()
      );
    }),
    H = q(() => !d() && (e(J) || e(se))),
    U = q(() => ee.filter((j) => j.enabled && vs(j.id, e(me)) && e(H)).length),
    G,
    Pe = !1;
  Gt(() => {
    G &&
      (Pe
        ? cs(G, String(e(U)), { scrambleColor: "var(--accent)" })
        : (G.textContent = String(e(U)))),
      (Pe = !0);
  });
  let we;
  $t(() => {
    if (we) {
      const j = we.querySelectorAll(".card");
      $e.fromTo(
        j,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            j.forEach(($) => {
              $.style.willChange = "transform";
            });
          },
        },
      );
    }
  }),
    Gt(() => {
      el.save(
        ee.map(({ id: $, title: Ze, enabled: ye }) => ({
          id: $,
          title: Ze,
          enabled: ye,
        })),
      );
      const j = ee.filter(($) => $.enabled && vs($.id, e(me))).map(($) => $.id);
      g(j);
    });
  var Fe = Id(),
    De = Lt(Fe),
    ge = l(De),
    qe = l(ge),
    je = l(qe);
  Ne(
    je,
    (j, $) => (Tt == null ? void 0 : Tt(j, $)),
    () => ({ color: "var(--lime)" }),
  ),
    _t(2),
    a(qe);
  var Ie = r(qe, 2),
    Xe = r(l(Ie), 2),
    Ye = l(Xe),
    rt = l(Ye);
  St(
    rt,
    (j) => (G = j),
    () => G,
  ),
    a(Ye);
  var ft = r(Ye);
  a(Xe), a(Ie), a(ge);
  var Je = r(ge, 4);
  We(
    Je,
    21,
    () => ee,
    it,
    (j, $, Ze) => {
      const ye = q(() => Ti[e($).id] ?? "soon"),
        he = q(() => vs(e($).id, e(me))),
        te = q(() => e(he) && e(H));
      var ne = Cd();
      let Ue;
      var C = l(ne);
      {
        var He = (ze) => {
            var xe = qd();
            let st;
            var Rt = l(xe),
              Qt = r(Rt, 2),
              Pt = l(Qt);
            Qs(Pt, { size: 24, filled: !0 }),
              a(Qt),
              a(xe),
              w(() => {
                (st = N(
                  xe,
                  1,
                  "mod-thumb mod-thumb-btn svelte-7i0ju7",
                  null,
                  st,
                  {
                    off: !e($).enabled || !e(te),
                    "thumb-hidden": e(D) === e($).id,
                  },
                )),
                  y(xe, "aria-label", `Ver demonstração de ${e($).title}`),
                  y(Rt, "src", e($).thumb);
              }),
              pe("click", xe, (yt) => de(e($).video, e($).thumb, e($).id, yt)),
              n(ze, xe);
          },
          at = (ze) => {
            var xe = kd();
            let st;
            w(
              () =>
                (st = N(xe, 1, "mod-icon-wrap svelte-7i0ju7", null, st, {
                  off: !e($).enabled || !e(te),
                })),
            ),
              n(ze, xe);
          };
        K(C, (ze) => {
          e($).video && e($).thumb ? ze(He) : ze(at, -1);
        });
      }
      var Et = r(C, 2),
        fe = l(Et),
        Se = l(fe),
        Le = l(Se, !0);
      a(Se);
      var ot = r(Se, 2),
        ut = l(ot);
      {
        var Te = (ze) => {
            var xe = Sd();
            n(ze, xe);
          },
          Qe = (ze) => {
            var xe = Td(),
              st = l(xe);
            ns(st, { size: 9 }), _t(), a(xe), n(ze, xe);
          },
          et = (ze) => {
            var xe = zd(),
              st = l(xe);
            ns(st, { size: 9 }), _t(), a(xe), n(ze, xe);
          },
          zt = (ze) => {
            var xe = Md(),
              st = l(xe);
            ns(st, { size: 9 }), _t(), a(xe), n(ze, xe);
          },
          bt = (ze) => {
            Da(ze, {
              get checked() {
                return e($).enabled;
              },
              set checked(xe) {
                e($).enabled = xe;
              },
            });
          };
        K(ut, (ze) => {
          e(ye) === "soon"
            ? ze(Te)
            : e(he)
              ? c()
                ? e(H)
                  ? ze(bt, -1)
                  : ze(zt, 3)
                : ze(et, 2)
              : ze(Qe, 1);
        });
      }
      a(ot), a(fe);
      var xt = r(fe, 2),
        ht = l(xt, !0);
      a(xt),
        a(Et),
        a(ne),
        Ne(
          ne,
          (ze, xe) => {
            var st;
            return (st = wt) == null ? void 0 : st(ze, xe);
          },
          () => ({ scale: 1.05 }),
        ),
        w(() => {
          (Ue = N(ne, 1, "card svelte-7i0ju7", null, Ue, {
            off: !e($).enabled || !e(te),
            locked: !e(te) && (e(ye) === "pro" || !e(H)),
            soon: e(ye) === "soon",
          })),
            x(Le, e($).title),
            x(ht, e($).desc);
        }),
        n(j, ne);
    },
  ),
    a(Je),
    St(
      Je,
      (j) => (we = j),
      () => we,
    ),
    a(De);
  var ce = r(De, 2);
  {
    var ke = (j) => {
      var $ = Rd(),
        Ze = l($),
        ye = l(Ze),
        he = l(ye);
      La(he, { size: 16 }),
        a(ye),
        St(
          ye,
          (Be) => (M = Be),
          () => M,
        ),
        Ne(
          ye,
          (Be, It) => {
            var Kt;
            return (Kt = wt) == null ? void 0 : Kt(Be, It);
          },
          () => ({ scale: 1.1, pressScale: 0.9 }),
        );
      var te = r(ye, 2),
        ne = l(te);
      let Ue;
      var C = l(ne);
      {
        var He = (Be) => {
          var It = Ed();
          w(() => y(It, "src", e(T))), n(Be, It);
        };
        K(C, (Be) => {
          e(T) && !e(I) && Be(He);
        });
      }
      var at = r(C, 2);
      {
        var Et = (Be) => {
            var It = Ad();
            n(Be, It);
          },
          fe = (Be) => {
            Qs(Be, { size: 36, filled: !0, class: "video-loading-play" });
          };
        K(at, (Be) => {
          e(I) ? Be(fe, -1) : Be(Et);
        });
      }
      a(ne);
      var Se = r(ne, 2);
      {
        var Le = (Be) => {
          var It = Ld();
          Ne(It, (Kt) => (Ee == null ? void 0 : Ee(Kt))),
            w(() => y(It, "src", `${e(V)}&background=1`)),
            cl(It),
            n(Be, It);
        };
        K(Se, (Be) => {
          e(ae) && Be(Le);
        });
      }
      var ot = r(Se, 2);
      a(te);
      var ut = r(te, 2),
        Te = l(ut),
        Qe = l(Te);
      {
        var et = (Be) => {
            Lv(Be, { size: 15, filled: !0 });
          },
          zt = (Be) => {
            Qs(Be, { size: 15, filled: !0 });
          };
        K(Qe, (Be) => {
          e(re) ? Be(et) : Be(zt, -1);
        });
      }
      a(Te);
      var bt = r(Te, 2),
        xt = l(bt);
      a(bt);
      var ht = r(bt, 2),
        ze = l(ht);
      a(ht);
      var xe = r(ht, 2),
        st = l(xe);
      {
        var Rt = (Be) => {
            Dv(Be, { size: 14 });
          },
          Qt = (Be) => {
            _i(Be, { size: 14 });
          };
        K(st, (Be) => {
          e(X) || e(ie) === 0 ? Be(Rt) : Be(Qt, -1);
        });
      }
      a(xe);
      var Pt = r(xe, 2),
        yt = l(Pt);
      ja(yt);
      var Yt = r(yt, 2);
      We(
        Yt,
        21,
        () => e(E),
        it,
        (Be, It) => {
          var Kt = Zd(),
            za = l(Kt);
          a(Kt), w(() => Oe(za, `width: ${e(It) * 100}%`)), n(Be, Kt);
        },
      ),
        a(Yt),
        a(Pt);
      var Nt = r(Pt, 2);
      let aa;
      var Ta = l(Nt);
      a(Nt),
        a(ut),
        a(Ze),
        St(
          Ze,
          (Be) => (Z = Be),
          () => Z,
        ),
        Ne(Ze, (Be) => (k == null ? void 0 : k(Be))),
        a($),
        Ne($, (Be) => (Vs == null ? void 0 : Vs(Be))),
        w(
          (Be, It, Kt) => {
            (Ue = N(ne, 1, "video-loading svelte-7i0ju7", null, Ue, {
              done: e(I) && e(re),
              paused: e(I) && !e(re),
            })),
              y(Te, "aria-label", e(re) ? "Pausar" : "Reproduzir"),
              Oe(xt, `width:${e(W) * 100}%`),
              x(ze, `${Be ?? ""} / ${It ?? ""}`),
              Eo(yt, e(X) ? 0 : e(ie)),
              (aa = N(Nt, 1, "video-vol-pct svelte-7i0ju7", null, aa, {
                active: e(P),
              })),
              x(Ta, `${Kt ?? ""}%`);
          },
          [
            () => O(e(Y)),
            () => O(e(ve)),
            () => Math.round((e(X) ? 0 : e(ie)) * 100),
          ],
        ),
        pe("click", $, _e),
        pe("keydown", $, () => {}),
        pe("click", Ze, (Be) => Be.stopPropagation()),
        pe("keydown", Ze, () => {}),
        pe("click", ye, _e),
        pe("click", ot, be),
        pe("keydown", ot, () => {}),
        pe("click", Te, be),
        pe("click", bt, (Be) => {
          const It = Be.currentTarget.getBoundingClientRect();
          Q((Be.clientX - It.left) / It.width);
        }),
        pe("click", xe, le),
        pe("input", yt, (Be) => m(parseFloat(Be.currentTarget.value))),
        pe("pointerdown", yt, () => h(P, !0)),
        pe("pointerup", yt, () => h(P, !1)),
        Pa("pointercancel", yt, () => h(P, !1)),
        n(j, $);
    };
    K(ce, (j) => {
      e(V) && j(ke);
    });
  }
  w(() => x(ft, `/${ee.length ?? ""}`)), n(i, Fe), Ce(), b();
}
Bt(["click", "keydown", "input", "pointerdown", "pointerup"]);
var Bd = u('<span class="lp-pending svelte-18kjxt1"><!> PDL</span>');
function zi(i) {
  var t = Bd(),
    o = l(t);
  ad(o, { size: 12 }),
    _t(),
    a(t),
    Ne(
      t,
      (v, c) => {
        var d;
        return (d = us) == null ? void 0 : d(v, c);
      },
      () => No,
    ),
    w(() => y(t, "aria-label", Fo)),
    n(i, t);
}
const Pd = {
  aatrox: "Aatrox",
  ahri: "Ahri",
  akali: "Akali",
  akshan: "Akshan",
  alistar: "Alistar",
  ambessa: "Ambessa",
  amumu: "Amumu",
  anivia: "Anivia",
  annie: "Annie",
  aphelios: "Aphelios",
  ashe: "Ashe",
  aurelionsol: "Aurelion Sol",
  aurora: "Aurora",
  azir: "Azir",
  bard: "Bardo",
  belveth: "Bel'Veth",
  blitzcrank: "Blitzcrank",
  brand: "Brand",
  braum: "Braum",
  briar: "Briar",
  caitlyn: "Caitlyn",
  camille: "Camille",
  cassiopeia: "Cassiopeia",
  chogath: "Cho'Gath",
  corki: "Corki",
  darius: "Darius",
  diana: "Diana",
  draven: "Draven",
  drmundo: "Dr. Mundo",
  ekko: "Ekko",
  elise: "Elise",
  evelynn: "Evelynn",
  ezreal: "Ezreal",
  fiddlesticks: "Fiddlesticks",
  fiora: "Fiora",
  fizz: "Fizz",
  galio: "Galio",
  gangplank: "Gangplank",
  garen: "Garen",
  gnar: "Gnar",
  gragas: "Gragas",
  graves: "Graves",
  gwen: "Gwen",
  hecarim: "Hecarim",
  heimerdinger: "Heimerdinger",
  hwei: "Hwei",
  illaoi: "Illaoi",
  irelia: "Irelia",
  ivern: "Ivern",
  janna: "Janna",
  jarvaniv: "Jarvan IV",
  jax: "Jax",
  jayce: "Jayce",
  jhin: "Jhin",
  jinx: "Jinx",
  kaisa: "Kai'Sa",
  kalista: "Kalista",
  karma: "Karma",
  karthus: "Karthus",
  kassadin: "Kassadin",
  katarina: "Katarina",
  kayle: "Kayle",
  kayn: "Kayn",
  kennen: "Kennen",
  khazix: "Kha'Zix",
  kindred: "Kindred",
  kled: "Kled",
  kogmaw: "Kog'Maw",
  ksante: "K'Sante",
  leblanc: "LeBlanc",
  leesin: "Lee Sin",
  leona: "Leona",
  lillia: "Lillia",
  lissandra: "Lissandra",
  locke: "Locke",
  lucian: "Lucian",
  lulu: "Lulu",
  lux: "Lux",
  malphite: "Malphite",
  malzahar: "Malzahar",
  maokai: "Maokai",
  masteryi: "Master Yi",
  mel: "Mel",
  milio: "Milio",
  missfortune: "Miss Fortune",
  monkeyking: "Wukong",
  mordekaiser: "Mordekaiser",
  morgana: "Morgana",
  naafiri: "Naafiri",
  nami: "Nami",
  nasus: "Nasus",
  nautilus: "Nautilus",
  neeko: "Neeko",
  nidalee: "Nidalee",
  nilah: "Nilah",
  nocturne: "Nocturne",
  nunu: "Nunu e Willump",
  olaf: "Olaf",
  orianna: "Orianna",
  ornn: "Ornn",
  pantheon: "Pantheon",
  poppy: "Poppy",
  pyke: "Pyke",
  qiyana: "Qiyana",
  quinn: "Quinn",
  rakan: "Rakan",
  rammus: "Rammus",
  reksai: "Rek'Sai",
  rell: "Rell",
  renata: "Renata Glasc",
  renekton: "Renekton",
  rengar: "Rengar",
  riven: "Riven",
  rumble: "Rumble",
  ryze: "Ryze",
  samira: "Samira",
  sejuani: "Sejuani",
  senna: "Senna",
  seraphine: "Seraphine",
  sett: "Sett",
  shaco: "Shaco",
  shen: "Shen",
  shyvana: "Shyvana",
  singed: "Singed",
  sion: "Sion",
  sivir: "Sivir",
  skarner: "Skarner",
  smolder: "Smolder",
  sona: "Sona",
  soraka: "Soraka",
  swain: "Swain",
  sylas: "Sylas",
  syndra: "Syndra",
  tahmkench: "Tahm Kench",
  taliyah: "Taliyah",
  talon: "Talon",
  taric: "Taric",
  teemo: "Teemo",
  thresh: "Thresh",
  tristana: "Tristana",
  trundle: "Trundle",
  tryndamere: "Tryndamere",
  twistedfate: "Twisted Fate",
  twitch: "Twitch",
  udyr: "Udyr",
  urgot: "Urgot",
  varus: "Varus",
  vayne: "Vayne",
  veigar: "Veigar",
  velkoz: "Vel'Koz",
  vex: "Vex",
  vi: "Vi",
  viego: "Viego",
  viktor: "Viktor",
  vladimir: "Vladimir",
  volibear: "Volibear",
  warwick: "Warwick",
  xayah: "Xayah",
  xerath: "Xerath",
  xinzhao: "Xin Zhao",
  yasuo: "Yasuo",
  yone: "Yone",
  yorick: "Yorick",
  yunara: "Yunara",
  yuumi: "Yuumi",
  zaahen: "Zaahen",
  zac: "Zac",
  zed: "Zed",
  zeri: "Zeri",
  ziggs: "Ziggs",
  zilean: "Zilean",
  zoe: "Zoe",
  zyra: "Zyra",
};
function jd(i) {
  return i
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}
function ga(i) {
  return i ? (Pd[jd(i)] ?? i) : "";
}
const Mi = [
    { id: "all", label: "Tudo" },
    { id: "solo", label: "Solo/Duo" },
    { id: "flex", label: "Flex" },
  ],
  Od = 420,
  Nd = 440;
function Ma(i, t) {
  return t === "solo" ? i === Od : t === "flex" ? i === Nd : !0;
}
function Ci(i) {
  var t;
  return (
    ((t = Mi.find((o) => o.id === i)) == null ? void 0 : t.label) ?? "Tudo"
  );
}
var Fd = u('<button type="button"> </button>'),
  Hd = u('<div class="queue-filter-panel svelte-1pn0mj9"></div>'),
  Qd = u(
    '<div class="queue-filter-dropdown svelte-1pn0mj9" tabindex="-1"><button type="button" class="queue-filter-toggle svelte-1pn0mj9"><span class="queue-filter-toggle-label svelte-1pn0mj9"> </span> <!></button> <!></div>',
  );
function Ei(i, t) {
  Me(t, !0);
  let o = R(t, "value", 15, "all"),
    v = oe(!1);
  var c = Qd(),
    d = l(c),
    s = l(d),
    b = l(s, !0);
  a(s);
  var g = r(s, 2);
  {
    let V = q(() => (e(v) ? "open" : ""));
    Ea(g, {
      size: 12,
      get class() {
        return `queue-filter-chevron ${e(V) ?? ""}`;
      },
    });
  }
  a(d);
  var _ = r(d, 2);
  {
    var F = (V) => {
      var T = Hd();
      We(
        T,
        21,
        () => Mi,
        it,
        (Z, M) => {
          var S = Fd();
          let ae;
          var D = l(S, !0);
          a(S),
            w(() => {
              (ae = N(S, 1, "queue-filter-option svelte-1pn0mj9", null, ae, {
                active: o() === e(M).id,
              })),
                x(D, e(M).label);
            }),
            pe("click", S, () => {
              o(e(M).id), h(v, !1);
            }),
            n(Z, S);
        },
      ),
        a(T),
        n(V, T);
    };
    K(_, (V) => {
      e(v) && V(F);
    });
  }
  a(c),
    w((V) => x(b, V), [() => Ci(o())]),
    pe("focusout", c, (V) => {
      V.currentTarget.contains(V.relatedTarget) || h(v, !1);
    }),
    pe("click", d, () => h(v, !e(v))),
    n(i, c),
    Ce();
}
Bt(["focusout", "click"]);
var Vd = u(
    '<div class="top-champ svelte-1ytfrbp"><img class="top-champ-icon svelte-1ytfrbp" loading="lazy" decoding="async"/> <div class="top-champ-col top-champ-info svelte-1ytfrbp"><span class="top-champ-name svelte-1ytfrbp"> </span> <span class="top-champ-sub svelte-1ytfrbp"> </span></div> <div class="top-champ-col top-champ-kda-col svelte-1ytfrbp"><span> </span> <span class="top-champ-sub svelte-1ytfrbp"> </span></div> <div class="top-champ-col top-champ-wr-col svelte-1ytfrbp"><span> </span> <span class="top-champ-sub svelte-1ytfrbp"> </span></div></div>',
  ),
  Wd = u(
    '<img class="record-icon svelte-1ytfrbp" loading="lazy" decoding="async"/>',
  ),
  Ud = u('<div class="record-icon record-icon-empty svelte-1ytfrbp"></div>'),
  Gd = u(
    '<div class="record-row svelte-1ytfrbp"><!> <div class="record-col svelte-1ytfrbp"><span class="record-label svelte-1ytfrbp"> </span> <span class="record-champ svelte-1ytfrbp"> </span></div> <span> </span></div>',
  ),
  Kd = u(
    '<div class="page-side svelte-1ytfrbp"><div class="side-section svelte-1ytfrbp"><h2 class="widget-title svelte-1ytfrbp">Campeões mais Jogados</h2> <div class="top-champs svelte-1ytfrbp"></div></div> <div class="side-section svelte-1ytfrbp"><h2 class="widget-title svelte-1ytfrbp">Recordes Pessoais</h2> <div class="records-widget svelte-1ytfrbp"></div></div></div>',
  ),
  $d = u(
    "Não consegui buscar seu histórico.<br/>Verifique sua conexão — o que já foi sincronizado continua salvo.",
    1,
  ),
  Yd = u(" <br/>Troque o filtro para ver as outras.", 1),
  Xd = u(
    "Nenhuma partida registrada ainda.<br/>Jogue com o ABSOL ativo para ver seu histórico aqui.",
    1,
  ),
  Jd = u(
    '<div class="empty svelte-1ytfrbp"><div class="mod-balloon-wrap svelte-1ytfrbp" aria-hidden="true"><div class="mod-balloon svelte-1ytfrbp"><span class="mod-balloon-dot svelte-1ytfrbp"></span> <span class="mod-balloon-dot svelte-1ytfrbp"></span> <span class="mod-balloon-dot svelte-1ytfrbp"></span></div> <span class="mod-balloon-tail svelte-1ytfrbp"></span></div> <!></div>',
  ),
  ec = u("<span> </span>"),
  tc = u('<span class="xp-chip svelte-1ytfrbp"> </span>'),
  ac = u(
    '<div class="match-stat svelte-1ytfrbp"><span class="match-stat-sub svelte-1ytfrbp"> </span></div>',
  ),
  sc = u(
    '<img class="match-item-icon svelte-1ytfrbp" loading="lazy" decoding="async"/>',
  ),
  lc = u('<div class="match-item-icon item-slot-empty svelte-1ytfrbp"></div>'),
  ic = u(
    '<div><img class="match-roster-icon svelte-1ytfrbp" loading="lazy" decoding="async"/> <span class="match-roster-name svelte-1ytfrbp"> </span></div>',
  ),
  oc = u(
    '<div><img class="match-roster-icon svelte-1ytfrbp" loading="lazy" decoding="async"/> <span class="match-roster-name svelte-1ytfrbp"> </span></div>',
  ),
  rc = u(
    '<div class="match-roster svelte-1ytfrbp"><div class="match-team-col svelte-1ytfrbp"></div> <div class="match-team-col svelte-1ytfrbp"></div></div>',
  ),
  nc = u(
    '<div><div class="match-bar svelte-1ytfrbp"></div> <div class="match-header svelte-1ytfrbp"><span> </span> <span class="dot svelte-1ytfrbp">•</span> <span> </span> <span class="dot svelte-1ytfrbp">•</span> <span> </span> <span class="dot svelte-1ytfrbp">•</span> <span> </span> <div class="header-chips svelte-1ytfrbp"><!> <!></div></div> <div class="match-body svelte-1ytfrbp"><img class="match-champ-icon svelte-1ytfrbp" loading="lazy" decoding="async"/> <div class="match-center svelte-1ytfrbp"><div class="match-stats svelte-1ytfrbp"><div class="match-stat svelte-1ytfrbp"><span class="match-stat-value svelte-1ytfrbp"> </span> <span> </span></div> <div class="match-stat svelte-1ytfrbp"><span class="match-stat-value svelte-1ytfrbp"> </span> <span class="match-stat-sub svelte-1ytfrbp"> </span></div> <!></div> <div class="match-items svelte-1ytfrbp"></div></div> <!></div></div>',
  ),
  vc = u(
    '<div class="page-wrap svelte-1ytfrbp"><div class="page svelte-1ytfrbp"><div class="page-top svelte-1ytfrbp"><div class="page-header svelte-1ytfrbp"><h1 class="svelte-1ytfrbp">> Histórico</h1> <p class="svelte-1ytfrbp">Últimas partidas registradas pelo ABSOL</p></div> <div class="page-actions svelte-1ytfrbp"><!> <button class="btn-dashboard svelte-1ytfrbp">Abrir Dashboard Completo</button></div></div> <div class="page-row svelte-1ytfrbp"><!> <div class="match-col svelte-1ytfrbp"><h2 class="widget-title svelte-1ytfrbp">Últimas Partidas</h2> <div class="match-list svelte-1ytfrbp"><!> <!></div></div></div></div></div>',
  );
function dc(i, t) {
  Me(t, !0);
  const o = () => kt(b, "$matchRows", d),
    v = () => kt(_, "$matchesLoading", d),
    c = () => kt(F, "$matchesFailed", d),
    [d, s] = ta(),
    { matchRows: b, detailsCache: g, loading: _, failed: F } = fa;
  let V = oe("all"),
    T = q(() => Qo(o().filter((H) => Ma(H.report.queue_id, e(V))))),
    Z = q(() => e(T).all),
    M = q(() => e(T).stats),
    S = q(() => e(T).championStats.slice(0, 5)),
    ae = q(() => e(T).personalRecords),
    D = q(() => o().length > 0);
  const z = [
      {
        key: "bestKda",
        label: "Melhor KDA",
        good: !0,
        suffix: ":1",
        duration: !1,
      },
      {
        key: "mostKills",
        label: "Mais Kills",
        good: !0,
        suffix: "",
        duration: !1,
      },
      {
        key: "mostAssists",
        label: "Mais Assistências",
        good: !0,
        suffix: "",
        duration: !1,
      },
      {
        key: "bestCsMin",
        label: "Melhor CS/min",
        good: !0,
        suffix: "/min",
        duration: !1,
      },
      {
        key: "bestWardScore",
        label: "Melhor Ward Score",
        good: !0,
        suffix: "",
        duration: !1,
      },
      {
        key: "mostDeaths",
        label: "Mais Mortes",
        good: !1,
        suffix: "",
        duration: !1,
      },
      {
        key: "longestGame",
        label: "Partida mais Longa",
        good: !0,
        suffix: "",
        duration: !0,
      },
      {
        key: "fastestWin",
        label: "Vitória mais Rápida",
        good: !0,
        suffix: "",
        duration: !0,
      },
    ],
    re = new Set();
  let I = q(() => e(Z).slice(0, 10));
  const W = 3;
  let ve = 0;
  const Y = [];
  function X() {
    for (; ve < W && Y.length > 0; ) {
      const H = Y.shift();
      ve++,
        fa.fetchDetail(H).finally(() => {
          ve--, X();
        });
    }
  }
  Gt(() => {
    for (const H of e(I))
      re.has(H.id) || g.has(H.id) || (re.add(H.id), Y.push(H.id));
    X();
  });
  function ie(H) {
    return !H || H.game_duration <= 0
      ? null
      : Math.round(H.gold / (H.game_duration / 60));
  }
  function P(H) {
    const U = H == null ? void 0 : H.players.find((we) => we.is_me),
      Pe = [...((U == null ? void 0 : U.items) ?? [])].sort(
        (we, Fe) => (we.slot ?? 0) - (Fe.slot ?? 0),
      );
    return Array.from({ length: 7 }, (we, Fe) => Pe[Fe] ?? null);
  }
  function ue(H, U) {
    return (H == null ? void 0 : H.players.filter((G) => G.team === U)) ?? [];
  }
  var E = vc(),
    de = l(E),
    _e = l(de),
    Ee = l(_e),
    be = l(Ee);
  Ne(
    be,
    (H, U) => (Tt == null ? void 0 : Tt(H, U)),
    () => ({ color: "var(--lime)" }),
  ),
    _t(2),
    a(Ee);
  var Q = r(Ee, 2),
    le = l(Q);
  Ei(le, {
    get value() {
      return e(V);
    },
    set value(H) {
      h(V, H, !0);
    },
  });
  var m = r(le, 2);
  Ne(
    m,
    (H, U) => {
      var G;
      return (G = wt) == null ? void 0 : G(H, U);
    },
    () => ({ scale: 1.05, pressScale: 0.97 }),
  ),
    a(Q),
    a(_e);
  var O = r(_e, 2),
    L = l(O);
  {
    var k = (H) => {
      var U = Kd(),
        G = l(U),
        Pe = r(l(G), 2);
      We(
        Pe,
        21,
        () => e(S),
        (De) => De.champion,
        (De, ge) => {
          var qe = Vd(),
            je = l(qe),
            Ie = r(je, 2),
            Xe = l(Ie),
            Ye = l(Xe, !0);
          a(Xe);
          var rt = r(Xe, 2),
            ft = l(rt);
          a(rt), a(Ie);
          var Je = r(Ie, 2),
            ce = l(Je);
          let ke;
          var j = l(ce);
          a(ce);
          var $ = r(ce, 2),
            Ze = l($);
          a($), a(Je);
          var ye = r(Je, 2),
            he = l(ye);
          let te;
          var ne = l(he);
          a(he);
          var Ue = r(he, 2),
            C = l(Ue);
          a(Ue),
            a(ye),
            a(qe),
            w(
              (He, at, Et, fe) => {
                y(je, "src", He),
                  y(je, "alt", at),
                  x(Ye, Et),
                  x(ft, `CS ${e(ge).avgCs ?? ""} (${e(ge).avgCspm ?? ""})`),
                  (ke = N(ce, 1, "top-champ-kda svelte-1ytfrbp", null, ke, fe)),
                  x(j, `${e(ge).kdaRatio ?? ""}:1 KDA`),
                  x(
                    Ze,
                    `${e(ge).avgKills ?? ""} / ${e(ge).avgDeaths ?? ""} / ${e(ge).avgAssists ?? ""}`,
                  ),
                  (te = N(he, 1, "top-champ-wr svelte-1ytfrbp", null, te, {
                    good: e(ge).winRate > 60,
                    bad: e(ge).winRate < 40,
                  })),
                  x(ne, `${e(ge).winRate ?? ""}%`),
                  x(C, `${e(ge).games ?? ""} Jogos`);
              },
              [
                () => wa(e(ge).champion),
                () => ga(e(ge).champion),
                () => ga(e(ge).champion),
                () => ({
                  "kda-good": parseFloat(e(ge).kdaRatio) > 4,
                  "kda-ok":
                    parseFloat(e(ge).kdaRatio) >= 2 &&
                    parseFloat(e(ge).kdaRatio) <= 4,
                  "kda-bad": parseFloat(e(ge).kdaRatio) < 2,
                }),
              ],
            ),
            n(De, qe);
        },
      ),
        a(Pe),
        a(G);
      var we = r(G, 2),
        Fe = r(l(we), 2);
      We(
        Fe,
        21,
        () => z,
        (De) => De.key,
        (De, ge) => {
          const qe = q(() => e(ae)[e(ge).key]);
          var je = Gd(),
            Ie = l(je);
          {
            var Xe = (ye) => {
                var he = Wd();
                w(
                  (te, ne) => {
                    y(he, "src", te), y(he, "alt", ne);
                  },
                  [() => wa(e(qe).champion), () => ga(e(qe).champion)],
                ),
                  n(ye, he);
              },
              Ye = (ye) => {
                var he = Ud();
                n(ye, he);
              };
            K(Ie, (ye) => {
              e(qe).champion !== "-" ? ye(Xe) : ye(Ye, -1);
            });
          }
          var rt = r(Ie, 2),
            ft = l(rt),
            Je = l(ft, !0);
          a(ft);
          var ce = r(ft, 2),
            ke = l(ce, !0);
          a(ce), a(rt);
          var j = r(rt, 2);
          let $;
          var Ze = l(j, !0);
          a(j),
            a(je),
            w(
              (ye, he) => {
                x(Je, e(ge).label),
                  x(ke, ye),
                  ($ = N(j, 1, "record-value svelte-1ytfrbp", null, $, {
                    good: e(ge).good,
                    bad: !e(ge).good,
                  })),
                  x(Ze, he);
              },
              [
                () => ga(e(qe).champion),
                () =>
                  e(qe).perfect
                    ? "KDA PERFEITO"
                    : e(ge).duration
                      ? Ho(e(qe).value)
                      : `${e(qe).value}${e(ge).suffix}`,
              ],
            ),
            n(De, je);
        },
      ),
        a(Fe),
        a(we),
        a(U),
        n(H, U);
    };
    K(L, (H) => {
      e(S).length && H(k);
    });
  }
  var B = r(L, 2),
    ee = r(l(B), 2),
    me = l(ee);
  {
    var J = (H) => {
      var U = Jd(),
        G = r(l(U), 2);
      {
        var Pe = (ge) => {
            var qe = Ca("Buscando seu histórico…");
            n(ge, qe);
          },
          we = (ge) => {
            var qe = $d();
            _t(2), n(ge, qe);
          },
          Fe = (ge) => {
            var qe = Yd(),
              je = Lt(qe);
            _t(2),
              w(
                (Ie) => x(je, `Nenhuma partida de ${Ie ?? ""} no histórico.`),
                [() => Ci(e(V))],
              ),
              n(ge, qe);
          },
          De = (ge) => {
            var qe = Xd();
            _t(2), n(ge, qe);
          };
        K(G, (ge) => {
          v() && !e(D)
            ? ge(Pe)
            : c() && !e(D)
              ? ge(we, 1)
              : e(D)
                ? ge(Fe, 2)
                : ge(De, -1);
        });
      }
      a(U), n(H, U);
    };
    K(me, (H) => {
      e(M) || H(J);
    });
  }
  var se = r(me, 2);
  We(
    se,
    17,
    () => e(I),
    it,
    (H, U) => {
      const G = q(() => g.get(e(U).id)),
        Pe = q(() => ie(e(G)));
      var we = nc();
      let Fe;
      var De = r(l(we), 2),
        ge = l(De);
      let qe;
      var je = l(ge, !0);
      a(ge);
      var Ie = r(ge, 4),
        Xe = l(Ie, !0);
      a(Ie);
      var Ye = r(Ie, 4),
        rt = l(Ye, !0);
      a(Ye);
      var ft = r(Ye, 4),
        Je = l(ft, !0);
      a(ft);
      var ce = r(ft, 2),
        ke = l(ce);
      {
        var j = (ze) => {
            zi(ze);
          },
          $ = (ze) => {
            var xe = ec();
            let st;
            var Rt = l(xe);
            a(xe),
              w(
                (Qt) => {
                  (st = N(xe, 1, "lp-chip svelte-1ytfrbp", null, st, {
                    win: e(U).lpDelta >= 0,
                    lose: e(U).lpDelta < 0,
                  })),
                    x(Rt, `${Qt ?? ""} PDL`);
                },
                [() => ha(e(U).lpDelta)],
              ),
              n(ze, xe);
          };
        K(ke, (ze) => {
          e(U).result !== "REMAKE" && e(U).lpPending
            ? ze(j)
            : e(U).result !== "REMAKE" && e(U).lpDelta !== null && ze($, 1);
        });
      }
      var Ze = r(ke, 2);
      {
        var ye = (ze) => {
          var xe = tc(),
            st = l(xe);
          a(xe), w(() => x(st, `+${e(U).xpGained ?? ""} XP`)), n(ze, xe);
        };
        K(Ze, (ze) => {
          e(U).xpGained && ze(ye);
        });
      }
      a(ce), a(De);
      var he = r(De, 2),
        te = l(he),
        ne = r(te, 2),
        Ue = l(ne),
        C = l(Ue),
        He = l(C),
        at = l(He, !0);
      a(He);
      var Et = r(He, 2);
      let fe;
      var Se = l(Et);
      a(Et), a(C);
      var Le = r(C, 2),
        ot = l(Le),
        ut = l(ot);
      a(ot);
      var Te = r(ot, 2),
        Qe = l(Te);
      a(Te), a(Le);
      var et = r(Le, 2);
      {
        var zt = (ze) => {
          var xe = ac(),
            st = l(xe),
            Rt = l(st);
          a(st), a(xe), w(() => x(Rt, `${e(Pe) ?? ""} GPM`)), n(ze, xe);
        };
        K(et, (ze) => {
          e(Pe) !== null && ze(zt);
        });
      }
      a(Ue);
      var bt = r(Ue, 2);
      We(
        bt,
        21,
        () => P(e(G)),
        it,
        (ze, xe) => {
          var st = ma(),
            Rt = Lt(st);
          {
            var Qt = (yt) => {
                const Yt = q(() => e(xe).item_id ?? e(xe).id);
                var Nt = sc();
                w(
                  (aa) => {
                    y(Nt, "src", aa),
                      y(Nt, "alt", e(xe).display_name),
                      y(Nt, "title", e(xe).display_name);
                  },
                  [() => ui(e(Yt) ?? 0)],
                ),
                  n(yt, Nt);
              },
              Pt = (yt) => {
                var Yt = lc();
                n(yt, Yt);
              };
            K(Rt, (yt) => {
              e(xe) ? yt(Qt) : yt(Pt, -1);
            });
          }
          n(ze, st);
        },
      ),
        a(bt),
        a(ne);
      var xt = r(ne, 2);
      {
        var ht = (ze) => {
          var xe = rc(),
            st = l(xe);
          We(
            st,
            21,
            () => ue(e(G), "BLUE"),
            it,
            (Qt, Pt) => {
              var yt = ic();
              let Yt;
              var Nt = l(yt),
                aa = r(Nt, 2),
                Ta = l(aa, !0);
              a(aa),
                a(yt),
                w(
                  (Be, It, Kt) => {
                    (Yt = N(
                      yt,
                      1,
                      "match-roster-row svelte-1ytfrbp",
                      null,
                      Yt,
                      { me: e(Pt).is_me },
                    )),
                      y(Nt, "src", Be),
                      y(Nt, "alt", It),
                      x(Ta, Kt);
                  },
                  [
                    () => wa(e(Pt).champion),
                    () => ga(e(Pt).champion),
                    () => e(Pt).riot_id.split("#")[0],
                  ],
                ),
                n(Qt, yt);
            },
          ),
            a(st);
          var Rt = r(st, 2);
          We(
            Rt,
            21,
            () => ue(e(G), "RED"),
            it,
            (Qt, Pt) => {
              var yt = oc();
              let Yt;
              var Nt = l(yt),
                aa = r(Nt, 2),
                Ta = l(aa, !0);
              a(aa),
                a(yt),
                w(
                  (Be, It, Kt) => {
                    (Yt = N(
                      yt,
                      1,
                      "match-roster-row svelte-1ytfrbp",
                      null,
                      Yt,
                      { me: e(Pt).is_me },
                    )),
                      y(Nt, "src", Be),
                      y(Nt, "alt", It),
                      x(Ta, Kt);
                  },
                  [
                    () => wa(e(Pt).champion),
                    () => ga(e(Pt).champion),
                    () => e(Pt).riot_id.split("#")[0],
                  ],
                ),
                n(Qt, yt);
            },
          ),
            a(Rt),
            a(xe),
            n(ze, xe);
        };
        K(xt, (ze) => {
          e(G) && ze(ht);
        });
      }
      a(he),
        a(we),
        w(
          (ze, xe, st) => {
            var Rt;
            (Fe = N(we, 1, "match svelte-1ytfrbp", null, Fe, {
              win: e(U).result === "WIN",
              lose: e(U).result === "LOSE",
              remake: e(U).result === "REMAKE",
              unknown: e(U).result === "UNKNOWN",
            })),
              (qe = N(ge, 1, "result svelte-1ytfrbp", null, qe, {
                win: e(U).result === "WIN",
                lose: e(U).result === "LOSE",
                remake: e(U).result === "REMAKE",
              })),
              x(
                je,
                e(U).result === "WIN"
                  ? "Vitória"
                  : e(U).result === "LOSE"
                    ? "Derrota"
                    : e(U).result === "REMAKE"
                      ? "Remake"
                      : "?",
              ),
              x(Xe, e(U).queue),
              x(rt, e(U).duration),
              x(Je, e(U).timeAgo),
              y(te, "src", ze),
              y(te, "alt", xe),
              x(at, e(U).kda),
              (fe = N(Et, 1, "match-stat-sub svelte-1ytfrbp", null, fe, st)),
              x(Se, `${e(U).kdaRatio ?? ""} KDA`),
              x(
                ut,
                `${((Rt = e(G)) == null ? void 0 : Rt.cs) ?? "—" ?? ""} CS`,
              ),
              x(Qe, `${e(U).cspm ?? ""} CS/Min.`);
          },
          [
            () => wa(e(U).champion),
            () => ga(e(U).champion),
            () => ({
              "kda-good": parseFloat(e(U).kdaRatio) >= 3,
              "kda-ok":
                parseFloat(e(U).kdaRatio) >= 2 && parseFloat(e(U).kdaRatio) < 3,
              "kda-bad": parseFloat(e(U).kdaRatio) < 2,
            }),
          ],
        ),
        n(H, we);
    },
  ),
    a(ee),
    a(B),
    a(O),
    a(de),
    a(E),
    pe("click", m, () => ra(`${_a}/matches`)),
    n(i, E),
    Ce(),
    s();
}
Bt(["click"]);
const cc = (i) => i;
function uc(i) {
  const t = i - 1;
  return t * t * t + 1;
}
function Ul(i) {
  const t = typeof i == "string" && i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [i, "px"];
}
function pc(i, { delay: t = 0, duration: o = 400, easing: v = cc } = {}) {
  const c = +getComputedStyle(i).opacity;
  return { delay: t, duration: o, easing: v, css: (d) => `opacity: ${d * c}` };
}
function Gl(
  i,
  {
    delay: t = 0,
    duration: o = 400,
    easing: v = uc,
    x: c = 0,
    y: d = 0,
    opacity: s = 0,
  } = {},
) {
  const b = getComputedStyle(i),
    g = +b.opacity,
    _ = b.transform === "none" ? "" : b.transform,
    F = g * (1 - s),
    [V, T] = Ul(c),
    [Z, M] = Ul(d);
  return {
    delay: t,
    duration: o,
    easing: v,
    css: (S, ae) => `
			transform: ${_} translate(${(1 - S) * V}${T}, ${(1 - S) * Z}${M});
			opacity: ${g - F * ae}`,
  };
}
var hc = u(
    '<div class="volume-segment svelte-f590ud"><div class="volume-segment-fill svelte-f590ud"></div></div>',
  ),
  fc = u('<span class="option-badge svelte-f590ud"> </span>'),
  mc = u(
    '<div><div class="option-info svelte-f590ud"><span class="option-name svelte-f590ud"> </span> <span class="option-sub svelte-f590ud"> </span></div> <!></div>',
  ),
  gc = u('<p class="hint svelte-f590ud">Carregando dispositivos…</p>'),
  wc = u(
    '<button><div class="option-info svelte-f590ud"><span class="option-name svelte-f590ud"> </span></div></button>',
  ),
  _c = u(
    '<div class="page svelte-f590ud"><header class="svelte-f590ud"><h1 class="svelte-f590ud">> Áudio</h1> <p class="svelte-f590ud">Volume, voz e dispositivo de saída</p></header> <section class="card svelte-f590ud"><div class="section-label svelte-f590ud">Volume de saída <button class="test-btn svelte-f590ud"> </button></div> <div class="volume-row svelte-f590ud"><!> <div class="slider-wrap svelte-f590ud"><input type="range" min="0" max="100" class="slider-input svelte-f590ud" aria-label="Volume"/> <div class="volume-track svelte-f590ud"></div></div> <span> </span></div></section> <section class="card svelte-f590ud"><div class="section-label svelte-f590ud">Voz do coach</div> <div class="voice-carousel svelte-f590ud"><button class="carousel-arrow svelte-f590ud" aria-label="Voz anterior"><!></button> <div class="carousel-viewport svelte-f590ud"><span class="corner corner-tl svelte-f590ud"></span> <span class="corner corner-tr svelte-f590ud"></span> <span class="corner corner-bl svelte-f590ud"></span> <span class="corner corner-br svelte-f590ud"></span> <div class="carousel-track svelte-f590ud"><!></div></div> <button class="carousel-arrow svelte-f590ud" aria-label="Próxima voz"><!></button></div></section> <section class="card svelte-f590ud"><div class="section-label svelte-f590ud">Dispositivo de saída <button class="test-btn svelte-f590ud"> </button></div> <div class="option-list svelte-f590ud"><!></div></section></div>',
  );
function bc(i, t) {
  Me(t, !0);
  const [o, v] = ta();
  let c = oe(va(Number(localStorage.getItem("absol_volume") ?? "60")));
  const d = 20;
  let s = q(() =>
      Array.from({ length: d }, (fe, Se) => {
        const Le = (Se / d) * 100,
          ot = ((Se + 1) / d) * 100;
        return e(c) >= ot ? 1 : e(c) <= Le ? 0 : (e(c) - Le) / (ot - Le);
      }),
    ),
    b = null;
  function g() {
    localStorage.setItem("absol_volume", String(e(c))),
      b && clearTimeout(b),
      (b = setTimeout(() => Ve("set_volume", { volume: e(c) }), 120));
  }
  let _ = oe(!1),
    F = oe(va([])),
    V = oe(va(localStorage.getItem("absol_device") ?? "Padrão do sistema")),
    T = oe(!0);
  function Z(fe) {
    h(V, fe, !0),
      localStorage.setItem("absol_device", fe),
      Ve("set_audio_device", { name: fe });
  }
  let M = oe(!1);
  async function S() {
    h(M, !0), await Ve("play_test_sound"), h(M, !1);
  }
  let ae = oe(va(localStorage.getItem("absol_voice_pack") ?? "padrao"));
  const D = [
      {
        id: "padrao",
        label: "Padrão",
        sub: "Voz padrão · Clean",
        badge: "",
        disabled: !1,
      },
      {
        id: "fun",
        label: "FUN",
        sub: "Padrão do sistema · Cômica",
        badge: "",
        disabled: !1,
      },
    ],
    z = 420,
    re = z / 1e3;
  async function I(fe) {
    h(ae, fe, !0),
      localStorage.setItem("absol_voice_pack", fe),
      await Ve("set_active_pack", { pack: fe }),
      setTimeout(() => Ve("play_test_pack_sound", { pack: fe }), z);
  }
  const W = [
    [0, 0],
    [0.02, 3e-4],
    [0.04, 0.0013],
    [0.06, 0.0031],
    [0.08, 0.0056],
    [0.1, 0.0089],
    [0.12, 0.0132],
    [0.14, 0.0185],
    [0.16, 0.025],
    [0.18, 0.0326],
    [0.2, 0.0415],
    [0.22, 0.052],
    [0.24, 0.0641],
    [0.26, 0.078],
    [0.28, 0.094],
    [0.3, 0.1124],
    [0.32, 0.1334],
    [0.34, 0.1575],
    [0.36, 0.1849],
    [0.38, 0.2163],
    [0.4, 0.2521],
    [0.42, 0.2927],
    [0.44, 0.3383],
    [0.46, 0.3888],
    [0.48, 0.4433],
    [0.5, 0.5],
    [0.52, 0.5567],
    [0.54, 0.6112],
    [0.56, 0.6617],
    [0.58, 0.7073],
    [0.6, 0.7479],
    [0.62, 0.7837],
    [0.64, 0.8151],
    [0.66, 0.8425],
    [0.68, 0.8666],
    [0.7, 0.8876],
    [0.72, 0.906],
    [0.74, 0.922],
    [0.76, 0.9359],
    [0.78, 0.948],
    [0.8, 0.9585],
    [0.82, 0.9674],
    [0.84, 0.975],
    [0.86, 0.9815],
    [0.88, 0.9868],
    [0.9, 0.9911],
    [0.92, 0.9944],
    [0.94, 0.9969],
    [0.96, 0.9987],
    [0.98, 0.9997],
    [1, 1],
  ];
  function ve(fe) {
    if (fe <= 0) return 0;
    if (fe >= 1) return 1;
    for (let Se = 1; Se < W.length; Se++) {
      const [Le, ot] = W[Se - 1],
        [ut, Te] = W[Se];
      if (fe <= ut) return ot + (Te - ot) * ((fe - Le) / (ut - Le));
    }
    return 1;
  }
  let Y = q(() =>
      Math.max(
        0,
        D.findIndex((fe) => fe.id === e(ae)),
      ),
    ),
    X = oe(1),
    ie = oe(0),
    P = oe(!1);
  function ue(fe) {
    if (e(P)) return;
    const Se = D.filter((ut) => !ut.disabled);
    if (Se.length === 0) return;
    const Le = Se.findIndex((ut) => ut.id === e(ae)),
      ot = Se[(Le + fe + Se.length) % Se.length];
    h(X, fe, !0),
      h(P, !0),
      I(ot.id),
      setTimeout(() => {
        h(P, !1);
      }, z);
  }
  let E, de, _e, Ee;
  const be = 10,
    Q = 0.32,
    le = "back.out(1.7)",
    m = 0.16;
  let O = !1;
  Gt(() => {
    if ((e(ae), !O)) {
      O = !0;
      return;
    }
    const fe = [
      { el: E, dx: -1, dy: -1 },
      { el: de, dx: 1, dy: -1 },
      { el: Ee, dx: 1, dy: 1 },
      { el: _e, dx: -1, dy: 1 },
    ].filter((ot) => !!ot.el);
    if (fe.length !== 4) return;
    const Se = fe.map((ot) => ot.el),
      Le =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--accent")
          .trim() || "#ff3b3b";
    $e.fromTo(
      Se,
      { scale: 0.4, x: (ot) => fe[ot].dx * be, y: (ot) => fe[ot].dy * be },
      {
        scale: 1,
        x: 0,
        y: 0,
        duration: Q,
        ease: le,
        delay: re,
        immediateRender: !1,
      },
    ),
      $e.fromTo(
        Se,
        { borderColor: Le },
        {
          borderColor: "#fff",
          duration: m,
          ease: "sine.inOut",
          repeat: 1,
          yoyo: !0,
          delay: re,
        },
      );
  });
  async function L() {
    h(T, !0);
    try {
      const fe = await Ve("get_audio_devices");
      h(
        F,
        fe.map((Se) => ({ id: Se, label: Se })),
        !0,
      );
    } finally {
      h(T, !1);
    }
  }
  $t(() => {
    Ve("set_volume", { volume: e(c) }),
      Ve("set_audio_device", { name: e(V) }),
      Ve("set_active_pack", { pack: e(ae) }),
      L();
  });
  var k = _c(),
    B = l(k),
    ee = l(B);
  Ne(
    ee,
    (fe, Se) => (Tt == null ? void 0 : Tt(fe, Se)),
    () => ({ color: "var(--lime)" }),
  ),
    _t(2),
    a(B);
  var me = r(B, 2),
    J = l(me),
    se = r(l(J)),
    H = l(se, !0);
  a(se),
    Ne(
      se,
      (fe, Se) => {
        var Le;
        return (Le = wt) == null ? void 0 : Le(fe, Se);
      },
      () => ({ scale: 1.05, pressScale: 0.97 }),
    ),
    a(J);
  var U = r(J, 2),
    G = l(U);
  _i(G, { size: 19, color: "var(--text-2)" });
  var Pe = r(G, 2),
    we = l(Pe);
  ja(we);
  var Fe = r(we, 2);
  We(
    Fe,
    21,
    () => e(s),
    it,
    (fe, Se) => {
      var Le = hc(),
        ot = l(Le);
      a(Le), w(() => Oe(ot, `width: ${e(Se) * 100}%`)), n(fe, Le);
    },
  ),
    a(Fe),
    a(Pe);
  var De = r(Pe, 2);
  let ge;
  var qe = l(De);
  a(De), a(U), a(me);
  var je = r(me, 2),
    Ie = r(l(je), 2),
    Xe = l(Ie),
    Ye = l(Xe);
  yi(Ye, { size: 18 }),
    a(Xe),
    Ne(
      Xe,
      (fe, Se) => {
        var Le;
        return (Le = wt) == null ? void 0 : Le(fe, Se);
      },
      () => ({ scale: 1.1, pressScale: 0.9 }),
    );
  var rt = r(Xe, 2),
    ft = l(rt);
  St(
    ft,
    (fe) => (E = fe),
    () => E,
  );
  var Je = r(ft, 2);
  St(
    Je,
    (fe) => (de = fe),
    () => de,
  );
  var ce = r(Je, 2);
  St(
    ce,
    (fe) => (_e = fe),
    () => _e,
  );
  var ke = r(ce, 2);
  St(
    ke,
    (fe) => (Ee = fe),
    () => Ee,
  );
  var j = r(ke, 2),
    $ = l(j);
  mi(
    $,
    () => e(ae),
    (fe) => {
      const Se = q(() => D[e(Y)]);
      var Le = mc();
      let ot;
      var ut = l(Le),
        Te = l(ut),
        Qe = l(Te, !0);
      a(Te);
      var et = r(Te, 2),
        zt = l(et, !0);
      a(et), a(ut);
      var bt = r(ut, 2);
      {
        var xt = (ht) => {
          var ze = fc(),
            xe = l(ze, !0);
          a(ze), w(() => x(xe, e(Se).badge)), n(ht, ze);
        };
        K(bt, (ht) => {
          e(Se).badge && ht(xt);
        });
      }
      a(Le),
        w(() => {
          (ot = N(Le, 1, "option carousel-card svelte-f590ud", null, ot, {
            selected: !0,
            "fun-voice": e(Se).id === "fun",
          })),
            x(Qe, e(Se).label),
            x(zt, e(Se).sub);
        }),
        Ga(
          1,
          Le,
          () => Gl,
          () => ({ x: e(X) * e(ie), duration: z, opacity: 1, easing: ve }),
        ),
        Ga(
          2,
          Le,
          () => Gl,
          () => ({ x: -e(X) * e(ie), duration: z, opacity: 1, easing: ve }),
        ),
        n(fe, Le);
    },
  ),
    a(j),
    a(rt);
  var Ze = r(rt, 2),
    ye = l(Ze);
  qi(ye, { size: 18 }),
    a(Ze),
    Ne(
      Ze,
      (fe, Se) => {
        var Le;
        return (Le = wt) == null ? void 0 : Le(fe, Se);
      },
      () => ({ scale: 1.1, pressScale: 0.9 }),
    ),
    a(Ie),
    a(je);
  var he = r(je, 2),
    te = l(he),
    ne = r(l(te)),
    Ue = l(ne, !0);
  a(ne),
    Ne(
      ne,
      (fe, Se) => {
        var Le;
        return (Le = wt) == null ? void 0 : Le(fe, Se);
      },
      () => ({ scale: 1.05, pressScale: 0.97 }),
    ),
    a(te);
  var C = r(te, 2),
    He = l(C);
  {
    var at = (fe) => {
        var Se = gc();
        n(fe, Se);
      },
      Et = (fe) => {
        var Se = ma(),
          Le = Lt(Se);
        We(
          Le,
          17,
          () => e(F),
          it,
          (ot, ut) => {
            var Te = wc();
            let Qe;
            var et = l(Te),
              zt = l(et),
              bt = l(zt, !0);
            a(zt),
              a(et),
              a(Te),
              Ne(
                Te,
                (xt, ht) => {
                  var ze;
                  return (ze = wt) == null ? void 0 : ze(xt, ht);
                },
                () => ({ scale: 1.05, pressScale: 0.97 }),
              ),
              w(() => {
                (Qe = N(Te, 1, "option svelte-f590ud", null, Qe, {
                  selected: e(V) === e(ut).id,
                })),
                  x(bt, e(ut).label);
              }),
              pe("click", Te, () => Z(e(ut).id)),
              n(ot, Te);
          },
        ),
          n(fe, Se);
      };
    K(He, (fe) => {
      e(T) ? fe(at) : fe(Et, -1);
    });
  }
  a(C),
    a(he),
    a(k),
    w(() => {
      (se.disabled = e(M)),
        x(H, e(M) ? "Tocando…" : "Testar som"),
        (ge = N(De, 1, "vol-pct svelte-f590ud", null, ge, { active: e(_) })),
        x(qe, `${e(c) ?? ""}%`),
        (Xe.disabled = e(P)),
        (Ze.disabled = e(P)),
        (ne.disabled = e(T)),
        x(Ue, e(T) ? "Carregando…" : "Recarregar");
    }),
    pe("click", se, S),
    pe("input", we, g),
    pe("pointerdown", we, () => h(_, !0)),
    pe("pointerup", we, () => h(_, !1)),
    Pa("pointercancel", we, () => h(_, !1)),
    Ka(
      we,
      () => e(c),
      (fe) => h(c, fe),
    ),
    pe("click", Xe, () => ue(-1)),
    $a(j, "clientWidth", (fe) => h(ie, fe)),
    pe("click", Ze, () => ue(1)),
    pe("click", ne, L),
    n(i, k),
    Ce(),
    v();
}
Bt(["click", "input", "pointerdown", "pointerup"]);
async function xc() {
  return await Ve("plugin:autostart|is_enabled");
}
async function yc() {
  await Ve("plugin:autostart|enable");
}
async function qc() {
  await Ve("plugin:autostart|disable");
}
var Kl;
(function (i) {
  (i.Nsis = "nsis"),
    (i.Msi = "msi"),
    (i.Deb = "deb"),
    (i.Rpm = "rpm"),
    (i.AppImage = "appimage"),
    (i.App = "app");
})(Kl || (Kl = {}));
async function Ai() {
  return Ve("plugin:app|version");
}
const tl = Xt(null),
  Li = Xt(
    typeof localStorage < "u"
      ? localStorage.getItem("absol_obs_mode") === "true"
      : !1,
  );
var kc = u('<span class="mandatory-badge svelte-rv58o1">OBRIGATÓRIA</span>'),
  Sc = u(
    '<div class="progress-wrap svelte-rv58o1"><div class="progress-track svelte-rv58o1"><div class="progress-bar indeterminate svelte-rv58o1"></div></div> <span class="progress-pct svelte-rv58o1">Instalando…</span></div>',
  ),
  Tc = u('<button class="btn-update svelte-rv58o1">Instalar</button>'),
  zc = u('<div class="install-error svelte-rv58o1"> </div>'),
  Mc = u(
    '<section><div class="row svelte-rv58o1"><div><!></div> <div class="row-body svelte-rv58o1"><span class="row-title svelte-rv58o1"> <!></span> <span class="row-desc svelte-rv58o1"> </span></div> <!></div> <!></section>',
  ),
  Cc = u(
    '<button class="btn-danger-confirm svelte-rv58o1">Confirmar</button> <button class="btn-cancel svelte-rv58o1">Cancelar</button>',
    1,
  ),
  Ec = u('<button class="btn-danger svelte-rv58o1">Limpar</button>'),
  Ac = u('<div class="divider svelte-rv58o1"></div>'),
  Lc = u(
    '<!> <div class="info-row svelte-rv58o1"><div class="info-icon svelte-rv58o1"><!></div> <span class="info-label svelte-rv58o1"> </span> <span> </span></div>',
    1,
  ),
  Zc = u(
    '<div class="page svelte-rv58o1"><header class="svelte-rv58o1"><h1 class="svelte-rv58o1">> Sistema</h1> <p class="svelte-rv58o1">Performance e atualizações</p></header> <!> <section class="card svelte-rv58o1"><div class="row svelte-rv58o1"><div class="row-body svelte-rv58o1"><span class="row-title svelte-rv58o1">Iniciar com o Windows</span> <span class="row-desc svelte-rv58o1">Abre o ABSOL automaticamente ao ligar o computador</span></div> <!></div></section> <section class="card svelte-rv58o1"><div class="row svelte-rv58o1"><div class="row-body svelte-rv58o1"><span class="row-title svelte-rv58o1">Minimizar ao fechar</span> <span class="row-desc svelte-rv58o1">Ao clicar em fechar, o app vai para a bandeja em vez de encerrar</span></div> <!></div></section> <section class="card svelte-rv58o1"><div class="row svelte-rv58o1"><div class="row-body svelte-rv58o1"><span class="row-title svelte-rv58o1">Modo OBS / Streamer</span> <span class="row-desc svelte-rv58o1">Alta prioridade para o OBS capturar o áudio em segundo plano</span></div> <!></div></section> <section class="card svelte-rv58o1"><div class="row svelte-rv58o1"><div class="row-icon danger-icon svelte-rv58o1"><!></div> <div class="row-body svelte-rv58o1"><span class="row-title svelte-rv58o1">Limpar cache e configurações</span> <span class="row-desc svelte-rv58o1">Remove preferências, módulos e dados locais. Sessão mantida.</span></div> <!></div></section> <section class="card info-card svelte-rv58o1"></section></div>',
  );
function Rc(i, t) {
  Me(t, !0);
  const o = () => kt(tl, "$updateStore", v),
    [v, c] = ta();
  let d = oe(localStorage.getItem("absol_autostart") === "true");
  async function s(J) {
    h(d, J, !0),
      localStorage.setItem("absol_autostart", String(J)),
      J ? await yc() : await qc();
  }
  let b = oe(localStorage.getItem("absol_minimize_on_close") !== "false");
  function g(J) {
    h(b, J, !0),
      localStorage.setItem("absol_minimize_on_close", String(J)),
      Ve("set_minimize_on_close", { enabled: J });
  }
  let _ = oe(localStorage.getItem("absol_obs_mode") === "true");
  function F(J) {
    h(_, J, !0),
      localStorage.setItem("absol_obs_mode", String(J)),
      Li.set(J),
      Ve("set_obs_mode", { enabled: J });
  }
  let V = q(o),
    T = oe(!1),
    Z = oe(null);
  async function M() {
    h(T, !0), h(Z, null);
    try {
      await Ve("install_update");
    } catch (J) {
      h(T, !1);
      const se = String(J);
      h(Z, se, !0),
        Aa.push({ type: "error", message: `Erro ao instalar: ${se}` });
    }
  }
  let S = oe("..."),
    ae = q(() => [
      { icon: xv, label: "Versão", value: e(S), accent: !1 },
      { icon: gv, label: "Plataforma", value: "Windows 10/11", accent: !1 },
      { icon: pv, label: "Arquitetura", value: "x64", accent: !1 },
    ]),
    D = oe(!1);
  function z() {
    if (!e(D)) {
      h(D, !0);
      return;
    }
    const J = "absol_session",
      se = localStorage.getItem(J);
    localStorage.clear(), se && localStorage.setItem(J, se), location.reload();
  }
  function re() {
    h(D, !1);
  }
  $t(() => {
    Ai().then((J) => {
      h(S, J, !0);
    }),
      xc().then((J) => {
        h(d, J, !0), localStorage.setItem("absol_autostart", String(J));
      }),
      Ve("set_minimize_on_close", { enabled: e(b) }),
      e(_) && Ve("set_obs_mode", { enabled: !0 }),
      Ht("absol://update-progress", () => {});
  });
  var I = Zc(),
    W = l(I),
    ve = l(W);
  Ne(
    ve,
    (J, se) => (Tt == null ? void 0 : Tt(J, se)),
    () => ({ color: "var(--lime)" }),
  ),
    _t(2),
    a(W);
  var Y = r(W, 2);
  {
    var X = (J) => {
      var se = Mc();
      let H;
      var U = l(se),
        G = l(U);
      let Pe;
      var we = l(G);
      xi(we, { size: 15 }), a(G);
      var Fe = r(G, 2),
        De = l(Fe),
        ge = l(De),
        qe = r(ge);
      {
        var je = (ke) => {
          var j = kc();
          n(ke, j);
        };
        K(qe, (ke) => {
          e(V).mandatory && ke(je);
        });
      }
      a(De);
      var Ie = r(De, 2),
        Xe = l(Ie, !0);
      a(Ie), a(Fe);
      var Ye = r(Fe, 2);
      {
        var rt = (ke) => {
            var j = Sc();
            n(ke, j);
          },
          ft = (ke) => {
            var j = Tc();
            pe("click", j, M), n(ke, j);
          };
        K(Ye, (ke) => {
          e(T) ? ke(rt) : ke(ft, -1);
        });
      }
      a(U);
      var Je = r(U, 2);
      {
        var ce = (ke) => {
          var j = zc(),
            $ = l(j, !0);
          a(j), w(() => x($, e(Z))), n(ke, j);
        };
        K(Je, (ke) => {
          e(Z) && ke(ce);
        });
      }
      a(se),
        w(() => {
          (H = N(se, 1, "card update-card svelte-rv58o1", null, H, {
            mandatory: e(V).mandatory,
          })),
            (Pe = N(G, 1, "row-icon svelte-rv58o1", null, Pe, {
              "update-icon-accent": !e(V).mandatory,
              "update-icon-warn": e(V).mandatory,
            })),
            x(ge, `v${e(V).version ?? ""} disponível `),
            x(Xe, e(V).notes);
        }),
        n(J, se);
    };
    K(Y, (J) => {
      e(V) && J(X);
    });
  }
  var ie = r(Y, 2),
    P = l(ie),
    ue = r(l(P), 2);
  Da(ue, {
    onchange: s,
    get checked() {
      return e(d);
    },
    set checked(J) {
      h(d, J, !0);
    },
  }),
    a(P),
    a(ie);
  var E = r(ie, 2),
    de = l(E),
    _e = r(l(de), 2);
  Da(_e, {
    onchange: g,
    get checked() {
      return e(b);
    },
    set checked(J) {
      h(b, J, !0);
    },
  }),
    a(de),
    a(E);
  var Ee = r(E, 2),
    be = l(Ee),
    Q = r(l(be), 2);
  Da(Q, {
    onchange: F,
    get checked() {
      return e(_);
    },
    set checked(J) {
      h(_, J, !0);
    },
  }),
    a(be),
    a(Ee);
  var le = r(Ee, 2),
    m = l(le),
    O = l(m),
    L = l(O);
  Sv(L, { size: 15 }), a(O);
  var k = r(O, 4);
  {
    var B = (J) => {
        var se = Cc(),
          H = Lt(se),
          U = r(H, 2);
        pe("click", H, z), pe("click", U, re), n(J, se);
      },
      ee = (J) => {
        var se = Ec();
        pe("click", se, z), n(J, se);
      };
    K(k, (J) => {
      e(D) ? J(B) : J(ee, -1);
    });
  }
  a(m), a(le);
  var me = r(le, 2);
  We(
    me,
    21,
    () => e(ae),
    it,
    (J, se, H) => {
      var U = Lc(),
        G = Lt(U);
      {
        var Pe = (Ye) => {
          var rt = Ac();
          n(Ye, rt);
        };
        K(G, (Ye) => {
          H > 0 && Ye(Pe);
        });
      }
      var we = r(G, 2),
        Fe = l(we),
        De = l(Fe);
      _s(
        De,
        () => e(se).icon,
        (Ye, rt) => {
          rt(Ye, { size: 13 });
        },
      ),
        a(Fe);
      var ge = r(Fe, 2),
        qe = l(ge, !0);
      a(ge);
      var je = r(ge, 2);
      let Ie;
      var Xe = l(je, !0);
      a(je),
        a(we),
        w(() => {
          x(qe, e(se).label),
            (Ie = N(je, 1, "info-value svelte-rv58o1", null, Ie, {
              accent: e(se).accent,
            })),
            x(Xe, e(se).value);
        }),
        n(J, U);
    },
  ),
    a(me),
    a(I),
    n(i, I),
    Ce(),
    c();
}
Bt(["click"]);
var Ic = u(
    '<span class="identity-icon skeleton svelte-r5e5dz" aria-hidden="true"></span>',
  ),
  Dc = u('<span class="tag svelte-r5e5dz"> </span>'),
  Bc = u("<div></div>"),
  Pc = u(
    '<div class="plan-row svelte-r5e5dz"><span class="plan-row-label svelte-r5e5dz">Modalidade</span> <span class="plan-row-value accent svelte-r5e5dz"> </span></div> <div class="divider-inner svelte-r5e5dz"></div>',
    1,
  ),
  jc = u(
    '<div class="plan-card svelte-r5e5dz"><div class="plan-glow svelte-r5e5dz"></div> <div class="plan-header svelte-r5e5dz"><div class="svelte-r5e5dz"><span class="plan-title svelte-r5e5dz">Plano PRO</span></div></div> <div class="plan-rows svelte-r5e5dz"><!> <div class="plan-row svelte-r5e5dz"><span class="plan-row-label svelte-r5e5dz">Expira em</span> <span class="plan-row-value svelte-r5e5dz"> </span></div> <div class="divider-inner svelte-r5e5dz"></div> <div class="plan-row svelte-r5e5dz"><span class="plan-row-label svelte-r5e5dz">Renovação</span> <span class="plan-row-value svelte-r5e5dz"> </span></div></div></div>',
  ),
  Oc = u(
    '<div class="plan-row svelte-r5e5dz"><span class="plan-row-label svelte-r5e5dz">Plano anterior</span> <span class="plan-row-value svelte-r5e5dz"> </span></div> <div class="divider-inner svelte-r5e5dz"></div>',
    1,
  ),
  Nc = u(
    '<div class="status-card expired svelte-r5e5dz"><div class="status-card-header svelte-r5e5dz"><div class="svelte-r5e5dz"><span class="status-card-title expired svelte-r5e5dz">Assinatura Expirada</span> <span class="status-card-sub svelte-r5e5dz">Seu acesso PRO foi encerrado</span></div></div> <div class="plan-rows svelte-r5e5dz"><!> <div class="plan-row svelte-r5e5dz"><span class="plan-row-label svelte-r5e5dz">Expirou em</span> <span class="plan-row-value expired svelte-r5e5dz"> </span></div></div></div>',
  ),
  Fc = u(
    '<div class="plan-row svelte-r5e5dz"><span class="plan-row-label svelte-r5e5dz">Plano</span> <span class="plan-row-value svelte-r5e5dz"> </span></div> <div class="divider-inner svelte-r5e5dz"></div>',
    1,
  ),
  Hc = u(
    '<div class="status-card cancelled svelte-r5e5dz"><div class="status-card-header svelte-r5e5dz"><div class="status-card-icon cancelled svelte-r5e5dz"><!></div> <div class="svelte-r5e5dz"><span class="status-card-title cancelled svelte-r5e5dz">Assinatura Cancelada</span> <span class="status-card-sub svelte-r5e5dz"> </span></div></div> <div class="plan-rows svelte-r5e5dz"><!> <div class="plan-row svelte-r5e5dz"><span class="plan-row-label svelte-r5e5dz">Acesso até</span> <span class="plan-row-value svelte-r5e5dz"> </span></div></div></div>',
  ),
  Qc = u(
    '<div class="free-card svelte-r5e5dz"><div class="free-left svelte-r5e5dz"><div class="svelte-r5e5dz"><span class="free-title svelte-r5e5dz">Plano Gratuito</span> <span class="free-sub svelte-r5e5dz">Sem assinatura ativa</span></div></div> <button class="btn-upgrade svelte-r5e5dz">Assinar PRO</button></div>',
  ),
  Vc = u(
    '<button class="btn-upgrade svelte-r5e5dz">Renovar assinatura</button>',
  ),
  Wc = u(
    '<button class="btn-primary svelte-r5e5dz">Ver perfil no site</button>',
  ),
  Uc = u(
    '<div class="page-wrap svelte-r5e5dz"><div class="page svelte-r5e5dz"><div class="hero svelte-r5e5dz"><h1 class="svelte-r5e5dz">> Perfil</h1> <div class="identity-level-row svelte-r5e5dz"><div class="identity-row svelte-r5e5dz"><!> <img alt="Ícone de invocador"/> <span class="identity-nick svelte-r5e5dz"> <!></span></div> <div class="identity-level-divider svelte-r5e5dz"></div> <div class="level-row svelte-r5e5dz"><div class="level-box svelte-r5e5dz"> </div> <div class="level-info svelte-r5e5dz"><div class="progress-track svelte-r5e5dz"></div> <span class="xp-label svelte-r5e5dz"><!></span></div></div></div></div> <div class="divider svelte-r5e5dz"></div> <div class="info-card svelte-r5e5dz"><div class="info-row svelte-r5e5dz"><span class="info-label svelte-r5e5dz">E-mail</span> <span class="info-value svelte-r5e5dz"> </span></div> <div class="divider-inner svelte-r5e5dz"></div> <div class="info-row svelte-r5e5dz"><span class="info-label svelte-r5e5dz">Membro desde</span> <span class="info-value svelte-r5e5dz"> </span></div></div> <!> <div class="actions svelte-r5e5dz"><!> <button class="btn-logout svelte-r5e5dz"> </button></div></div></div>',
  );
function Gc(i, t) {
  Me(t, !0);
  const o = () => kt(Wa, "$experience", d),
    v = () => kt(oa, "$auth", d),
    c = () => kt(rs, "$riotProfile", d),
    [d, s] = ta(),
    b = 10;
  let g = q(o),
    _ = q(() =>
      e(g) && e(g).xp_for_next_level > 0
        ? e(g).level_xp / e(g).xp_for_next_level
        : 0,
    ),
    F = q(() => Math.min(b, Math.round(e(_) * b)));
  $t(() => {
    Wa.init();
  });
  function V(te) {
    const ne = new Date(te);
    return isNaN(ne.getTime())
      ? "—"
      : `${ne.getDate().toString().padStart(2, "0")}/${(ne.getMonth() + 1).toString().padStart(2, "0")}/${ne.getFullYear()}`;
  }
  function T(te) {
    const ne = new Date(te);
    return isNaN(ne.getTime())
      ? null
      : Math.floor((ne.getTime() - Date.now()) / (1e3 * 60 * 60 * 24));
  }
  const Z = {
    monthly: "Mensal",
    semester: "Semestral",
    annual: "Anual",
    influencer: "Influencer",
    redeem: "Resgate",
  };
  let M = q(v),
    S = q(c),
    ae = q(() => {
      var te, ne;
      return (
        ((ne = (te = e(M)) == null ? void 0 : te.user.tag) == null
          ? void 0
          : ne.split("#")[0]) ?? "—"
      );
    }),
    D = q(() => {
      var te, ne;
      return (
        ((ne = (te = e(M)) == null ? void 0 : te.user.tag) == null
          ? void 0
          : ne.split("#")[1]) ?? ""
      );
    }),
    z = q(() => {
      var te;
      return ((te = e(S)) == null ? void 0 : te.profile_icon_id) ?? 23;
    }),
    re = q(() => Lo(e(z))),
    I = oe(!1);
  Gt(() => {
    e(re), h(I, !1);
  });
  let W = q(() => {
      var te, ne, Ue, C, He, at;
      return {
        name: ((te = e(M)) == null ? void 0 : te.user.tag) ?? "—",
        plan: ((ne = e(M)) == null ? void 0 : ne.user.plan) ?? "FREE",
        subscriptionStatus:
          ((Ue = e(M)) == null ? void 0 : Ue.user.subscriptionStatus) ?? "free",
        subscriptionPlan:
          ((C = e(M)) == null ? void 0 : C.user.subscriptionPlan) ?? "",
        createdAt: V(((He = e(M)) == null ? void 0 : He.user.createdAt) ?? ""),
        expiresSub: V(
          ((at = e(M)) == null ? void 0 : at.user.expiresSub) ?? "",
        ),
      };
    }),
    ve = q(() => {
      var te;
      return T(((te = e(M)) == null ? void 0 : te.user.expiresSub) ?? "");
    }),
    Y = q(() => ({ expiresAt: e(W).expiresSub, renewsIn: e(ve) })),
    X = oe(!1);
  function ie() {
    h(X, !0), setTimeout(() => oa.logout(), 400);
  }
  var P = Uc(),
    ue = l(P),
    E = l(ue),
    de = l(E);
  Ne(
    de,
    (te, ne) => (Tt == null ? void 0 : Tt(te, ne)),
    () => ({ color: "var(--lime)" }),
  );
  var _e = r(de, 2),
    Ee = l(_e),
    be = l(Ee);
  {
    var Q = (te) => {
      var ne = Ic();
      n(te, ne);
    };
    K(be, (te) => {
      e(I) || te(Q);
    });
  }
  var le = r(be, 2);
  let m;
  var O = r(le, 2),
    L = l(O, !0),
    k = r(L);
  {
    var B = (te) => {
      var ne = Dc(),
        Ue = l(ne);
      a(ne), w(() => x(Ue, `#${e(D) ?? ""}`)), n(te, ne);
    };
    K(k, (te) => {
      e(D) && te(B);
    });
  }
  a(O), a(Ee);
  var ee = r(Ee, 4),
    me = l(ee),
    J = l(me, !0);
  a(me);
  var se = r(me, 2),
    H = l(se);
  We(
    H,
    21,
    () => Array(b),
    it,
    (te, ne, Ue) => {
      var C = Bc();
      let He;
      w(
        () =>
          (He = N(C, 1, "segment svelte-r5e5dz", null, He, {
            filled: Ue < e(F),
          })),
      ),
        n(te, C);
    },
  ),
    a(H);
  var U = r(H, 2),
    G = l(U);
  {
    var Pe = (te) => {
        var ne = Ca();
        w(
          (Ue, C) => x(ne, `${Ue ?? ""} / ${C ?? ""} XP`),
          [
            () => e(g).level_xp.toLocaleString("pt-BR"),
            () => e(g).xp_for_next_level.toLocaleString("pt-BR"),
          ],
        ),
          n(te, ne);
      },
      we = (te) => {
        var ne = Ca("— / — XP");
        n(te, ne);
      };
    K(G, (te) => {
      e(g) ? te(Pe) : te(we, -1);
    });
  }
  a(U), a(se), a(ee), a(_e), a(E);
  var Fe = r(E, 4),
    De = l(Fe),
    ge = r(l(De), 2),
    qe = l(ge, !0);
  a(ge), a(De);
  var je = r(De, 4),
    Ie = r(l(je), 2),
    Xe = l(Ie, !0);
  a(Ie), a(je), a(Fe);
  var Ye = r(Fe, 2);
  {
    var rt = (te) => {
        var ne = jc(),
          Ue = r(l(ne), 4),
          C = l(Ue);
        {
          var He = (ut) => {
            var Te = Pc(),
              Qe = Lt(Te),
              et = r(l(Qe), 2),
              zt = l(et, !0);
            a(et),
              a(Qe),
              _t(2),
              w(() => x(zt, Z[e(W).subscriptionPlan] ?? e(W).subscriptionPlan)),
              n(ut, Te);
          };
          K(C, (ut) => {
            e(W).subscriptionPlan && ut(He);
          });
        }
        var at = r(C, 2),
          Et = r(l(at), 2),
          fe = l(Et, !0);
        a(Et), a(at);
        var Se = r(at, 4),
          Le = r(l(Se), 2),
          ot = l(Le, !0);
        a(Le),
          a(Se),
          a(Ue),
          a(ne),
          w(() => {
            x(fe, e(Y).expiresAt),
              x(
                ot,
                e(Y).renewsIn !== null
                  ? e(Y).renewsIn <= 0
                    ? "Hoje"
                    : `em ${e(Y).renewsIn} dias`
                  : "—",
              );
          }),
          n(te, ne);
      },
      ft = (te) => {
        var ne = Nc(),
          Ue = r(l(ne), 2),
          C = l(Ue);
        {
          var He = (Se) => {
            var Le = Oc(),
              ot = Lt(Le),
              ut = r(l(ot), 2),
              Te = l(ut, !0);
            a(ut),
              a(ot),
              _t(2),
              w(() => x(Te, Z[e(W).subscriptionPlan] ?? e(W).subscriptionPlan)),
              n(Se, Le);
          };
          K(C, (Se) => {
            e(W).subscriptionPlan && Se(He);
          });
        }
        var at = r(C, 2),
          Et = r(l(at), 2),
          fe = l(Et, !0);
        a(Et), a(at), a(Ue), a(ne), w(() => x(fe, e(Y).expiresAt)), n(te, ne);
      },
      Je = (te) => {
        var ne = Hc(),
          Ue = l(ne),
          C = l(Ue),
          He = l(C);
        Yn(He, { size: 14 }), a(C);
        var at = r(C, 2),
          Et = r(l(at), 2),
          fe = l(Et);
        a(Et), a(at), a(Ue);
        var Se = r(Ue, 2),
          Le = l(Se);
        {
          var ot = (et) => {
            var zt = Fc(),
              bt = Lt(zt),
              xt = r(l(bt), 2),
              ht = l(xt, !0);
            a(xt),
              a(bt),
              _t(2),
              w(() => x(ht, Z[e(W).subscriptionPlan] ?? e(W).subscriptionPlan)),
              n(et, zt);
          };
          K(Le, (et) => {
            e(W).subscriptionPlan && et(ot);
          });
        }
        var ut = r(Le, 2),
          Te = r(l(ut), 2),
          Qe = l(Te, !0);
        a(Te),
          a(ut),
          a(Se),
          a(ne),
          w(() => {
            x(fe, `Acesso ativo até ${e(Y).expiresAt ?? ""}`),
              x(Qe, e(Y).expiresAt);
          }),
          n(te, ne);
      },
      ce = (te) => {
        var ne = Qc(),
          Ue = r(l(ne), 2);
        Ne(
          Ue,
          (C, He) => {
            var at;
            return (at = wt) == null ? void 0 : at(C, He);
          },
          () => ({ scale: 1.05, pressScale: 0.97 }),
        ),
          a(ne),
          pe("click", Ue, () => ra(`${_a}/#assinar`)),
          n(te, ne);
      };
    K(Ye, (te) => {
      e(W).subscriptionStatus === "active"
        ? te(rt)
        : e(W).subscriptionStatus === "expired"
          ? te(ft, 1)
          : e(W).subscriptionStatus === "cancelled"
            ? te(Je, 2)
            : te(ce, -1);
    });
  }
  var ke = r(Ye, 2),
    j = l(ke);
  {
    var $ = (te) => {
        var ne = Vc();
        Ne(
          ne,
          (Ue, C) => {
            var He;
            return (He = wt) == null ? void 0 : He(Ue, C);
          },
          () => ({ scale: 1.05, pressScale: 0.97 }),
        ),
          pe("click", ne, () => ra(`${_a}/#assinar`)),
          n(te, ne);
      },
      Ze = (te) => {
        var ne = Wc();
        Ne(
          ne,
          (Ue, C) => {
            var He;
            return (He = wt) == null ? void 0 : He(Ue, C);
          },
          () => ({ scale: 1.05, pressScale: 0.97 }),
        ),
          pe("click", ne, () => ra(`${_a}/dashboard`)),
          n(te, ne);
      };
    K(j, (te) => {
      e(W).subscriptionStatus === "expired" ? te($) : te(Ze, -1);
    });
  }
  var ye = r(j, 2),
    he = l(ye, !0);
  a(ye),
    Ne(
      ye,
      (te, ne) => {
        var Ue;
        return (Ue = wt) == null ? void 0 : Ue(te, ne);
      },
      () => ({ scale: 1.05, pressScale: 0.97 }),
    ),
    a(ke),
    a(ue),
    a(P),
    w(() => {
      var te, ne;
      y(le, "src", e(re)),
        (m = N(le, 1, "identity-icon svelte-r5e5dz", null, m, {
          pending: !e(I),
        })),
        x(L, e(ae)),
        x(J, ((te = e(g)) == null ? void 0 : te.level) ?? "—"),
        x(qe, ((ne = e(M)) == null ? void 0 : ne.user.email) ?? "—"),
        x(Xe, e(W).createdAt),
        (ye.disabled = e(X)),
        x(he, e(X) ? "Saindo..." : "Deslogar");
    }),
    Pa("load", le, () => h(I, !0)),
    Pa("error", le, () => h(I, !0)),
    cl(le),
    pe("click", ye, ie),
    n(i, P),
    Ce(),
    s();
}
Bt(["click"]);
const Ua = new WeakMap(),
  al = new WeakSet(),
  sl = new IntersectionObserver(
    (i) => {
      for (const t of i) {
        if (!t.isIntersecting) continue;
        const o = t.target,
          v = Ua.get(o);
        v !== void 0 && ((o.style.backgroundImage = v), Ua.delete(o)),
          al.add(o),
          sl.unobserve(o);
      }
    },
    { rootMargin: "400px" },
  );
function Us(i, t) {
  return (
    Ua.set(i, t),
    sl.observe(i),
    {
      update(o) {
        al.has(i) ? (i.style.backgroundImage = o) : Ua.set(i, o);
      },
      destroy() {
        sl.unobserve(i), Ua.delete(i), al.delete(i);
      },
    }
  );
}
var Kc = u('<div class="thumb skeleton svelte-ik072d"></div>'),
  $c = u('<div class="grid svelte-ik072d"></div>'),
  Yc = u('<div class="empty svelte-ik072d">Nenhum campeão encontrado.</div>'),
  Xc = u('<span class="check svelte-ik072d"><!></span>'),
  Jc = u(
    '<button><!> <span class="thumb-name svelte-ik072d"> </span></button>',
  ),
  e0 = u('<div class="letter-divider svelte-ik072d"> </div> <!>', 1),
  t0 = u("<div></div>"),
  a0 = u(
    '<div class="page svelte-ik072d"><header class="svelte-ik072d"><div class="svelte-ik072d"><h1 class="svelte-ik072d">> Wallpapers</h1> <p class="svelte-ik072d">Escolha a splash art usada como plano de fundo do Desktop</p></div> <label class="auto-toggle svelte-ik072d"><span class="svelte-ik072d">Sincronizar com a última partida</span> <!></label></header> <div class="search-bar svelte-ik072d"><!> <input type="text" placeholder="Buscar campeão..." class="svelte-ik072d"/></div> <!></div>',
  );
function s0(i, t) {
  Me(t, !0);
  const o = () => kt(Nl, "$autoWallpaperEnabled", d),
    v = () => kt(b, "$recent", d),
    c = () => kt(Ys, "$wallpaperChampion", d),
    [d, s] = ta(),
    { recent: b } = fa;
  Gt(() => {
    o() && hi(v()[0]);
  });
  let g = oe(va([])),
    _ = oe(!0),
    F = oe("");
  $t(async () => {
    h(g, await Zo(), !0), h(_, !1);
  });
  let V = q(() =>
      e(F).trim()
        ? e(g).filter((P) =>
            P.name.toLowerCase().includes(e(F).trim().toLowerCase()),
          )
        : e(g),
    ),
    T = q(() => {
      var ue;
      const P = [];
      for (const E of e(V)) {
        const de =
            ((ue = E.name[0]) == null ? void 0 : ue.toUpperCase()) ?? "#",
          _e = P[P.length - 1];
        _e && _e.letter === de
          ? _e.champs.push(E)
          : P.push({ letter: de, champs: [E] });
      }
      return P;
    });
  var Z = a0(),
    M = l(Z),
    S = l(M),
    ae = l(S);
  Ne(
    ae,
    (P, ue) => (Tt == null ? void 0 : Tt(P, ue)),
    () => ({ color: "var(--lime)" }),
  ),
    _t(2),
    a(S);
  var D = r(S, 2),
    z = r(l(D), 2);
  Da(z, {
    get checked() {
      return o();
    },
    onchange: (P) => Nl.set(P),
  }),
    a(D),
    a(M);
  var re = r(M, 2),
    I = l(re);
  bi(I, { size: 15 });
  var W = r(I, 2);
  ja(W), a(re);
  var ve = r(re, 2);
  {
    var Y = (P) => {
        var ue = $c();
        We(
          ue,
          20,
          () => Array(12),
          it,
          (E, de) => {
            var _e = Kc();
            n(E, _e);
          },
        ),
          a(ue),
          n(P, ue);
      },
      X = (P) => {
        var ue = Yc();
        n(P, ue);
      },
      ie = (P) => {
        var ue = t0();
        let E;
        We(
          ue,
          21,
          () => e(T),
          (de) => de.letter,
          (de, _e) => {
            var Ee = e0(),
              be = Lt(Ee),
              Q = l(be, !0);
            a(be);
            var le = r(be, 2);
            We(
              le,
              17,
              () => e(_e).champs,
              (m) => m.id,
              (m, O) => {
                var L = Jc();
                let k;
                var B = l(L);
                {
                  var ee = (se) => {
                    var H = Xc(),
                      U = l(H);
                    bn(U, { size: 13 }), a(H), n(se, H);
                  };
                  K(B, (se) => {
                    c() === e(O).id && se(ee);
                  });
                }
                var me = r(B, 2),
                  J = l(me, !0);
                a(me),
                  a(L),
                  Ne(
                    L,
                    (se, H) => (Us == null ? void 0 : Us(se, H)),
                    () => `url(${Ro(e(O).id)})`,
                  ),
                  w(() => {
                    (k = N(L, 1, "thumb svelte-ik072d", null, k, {
                      active: c() === e(O).id,
                    })),
                      y(L, "title", e(O).name),
                      (L.disabled = o()),
                      x(J, e(O).name);
                  }),
                  pe("click", L, () => Ys.set(e(O).id)),
                  n(m, L);
              },
            ),
              w(() => x(Q, e(_e).letter)),
              n(de, Ee);
          },
        ),
          a(ue),
          w(
            () =>
              (E = N(ue, 1, "grid svelte-ik072d", null, E, { locked: o() })),
          ),
          n(P, ue);
      };
    K(ve, (P) => {
      e(_) ? P(Y) : e(V).length === 0 ? P(X, 1) : P(ie, -1);
    });
  }
  a(Z),
    Ka(
      W,
      () => e(F),
      (P) => h(F, P),
    ),
    n(i, Z),
    Ce(),
    s();
}
Bt(["click"]);
const l0 = 600 * 1e3;
let $l = 0;
const { subscribe: i0, set: o0 } = Xt([]),
  ll = Xt(!1),
  il = Xt(!1);
async function r0() {
  if (!(Date.now() - $l < l0)) {
    ll.set(!0), il.set(!1);
    try {
      await fi();
      const i = await fetch(`${ul}/changelog`).then((t) => t.json());
      o0(i), ($l = Date.now());
    } catch {
      il.set(!0);
    } finally {
      ll.set(!1);
    }
  }
}
const Gs = { subscribe: i0, load: r0, loading: ll, failed: il },
  n0 = new Set(
    [
      _a,
      "https://absol.lol",
      "https://absol.stagespun.dev",
      "https://discord.com",
      "https://discord.gg",
    ].flatMap((i) => {
      try {
        return [new URL(i).origin];
      } catch {
        return [];
      }
    }),
  );
function Zi(i, t) {
  if (!i) return null;
  try {
    if (n0.has(new URL(i).origin)) return i;
  } catch {
    return null;
  }
  return (
    Ve("log_session_handoff_error", {
      detail: `${t} com url fora do escopo: ${i}`,
    }).catch(() => {}),
    null
  );
}
var v0 = u(
    '<div class="log-block skeleton svelte-rtq28h" aria-hidden="true"></div>',
  ),
  d0 = u(
    '<div class="state svelte-rtq28h">Não consegui buscar as novidades.<br class="svelte-rtq28h"/>Verifique sua conexão e reabra esta tela.</div>',
  ),
  c0 = u(
    '<div class="state svelte-rtq28h">Nenhuma novidade publicada ainda.</div>',
  ),
  u0 = u('<img class="log-art svelte-rtq28h" loading="lazy"/>'),
  p0 = u(
    '<button class="log-link svelte-rtq28h">Ver as notas desta versão</button>',
  ),
  h0 = u('<div class="log-media svelte-rtq28h"><!> <!></div>'),
  f0 = u(
    '<li class="svelte-rtq28h"><span class="log-bullet svelte-rtq28h"></span> </li>',
  ),
  m0 = u('<ul class="log-items svelte-rtq28h"></ul>'),
  g0 = u(
    '<div class="log-block svelte-rtq28h"><div class="log-header svelte-rtq28h"><span class="log-ver svelte-rtq28h"> </span> <span> </span> <span class="log-date svelte-rtq28h"> </span></div> <!> <!></div>',
  ),
  w0 = u(
    '<div class="page svelte-rtq28h"><header class="svelte-rtq28h"><h1 class="svelte-rtq28h">> Novidades</h1> <p class="svelte-rtq28h">Últimas atualizações do ABSOL</p></header> <div class="card svelte-rtq28h"><div class="changelog-list svelte-rtq28h"><!> <!></div></div></div>',
  );
function _0(i, t) {
  Me(t, !1);
  const o = () => kt(Gs, "$changelogStore", d),
    v = () => kt(b, "$loading", d),
    c = () => kt(g, "$failed", d),
    [d, s] = ta(),
    { loading: b, failed: g } = Gs;
  $t(() => {
    Gs.load();
  }),
    Xa();
  var _ = w0(),
    F = l(_),
    V = l(F);
  Ne(
    V,
    (D, z) => (Tt == null ? void 0 : Tt(D, z)),
    () => ({ color: "var(--lime)" }),
  ),
    _t(2),
    a(F);
  var T = r(F, 2),
    Z = l(T),
    M = l(Z);
  {
    var S = (D) => {
      var z = ma(),
        re = Lt(z);
      {
        var I = (Y) => {
            var X = ma(),
              ie = Lt(X);
            We(
              ie,
              0,
              () => Array(3),
              it,
              (P, ue) => {
                var E = v0();
                n(P, E);
              },
            ),
              n(Y, X);
          },
          W = (Y) => {
            var X = d0();
            n(Y, X);
          },
          ve = (Y) => {
            var X = c0();
            n(Y, X);
          };
        K(re, (Y) => {
          v() ? Y(I) : c() ? Y(W, 1) : Y(ve, -1);
        });
      }
      n(D, z);
    };
    K(M, (D) => {
      o().length === 0 && D(S);
    });
  }
  var ae = r(M, 2);
  We(ae, 1, o, it, (D, z) => {
    const re = zo(() => Zi(e(z).patch_note_url, "nota de atualizacao"));
    var I = g0(),
      W = l(I),
      ve = l(W),
      Y = l(ve, !0);
    a(ve);
    var X = r(ve, 2);
    let ie;
    var P = l(X, !0);
    a(X);
    var ue = r(X, 2),
      E = l(ue, !0);
    a(ue), a(W);
    var de = r(W, 2);
    {
      var _e = (Q) => {
        var le = h0(),
          m = l(le);
        {
          var O = (B) => {
            var ee = u0();
            w(() => {
              y(ee, "src", e(z).image_url),
                y(ee, "alt", `Arte da versão ${e(z).version ?? ""}`);
            }),
              n(B, ee);
          };
          K(m, (B) => {
            e(z).image_url && B(O);
          });
        }
        var L = r(m, 2);
        {
          var k = (B) => {
            var ee = p0();
            pe("click", ee, () => ra(e(re))), n(B, ee);
          };
          K(L, (B) => {
            e(re) && B(k);
          });
        }
        a(le), n(Q, le);
      };
      K(de, (Q) => {
        (e(z).image_url || e(re)) && Q(_e);
      });
    }
    var Ee = r(de, 2);
    {
      var be = (Q) => {
        var le = m0();
        We(
          le,
          5,
          () => e(z).changes,
          it,
          (m, O) => {
            var L = f0(),
              k = r(l(L));
            a(L), w(() => x(k, ` ${e(O) ?? ""}`)), n(m, L);
          },
        ),
          a(le),
          n(Q, le);
      };
      K(Ee, (Q) => {
        e(z).changes.length > 0 && Q(be);
      });
    }
    a(I),
      w(() => {
        x(Y, e(z).version),
          (ie = N(X, 1, "log-tag svelte-rtq28h", null, ie, {
            accent: e(z).tagColor === "accent",
            muted: e(z).tagColor === "muted",
          })),
          x(P, e(z).tag),
          x(E, e(z).date);
      }),
      n(D, I);
  }),
    a(Z),
    a(T),
    a(_),
    n(i, _),
    Ce(),
    s();
}
Bt(["click"]);
function b0() {
  const i = Xt([]),
    t = Xt(!1),
    o = Xt(!1);
  async function v() {
    const c = ya();
    if (c) {
      t.set(!0), o.set(!1);
      try {
        await fi();
        const d = await fetch(`${ul}/api/app/achievements/me`, {
          headers: { Authorization: `Bearer ${c.token}` },
        });
        if (!d.ok) {
          o.set(!0);
          return;
        }
        const s = await d.json();
        i.set(s.achievements ?? []);
      } catch {
        o.set(!0);
      } finally {
        t.set(!1);
      }
    }
  }
  return { list: i, loading: t, failed: o, load: v };
}
const Yl = b0();
var x0 = u(
    '<div class="achievement-card skeleton svelte-1vgn7uj" aria-hidden="true"></div>',
  ),
  y0 = u('<div class="achievements-grid svelte-1vgn7uj"></div>'),
  q0 = u(
    '<div class="empty svelte-1vgn7uj">Não consegui buscar suas conquistas.<br class="svelte-1vgn7uj"/>Verifique sua conexão e reabra esta tela.</div>',
  ),
  k0 = u(
    '<div class="empty svelte-1vgn7uj">Nenhuma conquista por aqui ainda.<br class="svelte-1vgn7uj"/>Jogue com o ABSOL ativo para desbloquear.</div>',
  ),
  S0 = u('<span class="achievement-tier svelte-1vgn7uj"> </span>'),
  T0 = u(
    '<div class="achievement-card svelte-1vgn7uj"><div class="achievement-head svelte-1vgn7uj"><span class="achievement-label svelte-1vgn7uj"> </span> <!></div> <div class="achievement-desc svelte-1vgn7uj"> </div> <div class="achievement-foot svelte-1vgn7uj"><div class="achievement-bar svelte-1vgn7uj"><div class="achievement-bar-fill svelte-1vgn7uj"></div></div> <span class="achievement-count svelte-1vgn7uj"> </span></div></div>',
  ),
  z0 = u('<div class="achievements-grid svelte-1vgn7uj"></div>'),
  M0 = u(
    '<div class="page svelte-1vgn7uj"><div class="page-top svelte-1vgn7uj"><div class="page-header svelte-1vgn7uj"><h1 class="svelte-1vgn7uj">> Conquistas</h1> <p class="svelte-1vgn7uj">Marcos desbloqueados jogando com o ABSOL</p></div></div> <!></div>',
  );
function C0(i, t) {
  Me(t, !1);
  const o = () => kt(b, "$list", d),
    v = () => kt(g, "$loading", d),
    c = () => kt(_, "$failed", d),
    [d, s] = ta(),
    { list: b, loading: g, failed: _ } = Yl;
  $t(() => {
    Yl.load();
  });
  const F = { bronze: "#cd7f32", silver: "#c0c0c0", gold: "#C9A84C" },
    V = { bronze: "Bronze", silver: "Prata", gold: "Ouro" };
  function T(Y) {
    return Y.nextTarget > 0
      ? Math.min(100, Math.round((Y.current / Y.nextTarget) * 100))
      : 100;
  }
  function Z(Y) {
    return Y.tier ? (F[Y.tier] ?? "var(--accent)") : "var(--text-3)";
  }
  Xa();
  var M = M0(),
    S = l(M),
    ae = l(S),
    D = l(ae);
  Ne(
    D,
    (Y, X) => (Tt == null ? void 0 : Tt(Y, X)),
    () => ({ color: "var(--lime)" }),
  ),
    _t(2),
    a(ae),
    a(S);
  var z = r(S, 2);
  {
    var re = (Y) => {
        var X = y0();
        We(
          X,
          4,
          () => Array(8),
          it,
          (ie, P) => {
            var ue = x0();
            n(ie, ue);
          },
        ),
          a(X),
          n(Y, X);
      },
      I = (Y) => {
        var X = q0();
        n(Y, X);
      },
      W = (Y) => {
        var X = k0();
        n(Y, X);
      },
      ve = (Y) => {
        var X = z0();
        We(X, 5, o, it, (ie, P) => {
          var ue = T0(),
            E = l(ue),
            de = l(E),
            _e = l(de, !0);
          a(de);
          var Ee = r(de, 2);
          {
            var be = (ee) => {
              var me = S0(),
                J = l(me, !0);
              a(me),
                w(() => {
                  Oe(me, `color: ${F[e(P).tier] ?? "var(--text-2)" ?? ""}`),
                    x(J, V[e(P).tier] ?? e(P).tier);
                }),
                n(ee, me);
            };
            K(Ee, (ee) => {
              e(P).tier && ee(be);
            });
          }
          a(E);
          var Q = r(E, 2),
            le = l(Q, !0);
          a(Q);
          var m = r(Q, 2),
            O = l(m),
            L = l(O);
          a(O);
          var k = r(O, 2),
            B = l(k);
          a(k),
            a(m),
            a(ue),
            w(
              (ee, me, J) => {
                Oe(ue, `opacity: ${e(P).tier ? 1 : 0.5}`),
                  x(_e, e(P).label),
                  x(le, e(P).description),
                  Oe(L, `width: ${ee ?? ""}%; background: ${me ?? ""}`),
                  x(B, `${J ?? ""}/${e(P).nextTarget ?? ""}`);
              },
              [
                () => T(e(P)),
                () => Z(e(P)),
                () => Math.min(e(P).current, e(P).nextTarget),
              ],
            ),
            n(ie, ue);
        }),
          a(X),
          n(Y, X);
      };
    K(z, (Y) => {
      o().length === 0 && v()
        ? Y(re)
        : o().length === 0 && c()
          ? Y(I, 1)
          : o().length === 0
            ? Y(W, 2)
            : Y(ve, -1);
    });
  }
  a(M), n(i, M), Ce(), s();
}
var E0 = u("<span> </span>"),
  A0 = u('<span class="month-select-value svelte-bov9u3">—</span>'),
  L0 = u('<span class="weekday svelte-bov9u3"> </span>'),
  Z0 = u('<div class="cell empty svelte-bov9u3"></div>'),
  R0 = u("<span> </span>"),
  I0 = u(
    '<button type="button"><span class="day-num svelte-bov9u3"> </span> <!></button>',
  ),
  D0 = u("<span> </span>"),
  B0 = u(
    '<div class="week-row svelte-bov9u3"><!> <button type="button"><span class="week-num svelte-bov9u3"><span class="week-num-label svelte-bov9u3">Semana</span> <span class="week-num-value svelte-bov9u3"></span></span> <!></button></div>',
  ),
  P0 = u('<span class="day-detail-count svelte-bov9u3"> </span>'),
  j0 = u("<span> </span>"),
  O0 = u(
    '<span class="wr-delta-win svelte-bov9u3"> </span> <span class="wr-delta-lose svelte-bov9u3"> </span>',
    1,
  ),
  N0 = tt('<circle class="wr-ring-bg svelte-bov9u3" cx="18" cy="18"></circle>'),
  F0 = tt(
    '<circle class="wr-ring-win svelte-bov9u3" cx="18" cy="18"></circle>',
  ),
  H0 = tt(
    '<circle class="wr-ring-lose svelte-bov9u3" cx="18" cy="18"></circle><!>',
    1,
  ),
  Q0 = u(
    '<div class="day-detail-stat svelte-bov9u3"><span class="day-detail-stat-label svelte-bov9u3">Campeão mais jogado</span> <div class="day-detail-stat-champ svelte-bov9u3"><img class="day-detail-stat-champ-icon svelte-bov9u3"/> <span class="day-detail-stat-champ-name svelte-bov9u3"> </span></div></div>',
  ),
  V0 = u('<span class="day-detail-champ-count svelte-bov9u3"> </span>'),
  W0 = u(
    '<div class="day-detail-champ svelte-bov9u3"><img class="day-detail-champ-icon svelte-bov9u3"/> <!></div>',
  ),
  U0 = u(
    '<div class="day-detail-body svelte-bov9u3"><!> <div class="day-detail-stats svelte-bov9u3"><div class="day-detail-stat wr-stat svelte-bov9u3"><div class="wr-stat-text svelte-bov9u3"><span class="day-detail-stat-label svelte-bov9u3">Win Rate</span> <span class="day-detail-stat-value svelte-bov9u3"> </span> <span class="day-detail-stat-delta svelte-bov9u3"><!></span></div> <svg class="wr-ring svelte-bov9u3" viewBox="0 0 36 36" width="36" height="36"><!></svg></div> <div class="day-detail-stat svelte-bov9u3"><span class="day-detail-stat-label svelte-bov9u3">Contagem de PDL</span> <span> </span></div> <div class="day-detail-stat svelte-bov9u3"><span class="day-detail-stat-label svelte-bov9u3">KDA</span> <span class="day-detail-stat-value svelte-bov9u3"> </span> <span> </span></div> <div class="day-detail-stat svelte-bov9u3"><span class="day-detail-stat-label svelte-bov9u3">CS/min</span> <span class="day-detail-stat-value svelte-bov9u3"> </span></div> <div class="day-detail-stat svelte-bov9u3"><span class="day-detail-stat-label svelte-bov9u3">Kills médios</span> <span class="day-detail-stat-value svelte-bov9u3"> </span></div> <div class="day-detail-stat svelte-bov9u3"><span class="day-detail-stat-label svelte-bov9u3">Mortes médias</span> <span class="day-detail-stat-value svelte-bov9u3"> </span></div> <div class="day-detail-stat svelte-bov9u3"><span class="day-detail-stat-label svelte-bov9u3">Assists médios</span> <span class="day-detail-stat-value svelte-bov9u3"> </span></div> <!></div> <span class="day-detail-matches-title svelte-bov9u3">Campeões jogados</span> <div class="day-detail-champs svelte-bov9u3"></div></div>',
  ),
  G0 = u(
    '<div class="hint-empty svelte-bov9u3"><div class="mod-balloon-wrap svelte-bov9u3" aria-hidden="true"><div class="mod-balloon svelte-bov9u3"><span class="mod-balloon-dot svelte-bov9u3"></span> <span class="mod-balloon-dot svelte-bov9u3"></span> <span class="mod-balloon-dot svelte-bov9u3"></span></div> <span class="mod-balloon-tail svelte-bov9u3"></span></div> <span class="hint svelte-bov9u3"><!></span></div>',
  ),
  K0 = u(
    '<div class="day-detail-head svelte-bov9u3"><span class="day-detail-date svelte-bov9u3"></span> <!></div> <div class="section-divider svelte-bov9u3"></div> <!>',
    1,
  ),
  $0 = u('<div><span class="pdl-bar-value svelte-bov9u3"> </span></div>'),
  Y0 = u("<div><!></div>"),
  X0 = u("<span> </span>"),
  J0 = u('<span class="wl-bar-value win svelte-bov9u3"> </span>'),
  eu = u('<span class="wl-bar-value lose svelte-bov9u3"> </span>'),
  tu = u(
    '<div><div class="wl-bar-group svelte-bov9u3"><div class="wl-bar-wins svelte-bov9u3"><!></div> <div class="wl-bar-losses svelte-bov9u3"><!></div></div></div>',
  ),
  au = u("<span> </span>"),
  su = tt('<polygon fill="var(--win)"></polygon>'),
  lu = tt('<polygon fill="var(--lose)"></polygon>'),
  iu = tt("<circle><title> </title></circle><!>", 1),
  ou = u('<button type="button"></button>'),
  ru = u("<span> </span>"),
  nu = u(
    '<div class="month-evo-content svelte-bov9u3"><div class="month-evo-chart svelte-bov9u3"><svg class="month-evo-svg svelte-bov9u3" preserveAspectRatio="none"><line x1="0" class="month-evo-zero svelte-bov9u3"></line><path fill="var(--lose)" fill-opacity="0.35" stroke="none"></path><path fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><!></svg> <div class="month-evo-cols svelte-bov9u3"></div></div> <div class="pdl-chart-days svelte-bov9u3"></div></div>',
  ),
  vu = u(
    '<div class="cspm-bar-col svelte-bov9u3"><span> </span> <div></div> <span class="weekday-chart-label svelte-bov9u3"> </span></div>',
  ),
  du = u(
    '<div class="page svelte-bov9u3"><header class="svelte-bov9u3"><div><h1 class="svelte-bov9u3">> Calendário</h1> <p class="svelte-bov9u3">Histórico completo de dias jogados com o ABSOL</p></div> <div class="info-note svelte-bov9u3"><div class="info-note-pixels svelte-bov9u3" aria-hidden="true"><span class="px-solid svelte-bov9u3"></span> <span class="px-fade px-fade-a svelte-bov9u3"></span> <span class="px-fade px-fade-b svelte-bov9u3"></span> <span class="px-fade px-fade-c svelte-bov9u3"></span> <span class="px-fade px-fade-d svelte-bov9u3"></span></div> <div class="info-note-body svelte-bov9u3"><span class="info-note-icon svelte-bov9u3">!</span> <span class="info-note-text">PDL contabilizado só com o ABSOL aberto durante a partida</span></div> <div class="info-note-pixels flipped svelte-bov9u3" aria-hidden="true"><span class="px-solid svelte-bov9u3"></span> <span class="px-fade px-fade-a svelte-bov9u3"></span> <span class="px-fade px-fade-b svelte-bov9u3"></span> <span class="px-fade px-fade-c svelte-bov9u3"></span> <span class="px-fade px-fade-d svelte-bov9u3"></span></div></div></header> <div class="calendar-layout svelte-bov9u3"><div class="calendar-col svelte-bov9u3"><div class="toolbar-nav svelte-bov9u3"><div class="queue-filter-slot svelte-bov9u3"><!></div> <button class="nav-btn svelte-bov9u3" aria-label="Mês anterior"><!></button> <span class="month-label svelte-bov9u3"></span> <button class="nav-btn svelte-bov9u3" aria-label="Próximo mês"><!></button> <button type="button"><!></button></div> <div class="calendar-grid svelte-bov9u3"><div class="weekday-row svelte-bov9u3"><!> <span class="weekday svelte-bov9u3">Semana</span></div> <div class="section-divider svelte-bov9u3"></div> <div class="weeks svelte-bov9u3"></div></div></div> <div class="side-col svelte-bov9u3"><div class="day-detail svelte-bov9u3"><!></div></div></div> <div class="section-divider svelte-bov9u3"></div> <h2 class="section-title svelte-bov9u3">Desempenho</h2> <div class="trends-grid svelte-bov9u3"><div class="pdl-chart-card svelte-bov9u3"><button type="button" class="card-collapse-toggle svelte-bov9u3"><span class="pdl-chart-title svelte-bov9u3">PDL por dia</span> <!></button> <div><div class="pdl-chart collapse-inner svelte-bov9u3"><div class="pdl-chart-plot svelte-bov9u3"><div class="pdl-chart-zero svelte-bov9u3"></div> <!></div> <div class="pdl-chart-days svelte-bov9u3"></div></div></div></div> <div class="pdl-chart-card svelte-bov9u3"><button type="button" class="card-collapse-toggle svelte-bov9u3"><span class="pdl-chart-title svelte-bov9u3">Vitórias vs. Derrotas por dia</span> <!></button> <div><div class="pdl-chart collapse-inner svelte-bov9u3"><div class="wl-chart-plot svelte-bov9u3"></div> <div class="pdl-chart-days svelte-bov9u3"></div></div></div></div> <div class="pdl-chart-card month-chart-card svelte-bov9u3"><button type="button" class="card-collapse-toggle svelte-bov9u3"><span class="pdl-chart-title svelte-bov9u3"> </span> <!></button> <!></div> <div class="cspm-chart-card svelte-bov9u3"><button type="button" class="card-collapse-toggle svelte-bov9u3"><span class="cspm-chart-title svelte-bov9u3">Desempenho por dia da semana</span> <!></button> <div><div class="cspm-content collapse-inner svelte-bov9u3"><div class="cspm-chart svelte-bov9u3"></div></div></div></div></div></div>',
  );
function cu(i, t) {
  Me(t, !0);
  const o = () => kt(d, "$matchRows", v),
    [v, c] = ta(),
    { matchRows: d } = fa;
  let s = oe("all");
  function b(p) {
    return typeof p.lp_delta == "number" ? p.lp_delta : null;
  }
  let g = q(() => {
    const p = new Map();
    for (const f of o()) {
      if (!Ma(f.report.queue_id, e(s))) continue;
      const A = new Date(f.synced_at),
        Ae = `${A.getFullYear()}-${String(A.getMonth() + 1).padStart(2, "0")}-${String(A.getDate()).padStart(2, "0")}`,
        Re = p.get(Ae) ?? {
          count: 0,
          wins: 0,
          losses: 0,
          lp: 0,
          lpCount: 0,
          kills: 0,
          deaths: 0,
          assists: 0,
          cspmSum: 0,
          matches: [],
        },
        nt = f.report.result,
        mt = b(f);
      Re.count++,
        nt === "Win"
          ? Re.wins++
          : (f.report.result === "Lose" || f.report.result === "Loss") &&
            Re.losses++,
        mt !== null && ((Re.lp += mt), Re.lpCount++),
        (Re.kills += f.report.kills),
        (Re.deaths += f.report.deaths),
        (Re.assists += f.report.assists),
        (Re.cspmSum += f.report.cs_per_min),
        Re.matches.push({
          champion: f.report.champion,
          result: nt,
          lp: mt,
          cspm: f.report.cs_per_min,
        }),
        p.set(Ae, Re);
    }
    return p;
  });
  const _ = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
    F = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    V = new Date();
  V.setHours(0, 0, 0, 0);
  let T = oe(va(V.getFullYear())),
    Z = oe(va(V.getMonth()));
  function M() {
    is(Z, -1), e(Z) < 0 && (h(Z, 11), is(T, -1));
  }
  function S() {
    is(Z), e(Z) > 11 && (h(Z, 0), is(T));
  }
  let ae,
    D = !1;
  Gt(() => {
    const p = `${F[e(Z)]} ${e(T)}`;
    ae &&
      (D
        ? cs(ae, p, { scrambleColor: "var(--accent)" })
        : (ae.textContent = p)),
      (D = !0);
  });
  function z(p) {
    return `${p.getFullYear()}-${String(p.getMonth() + 1).padStart(2, "0")}-${String(p.getDate()).padStart(2, "0")}`;
  }
  function re() {
    return {
      day: null,
      count: 0,
      wins: 0,
      losses: 0,
      lp: 0,
      lpCount: 0,
      kills: 0,
      deaths: 0,
      assists: 0,
      cspmSum: 0,
      isToday: !1,
      matches: [],
    };
  }
  function I(p) {
    return p.reduce(
      (f, A) => ({
        count: f.count + A.count,
        wins: f.wins + A.wins,
        losses: f.losses + A.losses,
        lp: f.lp + A.lp,
        lpCount: f.lpCount + A.lpCount,
        kills: f.kills + A.kills,
        deaths: f.deaths + A.deaths,
        assists: f.assists + A.assists,
        cspmSum: f.cspmSum + A.cspmSum,
      }),
      {
        count: 0,
        wins: 0,
        losses: 0,
        lp: 0,
        lpCount: 0,
        kills: 0,
        deaths: 0,
        assists: 0,
        cspmSum: 0,
      },
    );
  }
  function W(p) {
    return (p.kills + p.assists) / Math.max(1, p.deaths);
  }
  function ve(p) {
    return p.count > 0 ? p.cspmSum / p.count : 0;
  }
  let Y = q(() => {
      const f = new Date(e(T), e(Z), 1).getDay(),
        A = new Date(e(T), e(Z) + 1, 0).getDate(),
        Ae = e(g),
        Re = [];
      for (let mt = 0; mt < f; mt++) Re.push(re());
      for (let mt = 1; mt <= A; mt++) {
        const Dt = new Date(e(T), e(Z), mt),
          Ge = Ae.get(z(Dt)),
          jt = (Ge == null ? void 0 : Ge.wins) ?? 0,
          pt = (Ge == null ? void 0 : Ge.losses) ?? 0;
        Re.push({
          day: mt,
          count: (Ge == null ? void 0 : Ge.count) ?? 0,
          wins: jt,
          losses: pt,
          lp: (Ge == null ? void 0 : Ge.lp) ?? 0,
          lpCount: (Ge == null ? void 0 : Ge.lpCount) ?? 0,
          kills: (Ge == null ? void 0 : Ge.kills) ?? 0,
          deaths: (Ge == null ? void 0 : Ge.deaths) ?? 0,
          assists: (Ge == null ? void 0 : Ge.assists) ?? 0,
          cspmSum: (Ge == null ? void 0 : Ge.cspmSum) ?? 0,
          isToday: Dt.getTime() === V.getTime(),
          matches: (Ge == null ? void 0 : Ge.matches) ?? [],
        });
      }
      for (; Re.length % 7 !== 0; ) Re.push(re());
      const nt = [];
      for (let mt = 0; mt < Re.length; mt += 7) {
        const Dt = Re.slice(mt, mt + 7);
        nt.push({ days: Dt, summary: I(Dt) });
      }
      return nt;
    }),
    X = q(() => I(e(Y).flatMap((p) => p.days))),
    ie = q(() => {
      let p = e(Z) - 1,
        f = e(T);
      p < 0 && ((p = 11), (f -= 1));
      const A = {
        count: 0,
        wins: 0,
        losses: 0,
        lp: 0,
        lpCount: 0,
        kills: 0,
        deaths: 0,
        assists: 0,
        cspmSum: 0,
      };
      for (const Ae of o()) {
        if (!Ma(Ae.report.queue_id, e(s))) continue;
        const Re = new Date(Ae.synced_at);
        if (Re.getFullYear() !== f || Re.getMonth() !== p) continue;
        const nt = b(Ae);
        A.count++,
          Ae.report.result === "Win"
            ? A.wins++
            : (Ae.report.result === "Lose" || Ae.report.result === "Loss") &&
              A.losses++,
          nt !== null && ((A.lp += nt), A.lpCount++),
          (A.kills += Ae.report.kills),
          (A.deaths += Ae.report.deaths),
          (A.assists += Ae.report.assists),
          (A.cspmSum += Ae.report.cs_per_min);
      }
      return A;
    }),
    P = q(() => {
      const p = se(e(X)),
        f = se(e(ie));
      return p === null || f === null ? null : p - f;
    });
  function ue() {
    for (const p of e(Y)) {
      const f = p.days.find((A) => A.isToday);
      if (f) return { kind: "day", day: f, month: e(Z) };
    }
    return null;
  }
  let E = oe(va(ue()));
  function de(p) {
    p.day !== null && h(E, { kind: "day", day: p, month: e(Z) }, !0);
  }
  function _e(p, f) {
    h(E, { kind: "week", week: p, index: f, month: e(Z) }, !0);
  }
  function Ee() {
    h(E, { kind: "month", month: e(Z), year: e(T) }, !0);
  }
  function be(p) {
    var f;
    return (
      ((f = e(E)) == null ? void 0 : f.kind) === "day" &&
      e(E).month === e(Z) &&
      e(E).day.day === p.day
    );
  }
  function Q() {
    const p = e(E);
    if (!p || p.kind !== "day" || p.month !== e(Z)) return null;
    const f = p.day.day;
    return (
      e(Y)
        .flatMap((A) => A.days)
        .find((A) => A.day === f) ?? null
    );
  }
  function le() {
    const p = e(E);
    return !p || p.kind !== "week" || p.month !== e(Z)
      ? null
      : (e(Y)[p.index] ?? null);
  }
  let m = q(() => {
      var p;
      return e(E)
        ? e(E).kind === "day"
          ? Q()
          : e(E).kind === "week"
            ? (((p = le()) == null ? void 0 : p.summary) ?? null)
            : e(X)
        : null;
    }),
    O = q(() => {
      var p, f;
      return e(E)
        ? e(E).kind === "day"
          ? (((p = Q()) == null ? void 0 : p.matches) ?? [])
          : e(E).kind === "week"
            ? (((f = le()) == null
                ? void 0
                : f.days.flatMap((A) => A.matches)) ?? [])
            : e(Y).flatMap((A) => A.days.flatMap((Ae) => Ae.matches))
        : [];
    }),
    L = q(() => {
      const p = new Map();
      for (const f of e(O)) {
        const A = p.get(f.champion) ?? {
          champion: f.champion,
          games: 0,
          wins: 0,
          losses: 0,
          remakes: 0,
        };
        A.games++,
          f.result === "Win"
            ? A.wins++
            : f.result === "Lose" || f.result === "Loss"
              ? A.losses++
              : f.result === "Remake" && A.remakes++,
          p.set(f.champion, A);
      }
      return Array.from(p.values()).sort(
        (f, A) => A.games - f.games || f.champion.localeCompare(A.champion),
      );
    }),
    k = q(() =>
      e(L).length === 0
        ? null
        : e(L).reduce((p, f) => (f.games > p.games ? f : p), e(L)[0]),
    ),
    B = q(() =>
      e(E)
        ? e(E).kind === "day"
          ? `${e(E).day.day} de ${F[e(E).month]}`
          : e(E).kind === "week"
            ? `Semana ${e(E).index + 1} · ${F[e(E).month]}`
            : `${F[e(E).month]} ${e(E).year}`
        : "",
    ),
    ee,
    me = !1;
  Gt(() => {
    const p = e(B);
    ee &&
      (me
        ? cs(ee, p, { scrambleColor: "var(--accent)" })
        : (ee.textContent = p)),
      (me = !0);
  });
  function J(p) {
    return p <= 0 ? 0 : p === 1 ? 1 : p <= 3 ? 2 : 3;
  }
  function se(p) {
    const f = p.wins + p.losses;
    return f > 0 ? Math.round((p.wins / f) * 100) : null;
  }
  const H = 15.5,
    U = 2 * Math.PI * H,
    G = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  let Pe = q(() => {
    const p = Array.from({ length: 7 }, (f, A) => ({
      weekday: A,
      count: 0,
      wins: 0,
      losses: 0,
    }));
    for (const f of o()) {
      if (!Ma(f.report.queue_id, e(s))) continue;
      const A = p[new Date(f.synced_at).getDay()];
      A.count++,
        f.report.result === "Win"
          ? A.wins++
          : (f.report.result === "Lose" || f.report.result === "Loss") &&
            A.losses++;
    }
    return p;
  });
  function we(p) {
    const f = p.wins + p.losses;
    return f > 0 ? Math.round((p.wins / f) * 100) : null;
  }
  function Fe(p) {
    const f = p.remakes > 0 ? ` ${p.remakes}R` : "";
    return `${ga(p.champion)} — ${p.wins}V ${p.losses}D${f}`;
  }
  let De = q(() =>
      e(Y)
        .flatMap((p) => p.days)
        .filter((p) => p.day !== null),
    ),
    ge = q(() => Math.max(1, ...e(De).map((p) => Math.abs(p.lp)))),
    qe = oe(!0);
  function je() {
    h(qe, !e(qe));
  }
  let Ie = oe(!0);
  function Xe() {
    h(Ie, !e(Ie));
  }
  let Ye = oe(!0),
    rt,
    ft = !1;
  function Je(p) {
    const f = p.scrollHeight;
    $e.fromTo(
      p,
      { opacity: 0, height: 0 },
      {
        opacity: 1,
        height: f,
        duration: 0.32,
        ease: "power2.out",
        onComplete: () => {
          p.style.height = "auto";
        },
      },
    );
  }
  function ce() {
    if (e(Ye)) h(Ye, !1);
    else {
      if (ft || !rt) {
        h(Ye, !0);
        return;
      }
      (ft = !0),
        $e.fromTo(
          rt,
          { height: rt.offsetHeight, opacity: 1 },
          {
            height: 0,
            opacity: 0,
            duration: 0.22,
            ease: "power2.in",
            onComplete: () => {
              (ft = !1), h(Ye, !0);
            },
          },
        );
    }
  }
  function ke(p) {
    return (Math.abs(p) / e(ge)) * 38;
  }
  let j = q(() => Math.max(1, ...e(De).map((p) => p.count)));
  function $(p) {
    return (p / e(j)) * 88;
  }
  let Ze = oe(!0);
  function ye() {
    h(Ze, !e(Ze));
  }
  const he = 100;
  let te = q(() => {
      let p = 0;
      for (const f of o()) {
        if (!Ma(f.report.queue_id, e(s))) continue;
        const A = new Date(f.synced_at);
        A.getFullYear() > e(T) ||
          (A.getFullYear() === e(T) && A.getMonth() >= e(Z)) ||
          (p += b(f) ?? 0);
      }
      return p;
    }),
    ne = q(() => {
      let p = e(te);
      return e(De).map((f) => {
        const A = p,
          Ae = A + f.lp;
        p = Ae;
        const Re = Math.floor(A / he),
          nt = Math.floor(Ae / he),
          mt =
            f.lpCount === 0 ? null : nt > Re ? "up" : nt < Re ? "down" : null;
        return { day: f, rankChange: mt };
      });
    });
  const Ue = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  let C = q(() => {
      const p = Array.from({ length: 12 }, () => ({
        count: 0,
        wins: 0,
        losses: 0,
        lp: 0,
        lpCount: 0,
        kills: 0,
        deaths: 0,
        assists: 0,
        cspmSum: 0,
      }));
      for (const f of o()) {
        if (!Ma(f.report.queue_id, e(s))) continue;
        const A = new Date(f.synced_at);
        if (A.getFullYear() !== e(T)) continue;
        const Ae = p[A.getMonth()],
          Re = b(f);
        Ae.count++,
          f.report.result === "Win"
            ? Ae.wins++
            : (f.report.result === "Lose" || f.report.result === "Loss") &&
              Ae.losses++,
          Re !== null && ((Ae.lp += Re), Ae.lpCount++),
          (Ae.kills += f.report.kills),
          (Ae.deaths += f.report.deaths),
          (Ae.assists += f.report.assists),
          (Ae.cspmSum += f.report.cs_per_min);
      }
      return p;
    }),
    He = q(() => {
      let p = 0;
      for (const f of o())
        !Ma(f.report.queue_id, e(s)) ||
          new Date(f.synced_at).getFullYear() >= e(T) ||
          (p += b(f) ?? 0);
      return p;
    }),
    at = q(() => Math.floor(e(Z) / 4)),
    Et = q(() => {
      const p = e(at) * 4;
      return [0, 1, 2, 3].map((f) => p + f);
    }),
    fe = q(() => `${Ue[e(at) * 4]}–${Ue[e(at) * 4 + 3]}`),
    Se = q(() => {
      let p = e(He);
      for (let f = 0; f < e(at) * 4; f++) p += e(C)[f].lp;
      return p;
    }),
    Le = q(() => {
      let p = e(Se);
      return e(Et).map((f) => {
        const A = e(C)[f],
          Ae = p,
          Re = Ae + A.lp;
        p = Re;
        const nt = Math.floor(Ae / he),
          mt = Math.floor(Re / he),
          Dt =
            A.lpCount === 0 ? null : mt > nt ? "up" : mt < nt ? "down" : null;
        return { bucket: A, rankChange: Dt, cumulative: Re, monthIdx: f };
      });
    });
  function ot(p) {
    h(Z, p, !0);
  }
  let ut = oe(380),
    Te = oe(90);
  const Qe = 8;
  let et = q(() => Math.min(0, ...e(Le).map((p) => p.cumulative))),
    zt = q(() => Math.max(1, ...e(Le).map((p) => p.cumulative))),
    bt = q(() => Math.max(1, e(zt) - e(et)));
  function xt(p) {
    return Qe + (p / (e(Le).length - 1)) * (e(ut) - Qe * 2);
  }
  function ht(p) {
    return e(Te) - Qe - ((p - e(et)) / e(bt)) * (e(Te) - Qe * 2);
  }
  let ze = q(() =>
      e(Le)
        .map((p, f) => `${f === 0 ? "M" : "L"} ${xt(f)} ${ht(p.cumulative)}`)
        .join(" "),
    ),
    xe = q(() => {
      if (e(Le).length === 0) return "";
      const p = ht(0),
        f = xt(e(Le).length - 1),
        A = xt(0);
      return `${e(ze)} L ${f} ${p} L ${A} ${p} Z`;
    });
  var st = du(),
    Rt = l(st),
    Qt = l(Rt),
    Pt = l(Qt);
  Ne(
    Pt,
    (p, f) => (Tt == null ? void 0 : Tt(p, f)),
    () => ({ color: "var(--lime)" }),
  ),
    _t(2),
    a(Qt),
    _t(2),
    a(Rt);
  var yt = r(Rt, 2),
    Yt = l(yt),
    Nt = l(Yt),
    aa = l(Nt),
    Ta = l(aa);
  Ei(Ta, {
    get value() {
      return e(s);
    },
    set value(p) {
      h(s, p, !0);
    },
  }),
    a(aa);
  var Be = r(aa, 2),
    It = l(Be);
  yi(It, { size: 16 }),
    a(Be),
    Ne(
      Be,
      (p, f) => {
        var A;
        return (A = wt) == null ? void 0 : A(p, f);
      },
      () => ({ scale: 1.1, pressScale: 0.9 }),
    );
  var Kt = r(Be, 2);
  St(
    Kt,
    (p) => (ae = p),
    () => ae,
  );
  var za = r(Kt, 2),
    ji = l(za);
  qi(ji, { size: 16 }),
    a(za),
    Ne(
      za,
      (p, f) => {
        var A;
        return (A = wt) == null ? void 0 : A(p, f);
      },
      () => ({ scale: 1.1, pressScale: 0.9 }),
    );
  var Za = r(za, 2);
  let hl;
  var Oi = l(Za);
  {
    var Ni = (p) => {
        var f = E0();
        let A;
        var Ae = l(f, !0);
        a(f),
          w(
            (Re) => {
              (A = N(f, 1, "month-select-value svelte-bov9u3", null, A, {
                win: e(X).lp > 0,
                lose: e(X).lp < 0,
              })),
                x(Ae, Re);
            },
            [() => ha(e(X).lp)],
          ),
          n(p, f);
      },
      Fi = (p) => {
        var f = A0();
        n(p, f);
      };
    K(Oi, (p) => {
      e(X).lpCount > 0 ? p(Ni) : p(Fi, -1);
    });
  }
  a(Za),
    Ne(
      Za,
      (p, f) => {
        var A;
        return (A = wt) == null ? void 0 : A(p, f);
      },
      () => ({ scale: 1.05, pressScale: 0.95 }),
    ),
    a(Nt);
  var fl = r(Nt, 2),
    bs = l(fl),
    Hi = l(bs);
  We(
    Hi,
    17,
    () => _,
    it,
    (p, f) => {
      var A = L0(),
        Ae = l(A, !0);
      a(A), w(() => x(Ae, e(f))), n(p, A);
    },
  ),
    _t(2),
    a(bs);
  var ml = r(bs, 4);
  We(
    ml,
    21,
    () => e(Y),
    it,
    (p, f, A) => {
      var Ae = B0(),
        Re = l(Ae);
      We(
        Re,
        17,
        () => e(f).days,
        it,
        (Ke, lt) => {
          var gt = ma(),
            Ot = Lt(gt);
          {
            var Vt = (qt) => {
                var Mt = Z0();
                n(qt, Mt);
              },
              sa = (qt) => {
                var Mt = I0();
                let Ft;
                var Jt = l(Mt),
                  Ra = l(Jt, !0);
                a(Jt);
                var Oa = r(Jt, 2);
                {
                  var Ia = (la) => {
                    var na = R0();
                    let Ut;
                    var da = l(na, !0);
                    a(na),
                      w(
                        (Na) => {
                          (Ut = N(na, 1, "cell-pdl svelte-bov9u3", null, Ut, {
                            win: e(lt).lp >= 0,
                            lose: e(lt).lp < 0,
                          })),
                            x(da, Na);
                        },
                        [() => ha(e(lt).lp)],
                      ),
                      n(la, na);
                  };
                  K(Oa, (la) => {
                    e(lt).lpCount > 0 && la(Ia);
                  });
                }
                a(Mt),
                  Ne(
                    Mt,
                    (la, na) => {
                      var Ut;
                      return (Ut = wt) == null ? void 0 : Ut(la, na);
                    },
                    () => ({ scale: 1.05, pressScale: 0.95 }),
                  ),
                  w(
                    (la, na, Ut) => {
                      (Ft = N(Mt, 1, "cell svelte-bov9u3", null, Ft, la)),
                        y(Mt, "data-level", na),
                        x(Ra, Ut);
                    },
                    [
                      () => ({ today: e(lt).isToday, selected: be(e(lt)) }),
                      () => J(e(lt).count),
                      () => String(e(lt).day).padStart(2, "0"),
                    ],
                  ),
                  pe("click", Mt, (la) => {
                    de(e(lt)), la.currentTarget.blur();
                  }),
                  n(qt, Mt);
              };
            K(Ot, (qt) => {
              e(lt).day === null ? qt(Vt) : qt(sa, -1);
            });
          }
          n(Ke, gt);
        },
      );
      var nt = r(Re, 2);
      let mt;
      var Dt = l(nt),
        Ge = r(l(Dt), 2);
      (Ge.textContent = A + 1), a(Dt);
      var jt = r(Dt, 2);
      {
        var pt = (Ke) => {
          var lt = D0();
          let gt;
          var Ot = l(lt, !0);
          a(lt),
            w(
              (Vt) => {
                (gt = N(lt, 1, "cell-pdl svelte-bov9u3", null, gt, {
                  win: e(f).summary.lp >= 0,
                  lose: e(f).summary.lp < 0,
                })),
                  x(Ot, Vt);
              },
              [() => ha(e(f).summary.lp)],
            ),
            n(Ke, lt);
        };
        K(jt, (Ke) => {
          e(f).summary.lpCount > 0 && Ke(pt);
        });
      }
      a(nt),
        Ne(
          nt,
          (Ke, lt) => {
            var gt;
            return (gt = wt) == null ? void 0 : gt(Ke, lt);
          },
          () => ({ scale: 1.05, pressScale: 0.95 }),
        ),
        a(Ae),
        w(() => {
          var Ke;
          (mt = N(nt, 1, "cell week-card svelte-bov9u3", null, mt, {
            selected:
              ((Ke = e(E)) == null ? void 0 : Ke.kind) === "week" &&
              e(E).month === e(Z) &&
              e(E).index === A,
          })),
            y(
              nt,
              "title",
              `${e(f).summary.count ?? ""} ${e(f).summary.count === 1 ? "partida" : "partidas"}`,
            );
        }),
        pe("click", nt, (Ke) => {
          _e(e(f), A), Ke.currentTarget.blur();
        }),
        n(p, Ae);
    },
  ),
    a(ml),
    a(fl),
    a(Yt);
  var gl = r(Yt, 2),
    wl = l(gl),
    Qi = l(wl);
  {
    var Vi = (p) => {
      const f = q(() => se(e(m)));
      var A = K0(),
        Ae = Lt(A),
        Re = l(Ae);
      St(
        Re,
        (pt) => (ee = pt),
        () => ee,
      );
      var nt = r(Re, 2);
      {
        var mt = (pt) => {
          var Ke = P0(),
            lt = l(Ke);
          a(Ke),
            w(() =>
              x(
                lt,
                `${e(m).count ?? ""} ${e(m).count === 1 ? "partida" : "partidas"}`,
              ),
            ),
            n(pt, Ke);
        };
        K(nt, (pt) => {
          e(m).count > 0 && pt(mt);
        });
      }
      a(Ae);
      var Dt = r(Ae, 4);
      {
        var Ge = (pt) => {
            var Ke = U0(),
              lt = l(Ke);
            {
              var gt = (Zt) => {
                var At = j0();
                let Wt;
                var ea = l(At);
                a(At),
                  w(() => {
                    (Wt = N(
                      At,
                      1,
                      "day-detail-stat-compare svelte-bov9u3",
                      null,
                      Wt,
                      { positive: e(P) > 0, negative: e(P) < 0 },
                    )),
                      x(
                        ea,
                        `${e(P) > 0 ? "+" : ""}${e(P) ?? ""}% WR vs. mês passado`,
                      );
                  }),
                  n(Zt, At);
              };
              K(lt, (Zt) => {
                e(E).kind === "month" && e(P) !== null && Zt(gt);
              });
            }
            var Ot = r(lt, 2),
              Vt = l(Ot),
              sa = l(Vt),
              qt = r(l(sa), 2),
              Mt = l(qt, !0);
            a(qt);
            var Ft = r(qt, 2),
              Jt = l(Ft);
            {
              var Ra = (Zt) => {
                  var At = O0(),
                    Wt = Lt(At),
                    ea = l(Wt);
                  a(Wt);
                  var ca = r(Wt, 2),
                    ua = l(ca);
                  a(ca),
                    w(() => {
                      x(ea, `${e(m).wins ?? ""}V`),
                        x(ua, `${e(m).losses ?? ""}D`);
                    }),
                    n(Zt, At);
                },
                Oa = (Zt) => {
                  var At = Ca("Sem decisão");
                  n(Zt, At);
                };
              K(Jt, (Zt) => {
                e(f) !== null ? Zt(Ra) : Zt(Oa, -1);
              });
            }
            a(Ft), a(sa);
            var Ia = r(sa, 2),
              la = l(Ia);
            {
              var na = (Zt) => {
                  var At = N0();
                  y(At, "r", H), n(Zt, At);
                },
                Ut = (Zt) => {
                  var At = H0(),
                    Wt = Lt(At);
                  y(Wt, "r", H);
                  var ea = r(Wt);
                  {
                    var ca = (ua) => {
                      var ia = F0();
                      y(ia, "r", H),
                        w(() =>
                          y(
                            ia,
                            "stroke-dasharray",
                            `${(e(m).wins / (e(m).wins + e(m).losses)) * U} 97.38937226128358`,
                          ),
                        ),
                        n(ua, ia);
                    };
                    K(ea, (ua) => {
                      e(m).wins > 0 && ua(ca);
                    });
                  }
                  n(Zt, At);
                };
              K(la, (Zt) => {
                e(f) === null ? Zt(na) : Zt(Ut, -1);
              });
            }
            a(Ia), a(Vt);
            var da = r(Vt, 2),
              Na = r(l(da), 2);
            let El;
            var eo = l(Na, !0);
            a(Na), a(da);
            var Es = r(da, 2),
              As = r(l(Es), 2),
              to = l(As, !0);
            a(As);
            var Ls = r(As, 2);
            let Al;
            var ao = l(Ls, !0);
            a(Ls), a(Es);
            var Zs = r(Es, 2),
              Ll = r(l(Zs), 2),
              so = l(Ll, !0);
            a(Ll), a(Zs);
            var Rs = r(Zs, 2),
              Zl = r(l(Rs), 2),
              lo = l(Zl, !0);
            a(Zl), a(Rs);
            var Is = r(Rs, 2),
              Rl = r(l(Is), 2),
              io = l(Rl, !0);
            a(Rl), a(Is);
            var Ds = r(Is, 2),
              Il = r(l(Ds), 2),
              oo = l(Il, !0);
            a(Il), a(Ds);
            var ro = r(Ds, 2);
            {
              var no = (Zt) => {
                var At = Q0(),
                  Wt = r(l(At), 2),
                  ea = l(Wt),
                  ca = r(ea, 2),
                  ua = l(ca);
                a(ca),
                  a(Wt),
                  a(At),
                  w(
                    (ia, ba) => {
                      y(ea, "src", ia),
                        y(ea, "alt", ba),
                        x(ua, `×${e(k).games ?? ""}`);
                    },
                    [() => wa(e(k).champion), () => ga(e(k).champion)],
                  ),
                  n(Zt, At);
              };
              K(ro, (Zt) => {
                e(k) && Zt(no);
              });
            }
            a(Ot);
            var Dl = r(Ot, 4);
            We(
              Dl,
              21,
              () => e(L),
              it,
              (Zt, At) => {
                var Wt = W0(),
                  ea = l(Wt),
                  ca = r(ea, 2);
                {
                  var ua = (ia) => {
                    var ba = V0(),
                      Bs = l(ba);
                    a(ba), w(() => x(Bs, `×${e(At).games ?? ""}`)), n(ia, ba);
                  };
                  K(ca, (ia) => {
                    e(At).games > 1 && ia(ua);
                  });
                }
                a(Wt),
                  w(
                    (ia, ba, Bs) => {
                      y(Wt, "title", ia), y(ea, "src", ba), y(ea, "alt", Bs);
                    },
                    [
                      () => Fe(e(At)),
                      () => wa(e(At).champion),
                      () => ga(e(At).champion),
                    ],
                  ),
                  n(Zt, Wt);
              },
            ),
              a(Dl),
              a(Ke),
              w(
                (Zt, At, Wt, ea, ca, ua, ia, ba) => {
                  x(Mt, e(f) !== null ? `${e(f)}%` : "—"),
                    (El = N(
                      Na,
                      1,
                      "day-detail-stat-value svelte-bov9u3",
                      null,
                      El,
                      { win: e(m).lp > 0, lose: e(m).lp < 0 },
                    )),
                    x(eo, Zt),
                    x(to, At),
                    (Al = N(
                      Ls,
                      1,
                      "day-detail-stat-delta svelte-bov9u3",
                      null,
                      Al,
                      Wt,
                    )),
                    x(ao, ea),
                    x(so, ca),
                    x(lo, ua),
                    x(io, ia),
                    x(oo, ba);
                },
                [
                  () => (e(m).lpCount > 0 ? ha(e(m).lp) : "—"),
                  () => W(e(m)).toFixed(2),
                  () => ({
                    good: W(e(m)) >= 3,
                    medium: W(e(m)) >= 2 && W(e(m)) < 3,
                    bad: W(e(m)) < 2,
                  }),
                  () =>
                    W(e(m)) >= 3 ? "Boa" : W(e(m)) >= 2 ? "Média" : "Ruim",
                  () => ve(e(m)).toFixed(1),
                  () => (e(m).kills / e(m).count).toFixed(1),
                  () => (e(m).deaths / e(m).count).toFixed(1),
                  () => (e(m).assists / e(m).count).toFixed(1),
                ],
              ),
              n(pt, Ke);
          },
          jt = (pt) => {
            var Ke = G0(),
              lt = r(l(Ke), 2),
              gt = l(lt);
            {
              var Ot = (qt) => {
                  var Mt = Ca();
                  w(
                    (Ft) => x(Mt, Ft),
                    [
                      () => {
                        var Ft;
                        return (Ft = Q()) != null && Ft.isToday
                          ? "Você ainda não jogou hoje, bora jogar uma?"
                          : "Nenhuma partida nesse dia.";
                      },
                    ],
                  ),
                    n(qt, Mt);
                },
                Vt = (qt) => {
                  var Mt = Ca();
                  w(
                    (Ft) => x(Mt, Ft),
                    [
                      () => {
                        var Ft;
                        return (Ft = le()) != null &&
                          Ft.days.some((Jt) => Jt.isToday)
                          ? "Sem partidas essa semana, bora subir de elo?"
                          : "Sem partidas nessa semana.";
                      },
                    ],
                  ),
                    n(qt, Mt);
                },
                sa = (qt) => {
                  var Mt = Ca();
                  w(
                    (Ft) => x(Mt, Ft),
                    [
                      () =>
                        e(E).month === V.getMonth() &&
                        e(E).year === V.getFullYear()
                          ? "Sem partidas esse mês, bora começar agora?"
                          : "Sem partidas nesse mês.",
                    ],
                  ),
                    n(qt, Mt);
                };
              K(gt, (qt) => {
                e(E).kind === "day"
                  ? qt(Ot)
                  : e(E).kind === "week"
                    ? qt(Vt, 1)
                    : qt(sa, -1);
              });
            }
            a(lt), a(Ke), n(pt, Ke);
          };
        K(Dt, (pt) => {
          e(m).count > 0 ? pt(Ge) : pt(jt, -1);
        });
      }
      n(p, A);
    };
    K(Qi, (p) => {
      e(E) && e(m) && p(Vi);
    });
  }
  a(wl), a(gl), a(yt);
  var _l = r(yt, 6),
    xs = l(_l),
    es = l(xs),
    Wi = r(l(es), 2);
  {
    let p = q(() => (e(qe) ? "" : "open"));
    Ea(Wi, {
      size: 14,
      get class() {
        return `card-collapse-icon ${e(p) ?? ""}`;
      },
    });
  }
  a(es);
  var ys = r(es, 2);
  let bl;
  var xl = l(ys),
    qs = l(xl),
    Ui = r(l(qs), 2);
  We(
    Ui,
    17,
    () => e(ne),
    it,
    (p, f) => {
      let A = () => e(f).day,
        Ae = () => e(f).rankChange;
      var Re = Y0();
      let nt;
      var mt = l(Re);
      {
        var Dt = (Ge) => {
          var jt = $0();
          let pt;
          var Ke = l(jt),
            lt = l(Ke, !0);
          a(Ke),
            a(jt),
            w(
              (gt, Ot) => {
                (pt = N(jt, 1, "pdl-bar svelte-bov9u3", null, pt, {
                  pos: A().lp >= 0,
                  neg: A().lp < 0,
                })),
                  Oe(jt, `height: ${gt ?? ""}%`),
                  x(lt, Ot);
              },
              [() => ke(A().lp), () => ha(A().lp)],
            ),
            n(Ge, jt);
        };
        K(mt, (Ge) => {
          A().lpCount > 0 && Ge(Dt);
        });
      }
      a(Re),
        w(
          (Ge, jt) => {
            (nt = N(Re, 1, "pdl-chart-col svelte-bov9u3", null, nt, Ge)),
              y(
                Re,
                "title",
                `${A().day ?? ""}: ${jt ?? ""}${Ae() === "up" ? " — subiu de elo" : Ae() === "down" ? " — desceu de elo" : ""}`,
              );
          },
          [
            () => ({ selected: be(A()), today: A().isToday }),
            () => (A().lpCount > 0 ? `${ha(A().lp)} PDL` : "sem PDL"),
          ],
        ),
        n(p, Re);
    },
  ),
    a(qs);
  var yl = r(qs, 2);
  We(
    yl,
    21,
    () => e(De),
    it,
    (p, f) => {
      var A = X0();
      let Ae;
      var Re = l(A, !0);
      a(A),
        w(
          (nt) => {
            (Ae = N(A, 1, "pdl-chart-day-num svelte-bov9u3", null, Ae, nt)),
              x(Re, e(f).day);
          },
          [() => ({ selected: be(e(f)), today: e(f).isToday })],
        ),
        n(p, A);
    },
  ),
    a(yl),
    a(xl),
    a(ys),
    a(xs);
  var ks = r(xs, 2),
    ts = l(ks),
    Gi = r(l(ts), 2);
  {
    let p = q(() => (e(Ze) ? "" : "open"));
    Ea(Gi, {
      size: 14,
      get class() {
        return `card-collapse-icon ${e(p) ?? ""}`;
      },
    });
  }
  a(ts);
  var Ss = r(ts, 2);
  let ql;
  var kl = l(Ss),
    Ts = l(kl);
  We(
    Ts,
    21,
    () => e(De),
    it,
    (p, f) => {
      var A = tu();
      let Ae;
      var Re = l(A),
        nt = l(Re),
        mt = l(nt);
      {
        var Dt = (Ke) => {
          var lt = J0(),
            gt = l(lt, !0);
          a(lt), w(() => x(gt, e(f).wins)), n(Ke, lt);
        };
        K(mt, (Ke) => {
          e(f).wins > 0 && Ke(Dt);
        });
      }
      a(nt);
      var Ge = r(nt, 2),
        jt = l(Ge);
      {
        var pt = (Ke) => {
          var lt = eu(),
            gt = l(lt, !0);
          a(lt), w(() => x(gt, e(f).losses)), n(Ke, lt);
        };
        K(jt, (Ke) => {
          e(f).losses > 0 && Ke(pt);
        });
      }
      a(Ge),
        a(Re),
        a(A),
        w(
          (Ke, lt, gt) => {
            (Ae = N(A, 1, "wl-chart-col svelte-bov9u3", null, Ae, Ke)),
              y(
                A,
                "title",
                `${e(f).day ?? ""}: ${e(f).count > 0 ? `${e(f).wins}V ${e(f).losses}D` : "sem partidas"}`,
              ),
              Oe(nt, `height: ${lt ?? ""}%`),
              Oe(Ge, `height: ${gt ?? ""}%`);
          },
          [
            () => ({ selected: be(e(f)), today: e(f).isToday }),
            () => $(e(f).wins),
            () => $(e(f).losses),
          ],
        ),
        n(p, A);
    },
  ),
    a(Ts);
  var Sl = r(Ts, 2);
  We(
    Sl,
    21,
    () => e(De),
    it,
    (p, f) => {
      var A = au();
      let Ae;
      var Re = l(A, !0);
      a(A),
        w(
          (nt) => {
            (Ae = N(A, 1, "pdl-chart-day-num svelte-bov9u3", null, Ae, nt)),
              x(Re, e(f).day);
          },
          [() => ({ selected: be(e(f)), today: e(f).isToday })],
        ),
        n(p, A);
    },
  ),
    a(Sl),
    a(kl),
    a(Ss),
    a(ks);
  var zs = r(ks, 2),
    as = l(zs),
    Ms = l(as),
    Ki = l(Ms);
  a(Ms);
  var $i = r(Ms, 2);
  {
    let p = q(() => (e(Ye) ? "" : "open"));
    Ea($i, {
      size: 14,
      get class() {
        return `card-collapse-icon ${e(p) ?? ""}`;
      },
    });
  }
  a(as);
  var Yi = r(as, 2);
  {
    var Xi = (p) => {
      var f = nu(),
        A = l(f),
        Ae = l(A),
        Re = l(Ae),
        nt = r(Re),
        mt = r(nt),
        Dt = r(mt);
      We(
        Dt,
        17,
        () => e(Le),
        it,
        (pt, Ke, lt) => {
          let gt = () => e(Ke).bucket,
            Ot = () => e(Ke).rankChange,
            Vt = () => e(Ke).cumulative,
            sa = () => e(Ke).monthIdx;
          const qt = q(() => xt(lt)),
            Mt = q(() => ht(Vt()));
          var Ft = iu(),
            Jt = Lt(Ft),
            Ra = l(Jt),
            Oa = l(Ra);
          a(Ra), a(Jt);
          var Ia = r(Jt);
          {
            var la = (Ut) => {
                var da = su();
                w(() =>
                  y(
                    da,
                    "points",
                    `${e(qt) ?? ""},${e(Mt) - 13} ${e(qt) - 4},${e(Mt) - 7} ${e(qt) + 4},${e(Mt) - 7}`,
                  ),
                ),
                  n(Ut, da);
              },
              na = (Ut) => {
                var da = lu();
                w(() =>
                  y(
                    da,
                    "points",
                    `${e(qt) ?? ""},${e(Mt) + 13} ${e(qt) - 4},${e(Mt) + 7} ${e(qt) + 4},${e(Mt) + 7}`,
                  ),
                ),
                  n(Ut, da);
              };
            K(Ia, (Ut) => {
              Ot() === "up" ? Ut(la) : Ot() === "down" && Ut(na, 1);
            });
          }
          w(
            (Ut) => {
              y(Jt, "cx", e(qt)),
                y(Jt, "cy", e(Mt)),
                y(Jt, "r", e(Z) === sa() ? 4 : gt().lpCount > 0 ? 3 : 2),
                y(
                  Jt,
                  "fill",
                  gt().lpCount === 0
                    ? "var(--border-2)"
                    : gt().lp >= 0
                      ? "var(--win)"
                      : "var(--lose)",
                ),
                x(Oa, `${F[sa()] ?? ""}: ${Ut ?? ""}`);
            },
            [
              () =>
                gt().lpCount > 0
                  ? `${ha(gt().lp)} PDL (acumulado ${ha(Vt())})`
                  : "sem PDL",
            ],
          ),
            n(pt, Ft);
        },
      ),
        a(Ae);
      var Ge = r(Ae, 2);
      We(
        Ge,
        21,
        () => e(Le),
        it,
        (pt, Ke) => {
          let lt = () => e(Ke).bucket,
            gt = () => e(Ke).rankChange,
            Ot = () => e(Ke).monthIdx;
          var Vt = ou();
          let sa;
          w(
            (qt) => {
              (sa = N(Vt, 1, "month-evo-col svelte-bov9u3", null, sa, {
                selected: e(Z) === Ot(),
              })),
                y(
                  Vt,
                  "title",
                  `${F[Ot()] ?? ""}: ${qt ?? ""}${gt() === "up" ? " — subiu de elo" : gt() === "down" ? " — desceu de elo" : ""}`,
                );
            },
            [() => (lt().lpCount > 0 ? `${ha(lt().lp)} PDL` : "sem PDL")],
          ),
            pe("click", Vt, () => ot(Ot())),
            n(pt, Vt);
        },
      ),
        a(Ge),
        a(A);
      var jt = r(A, 2);
      We(
        jt,
        21,
        () => e(Le),
        it,
        (pt, Ke) => {
          let lt = () => e(Ke).monthIdx;
          var gt = ru();
          let Ot;
          var Vt = l(gt, !0);
          a(gt),
            w(() => {
              (Ot = N(gt, 1, "pdl-chart-day-num svelte-bov9u3", null, Ot, {
                selected: e(Z) === lt(),
              })),
                x(Vt, Ue[lt()]);
            }),
            n(pt, gt);
        },
      ),
        a(jt),
        a(f),
        St(
          f,
          (pt) => (rt = pt),
          () => rt,
        ),
        Ne(f, (pt) => (Je == null ? void 0 : Je(pt))),
        w(
          (pt, Ke) => {
            y(Ae, "viewBox", `0 0 ${e(ut) ?? ""} ${e(Te) ?? ""}`),
              y(Re, "y1", pt),
              y(Re, "x2", e(ut)),
              y(Re, "y2", Ke),
              y(nt, "d", e(xe)),
              y(mt, "d", e(ze));
          },
          [() => ht(0), () => ht(0)],
        ),
        $a(A, "clientWidth", (pt) => h(ut, pt)),
        $a(A, "clientHeight", (pt) => h(Te, pt)),
        n(p, f);
    };
    K(Yi, (p) => {
      e(Ye) || p(Xi);
    });
  }
  a(zs);
  var Tl = r(zs, 2),
    ss = l(Tl),
    Ji = r(l(ss), 2);
  {
    let p = q(() => (e(Ie) ? "" : "open"));
    Ea(Ji, {
      size: 14,
      get class() {
        return `card-collapse-icon ${e(p) ?? ""}`;
      },
    });
  }
  a(ss);
  var Cs = r(ss, 2);
  let zl;
  var Ml = l(Cs),
    Cl = l(Ml);
  We(
    Cl,
    21,
    () => e(Pe),
    it,
    (p, f) => {
      const A = q(() => we(e(f)));
      var Ae = vu(),
        Re = l(Ae);
      let nt;
      var mt = l(Re, !0);
      a(Re);
      var Dt = r(Re, 2);
      let Ge;
      var jt = r(Dt, 2),
        pt = l(jt, !0);
      a(jt),
        a(Ae),
        w(() => {
          (nt = N(Re, 1, "cspm-bar-value svelte-bov9u3", null, nt, {
            win: e(A) !== null && e(A) >= 50,
            lose: e(A) !== null && e(A) < 50,
          })),
            x(mt, e(A) !== null ? `${e(A)}%` : "—"),
            (Ge = N(Dt, 1, "cspm-bar svelte-bov9u3", null, Ge, {
              win: e(A) !== null && e(A) >= 50,
              lose: e(A) !== null && e(A) < 50,
            })),
            Oe(Dt, `height: ${e(A) ?? 0 ?? ""}%`),
            y(
              Dt,
              "title",
              `${G[e(f).weekday] ?? ""}: ${e(f).count ?? ""} ${e(f).count === 1 ? "partida" : "partidas"}`,
            ),
            x(pt, G[e(f).weekday]);
        }),
        n(p, Ae);
    },
  ),
    a(Cl),
    a(Ml),
    a(Cs),
    a(Tl),
    a(_l),
    a(st),
    w(() => {
      var p;
      (hl = N(Za, 1, "month-select-btn svelte-bov9u3", null, hl, {
        selected:
          ((p = e(E)) == null ? void 0 : p.kind) === "month" &&
          e(E).month === e(Z) &&
          e(E).year === e(T),
      })),
        y(
          Za,
          "title",
          `${e(X).count ?? ""} ${e(X).count === 1 ? "partida" : "partidas"}`,
        ),
        (bl = N(ys, 1, "collapse-grid svelte-bov9u3", null, bl, {
          open: !e(qe),
        })),
        (ql = N(Ss, 1, "collapse-grid svelte-bov9u3", null, ql, {
          open: !e(Ze),
        })),
        x(Ki, `Evolução de PDL · ${e(fe) ?? ""} ${e(T) ?? ""}`),
        (zl = N(Cs, 1, "collapse-grid svelte-bov9u3", null, zl, {
          open: !e(Ie),
        }));
    }),
    pe("click", Be, M),
    pe("click", za, S),
    pe("click", Za, Ee),
    pe("click", es, je),
    pe("click", ts, ye),
    pe("click", as, ce),
    pe("click", ss, Xe),
    n(i, st),
    Ce(),
    c();
}
Bt(["click"]);
function Ri(i, t) {
  const o = localStorage.getItem(i) !== "false",
    v = Xt(o);
  return (
    v.subscribe((c) => {
      localStorage.setItem(i, String(c));
    }),
    v
  );
}
const Xl = Ri("absol_overlay_build_enabled"),
  Jl = Ri("absol_overlay_gold_enabled");
function ei(i) {
  const t =
    i === "overlay"
      ? "absol_overlay_build_enabled"
      : "absol_overlay_gold_enabled";
  return localStorage.getItem(t) !== "false";
}
const ol = Xt("offline");
var uu = u(
    '<div><img alt="" loading="lazy" decoding="async" class="svelte-5xpi85"/></div>',
  ),
  pu = u(
    '<div><div class="mod-balloon-wrap svelte-5xpi85" aria-hidden="true"><div class="mod-balloon svelte-5xpi85"><span class="mod-balloon-dot svelte-5xpi85"></span> <span class="mod-balloon-dot svelte-5xpi85"></span> <span class="mod-balloon-dot svelte-5xpi85"></span></div> <span class="mod-balloon-tail svelte-5xpi85"></span></div> <span class="mod-no-video svelte-5xpi85">Prévia ainda não disponível</span></div>',
  ),
  hu = u('<span class="badge pro-badge svelte-5xpi85"><!> Em partida</span>'),
  fu = u(
    '<div><!> <div class="card-body svelte-5xpi85"><div class="card-body-top svelte-5xpi85"><h3 class="svelte-5xpi85"> </h3> <div class="card-top-right svelte-5xpi85"><!></div></div> <p class="svelte-5xpi85"> </p></div></div>',
  ),
  mu = u(
    '<div class="page svelte-5xpi85"><header class="page-header svelte-5xpi85"><div><h1 class="svelte-5xpi85">> Overlays</h1> <p class="svelte-5xpi85">Widgets exibidos por cima do League of Legends durante a partida</p></div> <div class="count-badge svelte-5xpi85"><span class="count-label svelte-5xpi85">ATIVOS</span> <span class="count-value svelte-5xpi85"><span class="count-slider svelte-5xpi85"><span class="count-num svelte-5xpi85"></span></span> </span></div></header> <div class="info-note svelte-5xpi85"><div class="info-note-pixels svelte-5xpi85" aria-hidden="true"><span class="px-solid svelte-5xpi85"></span> <span class="px-fade px-fade-a svelte-5xpi85"></span> <span class="px-fade px-fade-b svelte-5xpi85"></span> <span class="px-fade px-fade-c svelte-5xpi85"></span> <span class="px-fade px-fade-d svelte-5xpi85"></span></div> <div class="info-note-body svelte-5xpi85"><span class="info-note-icon svelte-5xpi85">!</span> <span class="info-note-text">Para os overlays funcionarem corretamente, o LoL precisa estar em modo <strong class="svelte-5xpi85">Janela sem moldura</strong> (Borderless).</span></div> <div class="info-note-pixels flipped svelte-5xpi85" aria-hidden="true"><span class="px-solid svelte-5xpi85"></span> <span class="px-fade px-fade-a svelte-5xpi85"></span> <span class="px-fade px-fade-b svelte-5xpi85"></span> <span class="px-fade px-fade-c svelte-5xpi85"></span> <span class="px-fade px-fade-d svelte-5xpi85"></span></div></div> <div class="grid svelte-5xpi85"></div></div>',
  );
function gu(i, t) {
  Me(t, !0);
  const o = () => kt(ol, "$lolState", v),
    [v, c] = ta();
  let d = oe(!0),
    s = oe(!0);
  Xl.subscribe((ie) => h(d, ie, !0)), Jl.subscribe((ie) => h(s, ie, !0));
  let b = q(() => o() === "ingame");
  const g = [
    {
      id: "build",
      title: "Overlay de Build",
      desc: "Mostra os itens recomendados e o progresso da build em tempo real, direto na tela durante a partida.",
      image: `${Ql}/overlay_build.png`,
    },
    {
      id: "gold",
      title: "Overlay de Ouro",
      desc: "Acompanha o seu ouro e a diferença de gold contra o adversário direto da lane, em tempo real.",
      image: `${Ql}/overlay_gold.png`,
    },
  ];
  function _(ie) {
    return ie === "build" ? e(d) : e(s);
  }
  function F(ie, P) {
    e(b) || (ie === "build" ? Xl.set(P) : Jl.set(P));
  }
  let V = q(() => g.filter((ie) => _(ie.id)).length),
    T,
    Z = !1;
  Gt(() => {
    T &&
      (Z
        ? cs(T, String(e(V)), { scrambleColor: "var(--accent)" })
        : (T.textContent = String(e(V)))),
      (Z = !0);
  });
  let M;
  $t(() => {
    if (M) {
      const ie = M.querySelectorAll(".card");
      $e.fromTo(
        ie,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.04,
          ease: "power2.out",
          onComplete: () => {
            ie.forEach((P) => {
              P.style.willChange = "transform";
            });
          },
        },
      );
    }
  });
  var S = mu(),
    ae = l(S),
    D = l(ae),
    z = l(D);
  Ne(
    z,
    (ie, P) => (Tt == null ? void 0 : Tt(ie, P)),
    () => ({ color: "var(--lime)" }),
  ),
    _t(2),
    a(D);
  var re = r(D, 2),
    I = r(l(re), 2),
    W = l(I),
    ve = l(W);
  St(
    ve,
    (ie) => (T = ie),
    () => T,
  ),
    a(W);
  var Y = r(W);
  a(I), a(re), a(ae);
  var X = r(ae, 4);
  We(
    X,
    21,
    () => g,
    (ie) => ie.id,
    (ie, P) => {
      const ue = q(() => _(e(P).id));
      var E = fu();
      let de;
      var _e = l(E);
      {
        var Ee = (se) => {
            var H = uu();
            let U;
            var G = l(H);
            a(H),
              w(() => {
                (U = N(H, 1, "mod-preview svelte-5xpi85", null, U, {
                  off: !e(ue),
                })),
                  y(G, "src", e(P).image);
              }),
              n(se, H);
          },
          be = (se) => {
            var H = pu();
            let U;
            w(
              () =>
                (U = N(H, 1, "mod-icon-wrap svelte-5xpi85", null, U, {
                  off: !e(ue),
                })),
            ),
              n(se, H);
          };
        K(_e, (se) => {
          e(P).image ? se(Ee) : se(be, -1);
        });
      }
      var Q = r(_e, 2),
        le = l(Q),
        m = l(le),
        O = l(m, !0);
      a(m);
      var L = r(m, 2),
        k = l(L);
      {
        var B = (se) => {
            var H = hu(),
              U = l(H);
            ns(U, { size: 9 }), _t(), a(H), n(se, H);
          },
          ee = (se) => {
            Da(se, {
              get checked() {
                return e(ue);
              },
              onchange: (H) => F(e(P).id, H),
            });
          };
        K(k, (se) => {
          e(b) ? se(B) : se(ee, -1);
        });
      }
      a(L), a(le);
      var me = r(le, 2),
        J = l(me, !0);
      a(me),
        a(Q),
        a(E),
        Ne(
          E,
          (se, H) => {
            var U;
            return (U = wt) == null ? void 0 : U(se, H);
          },
          () => ({ scale: 1.05 }),
        ),
        w(() => {
          (de = N(E, 1, "card svelte-5xpi85", null, de, { off: !e(ue) })),
            x(O, e(P).title),
            x(J, e(P).desc);
        }),
        n(ie, E);
    },
  ),
    a(X),
    St(
      X,
      (ie) => (M = ie),
      () => M,
    ),
    a(S),
    w(() => x(Y, `/${g.length ?? ""}`)),
    n(i, S),
    Ce(),
    c();
}
const Ii = [
  {
    id: "inicio",
    path: "/",
    label: "Início",
    icon: fr,
    component: Vo,
    ...pa.inicio,
  },
  {
    id: "coaching",
    path: "/coaching",
    label: "Coaching",
    icon: _r,
    component: Dd,
    ...pa.coaching,
  },
  {
    id: "overlays",
    path: "/overlays",
    label: "Overlays",
    icon: ln,
    component: gu,
    ...pa.overlays,
  },
  {
    id: "calendario",
    path: "/calendario",
    label: "Calendário",
    icon: en,
    component: cu,
    ...pa.calendario,
  },
  {
    id: "historico",
    path: "/historico",
    label: "Histórico",
    icon: Rr,
    component: dc,
    ...pa.historico,
  },
  {
    id: "conquistas",
    path: "/conquistas",
    label: "Conquistas",
    icon: $r,
    component: C0,
    ...pa.conquistas,
  },
  {
    id: "audio",
    path: "/audio",
    label: "Áudio",
    icon: Tr,
    component: bc,
    ...pa.audio,
  },
  {
    id: "sistema",
    path: "/sistema",
    label: "Sistema",
    icon: Er,
    component: Rc,
    ...pa.sistema,
  },
  {
    id: "aparencia",
    path: "/aparencia",
    label: "Wallpapers",
    icon: Fr,
    component: s0,
    ...pa.aparencia,
  },
  {
    id: "novidades",
    path: "/novidades",
    label: "Novidades",
    icon: Wr,
    component: _0,
    ...pa.novidades,
  },
  {
    id: "perfil",
    path: "/perfil",
    label: "Perfil",
    icon: Pr,
    component: Gc,
    ...pa.perfil,
  },
];
function fs(i) {
  const t = Ii.find((o) => o.id === i);
  if (!t) throw new Error(`Unknown app id: ${i}`);
  return t;
}
var wu = u(
    '<div class="titlebar svelte-1ux5y2f"><div class="controls svelte-1ux5y2f"><button class="ctrl close-btn svelte-1ux5y2f"><!></button></div></div>',
  ),
  _u = u(
    '<div role="presentation"><!> <div class="window-content svelte-1ux5y2f"><!></div></div>',
  );
function bu(i, t) {
  Me(t, !0);
  let o = q(() => Ct.focusedId === t.win.id),
    v = q(() => t.win.appId === "inicio"),
    c,
    d,
    s = oe(!1);
  $t(
    () => (
      (c.style.willChange = "transform"),
      $e.fromTo(
        c,
        { scaleX: 0.85, x: -8 },
        {
          scaleX: 1,
          x: 0,
          duration: 0.32,
          ease: "back.out(1.4)",
          clearProps: "transform",
          onComplete: () => {
            c.style.willChange = "auto";
          },
        },
      ),
      Ct.registerTriggerClose(t.win.id, g),
      () => Ct.registerTriggerClose(t.win.id, void 0)
    ),
  );
  function b(S) {
    e(s) ||
      (h(s, !0),
      (c.style.willChange = "transform, opacity"),
      $e.to(c, {
        opacity: 0,
        scaleX: 0.85,
        x: -8,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          (c.style.willChange = "auto"), S();
        },
      }));
  }
  function g() {
    d && $e.to(d, { rotate: 180, duration: 0.25, ease: "power2.out" }),
      b(() => Ct.close(t.win.id));
  }
  var _ = _u();
  let F;
  var V = l(_);
  {
    var T = (S) => {
      var ae = wu(),
        D = l(ae),
        z = l(D),
        re = l(z);
      La(re, { size: 19 }),
        a(z),
        St(
          z,
          (I) => (d = I),
          () => d,
        ),
        Ne(
          z,
          (I, W) => {
            var ve;
            return (ve = wt) == null ? void 0 : ve(I, W);
          },
          () => ({ scale: 1.1, pressScale: 0.9 }),
        ),
        a(D),
        a(ae),
        pe("click", z, g),
        n(S, ae);
    };
    K(V, (S) => {
      e(v) || S(T);
    });
  }
  var Z = r(V, 2),
    M = l(Z);
  _s(
    M,
    () => t.appDef.component,
    (S, ae) => {
      ae(S, {});
    },
  ),
    a(Z),
    a(_),
    St(
      _,
      (S) => (c = S),
      () => c,
    ),
    w(() => {
      (F = N(_, 1, "window svelte-1ux5y2f", null, F, {
        focused: e(o),
        bare: e(v),
      })),
        Oe(
          _,
          `
    left:${t.win.x ?? ""}px; top:${t.win.y ?? ""}px; z-index:${t.win.zIndex ?? ""};
    --h:${t.win.height ?? ""}px;
    --w-default:${t.appDef.defaultWidth ?? ""}px; --w-min:${t.appDef.minWidth ?? ""}px; --w-max:${t.appDef.maxWidth ?? t.appDef.defaultWidth ?? ""}px;
  `,
        );
    }),
    pe("pointerdown", _, () => Ct.focus(t.win.id)),
    n(i, _),
    Ce();
}
Bt(["pointerdown", "click"]);
const ti = new Map();
async function xu(i) {
  const t = ti.get(i);
  if (t) return t;
  const o = ya();
  if (!o) throw new Error("sem sessao");
  const v = await fetch(`${ul}/api/app/match-v2/${i}/analysis`, {
    headers: { Authorization: `Bearer ${o.token}` },
  });
  if (!v.ok) throw new Error(`analise indisponivel (${v.status})`);
  const c = await v.json();
  return ti.set(i, c.analysis), c.analysis;
}
const yu = {
  TOP: "TOP",
  JUNGLE: "JUNGLE",
  MIDDLE: "MID",
  BOTTOM: "ADC",
  UTILITY: "SUPORTE",
};
function os(i) {
  return i.replace(/\b(TOP|JUNGLE|MIDDLE|BOTTOM|UTILITY)\b/g, (t) => yu[t]);
}
const Di = "absol_verdict_spoken",
  qu = 200;
function Bi() {
  try {
    const i = JSON.parse(localStorage.getItem(Di) ?? "[]");
    return Array.isArray(i) ? i.filter((t) => typeof t == "number") : [];
  } catch {
    return [];
  }
}
function ku(i) {
  return Bi().includes(i);
}
function Su(i) {
  const t = Bi().filter((o) => o !== i);
  t.push(i);
  try {
    localStorage.setItem(Di, JSON.stringify(t.slice(-qu)));
  } catch {}
}
var Tu = u(
    '<div class="bubble-row svelte-1257f4j"><div class="bubble intro svelte-1257f4j"><p class="bubble-text svelte-1257f4j">Analisando sua partida<span class="cursor svelte-1257f4j"></span></p></div></div>',
  ),
  zu = u("<div> </div>"),
  Mu = u("<span> </span>"),
  Cu = u('<span class="cursor svelte-1257f4j"></span>'),
  Eu = u(
    '<div class="bubble-row svelte-1257f4j"><div><!> <p class="bubble-text svelte-1257f4j"><!><!></p></div></div>',
  ),
  Au = u('<button class="skip svelte-1257f4j">Pular animação</button>'),
  Lu = u(
    '<div class="panel svelte-1257f4j"><div class="panel-header svelte-1257f4j"><span class="panel-title svelte-1257f4j">> Análise da Partida</span> <button class="close-btn svelte-1257f4j" aria-label="Fechar"><!></button></div> <div class="chat svelte-1257f4j"><!> <!></div> <!></div>',
  );
function Zu(i, t) {
  Me(t, !0);
  let o, v;
  Gt(() => {
    const m = t.matchId;
    m !== g && ((g = m), F(m));
  }),
    $t(() => {
      o &&
        ((o.style.willChange = "transform, opacity"),
        $e.fromTo(
          o,
          { opacity: 0, scaleX: 0.85, x: 8 },
          {
            opacity: 1,
            scaleX: 1,
            x: 0,
            duration: 0.32,
            ease: "back.out(1)",
            onComplete: () => {
              o && (o.style.willChange = "auto");
            },
          },
        ));
    });
  function c() {
    if (
      ((b = !0),
      D && clearInterval(D),
      v && $e.to(v, { rotate: 180, duration: 0.25, ease: "power2.out" }),
      !o)
    ) {
      t.onClose();
      return;
    }
    (o.style.willChange = "transform, opacity"),
      $e.to(o, {
        opacity: 0,
        scaleX: 0.85,
        x: 8,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          o && (o.style.willChange = "auto"), t.onClose();
        },
      });
  }
  let d = oe(va([])),
    s = oe(!0),
    b = !1,
    g = -1,
    _ = 0;
  function F(m) {
    (_ += 1),
      D && (clearInterval(D), (D = void 0)),
      h(d, [], !0),
      h(M, [], !0),
      h(S, 0),
      h(ae, -1),
      h(s, !0),
      T(m, _);
  }
  function V(m) {
    const O = [{ kind: "intro", text: os(m.summary) }];
    if (m.positives.length > 0) {
      O.push({
        kind: "divider",
        variant: "positive",
        text: "Pontos Positivos",
      });
      for (const L of m.positives)
        O.push({ kind: "positive", block: L.block, text: os(L.text) });
    }
    if (m.improvements.length > 0) {
      O.push({
        kind: "divider",
        variant: "improvement",
        text: "Pontos de Melhoria",
      });
      for (const L of m.improvements)
        O.push({ kind: "improvement", block: L.block, text: os(L.text) });
    }
    return (
      O.push({
        kind: "intro",
        text: os(m.closing),
        ...(m.highlight ? { highlight: m.highlight } : {}),
      }),
      O
    );
  }
  async function T(m, O) {
    let L,
      k = null;
    try {
      const B = await xu(m);
      (k = { tag: B.verdict_tag, tone: B.verdict_tone }), (L = V(B));
    } catch {
      L = [
        {
          kind: "intro",
          text: "Nao consegui analisar essa partida agora. Tenta de novo daqui a pouco.",
        },
      ];
    }
    b ||
      O !== _ ||
      (h(d, L, !0),
      h(s, !1),
      k &&
        !ku(m) &&
        Ve("play_match_verdict", { tag: k.tag, tone: k.tone })
          .then((B) => {
            B && Su(m);
          })
          .catch(() => {}),
      h(
        M,
        e(d).map(() => ""),
        !0,
      ),
      Y(0, O));
  }
  function Z() {
    (_ += 1),
      D && (clearInterval(D), (D = void 0)),
      h(
        M,
        e(d).map((m) =>
          m.kind === "divider"
            ? m.text
            : ve(
                m.text,
                m.text.length,
                "highlight" in m ? m.highlight : void 0,
              ),
        ),
        !0,
      ),
      h(S, e(d).length, !0),
      h(ae, -1),
      requestAnimationFrame(I);
  }
  let M = oe(va([])),
    S = oe(0),
    ae = oe(-1),
    D,
    z;
  function re() {
    z && (z.scrollTop = z.scrollHeight);
  }
  function I() {
    z == null || z.scrollTo({ top: z.scrollHeight, behavior: "smooth" });
  }
  function W(m) {
    return m.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function ve(m, O, L) {
    const k = m.slice(0, O),
      B = L ? m.indexOf(L) : -1;
    if (B === -1) return W(k);
    const ee = B + L.length;
    if (O <= B) return W(k);
    const me = k.slice(0, B),
      J = k.slice(B, Math.min(O, ee)),
      se = O > ee ? k.slice(ee) : "";
    return `${W(me)}<span class="highlight">${W(J)}</span>${W(se)}`;
  }
  function Y(m, O) {
    if (O !== _) return;
    if (m >= e(d).length) {
      h(ae, -1);
      return;
    }
    if ((h(S, m + 1), requestAnimationFrame(I), e(d)[m].kind === "divider")) {
      (e(M)[m] = e(d)[m].text), setTimeout(() => Y(m + 1, O), 300);
      return;
    }
    h(ae, m, !0);
    const L = e(d)[m],
      k = L.text;
    let B = 0;
    D = setInterval(() => {
      if (O !== _) {
        clearInterval(D), (D = void 0);
        return;
      }
      B++,
        (e(M)[m] = ve(k, B, "highlight" in L ? L.highlight : void 0)),
        re(),
        B >= k.length &&
          (clearInterval(D), (D = void 0), setTimeout(() => Y(m + 1, O), 450));
    }, 22);
  }
  let X = q(() => !e(s) && e(S) < e(d).length);
  dl(() => {
    (b = !0), (_ += 1), D && clearInterval(D);
  });
  var ie = Lu(),
    P = l(ie),
    ue = r(l(P), 2),
    E = l(ue);
  La(E, { size: 19 }),
    a(ue),
    St(
      ue,
      (m) => (v = m),
      () => v,
    ),
    Ne(
      ue,
      (m, O) => {
        var L;
        return (L = wt) == null ? void 0 : L(m, O);
      },
      () => ({ scale: 1.1, pressScale: 0.9 }),
    ),
    a(P);
  var de = r(P, 2),
    _e = l(de);
  {
    var Ee = (m) => {
      var O = Tu();
      n(m, O);
    };
    K(_e, (m) => {
      e(s) && m(Ee);
    });
  }
  var be = r(_e, 2);
  We(
    be,
    17,
    () => e(d).slice(0, e(S)),
    it,
    (m, O, L) => {
      var k = ma(),
        B = Lt(k);
      {
        var ee = (J) => {
            var se = zu();
            let H;
            var U = l(se, !0);
            a(se),
              w(() => {
                (H = N(se, 1, "divider svelte-1257f4j", null, H, {
                  positive: e(O).variant === "positive",
                  improvement: e(O).variant === "improvement",
                })),
                  x(U, e(M)[L]);
              }),
              n(J, se);
          },
          me = (J) => {
            var se = Eu(),
              H = l(se);
            let U;
            var G = l(H);
            {
              var Pe = (qe) => {
                var je = Mu();
                let Ie;
                var Xe = l(je, !0);
                a(je),
                  w(() => {
                    (Ie = N(je, 1, "bubble-block svelte-1257f4j", null, Ie, {
                      positive: e(O).kind === "positive",
                      improvement: e(O).kind === "improvement",
                    })),
                      x(Xe, e(O).block);
                  }),
                  n(qe, je);
              };
              K(G, (qe) => {
                e(O).block && qe(Pe);
              });
            }
            var we = r(G, 2),
              Fe = l(we);
            vt(Fe, () => e(M)[L]);
            var De = r(Fe);
            {
              var ge = (qe) => {
                var je = Cu();
                n(qe, je);
              };
              K(De, (qe) => {
                e(ae) === L && qe(ge);
              });
            }
            a(we),
              a(H),
              a(se),
              w(
                () =>
                  (U = N(H, 1, "bubble svelte-1257f4j", null, U, {
                    intro: e(O).kind === "intro",
                  })),
              ),
              n(J, se);
          };
        K(B, (J) => {
          e(O).kind === "divider" ? J(ee) : J(me, -1);
        });
      }
      n(m, k);
    },
  ),
    a(de),
    St(
      de,
      (m) => (z = m),
      () => z,
    );
  var Q = r(de, 2);
  {
    var le = (m) => {
      var O = Au();
      Ne(
        O,
        (L, k) => {
          var B;
          return (B = wt) == null ? void 0 : B(L, k);
        },
        () => ({ scale: 1.04, pressScale: 0.96 }),
      ),
        pe("click", O, Z),
        n(m, O);
    };
    K(Q, (m) => {
      e(X) && m(le);
    });
  }
  a(ie),
    St(
      ie,
      (m) => (o = m),
      () => o,
    ),
    pe("click", ue, c),
    n(i, ie),
    Ce();
}
Bt(["click"]);
var Ru = u("<span> </span>"),
  Iu = u('<span class="xp-chip svelte-1pagocy"> </span>'),
  Du = u(
    '<div class="stat svelte-1pagocy"><span class="stat-sub svelte-1pagocy"> </span></div>',
  ),
  Bu = u('<img class="item-icon svelte-1pagocy"/>'),
  Pu = u('<div class="item-icon empty svelte-1pagocy"></div>'),
  ju = u(
    '<div><img class="roster-icon svelte-1pagocy"/> <span class="roster-name svelte-1pagocy"> </span></div>',
  ),
  Ou = u(
    '<div><img class="roster-icon svelte-1pagocy"/> <span class="roster-name svelte-1pagocy"> </span></div>',
  ),
  Nu = u(
    '<div class="roster svelte-1pagocy"><div class="team-col svelte-1pagocy"></div> <div class="team-col svelte-1pagocy"></div></div>',
  ),
  Fu = u(
    '<span class="pixel-grid-pixel svelte-1pagocy"><span class="pixel-inner svelte-1pagocy"></span></span>',
  ),
  Hu = u(
    '<div><div class="match-bar svelte-1pagocy"></div> <div class="header-row svelte-1pagocy"><span> </span> <span class="dot svelte-1pagocy">•</span> <span> </span> <span class="dot svelte-1pagocy">•</span> <span> </span> <span class="dot svelte-1pagocy">•</span> <span> </span> <div class="header-chips svelte-1pagocy"><!> <!></div> <button type="button"><!></button></div> <div class="body-row svelte-1pagocy"><img class="champ-icon svelte-1pagocy"/> <div class="center svelte-1pagocy"><div class="stats-row svelte-1pagocy"><div class="stat svelte-1pagocy"><span class="stat-value svelte-1pagocy"> </span> <span class="stat-sub svelte-1pagocy"> </span></div> <div class="stat svelte-1pagocy"><span class="stat-value svelte-1pagocy"> </span> <span class="stat-sub svelte-1pagocy"> </span></div> <!></div> <div class="items-row svelte-1pagocy"></div></div> <!> <div class="actions svelte-1pagocy"><button><span class="analyze-default svelte-1pagocy"><span class="btn-pixel-grid svelte-1pagocy"></span> ANALISE MINHA PARTIDA</span> <span class="analyze-overlay svelte-1pagocy" aria-hidden="true"><span class="btn-pixel-grid-spacer svelte-1pagocy"></span> ANALISE MINHA PARTIDA</span></button></div></div></div>',
  ),
  Qu = u("<!> <!>", 1);
function Vu(i, t) {
  Me(t, !0);
  const o = () => kt(b, "$recent", v),
    [v, c] = ta(),
    d = 1.5;
  function s(Q, le) {
    const m = Array.from(Q.querySelectorAll(".pixel-grid-pixel")),
      O = m.length,
      L = $e.parseEase("M0,0 C0,0 0.7,1 1,1"),
      k = [0.35, 1, 0.35, 1, 0.35, 1, 0.35, 0.35, 0.35],
      B = 0.25;
    function ee() {
      m.forEach((Ie, Xe) => $e.set(Ie, { opacity: k[Xe] ?? 0.35 }));
    }
    const me = m.map((Ie) =>
      $e.fromTo(
        Ie,
        { opacity: B },
        {
          opacity: 1,
          duration: 1,
          ease: L,
          yoyo: !0,
          repeat: -1,
          repeatDelay: $e.utils.random(0.3, 1),
          delay: $e.utils.random(0, 1.5),
          paused: !0,
        },
      ),
    );
    ee();
    let J = !1,
      se = !1;
    function H() {
      me.forEach((Ie) => Ie.play());
    }
    function U() {
      me.forEach((Ie) => Ie.pause());
    }
    function G() {
      (J = !0), se || H();
    }
    function Pe() {
      (J = !1), se || U();
    }
    let we = null;
    const Fe = { t: 0 };
    function De() {
      const Ie = Math.floor(Fe.t * O);
      m.forEach((Xe, Ye) =>
        $e.set(Xe, { opacity: Ye < Ie ? 1 : (k[Ye] ?? 0.35) }),
      ),
        Q.style.setProperty("--hold-progress", `${Fe.t * 100}%`);
    }
    function ge(Ie) {
      $e.timeline({ onComplete: Ie })
        .to(m, { scale: 1.6, duration: 0.12, ease: "power2.out" })
        .to(m, { opacity: 0.15, duration: 0.07, repeat: 3, yoyo: !0 }, "<")
        .to(m, { scale: 1, opacity: 1, duration: 0.15, ease: "power2.in" });
    }
    function qe() {
      (se = !0),
        U(),
        le.onHoldChange(!0),
        we == null || we.kill(),
        (we = $e.to(Fe, {
          t: 1,
          duration: d * (1 - Fe.t),
          ease: "none",
          onUpdate: De,
          onComplete: () => {
            le.onConfirm(), ge(je);
          },
        }));
    }
    function je() {
      (se = !1),
        le.onHoldChange(!1),
        we == null || we.kill(),
        (we = $e.to(Fe, {
          t: 0,
          duration: 0.25,
          ease: "power2.out",
          onUpdate: De,
          onComplete: () => {
            J && H();
          },
        }));
    }
    return (
      Q.addEventListener("mouseenter", G),
      Q.addEventListener("mouseleave", Pe),
      Q.addEventListener("pointerdown", qe),
      Q.addEventListener("pointerup", je),
      Q.addEventListener("pointerleave", je),
      {
        destroy() {
          me.forEach((Ie) => Ie.kill()),
            we == null || we.kill(),
            Q.removeEventListener("mouseenter", G),
            Q.removeEventListener("mouseleave", Pe),
            Q.removeEventListener("pointerdown", qe),
            Q.removeEventListener("pointerup", je),
            Q.removeEventListener("pointerleave", je);
        },
      }
    );
  }
  const { recent: b } = fa;
  let g = q(() => o()[0] ?? null),
    _ = oe(null),
    F = oe(null),
    V = oe(!1),
    T = oe(null);
  function Z() {
    e(g) && (h(T, e(g).id, !0), Ct.openRightPanel("analysis"));
  }
  let M = oe(!0),
    S = oe(!0),
    ae = !1,
    D;
  function z(Q) {
    const le = Q.scrollWidth;
    $e.fromTo(
      Q,
      { opacity: 0, width: 0 },
      {
        opacity: 1,
        width: le,
        duration: 0.32,
        ease: "power2.out",
        onComplete: () => {
          Q.style.width = "auto";
        },
      },
    );
  }
  function re(Q) {
    if (Q !== e(M))
      if (Q) h(M, !0), h(S, !0);
      else {
        if (ae || !D) {
          h(M, !1), h(S, !1);
          return;
        }
        (ae = !0),
          $e.fromTo(
            D,
            { width: D.offsetWidth, opacity: 1 },
            {
              width: 0,
              opacity: 0,
              duration: 0.22,
              ease: "power2.in",
              onComplete: () => {
                (ae = !1), h(M, !1), h(S, !1);
              },
            },
          );
      }
  }
  const I = 1400;
  let W = null;
  Gt(() => {
    const Q = Ct.canvasWidth;
    if (W !== null) {
      if (Q === W) return;
      W = null;
    }
    const le = Q === 0 || Q >= I;
    re(le);
  });
  function ve() {
    (W = Ct.canvasWidth), re(!e(M));
  }
  Gt(() => {
    e(g) &&
      e(g).id !== e(F) &&
      (h(F, e(g).id, !0),
      fa.fetchDetail(e(g).id).then((Q) => {
        e(g) && Q && e(g).id === e(F) && h(_, Q, !0);
      }));
  });
  let Y = q(() => {
      var Q;
      return (
        ((Q = e(_)) == null ? void 0 : Q.players.find((le) => le.is_me)) ?? null
      );
    }),
    X = q(() => {
      var Q;
      return (
        ((Q = e(_)) == null
          ? void 0
          : Q.players.filter((le) => le.team === "BLUE")) ?? []
      );
    }),
    ie = q(() => {
      var Q;
      return (
        ((Q = e(_)) == null
          ? void 0
          : Q.players.filter((le) => le.team === "RED")) ?? []
      );
    }),
    P = q(() =>
      e(_) && e(_).game_duration > 0
        ? Math.round(e(_).gold / (e(_).game_duration / 60))
        : null,
    ),
    ue = q(() => {
      var m;
      const le = [...(((m = e(Y)) == null ? void 0 : m.items) ?? [])].sort(
        (O, L) => (O.slot ?? 0) - (L.slot ?? 0),
      );
      return Array.from({ length: 7 }, (O, L) => le[L] ?? null);
    });
  var E = Qu(),
    de = Lt(E);
  {
    var _e = (Q) => {
      var le = Hu();
      let m;
      var O = r(l(le), 2),
        L = l(O);
      let k;
      var B = l(L, !0);
      a(L);
      var ee = r(L, 4),
        me = l(ee, !0);
      a(ee);
      var J = r(ee, 4),
        se = l(J, !0);
      a(J);
      var H = r(J, 4),
        U = l(H, !0);
      a(H);
      var G = r(H, 2),
        Pe = l(G);
      {
        var we = (Te) => {
            zi(Te);
          },
          Fe = (Te) => {
            var Qe = Ru();
            let et;
            var zt = l(Qe);
            a(Qe),
              w(
                (bt) => {
                  (et = N(Qe, 1, "lp-chip svelte-1pagocy", null, et, {
                    win: e(g).lpDelta >= 0,
                    lose: e(g).lpDelta < 0,
                  })),
                    x(zt, `${bt ?? ""} PDL`);
                },
                [() => ha(e(g).lpDelta)],
              ),
              n(Te, Qe);
          };
        K(Pe, (Te) => {
          e(g).result !== "REMAKE" && e(g).lpPending
            ? Te(we)
            : e(g).result !== "REMAKE" && e(g).lpDelta !== null && Te(Fe, 1);
        });
      }
      var De = r(Pe, 2);
      {
        var ge = (Te) => {
          var Qe = Iu(),
            et = l(Qe);
          a(Qe), w(() => x(et, `+${e(g).xpGained ?? ""} XP`)), n(Te, Qe);
        };
        K(De, (Te) => {
          e(g).xpGained && Te(ge);
        });
      }
      a(G);
      var qe = r(G, 2);
      let je;
      var Ie = l(qe);
      Wo(Ie, { size: 12 }),
        a(qe),
        Ne(
          qe,
          (Te, Qe) => {
            var et;
            return (et = wt) == null ? void 0 : et(Te, Qe);
          },
          () => ({ scale: 1.1, pressScale: 0.9 }),
        ),
        a(O);
      var Xe = r(O, 2),
        Ye = l(Xe),
        rt = r(Ye, 2),
        ft = l(rt),
        Je = l(ft),
        ce = l(Je),
        ke = l(ce, !0);
      a(ce);
      var j = r(ce, 2),
        $ = l(j);
      a(j), a(Je);
      var Ze = r(Je, 2),
        ye = l(Ze),
        he = l(ye);
      a(ye);
      var te = r(ye, 2),
        ne = l(te);
      a(te), a(Ze);
      var Ue = r(Ze, 2);
      {
        var C = (Te) => {
          var Qe = Du(),
            et = l(Qe),
            zt = l(et);
          a(et), a(Qe), w(() => x(zt, `${e(P) ?? ""} GPM`)), n(Te, Qe);
        };
        K(Ue, (Te) => {
          e(P) !== null && Te(C);
        });
      }
      a(ft);
      var He = r(ft, 2);
      We(
        He,
        21,
        () => e(ue),
        it,
        (Te, Qe) => {
          var et = ma(),
            zt = Lt(et);
          {
            var bt = (ht) => {
                const ze = q(() => e(Qe).item_id ?? e(Qe).id);
                var xe = Bu();
                w(
                  (st) => {
                    y(xe, "src", st),
                      y(xe, "alt", e(Qe).display_name),
                      y(xe, "title", e(Qe).display_name);
                  },
                  [() => ui(e(ze) ?? 0)],
                ),
                  n(ht, xe);
              },
              xt = (ht) => {
                var ze = Pu();
                n(ht, ze);
              };
            K(zt, (ht) => {
              e(Qe) ? ht(bt) : ht(xt, -1);
            });
          }
          n(Te, et);
        },
      ),
        a(He),
        a(rt);
      var at = r(rt, 2);
      {
        var Et = (Te) => {
          var Qe = Nu(),
            et = l(Qe);
          We(
            et,
            21,
            () => e(X),
            it,
            (bt, xt) => {
              var ht = ju();
              let ze;
              var xe = l(ht),
                st = r(xe, 2),
                Rt = l(st, !0);
              a(st),
                a(ht),
                w(
                  (Qt, Pt) => {
                    (ze = N(ht, 1, "roster-row svelte-1pagocy", null, ze, {
                      me: e(xt).is_me,
                    })),
                      y(xe, "src", Qt),
                      y(xe, "alt", e(xt).champion),
                      x(Rt, Pt);
                  },
                  [() => wa(e(xt).champion), () => e(xt).riot_id.split("#")[0]],
                ),
                n(bt, ht);
            },
          ),
            a(et);
          var zt = r(et, 2);
          We(
            zt,
            21,
            () => e(ie),
            it,
            (bt, xt) => {
              var ht = Ou();
              let ze;
              var xe = l(ht),
                st = r(xe, 2),
                Rt = l(st, !0);
              a(st),
                a(ht),
                w(
                  (Qt, Pt) => {
                    (ze = N(ht, 1, "roster-row svelte-1pagocy", null, ze, {
                      me: e(xt).is_me,
                    })),
                      y(xe, "src", Qt),
                      y(xe, "alt", e(xt).champion),
                      x(Rt, Pt);
                  },
                  [() => wa(e(xt).champion), () => e(xt).riot_id.split("#")[0]],
                ),
                n(bt, ht);
            },
          ),
            a(zt),
            a(Qe),
            St(
              Qe,
              (bt) => (D = bt),
              () => D,
            ),
            Ne(Qe, (bt) => (z == null ? void 0 : z(bt))),
            n(Te, Qe);
        };
        K(at, (Te) => {
          e(_) && e(S) && Te(Et);
        });
      }
      var fe = r(at, 2),
        Se = l(fe);
      let Le;
      var ot = l(Se),
        ut = l(ot);
      We(
        ut,
        20,
        () => Array(9),
        it,
        (Te, Qe) => {
          var et = Fu();
          n(Te, et);
        },
      ),
        a(ut),
        _t(),
        a(ot),
        _t(2),
        a(Se),
        Ne(
          Se,
          (Te, Qe) => {
            var et;
            return (et = wt) == null ? void 0 : et(Te, Qe);
          },
          () => ({ scale: 1.06, pressScale: 0.9 }),
        ),
        Ne(
          Se,
          (Te, Qe) => (s == null ? void 0 : s(Te, Qe)),
          () => ({ onConfirm: Z, onHoldChange: (Te) => h(V, Te, !0) }),
        ),
        a(fe),
        a(Xe),
        a(le),
        w(
          (Te, Qe, et) => {
            var zt;
            (m = N(le, 1, "widget svelte-1pagocy", null, m, {
              win: e(g).result === "WIN",
              lose: e(g).result === "LOSE",
              remake: e(g).result === "REMAKE",
            })),
              (k = N(L, 1, "result svelte-1pagocy", null, k, {
                win: e(g).result === "WIN",
                lose: e(g).result === "LOSE",
                remake: e(g).result === "REMAKE",
              })),
              x(
                B,
                e(g).result === "WIN"
                  ? "Vitória"
                  : e(g).result === "LOSE"
                    ? "Derrota"
                    : e(g).result === "REMAKE"
                      ? "Remake"
                      : "?",
              ),
              x(me, Te),
              x(se, e(g).duration),
              x(U, Qe),
              (je = N(qe, 1, "expand-btn svelte-1pagocy", null, je, {
                active: e(M),
              })),
              y(
                qe,
                "aria-label",
                e(M) ? "Recolher detalhes" : "Expandir detalhes",
              ),
              y(Ye, "src", et),
              y(Ye, "alt", e(g).champion),
              x(ke, e(g).kda),
              x($, `${e(g).kdaRatio ?? ""} KDA`),
              x(
                he,
                `${((zt = e(Y)) == null ? void 0 : zt.cs) ?? "—" ?? ""} CS`,
              ),
              x(ne, `${e(g).cspm ?? ""} CS/Min.`),
              (Le = N(Se, 1, "analyze-btn svelte-1pagocy", null, Le, {
                holding: e(V),
              }));
          },
          [
            () => (e(_) ? Uo(e(_).queue_id, e(_).queue_type) : "…"),
            () => (e(_) ? Go(e(_).synced_at) : "…"),
            () => wa(e(g).champion),
          ],
        ),
        pe("click", qe, ve),
        n(Q, le);
    };
    K(de, (Q) => {
      e(g) && Q(_e);
    });
  }
  var Ee = r(de, 2);
  {
    var be = (Q) => {
      Zu(Q, {
        get matchId() {
          return e(T);
        },
        onClose: () => Ct.closeRightPanel("analysis"),
      });
    };
    K(Ee, (Q) => {
      Ct.rightPanel === "analysis" && e(T) !== null && Q(be);
    });
  }
  n(i, E), Ce(), c();
}
Bt(["click"]);
var Wu = u("<button> </button>"),
  Uu = u('<p class="topic-body svelte-cwkavu"> </p>'),
  Gu = u(
    '<div><button class="topic-head svelte-cwkavu"><div class="topic-head-text svelte-cwkavu"><span class="topic-tier svelte-cwkavu"> </span> <span class="topic-hook svelte-cwkavu"> </span></div> <!></button> <!></div>',
  ),
  Ku = u('<div class="topics svelte-cwkavu"></div>'),
  $u = u('<p class="topic-body svelte-cwkavu"> </p>'),
  Yu = u(
    '<div><button class="topic-head svelte-cwkavu"><div class="topic-head-text svelte-cwkavu"><span class="topic-tier svelte-cwkavu"> </span> <span class="topic-hook svelte-cwkavu"> </span></div> <!></button> <!></div>',
  ),
  Xu = u('<div class="topics svelte-cwkavu"></div>'),
  Ju = u('<div class="empty svelte-cwkavu">Nenhum termo encontrado.</div>'),
  e1 = u(
    '<div class="glossary-row svelte-cwkavu"><span class="glossary-term svelte-cwkavu"> </span> <span class="glossary-def svelte-cwkavu"> </span></div>',
  ),
  t1 = u('<div class="glossary svelte-cwkavu"></div>'),
  a1 = u(
    '<div class="glossary-wrap svelte-cwkavu"><div class="search-bar svelte-cwkavu"><!> <input type="text" placeholder="Buscar termo..." class="svelte-cwkavu"/></div> <div class="glossary-scroll svelte-cwkavu"><!></div></div>',
  ),
  s1 = u(
    '<div class="objective-row svelte-cwkavu"><div class="objective-head svelte-cwkavu"><span class="objective-name svelte-cwkavu"> </span> <span class="objective-first svelte-cwkavu"> </span></div> <span class="objective-respawn svelte-cwkavu"> </span> <span class="objective-note svelte-cwkavu"> </span></div>',
  ),
  l1 = u('<div class="objectives svelte-cwkavu"></div>'),
  i1 = u(
    '<div class="panel svelte-cwkavu"><div class="panel-header svelte-cwkavu"><div class="header-text svelte-cwkavu"><span class="panel-title svelte-cwkavu">> Central de Conhecimento</span> <span class="dev-badge svelte-cwkavu"></span></div> <button class="close-btn svelte-cwkavu" aria-label="Fechar"><!></button></div> <div class="tab-bar svelte-cwkavu"></div> <div class="tab-content svelte-cwkavu"><!></div></div>',
  );
function o1(i, t) {
  Me(t, !0);
  let o, v;
  $t(() => {
    o &&
      ((o.style.willChange = "transform"),
      $e.fromTo(
        o,
        { scaleX: 0.85, x: 8 },
        {
          scaleX: 1,
          x: 0,
          duration: 0.32,
          ease: "back.out(1.4)",
          clearProps: "transform",
          onComplete: () => {
            o && (o.style.willChange = "auto");
          },
        },
      ));
  });
  function c() {
    if (
      (v && $e.to(v, { rotate: 180, duration: 0.25, ease: "power2.out" }), !o)
    ) {
      t.onClose();
      return;
    }
    (o.style.willChange = "transform, opacity"),
      $e.to(o, {
        opacity: 0,
        scaleX: 0.85,
        x: 8,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          o && (o.style.willChange = "auto"), t.onClose();
        },
      });
  }
  const d = [
    { id: "dicionario", label: "Dicionário" },
    { id: "objetivos", label: "Objetivos", disabled: !0 },
    { id: "elos", label: "Elos", disabled: !0 },
    { id: "wave", label: "Wave", disabled: !0 },
  ];
  let s = oe("dicionario");
  const b = [
      {
        label: "Ferro / Bronze",
        hook: "Pare de morrer de graça",
        body: "Nesses elos, o que mais decide as partidas não é habilidade mecânica, é disciplina básica. A maioria das mortes é evitável: ficar sozinho no meio do mapa, ignorar o minimapa, continuar lutando quando já perdeu a vantagem. Antes de se preocupar com CS perfeito ou combos avançados, foque em olhar o minimapa com frequência, recuar quando estiver com vida baixa mesmo sem estar sendo perseguido, e evitar lutas em desvantagem numérica só por orgulho. Reduzir mortes desnecessárias tem impacto muito maior no resultado da partida do que qualquer outro ajuste nesse nível.",
      },
      {
        label: "Prata / Ouro",
        hook: "CS consistente separa você da massa",
        body: "A partir daqui, a diferença está na consistência: manter uma média de CS por minuto decente (6 a 7), sem picos de farm bom seguidos de partidas ruins. Visão básica (comprar e plantar wards, não deixar o trinket parado) já coloca você acima da maioria nesse elo, porque a maioria simplesmente não pensa em visão. Também é o momento de aprender a reconhecer objetivos: saber quando vale a pena disputar um dragão ou arauto, em vez de ignorar completamente ou entrar em desvantagem numérica.",
      },
      {
        label: "Platina / Esmeralda",
        hook: "Wave management é o próximo nível",
        body: "Aqui a mecânica individual já não é suficiente sozinha — controle de wave (freeze, slow push, fast push) começa a decidir quem realmente ganha a lane. Rotações entram em jogo: saber quando abrir mão da sua lane pra ajudar outra, ou pedir ajuda no momento certo. Itemização situacional, adaptando a build ao que o time inimigo está fazendo, também começa a fazer diferença real nesse elo.",
      },
      {
        label: "Diamante+",
        hook: "Leia o jogo, não só a sua lane",
        body: "Nesse ponto, mecânica raramente é o fator limitante, a maioria já executa bem o básico. O que separa quem sobe é leitura de jogo: entender quando fazer split push ou agrupar com o time, ler a composição adversária pra prever picos de poder, e tomar decisões de macro com base no estado da partida inteira, não só na sua lane. Consistência mental também importa mais aqui, tilt e decisões impulsivas custam elo rapidamente.",
      },
      {
        label: "Mestre / Grão-Mestre / Desafiante",
        hook: "Cada decisão em frações de segundo importa",
        body: "Nesse nível, todo mundo já sabe jogar bem, a diferença está em otimização marginal: decisões tomadas em menos de um segundo, adaptação constante de build e estratégia partida a partida, e conhecimento profundo de meta, incluindo picks fortes do patch atual e matchups específicos. Manter consistência ao longo de centenas de partidas, sem perder foco em partidas fáceis nem entrar em espiral de tilt, é o que separa quem se mantém no topo de quem oscila.",
      },
    ],
    g = [
      {
        label: "Fast Push",
        hook: "Empurrar rápido pra forçar uma escolha",
        body: "Bater a wave rapidamente força o adversário a escolher entre perder CS ou vir te encontrar em desvantagem embaixo da própria torre. Use antes de rotacionar pra outra lane ou pra objetivo, já que a wave grande vai bater sozinha na torre inimiga enquanto você não está lá.",
      },
      {
        label: "Slow Push",
        hook: "Acumular minions pra uma jogada maior",
        body: "Deixar a wave crescer aos poucos, sem gastar habilidades nela, cria uma wave grande que estoura de uma vez. É usado quando você planeja uma jogada em breve (gank, all-in, rotação em grupo): a wave grande força uma resposta forte do time inimigo, ou vira um push enorme se ninguém aparecer.",
      },
      {
        label: "Freeze",
        hook: "Manter a wave perto da sua torre",
        body: "Congelar a wave (deixando o número de minions aliados e inimigos quase igual, perto da sua torre) dificulta o inimigo de se aproximar sem tomar dano da torre. É a jogada mais segura quando você quer evitar ganks ou forçar o oponente a cometer um erro pra pegar CS.",
      },
      {
        label: "Crash",
        hook: "Deixar a wave bater na torre inimiga",
        body: 'Quando uma wave grande chega até a torre adversária e começa a bater nela, isso é o "crash". Normalmente acontece depois de um fast push ou slow push bem executado, e costuma ser o momento certo pra rotacionar, já que a wave vai continuar batendo na torre sem sua presença.',
      },
    ],
    _ = [
      {
        term: "Gank",
        definition:
          "Quando um jogador de outra rota (geralmente o jungler) embosca o inimigo na sua lane pra ajudar.",
      },
      {
        term: "Bush",
        definition:
          "Mato que bloqueia a visão de quem está fora dele, usado pra se esconder e dar engage de surpresa em um inimigo fora de posição.",
      },
      {
        term: "Roaming",
        definition:
          "Sair da própria lane pra ajudar ou pressionar outra parte do mapa.",
      },
      {
        term: "Snowball",
        definition:
          "Quando uma pequena vantagem cresce rapidamente até virar uma vantagem enorme.",
      },
      {
        term: "Split Push",
        definition:
          "Pressionar uma lane sozinho enquanto o resto do time faz outra coisa no mapa.",
      },
      {
        term: "Poke",
        definition:
          "Dano à distância aplicado repetidamente antes de um confronto direto.",
      },
      {
        term: "Engage",
        definition: "Iniciar o combate contra o time inimigo.",
      },
      {
        term: "Peel",
        definition:
          "Proteger o carregador do time (ADC/mago) afastando os inimigos que tentam alcançá-lo.",
      },
      {
        term: "Tilt",
        definition:
          "Estado mental de frustração que piora as decisões dentro do jogo.",
      },
      {
        term: "Smurf",
        definition:
          "Conta secundária de um jogador experiente, jogando num elo mais baixo que o real.",
      },
      {
        term: "Inting",
        definition:
          "Jogar de forma proposital ruim ou suicida, prejudicando o próprio time.",
      },
      {
        term: "Chase",
        definition:
          "Perseguir um inimigo ferido tentando fugir, buscando finalizar a kill.",
      },
      {
        term: "Safe",
        definition:
          "Recuar ou evitar risco desnecessário em vez de perseguir uma kill ou entrar numa luta duvidosa.",
      },
      {
        term: "Scaling",
        definition:
          "Quão bem um campeão cresce em poder conforme a partida avança.",
      },
      {
        term: "Reset",
        definition:
          "Voltar à base pra comprar itens sem perder muito tempo de jogo.",
      },
      {
        term: "Zoning",
        definition:
          "Usar presença ou ameaça pra impedir o inimigo de fazer CS ou se aproximar.",
      },
      {
        term: "Feed",
        definition:
          "Dar kills de graça pro time inimigo, seja por erro ou de propósito.",
      },
      {
        term: "Carry",
        definition:
          'Jogador ou campeão que "carrega" o time pra vitória com desempenho excepcional.',
      },
      {
        term: "Kiting",
        definition:
          "Atacar o inimigo enquanto se afasta dele, mantendo distância segura, geralmente feito por atiradores contra oponentes corpo a corpo.",
      },
      {
        term: "Role",
        definition:
          "A rota/função que o jogador ocupa na partida: topo, selva, meio, atirador ou suporte.",
      },
      {
        term: "Lane",
        definition:
          "Um dos corredores do mapa (topo, meio ou base) por onde os campeões avançam e as waves de minions se encontram.",
      },
    ],
    F = [
      {
        name: "Arauto do Vale",
        first: "8:00",
        respawn: "Não reaparece",
        note: "Some às 19:55, quando o Barão libera.",
      },
      {
        name: "Dragão",
        first: "5:00",
        respawn: "A cada 5 min após abatido",
        note: "Dá bônus permanente pro time que acumula.",
      },
      {
        name: "Barão Nashor",
        first: "20:00",
        respawn: "6 min após abatido",
        note: "Buff forte de combate pro time inteiro.",
      },
      {
        name: "Dragão Ancião",
        first: "Após o 4º dragão",
        respawn: "6 min após abatido",
        note: "Buff temporário poderoso em combate.",
      },
    ];
  let V = oe(0),
    T = oe(0),
    Z = oe(""),
    M = q(() =>
      e(Z).trim()
        ? _.filter(
            (E) =>
              E.term.toLowerCase().includes(e(Z).trim().toLowerCase()) ||
              E.definition.toLowerCase().includes(e(Z).trim().toLowerCase()),
          )
        : _,
    );
  var S = i1(),
    ae = l(S),
    D = l(ae),
    z = r(l(D), 2);
  (z.textContent = "{ Em desenvolvimento }"), a(D);
  var re = r(D, 2),
    I = l(re);
  La(I, { size: 19 }),
    a(re),
    St(
      re,
      (E) => (v = E),
      () => v,
    ),
    Ne(
      re,
      (E, de) => {
        var _e;
        return (_e = wt) == null ? void 0 : _e(E, de);
      },
      () => ({ scale: 1.1, pressScale: 0.9 }),
    ),
    a(ae);
  var W = r(ae, 2);
  We(
    W,
    21,
    () => d,
    it,
    (E, de) => {
      var _e = Wu();
      let Ee;
      var be = l(_e, !0);
      a(_e),
        w(() => {
          (Ee = N(_e, 1, "tab-btn svelte-cwkavu", null, Ee, {
            active: e(s) === e(de).id,
            disabled: e(de).disabled,
          })),
            (_e.disabled = e(de).disabled),
            y(_e, "title", e(de).disabled ? "Em desenvolvimento" : void 0),
            x(be, e(de).label);
        }),
        pe("click", _e, () => h(s, e(de).id, !0)),
        n(E, _e);
    },
  ),
    a(W);
  var ve = r(W, 2),
    Y = l(ve);
  {
    var X = (E) => {
        var de = Ku();
        We(
          de,
          21,
          () => b,
          it,
          (_e, Ee, be) => {
            var Q = Gu();
            let le;
            var m = l(Q),
              O = l(m),
              L = l(O),
              k = l(L, !0);
            a(L);
            var B = r(L, 2),
              ee = l(B, !0);
            a(B), a(O);
            var me = r(O, 2);
            Ea(me, { size: 16, class: "chevron" }), a(m);
            var J = r(m, 2);
            {
              var se = (H) => {
                var U = Uu(),
                  G = l(U, !0);
                a(U), w(() => x(G, e(Ee).body)), n(H, U);
              };
              K(J, (H) => {
                e(V) === be && H(se);
              });
            }
            a(Q),
              w(() => {
                (le = N(Q, 1, "topic svelte-cwkavu", null, le, {
                  open: e(V) === be,
                })),
                  x(k, e(Ee).label),
                  x(ee, e(Ee).hook);
              }),
              pe("click", m, () => h(V, e(V) === be ? null : be, !0)),
              n(_e, Q);
          },
        ),
          a(de),
          n(E, de);
      },
      ie = (E) => {
        var de = Xu();
        We(
          de,
          21,
          () => g,
          it,
          (_e, Ee, be) => {
            var Q = Yu();
            let le;
            var m = l(Q),
              O = l(m),
              L = l(O),
              k = l(L, !0);
            a(L);
            var B = r(L, 2),
              ee = l(B, !0);
            a(B), a(O);
            var me = r(O, 2);
            Ea(me, { size: 16, class: "chevron" }), a(m);
            var J = r(m, 2);
            {
              var se = (H) => {
                var U = $u(),
                  G = l(U, !0);
                a(U), w(() => x(G, e(Ee).body)), n(H, U);
              };
              K(J, (H) => {
                e(T) === be && H(se);
              });
            }
            a(Q),
              w(() => {
                (le = N(Q, 1, "topic svelte-cwkavu", null, le, {
                  open: e(T) === be,
                })),
                  x(k, e(Ee).label),
                  x(ee, e(Ee).hook);
              }),
              pe("click", m, () => h(T, e(T) === be ? null : be, !0)),
              n(_e, Q);
          },
        ),
          a(de),
          n(E, de);
      },
      P = (E) => {
        var de = a1(),
          _e = l(de),
          Ee = l(_e);
        bi(Ee, { size: 15 });
        var be = r(Ee, 2);
        ja(be), a(_e);
        var Q = r(_e, 2),
          le = l(Q);
        {
          var m = (L) => {
              var k = Ju();
              n(L, k);
            },
            O = (L) => {
              var k = t1();
              We(
                k,
                21,
                () => e(M),
                it,
                (B, ee) => {
                  var me = e1(),
                    J = l(me),
                    se = l(J, !0);
                  a(J);
                  var H = r(J, 2),
                    U = l(H, !0);
                  a(H),
                    a(me),
                    w(() => {
                      x(se, e(ee).term), x(U, e(ee).definition);
                    }),
                    n(B, me);
                },
              ),
                a(k),
                n(L, k);
            };
          K(le, (L) => {
            e(M).length === 0 ? L(m) : L(O, -1);
          });
        }
        a(Q),
          a(de),
          Ka(
            be,
            () => e(Z),
            (L) => h(Z, L),
          ),
          n(E, de);
      },
      ue = (E) => {
        var de = l1();
        We(
          de,
          21,
          () => F,
          it,
          (_e, Ee) => {
            var be = s1(),
              Q = l(be),
              le = l(Q),
              m = l(le, !0);
            a(le);
            var O = r(le, 2),
              L = l(O);
            a(O), a(Q);
            var k = r(Q, 2),
              B = l(k);
            a(k);
            var ee = r(k, 2),
              me = l(ee, !0);
            a(ee),
              a(be),
              w(() => {
                x(m, e(Ee).name),
                  x(L, `1º: ${e(Ee).first ?? ""}`),
                  x(B, `Reaparece: ${e(Ee).respawn ?? ""}`),
                  x(me, e(Ee).note);
              }),
              n(_e, be);
          },
        ),
          a(de),
          n(E, de);
      };
    K(Y, (E) => {
      e(s) === "elos"
        ? E(X)
        : e(s) === "wave"
          ? E(ie, 1)
          : e(s) === "dicionario"
            ? E(P, 2)
            : e(s) === "objetivos" && E(ue, 3);
    });
  }
  a(ve),
    a(S),
    St(
      S,
      (E) => (o = E),
      () => o,
    ),
    pe("click", re, c),
    n(i, S),
    Ce();
}
Bt(["click"]);
var r1 = u(
  '<button class="mascot-btn svelte-owdgzc" aria-label="Central de Conhecimento"><img src="/absolbalao.svg" alt="Central de Conhecimento" class="mascot-icon svelte-owdgzc"/></button> <!>',
  1,
);
function n1(i, t) {
  Me(t, !1), Xa();
  var o = r1(),
    v = Lt(o);
  Ne(
    v,
    (s, b) => {
      var g;
      return (g = us) == null ? void 0 : g(s, b);
    },
    () => "Central de Conhecimento",
  ),
    Ne(
      v,
      (s, b) => {
        var g;
        return (g = wt) == null ? void 0 : g(s, b);
      },
      () => ({ scale: 1.25, pressScale: 0.85 }),
    );
  var c = r(v, 2);
  {
    var d = (s) => {
      o1(s, { onClose: () => Ct.closeRightPanel("topics") });
    };
    K(c, (s) => {
      Ct.rightPanel === "topics" && s(d);
    });
  }
  pe("click", v, () => Ct.openRightPanel("topics")), n(i, o), Ce();
}
Bt(["click"]);
var v1 = u('<span class="dock-dot svelte-nwe9bz"></span>'),
  d1 = u("<button><!> <!></button>"),
  c1 = u(
    '<span class="server-warning svelte-nwe9bz" title="Sem conexão com o servidor do ABSOL. Histórico, perfil e sincronização de partida não vão funcionar até ele voltar.">servidor indisponível</span>',
  ),
  u1 = u('<span class="obs-badge svelte-nwe9bz">● OBS</span>'),
  p1 = u(
    '<div class="desktop-root svelte-nwe9bz"><aside class="dock svelte-nwe9bz"><img src="/logo.svg" alt="ABSOL" class="dock-logo svelte-nwe9bz" data-tauri-drag-region=""/> <nav class="svelte-nwe9bz"><div class="nav-dock svelte-nwe9bz"></div></nav> <div class="dock-actions svelte-nwe9bz"><button class="dock-item discord-btn svelte-nwe9bz" aria-label="Abrir Discord"><svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" class="svelte-nwe9bz"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" class="svelte-nwe9bz"></path></svg></button></div></aside> <div class="main-col svelte-nwe9bz"><!> <div class="main svelte-nwe9bz"><!> <div class="canvas svelte-nwe9bz" role="presentation"><!> <!> <!></div> <footer class="statusbar svelte-nwe9bz"><div class="status-left svelte-nwe9bz"><span> </span> <!></div> <p class="riot-disclaimer svelte-nwe9bz" title="ABSOL não é endossado pela Riot Games e não reflete as opiniões ou pontos de vista da Riot Games ou de qualquer pessoa oficialmente envolvida na produção ou gerenciamento de League of Legends. League of Legends e Riot Games são marcas registradas da Riot Games, Inc.">ABSOL não é endossado pela Riot Games e não reflete as opiniões ou pontos de vista da Riot Games ou de qualquer pessoa oficialmente envolvida na produção ou gerenciamento de League of Legends. League of Legends e Riot Games são marcas registradas da Riot Games, Inc.</p> <div class="status-right svelte-nwe9bz"><!> <span class="svelte-nwe9bz"> </span></div></footer></div></div></div>',
  );
function h1(i, t) {
  Me(t, !0);
  const o = () => kt(Ys, "$wallpaperChampion", c),
    v = () => kt(pi, "$serverReachable", c),
    [c, d] = ta(),
    s = {
      offline: "League of Legends não detectado",
      client: "League of Legends detectado",
      ingame: "Em partida",
    };
  let b = oe(0),
    g = oe(0);
  Gt(() => {
    (Ct.canvasWidth = e(b)), (Ct.canvasHeight = e(g)), Ct.reflow();
  }),
    $t(() => {
      Ct.windows.length === 0 && Ct.open("inicio", fs("inicio"));
    });
  let _ = q(() => Io(o())),
    F = oe("");
  function V(k, B) {
    const ee = [Ks(k, B), $s(k, B)];
    return B === 0 ? ee : [...ee, Ks(k, 0), $s(k, 0)];
  }
  Gt(() => {
    const { champion: k, skinNum: B } = e(_),
      ee = V(k, B);
    if (!ee[0] || ee[0] === e(F)) return;
    let me = !1;
    function J([se, ...H]) {
      if (!se) return;
      const U = new Image();
      (U.onload = () => {
        me || h(F, se, !0);
      }),
        (U.onerror = () => {
          me || J(H);
        }),
        (U.src = se);
    }
    return (
      J(ee),
      () => {
        me = !0;
      }
    );
  });
  var T = p1(),
    Z = l(T),
    M = r(l(Z), 2),
    S = l(M);
  We(
    S,
    21,
    () => Ii,
    (k) => k.id,
    (k, B) => {
      const ee = q(() => Ct.windows.find((G) => G.id === e(B).id));
      var me = d1();
      let J;
      var se = l(me);
      {
        let G = q(() => Ct.focusedId === e(B).id && !!e(ee));
        _s(
          se,
          () => e(B).icon,
          (Pe, we) => {
            we(Pe, {
              size: 19,
              get filled() {
                return e(G);
              },
            });
          },
        );
      }
      var H = r(se, 2);
      {
        var U = (G) => {
          var Pe = v1();
          n(G, Pe);
        };
        K(H, (G) => {
          e(ee) && G(U);
        });
      }
      a(me),
        Ne(
          me,
          (G, Pe) => {
            var we;
            return (we = us) == null ? void 0 : we(G, Pe);
          },
          () => e(B).label,
        ),
        Ne(
          me,
          (G, Pe) => {
            var we;
            return (we = wt) == null ? void 0 : we(G, Pe);
          },
          () => ({ scale: 1.25, pressScale: 0.85 }),
        ),
        w(
          () =>
            (J = N(me, 1, "dock-item svelte-nwe9bz", null, J, {
              active: Ct.focusedId === e(B).id && !!e(ee),
            })),
        ),
        pe("click", me, () => Ct.toggle(e(B).id, e(B))),
        n(k, me);
    },
  ),
    a(S),
    a(M);
  var ae = r(M, 2),
    D = l(ae);
  Ne(
    D,
    (k, B) => {
      var ee;
      return (ee = us) == null ? void 0 : ee(k, B);
    },
    () => "Comunidade",
  ),
    Ne(
      D,
      (k, B) => {
        var ee;
        return (ee = wt) == null ? void 0 : ee(k, B);
      },
      () => ({ scale: 1.25, pressScale: 0.85 }),
    ),
    a(ae),
    a(Z);
  var z = r(Z, 2),
    re = l(z);
  ki(re, {
    get onCloseRequest() {
      return t.onCloseRequest;
    },
    transparent: !0,
  });
  var I = r(re, 2),
    W = l(I);
  wd(W, {});
  var ve = r(W, 2),
    Y = l(ve);
  We(
    Y,
    17,
    () => Ct.windows,
    (k) => k.id,
    (k, B) => {
      {
        let ee = q(() => fs(e(B).appId));
        bu(k, {
          get win() {
            return e(B);
          },
          get appDef() {
            return e(ee);
          },
        });
      }
    },
  );
  var X = r(Y, 2);
  Vu(X, {});
  var ie = r(X, 2);
  n1(ie, {}), a(ve);
  var P = r(ve, 2),
    ue = l(P),
    E = l(ue);
  let de;
  var _e = l(E, !0);
  a(E);
  var Ee = r(E, 2);
  {
    var be = (k) => {
      var B = c1();
      n(k, B);
    };
    K(Ee, (k) => {
      v() || k(be);
    });
  }
  a(ue);
  var Q = r(ue, 4),
    le = l(Q);
  {
    var m = (k) => {
      var B = u1();
      n(k, B);
    };
    K(le, (k) => {
      t.obsActive && k(m);
    });
  }
  var O = r(le, 2),
    L = l(O);
  a(O),
    a(Q),
    a(P),
    a(I),
    a(z),
    a(T),
    w(() => {
      Oe(T, e(F) ? `--wallpaper: url(${e(F)});` : ""),
        (de = N(E, 1, "status-text svelte-nwe9bz", null, de, {
          offline: t.lolState === "offline",
          ingame: t.lolState === "ingame",
        })),
        x(_e, s[t.lolState]),
        x(L, `v${t.appVersion ?? ""}`);
    }),
    pe("click", D, () => ra("https://discord.com/invite/RMfdw2uRx2")),
    pe("pointerdown", ve, (k) => {
      var ee;
      if (k.target !== k.currentTarget || !Ct.focusedId) return;
      const B = Ct.windows.find((me) => me.id === Ct.focusedId);
      (ee = B == null ? void 0 : B.triggerClose) == null || ee.call(B);
    }),
    $a(ve, "clientWidth", (k) => h(b, k)),
    $a(ve, "clientHeight", (k) => h(g, k)),
    n(i, T),
    Ce(),
    d();
}
Bt(["click", "pointerdown"]);
const ai = { phase: "idle", startedAt: null, updatedAt: null },
  f1 = 240 * 1e3,
  m1 = 1800,
  si = 6e3;
function g1() {
  const i = Xt(ai);
  let t = null;
  function o() {
    t && (clearTimeout(t), (t = null));
  }
  function v() {
    o(), i.set(ai);
  }
  function c() {
    o();
    const s = Date.now();
    i.set({ phase: "syncing", startedAt: s, updatedAt: s }),
      (t = setTimeout(() => {
        const b = Date.now();
        i.set({ phase: "failed", startedAt: s, updatedAt: b }),
          (t = setTimeout(v, si));
      }, f1));
  }
  function d(s) {
    let b = null;
    i.update(
      (g) => (
        (b = g.startedAt),
        { phase: s ? "done" : "failed", startedAt: b, updatedAt: Date.now() }
      ),
    ),
      o(),
      (t = setTimeout(v, s ? m1 : si));
  }
  return { subscribe: i.subscribe, start: c, finish: d, reset: v };
}
const ds = g1();
var w1 = u(
  '<div class="sync-layer svelte-1m3rtq8" role="status" aria-live="polite"><div><svg class="sync-ring svelte-1m3rtq8" viewBox="0 0 100 100" aria-hidden="true"><circle class="ring-track svelte-1m3rtq8" cx="50" cy="50" r="46"></circle><circle class="ring-arc svelte-1m3rtq8" cx="50" cy="50" r="46"></circle></svg> <img src="/logo.svg" alt="" class="sync-logo svelte-1m3rtq8"/></div> <p class="sync-text svelte-1m3rtq8"> </p></div>',
);
function _1(i, t) {
  Me(t, !0);
  const o = () => kt(ds, "$postMatchSync", v),
    [v, c] = ta(),
    d = [
      "Analisando seu desempenho...",
      "Calculando KDA, CS e visão...",
      "Analisando seu elo e PDL...",
      "Preparando sua análise...",
      "Finalizando os últimos detalhes...",
      "Quase tudo pronto...",
    ],
    s = 3e3,
    b = 4e3,
    g = 300;
  let _ = q(() => o().phase),
    F = oe(null),
    V = oe(!0);
  Gt(() => {
    if (e(_) !== "syncing") {
      h(F, null), h(V, !0);
      return;
    }
    let ae, D;
    const z = setTimeout(() => {
      h(F, 0),
        (D = setInterval(() => {
          h(V, !1),
            (ae = setTimeout(() => {
              h(F, ((e(F) ?? 0) + 1) % d.length), h(V, !0);
            }, g));
        }, b));
    }, s);
    return () => {
      clearTimeout(z), clearTimeout(ae), clearInterval(D);
    };
  });
  let T = q(() =>
    e(_) === "done"
      ? "Histórico atualizado"
      : e(_) === "failed"
        ? "Não foi possivel sincronizar agora"
        : e(F) === null
          ? "Sincronizando os dados da sua partida..."
          : d[e(F)],
  );
  var Z = ma(),
    M = Lt(Z);
  {
    var S = (ae) => {
      var D = w1(),
        z = l(D);
      let re;
      var I = r(z, 2),
        W = l(I, !0);
      a(I),
        a(D),
        w(() => {
          (re = N(z, 1, "sync-art svelte-1m3rtq8", null, re, {
            done: e(_) === "done",
            failed: e(_) === "failed",
          })),
            Oe(I, `opacity: ${e(V) ? 1 : 0}`),
            x(W, e(T));
        }),
        Ga(
          3,
          D,
          () => pc,
          () => ({ duration: 200 }),
        ),
        n(ae, D);
    };
    K(M, (ae) => {
      e(_) !== "idle" && ae(S);
    });
  }
  n(i, Z), Ce(), c();
}
var b1 = u(
  '<div class="overlay svelte-14fp4pg"><div class="modal svelte-14fp4pg" role="dialog" aria-modal="true" tabindex="-1"><div class="panel-header svelte-14fp4pg"><span class="panel-title svelte-14fp4pg">Riot ID Divergente</span> <button class="close-btn svelte-14fp4pg" aria-label="Fechar"><!></button></div> <div class="icon svelte-14fp4pg"><!></div> <p class="desc svelte-14fp4pg">A conta detectada na partida (<strong class="svelte-14fp4pg"> </strong>) é diferente da conta vinculada ao seu ABSOL (<strong class="svelte-14fp4pg"> </strong>). O coaching foi desativado nesta partida por segurança.</p> <div class="steps svelte-14fp4pg"><p class="steps-title svelte-14fp4pg">Como corrigir</p> <ol class="svelte-14fp4pg"><li class="svelte-14fp4pg">Acesse <button class="link svelte-14fp4pg">absol.lol</button></li> <li class="svelte-14fp4pg">Clique em <strong class="svelte-14fp4pg">Configurações</strong></li> <li class="svelte-14fp4pg">Clique em <strong class="svelte-14fp4pg">Editar perfil</strong></li> <li class="svelte-14fp4pg">Altere o Riot ID para <strong class="svelte-14fp4pg"> </strong></li></ol></div> <button class="btn svelte-14fp4pg">Entendi</button> <button class="btn-discord svelte-14fp4pg">Problema persistindo? Fale com o Suporte</button></div></div>',
);
function x1(i, t) {
  Me(t, !0);
  let o, v;
  $t(() => {
    (o.style.willChange = "transform"),
      $e.fromTo(
        o,
        { scaleX: 0.85, x: 8 },
        {
          scaleX: 1,
          x: 0,
          duration: 0.32,
          ease: "back.out(1.4)",
          clearProps: "transform",
          onComplete: () => {
            o.style.willChange = "auto";
          },
        },
      );
  });
  function c() {
    v && $e.to(v, { rotate: 180, duration: 0.25, ease: "power2.out" }),
      (o.style.willChange = "transform, opacity"),
      $e.to(o, {
        opacity: 0,
        scaleX: 0.85,
        x: 8,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          (o.style.willChange = "auto"), t.onDismiss();
        },
      });
  }
  var d = b1(),
    s = l(d),
    b = l(s),
    g = r(l(b), 2),
    _ = l(g);
  La(_, { size: 19 }),
    a(g),
    St(
      g,
      (P) => (v = P),
      () => v,
    ),
    Ne(
      g,
      (P, ue) => {
        var E;
        return (E = wt) == null ? void 0 : E(P, ue);
      },
      () => ({ scale: 1.1, pressScale: 0.9 }),
    ),
    a(b);
  var F = r(b, 2),
    V = l(F);
  kn(V, { size: 28 }), a(F);
  var T = r(F, 2),
    Z = r(l(T)),
    M = l(Z, !0);
  a(Z);
  var S = r(Z, 2),
    ae = l(S, !0);
  a(S), _t(), a(T);
  var D = r(T, 2),
    z = r(l(D), 2),
    re = l(z),
    I = r(l(re));
  a(re);
  var W = r(re, 6),
    ve = r(l(W)),
    Y = l(ve, !0);
  a(ve), a(W), a(z), a(D);
  var X = r(D, 2);
  Ne(
    X,
    (P, ue) => {
      var E;
      return (E = wt) == null ? void 0 : E(P, ue);
    },
    () => ({ scale: 1.05, pressScale: 0.97 }),
  );
  var ie = r(X, 2);
  Ne(
    ie,
    (P, ue) => {
      var E;
      return (E = wt) == null ? void 0 : E(P, ue);
    },
    () => ({ scale: 1.05, pressScale: 0.97 }),
  ),
    a(s),
    St(
      s,
      (P) => (o = P),
      () => o,
    ),
    a(d),
    w(() => {
      x(M, t.gameRiotId), x(ae, t.subRiotId), x(Y, t.gameRiotId);
    }),
    pe("click", g, c),
    pe("click", I, () => ra(`${_a}/settings`)),
    pe("click", X, c),
    pe("click", ie, () => ra("https://discord.com/invite/RMfdw2uRx2")),
    n(i, d),
    Ce();
}
Bt(["click"]);
const pl = "absol_deeplink_nonce",
  y1 = 600 * 1e3;
function q1() {
  try {
    const i = localStorage.getItem(pl);
    if (!i) return null;
    const t = JSON.parse(i);
    return typeof t.nonce != "string" || typeof t.createdAt != "number"
      ? null
      : { nonce: t.nonce, createdAt: t.createdAt };
  } catch {
    return null;
  }
}
function li() {
  try {
    localStorage.removeItem(pl);
  } catch {
    return;
  }
}
function k1() {
  const i = crypto.randomUUID();
  try {
    localStorage.setItem(
      pl,
      JSON.stringify({ nonce: i, createdAt: Date.now() }),
    );
  } catch {
    return i;
  }
  return i;
}
function S1(i) {
  const t = q1();
  return t
    ? Date.now() - t.createdAt > y1
      ? (li(), !1)
      : !i || i !== t.nonce
        ? !1
        : (li(), !0)
    : !1;
}
var T1 = u('<span class="btn-loading-pixel svelte-1x3a3nb"></span>'),
  z1 = u('<span class="btn-loading-grid svelte-1x3a3nb"></span>'),
  M1 = u('<img alt="" decoding="async"/>'),
  C1 = u(
    '<div class="pixel-grid-pixel svelte-1x3a3nb"><div class="pixel-inner svelte-1x3a3nb"></div></div>',
  ),
  E1 = u(
    '<div class="pixel-grid-pixel svelte-1x3a3nb"><div class="pixel-inner svelte-1x3a3nb"></div></div>',
  ),
  A1 = u(
    '<div><aside><div class="form-inner svelte-1x3a3nb"><div class="form-brand svelte-1x3a3nb"><div class="svelte-1x3a3nb"><img src="/logo.svg" alt="ABSOL" class="brand-logo svelte-1x3a3nb"/></div></div> <div class="form-heading svelte-1x3a3nb"><h2 class="svelte-1x3a3nb">Bem-vindo de volta</h2> <p class="svelte-1x3a3nb">Entre com sua conta para continuar</p></div> <form class="svelte-1x3a3nb"><div class="field svelte-1x3a3nb"><label for="email" class="svelte-1x3a3nb">Email</label> <input id="email" type="email" placeholder="seu@email.com" autocomplete="email" required="" class="svelte-1x3a3nb"/></div> <div class="field svelte-1x3a3nb"><label for="password" class="svelte-1x3a3nb">Senha</label> <div class="pass-wrap svelte-1x3a3nb"><input id="password" placeholder="********" autocomplete="current-password" required=""/> <button type="button" class="eye-btn svelte-1x3a3nb"><!></button></div></div> <div><div class="error-note svelte-1x3a3nb"><div class="error-note-pixels svelte-1x3a3nb" aria-hidden="true"><span class="px-solid svelte-1x3a3nb"></span> <span class="px-fade px-fade-a svelte-1x3a3nb"></span> <span class="px-fade px-fade-b svelte-1x3a3nb"></span> <span class="px-fade px-fade-c svelte-1x3a3nb"></span> <span class="px-fade px-fade-d svelte-1x3a3nb"></span></div> <div class="error-note-body svelte-1x3a3nb"><span class="error-note-icon svelte-1x3a3nb">!</span> <span class="error-note-text svelte-1x3a3nb"> </span></div> <div class="error-note-pixels flipped svelte-1x3a3nb" aria-hidden="true"><span class="px-solid svelte-1x3a3nb"></span> <span class="px-fade px-fade-a svelte-1x3a3nb"></span> <span class="px-fade px-fade-b svelte-1x3a3nb"></span> <span class="px-fade px-fade-c svelte-1x3a3nb"></span> <span class="px-fade px-fade-d svelte-1x3a3nb"></span></div></div></div> <button type="submit" class="btn-entrar svelte-1x3a3nb"><!> Entrar</button></form> <div class="divider svelte-1x3a3nb"><span class="svelte-1x3a3nb">OU</span></div> <button type="button" class="btn-web-login svelte-1x3a3nb">Entrar pelo Navegador</button> <div class="form-footer svelte-1x3a3nb"><button type="button" class="link-forgot svelte-1x3a3nb">Esqueci minha senha</button> <p class="link-register svelte-1x3a3nb">Nao tem conta? <button type="button" class="link-highlight svelte-1x3a3nb">Criar conta</button></p></div></div></aside> <div><div class="splash-wrap svelte-1x3a3nb"></div> <div class="pixel-group top-left svelte-1x3a3nb"><div class="pixel-grid svelte-1x3a3nb"><div class="pixel-grid-pixel-fake svelte-1x3a3nb"><div class="pixel-inner svelte-1x3a3nb"></div></div> <!> <div class="pixel-grid-pixel-fake svelte-1x3a3nb"><div class="pixel-inner svelte-1x3a3nb"></div></div></div></div> <div class="pixel-group bottom-right svelte-1x3a3nb"><div class="pixel-grid svelte-1x3a3nb"></div></div></div></div>',
  );
function L1(i, t) {
  Me(t, !0);
  const o = [
    { champion: "Aatrox" },
    { champion: "Teemo" },
    { champion: "Yone" },
    { champion: "Nunu" },
    { champion: "Leblanc" },
    { champion: "Qiyana", pos: "90% center" },
    { champion: "Ahri" },
    { champion: "Lux", pos: "80% center" },
    { champion: "Twitch" },
    { champion: "Ambessa" },
    { champion: "Locke", pos: "80% center" },
  ];
  function v(ce, ke) {
    const j = ce.currentTarget,
      $ = $s(ke);
    j.src !== $ && (j.src = $);
  }
  let c = oe(0),
    d = oe(""),
    s = oe(""),
    b = oe(""),
    g = oe(!1),
    _ = oe(!1),
    F = oe(!1),
    V = oe(!1),
    T,
    Z,
    M,
    S = null;
  async function ae() {
    if (e(g)) return;
    if ((S == null || S.kill(), e(F))) {
      h(F, !1), h(V, !1);
      return;
    }
    if ((h(F, !0), h(V, !0), await ci(), !T)) {
      h(V, !1);
      return;
    }
    const ce = e(s),
      ke = { t: 0 };
    S = $e.to(ke, {
      t: 1,
      duration: 1.1,
      ease: "power2.out",
      onUpdate() {
        T.value = bd(ce, Math.floor(ke.t * ce.length));
      },
      onComplete() {
        (T.value = ce), h(V, !1);
      },
    });
  }
  const D = [];
  function z() {
    if (!Z) return;
    const ce = Z.querySelectorAll(":scope > *");
    $e.set(ce, { opacity: 0, y: 10 }),
      $e.to(ce, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
        stagger: 0.06,
        delay: 0.3,
        clearProps: "opacity,transform",
      });
  }
  function re() {
    if (!M) return;
    const ce = $e.parseEase("M0,0 C0,0 0.7,1 1,1"),
      ke = $e.context(() => {
        M.querySelectorAll(".pixel-grid-pixel").forEach((j) => {
          (j.style.opacity = "0"),
            $e.delayedCall($e.utils.random(0, 1.75), function $() {
              $e.to(j, {
                opacity: 1,
                duration: 1,
                ease: ce,
                yoyo: !0,
                repeat: 1,
                onComplete: () => $e.delayedCall($e.utils.random(0.5, 1.75), $),
              });
            });
        });
      });
    D.push(() => ke.revert());
  }
  $t(() => {
    requestAnimationFrame(() => h(_, !0)), z();
    const ce = setInterval(() => {
      h(c, (e(c) + 1) % o.length);
    }, 15e3);
    D.push(() => clearInterval(ce)), re();
  }),
    dl(() => {
      D.forEach((ce) => ce()), S == null || S.kill();
    });
  async function I(ce) {
    ce.preventDefault(), h(b, ""), h(g, !0);
    try {
      await Ko(e(d), e(s)), t.onLogin();
    } catch (ke) {
      h(b, ke instanceof Error ? ke.message : "Erro ao entrar.", !0), h(g, !1);
    }
  }
  function W() {
    const ce = k1();
    ra(`${_a}/login?from_desktop=true&nonce=${encodeURIComponent(ce)}`);
  }
  var ve = A1();
  let Y;
  var X = l(ve);
  let ie;
  var P = l(X),
    ue = r(l(P), 4),
    E = l(ue),
    de = r(l(E), 2);
  ja(de), a(E);
  var _e = r(E, 2),
    Ee = r(l(_e), 2),
    be = l(Ee);
  ja(be);
  let Q;
  St(
    be,
    (ce) => (T = ce),
    () => T,
  );
  var le = r(be, 2),
    m = l(le);
  {
    var O = (ce) => {
        Ov(ce, { size: 13 });
      },
      L = (ce) => {
        Qv(ce, { size: 13 });
      };
    K(m, (ce) => {
      e(F) ? ce(O) : ce(L, -1);
    });
  }
  a(le), a(Ee), a(_e);
  var k = r(_e, 2);
  let B;
  var ee = l(k),
    me = r(l(ee), 2),
    J = r(l(me), 2),
    se = l(J, !0);
  a(J), a(me), _t(2), a(ee), a(k);
  var H = r(k, 2),
    U = l(H);
  {
    var G = (ce) => {
      var ke = z1();
      We(
        ke,
        20,
        () => Array(9),
        it,
        (j, $, Ze) => {
          var ye = T1();
          w(
            (he) => Oe(ye, `animation-delay: ${he ?? ""}s`),
            [() => (Ze % 3) * 0.1 + Math.floor(Ze / 3) * 0.1],
          ),
            n(j, ye);
        },
      ),
        a(ke),
        n(ce, ke);
    };
    K(U, (ce) => {
      e(g) && ce(G);
    });
  }
  _t(), a(H), a(ue);
  var Pe = r(ue, 4),
    we = r(Pe, 2),
    Fe = l(we),
    De = r(Fe, 2),
    ge = r(l(De));
  a(De),
    a(we),
    a(P),
    St(
      P,
      (ce) => (Z = ce),
      () => Z,
    ),
    a(X);
  var qe = r(X, 2);
  let je;
  var Ie = l(qe);
  We(
    Ie,
    21,
    () => o,
    it,
    (ce, ke, j) => {
      let $ = () => e(ke).champion,
        Ze = () => e(ke).pos;
      var ye = M1();
      let he;
      y(ye, "fetchpriority", j === 0 ? "high" : "low"),
        w(
          (te) => {
            y(ye, "src", te),
              (he = N(ye, 1, "splash-img svelte-1x3a3nb", null, he, {
                active: j === e(c),
              })),
              Oe(ye, Ze() ? `object-position: ${Ze()}` : "");
          },
          [() => Ks($())],
        ),
        Pa("error", ye, (te) => v(te, $())),
        cl(ye),
        n(ce, ye);
    },
  ),
    a(Ie);
  var Xe = r(Ie, 2),
    Ye = l(Xe),
    rt = r(l(Ye), 2);
  We(
    rt,
    16,
    () => [
      0.6624, 0.8285, 0, 0.6192, 0.5101, 0.9888, 0.9888, 0.5902, 0.436, 0.1492,
      0.0357, 0.7014, 0.1907, 0.8285,
    ],
    it,
    (ce, ke) => {
      var j = C1();
      w(() => Oe(j, `opacity:${ke ?? ""}`)), n(ce, j);
    },
  ),
    _t(2),
    a(Ye),
    a(Xe);
  var ft = r(Xe, 2),
    Je = l(ft);
  We(
    Je,
    20,
    () => [
      0.7341, 0.3158, 0.9012, 0.4823, 0.6547, 0.1234, 0.8791, 0.2965, 0.5678,
      0.0412, 0.789, 0.3301, 0.9456, 0.6123,
    ],
    it,
    (ce, ke) => {
      var j = E1();
      w(() => Oe(j, `opacity:${ke ?? ""}`)), n(ce, j);
    },
  ),
    a(Je),
    a(ft),
    a(qe),
    St(
      qe,
      (ce) => (M = ce),
      () => M,
    ),
    a(ve),
    w(() => {
      (Y = N(ve, 1, "screen svelte-1x3a3nb", null, Y, { show: e(_) })),
        (ie = N(X, 1, "panel-form svelte-1x3a3nb", null, ie, { show: e(_) })),
        (de.disabled = e(g)),
        y(be, "type", e(F) ? "text" : "password"),
        (be.disabled = e(g)),
        (be.readOnly = e(V)),
        (Q = N(be, 1, "svelte-1x3a3nb", null, Q, { scrambling: e(V) })),
        (B = N(k, 1, "error-note-wrap svelte-1x3a3nb", null, B, {
          visible: !!e(b),
        })),
        x(se, e(b)),
        (H.disabled = e(g)),
        (Pe.disabled = e(g)),
        (je = N(qe, 1, "panel-hero svelte-1x3a3nb", null, je, { show: e(_) }));
    }),
    Pa("submit", ue, I),
    Ka(
      de,
      () => e(d),
      (ce) => h(d, ce),
    ),
    Ka(
      be,
      () => e(s),
      (ce) => h(s, ce),
    ),
    pe("click", le, ae),
    pe("click", Pe, W),
    pe("click", Fe, () => ra(`${_a}/forgot-password`)),
    pe("click", ge, () => ra(_a)),
    n(i, ve),
    Ce();
}
Bt(["click"]);
var Z1 = u('<p class="reason svelte-zs6i0m"> </p>'),
  R1 = u(
    '<div class="screen svelte-zs6i0m"><div class="bg-glow svelte-zs6i0m"></div> <div class="content svelte-zs6i0m"><div class="icon-wrap svelte-zs6i0m"><!></div> <h1 class="svelte-zs6i0m">Servidor indisponível</h1> <p class="svelte-zs6i0m">Não foi possível validar sua sessão com o servidor ABSOL.<br/> Verifique sua conexão e tente novamente.</p> <!> <div class="actions svelte-zs6i0m"><button class="btn primary svelte-zs6i0m">Tentar novamente</button> <button class="btn svelte-zs6i0m">Fechar o ABSOL</button></div></div></div>',
  );
function I1(i, t) {
  Me(t, !0);
  let o = R(t, "reason", 3, "");
  const v = [
    {
      codigo: "handoff",
      mensagem: "Não conseguimos carregar sua sessão salva.",
    },
    {
      codigo: "no_token",
      mensagem: "Não conseguimos carregar sua sessão salva.",
    },
    {
      codigo: "internal_error",
      mensagem: "O aplicativo falhou ao validar a sessão.",
    },
    {
      codigo: "timeout",
      mensagem: "O servidor demorou demais para responder.",
    },
    { codigo: "server_offline", mensagem: "O servidor não respondeu." },
  ];
  let c = q(() => {
    var M;
    return (
      ((M = v.find((S) => o().includes(S.codigo))) == null
        ? void 0
        : M.mensagem) ?? ""
    );
  });
  var d = R1(),
    s = r(l(d), 2),
    b = l(s),
    g = l(b);
  Hn(g, { size: 28, color: "var(--accent)" }), a(b);
  var _ = r(b, 6);
  {
    var F = (M) => {
      var S = Z1(),
        ae = l(S, !0);
      a(S), w(() => x(ae, e(c))), n(M, S);
    };
    K(_, (M) => {
      e(c) && M(F);
    });
  }
  var V = r(_, 2),
    T = l(V),
    Z = r(T, 2);
  a(V),
    a(s),
    a(d),
    pe("click", T, function (...M) {
      var S;
      (S = t.onRetry) == null || S.apply(this, M);
    }),
    pe("click", Z, function (...M) {
      var S;
      (S = t.onClose) == null || S.apply(this, M);
    }),
    n(i, d),
    Ce();
}
Bt(["click"]);
function D1() {
  const i = Xt(null),
    t = Xt(!1),
    o = Xt([]),
    v = [];
  async function c() {
    v.push(
      await Ht("absol://game-started", () => {
        t.set(!0), o.set([]), i.set(null);
      }),
    ),
      v.push(
        await Ht("absol://game-snapshot", (g) => {
          i.set(g.payload);
        }),
      ),
      v.push(
        await Ht("absol://game-events", (g) => {
          o.update((_) => [..._, ...g.payload]);
        }),
      ),
      v.push(
        await Ht("absol://game-ended", () => {
          t.set(!1), i.set(null);
        }),
      );
  }
  function d() {
    v.forEach((g) => g()), (v.length = 0);
  }
  const s = Fl(i, (g) => {
      if (!g) return "--:--";
      const _ = Math.floor(g.game_time / 60),
        F = Math.floor(g.game_time % 60);
      return `${String(_).padStart(2, "0")}:${String(F).padStart(2, "0")}`;
    }),
    b = Fl(i, (g) => {
      var F;
      const _ =
        (F = g == null ? void 0 : g.my_player) == null ? void 0 : F.scores;
      return _ ? `${_.kills} / ${_.deaths} / ${_.assists}` : "- / - / -";
    });
  return {
    snapshot: i,
    inGame: t,
    events: o,
    gameTimeFormatted: s,
    myKDA: b,
    init: c,
    destroy: d,
  };
}
const ii = D1(),
  Pi = "absol_window_state",
  oi = 1366,
  ri = 768,
  B1 = 400,
  P1 = 48,
  j1 = 16;
let ka = null,
  rl = !1;
function O1() {
  try {
    const i = localStorage.getItem(Pi);
    if (!i) return null;
    const t = JSON.parse(i),
      { width: o, height: v, x: c, y: d } = t;
    return ![o, v, c, d].every(
      (s) => typeof s == "number" && Number.isFinite(s),
    ) ||
      o <= 0 ||
      v <= 0
      ? null
      : { width: o, height: v, x: c, y: d, maximized: !!t.maximized };
  } catch {
    return null;
  }
}
function nl(i) {
  try {
    localStorage.setItem(Pi, JSON.stringify(i));
  } catch {
    return;
  }
}
async function N1(i) {
  const t = i.x + P1,
    o = i.y + j1;
  return (await jo()).some(
    (v) =>
      t >= v.position.x &&
      t < v.position.x + v.size.width &&
      o >= v.position.y &&
      o < v.position.y + v.size.height,
  );
}
async function vl() {
  const i = Ja(),
    [t, o] = await Promise.all([i.innerSize(), i.outerPosition()]);
  return { width: t.width, height: t.height, x: o.x, y: o.y };
}
async function F1() {
  const i = Ja();
  await i.setMinSize(new Ol(oi, ri));
  const t = O1();
  if (!t) {
    await i.setSize(new Ol(oi, ri)),
      await i.center(),
      (ka = await vl()),
      nl({ ...ka, maximized: !1 }),
      (rl = !0);
    return;
  }
  (ka = { width: t.width, height: t.height, x: t.x, y: t.y }),
    await i.setSize(new Bo(t.width, t.height)),
    (await N1(ka))
      ? await i.setPosition(new Po(t.x, t.y))
      : (await i.center(), (ka = await vl())),
    t.maximized && (await i.maximize()),
    (rl = !0);
}
function H1() {
  const i = Ja();
  let t,
    o = !1;
  async function v() {
    if (!(o || !rl || (await i.isMinimized()))) {
      if (await i.isMaximized()) {
        ka && nl({ ...ka, maximized: !0 });
        return;
      }
      (ka = await vl()), nl({ ...ka, maximized: !1 });
    }
  }
  function c() {
    clearTimeout(t), (t = setTimeout(() => void v(), B1));
  }
  const d = [i.onResized(c), i.onMoved(c)];
  return () => {
    (o = !0), clearTimeout(t);
    for (const s of d) s.then((b) => b());
  };
}
async function Q1(i) {
  return await Ht("deep-link://new-url", (t) => {
    i(t.payload);
  });
}
var V1 = u("<!> <!> <!> <!> <!> <!> <!> <div><!></div> <!>", 1),
  W1 = u('<p class="update-blocker-notes svelte-12qhfyh"> </p>'),
  U1 = u(
    '<div class="update-blocker-progress svelte-12qhfyh"><div class="update-blocker-bar svelte-12qhfyh"></div></div>',
  ),
  G1 = u(
    '<div class="error-note svelte-12qhfyh"><div class="error-note-pixels svelte-12qhfyh" aria-hidden="true"><span class="px-solid svelte-12qhfyh"></span> <span class="px-fade px-fade-a svelte-12qhfyh"></span> <span class="px-fade px-fade-b svelte-12qhfyh"></span> <span class="px-fade px-fade-c svelte-12qhfyh"></span> <span class="px-fade px-fade-d svelte-12qhfyh"></span></div> <div class="error-note-body svelte-12qhfyh"><span class="error-note-icon svelte-12qhfyh">!</span> <span class="error-note-text svelte-12qhfyh"> </span></div> <div class="error-note-pixels flipped svelte-12qhfyh" aria-hidden="true"><span class="px-solid svelte-12qhfyh"></span> <span class="px-fade px-fade-a svelte-12qhfyh"></span> <span class="px-fade px-fade-b svelte-12qhfyh"></span> <span class="px-fade px-fade-c svelte-12qhfyh"></span> <span class="px-fade px-fade-d svelte-12qhfyh"></span></div></div>',
  ),
  K1 = u(
    '<div class="update-blocker svelte-12qhfyh"><div class="update-blocker-card svelte-12qhfyh"><div class="update-blocker-icon svelte-12qhfyh"><img src="/logo.svg" alt="ABSOL" class="svelte-12qhfyh"/></div> <h2 class="svelte-12qhfyh">Atualização obrigatória</h2> <p class="update-blocker-version svelte-12qhfyh"> </p> <!> <button class="update-blocker-btn svelte-12qhfyh"> </button> <!> <!></div></div>',
  ),
  $1 = u("<!> <!> <!>", 1);
function _2(i, t) {
  Me(t, !0);
  const o = () => kt(oa, "$auth", d),
    v = () => kt(el, "$modulesStore", d),
    c = () => kt(Li, "$obsStore", d),
    [d, s] = ta();
  let b = oe(null),
    g = oe(!1),
    _ = oe(null),
    F = oe(null);
  async function V() {
    h(g, !0), h(_, null);
    try {
      await Ve("install_update");
    } catch (G) {
      h(g, !1), h(_, String(G), !0);
    }
  }
  let T = oe("offline"),
    Z = oe("..."),
    M = oe(!0),
    S = oe(!1),
    ae = "";
  const D = (G) => Zi(G, "notificacao"),
    z = new Set(["console", "simulator"]),
    re = new Set([
      "/overlay",
      "/overlay-gold",
      "/notification",
      "/console",
      "/simulator",
    ]);
  $t(() => {
    const G = Os().label;
    if (
      (z.has(G) ||
        document.addEventListener("contextmenu", (C) => C.preventDefault()),
      G !== "main")
    )
      return;
    (window.__notify = Aa),
      Ai().then((C) => {
        h(Z, C, !0);
      }),
      Do(),
      (async () => {
        const C = ya();
        if (C) {
          try {
            await Ve("set_session", {
              token: C.token ?? "",
              subscriptionStatus: C.user.subscriptionStatus ?? "",
              subscriptionPlan: C.user.subscriptionPlan ?? "",
              subscriptionExpiresAt:
                C.user.expiresSub && C.user.expiresSub !== "N/A"
                  ? C.user.expiresSub
                  : "",
              riotId: C.user.tag ?? "",
              mainRole: C.user.role ?? "",
              isLogin: !1,
            });
          } catch (He) {
            (ve = !0),
              Ve("log_session_handoff_error", { detail: String(He) }).catch(
                () => {},
              );
          }
          oa.init(),
            rs.init(C.token),
            Va.init(C.token),
            Wa.init(C.token),
            h(Y, !0),
            h(I, "loading"),
            Ve("set_tray_nick", { nick: `${C.user.tag}` });
        }
      })();
    const Pe = Number(localStorage.getItem("absol_volume") ?? "60"),
      we = localStorage.getItem("absol_device") ?? "Padrão do sistema";
    Ve("set_volume", { volume: Pe }),
      Ve("set_audio_device", { name: we }),
      Os()
        .show()
        .then(() => F1());
    const De = H1();
    Ve("get_lol_status").then((C) => {
      h(T, C, !0), ol.set(e(T));
    });
    const ge = Ht("absol://lol-status", async ({ payload: C }) => {
        const He = e(T);
        if (
          (h(T, C.state, !0),
          ol.set(e(T)),
          e(T) === "ingame" && He !== "ingame")
        ) {
          const at = Os();
          h(M, await at.isVisible(), !0),
            e(I) === "app" && Ve("hide_main_window");
        }
        e(T) !== "ingame" && He === "ingame" && Ve("exit_game_mode");
      }),
      qe = Ht("absol://game-live", () => {
        e(I) === "app" &&
          (ei("overlay") && Ve("show_overlay", { label: "overlay" }),
          ei("overlay-gold") && Ve("show_overlay", { label: "overlay-gold" }));
      }),
      je = Ht("absol://plan-activated", () => {
        fa.refresh();
      }),
      Ie = Ht("absol://logout", () => {
        oa.logout(), Ve("set_tray_logged_out");
      }),
      Xe = Ht("absol://subscription-update", ({ payload: C }) => {
        if (C.subscription_status === "unauthorized") {
          oa.logout(), Ve("set_tray_logged_out");
          return;
        }
        oa.syncSubscription(C);
      }),
      Ye = Ht("absol://free-match-used", () => {
        const C = ya();
        C && ((C.user.freeDailyRemaining = 0), $o(C), oa.init());
      }),
      rt = Ht("absol://free-limit-reached", async () => {
        const C = [
            "Sua partida gratuita de hoje acabou! Assine o PRO e jogue sempre com vantagem.",
            "Coach desativado. Quer dicas exclusivas em todas as suas partidas?",
            "Limite diário atingido! Vire PRO e domine o Rift sem restrições.",
            "Partida gratuita esgotada. Assine agora e suba de elo mais rápido!",
          ],
          He = C[Math.floor(Math.random() * C.length)];
        Aa.push({
          type: "warning",
          message: He,
          action: { label: "Assinar PRO", fn: () => ra(`${_a}/#assinar`) },
        });
      }),
      ft = Ht("absol://riot-id-mismatch", ({ payload: C }) => {
        h(F, { gameRiotId: C.game_riot_id, subRiotId: C.sub_riot_id }, !0);
      }),
      Je = Ht("absol://notification", ({ payload: C }) => {
        const He = D(C.action_url);
        Aa.push({
          type: C.type,
          message: C.title ? `${C.title} — ${C.message}` : C.message,
          serverId: C.id,
          action:
            C.action_label && He
              ? { label: C.action_label, fn: () => ra(He) }
              : void 0,
        });
      });
    async function ce(C) {
      if (!(!C.includes("absol:") || !C.includes("token=")))
        try {
          const He = new URL(C),
            at = He.searchParams.get("token");
          if (!at || at === ae) return;
          if (!S1(He.searchParams.get("nonce"))) {
            Ve("log_session_handoff_error", {
              detail: "deep link recusado: nonce ausente ou invalido",
            }).catch(() => {});
            return;
          }
          (ae = at), h(S, !0), await Yo(at), oa.init(), _e();
        } catch {
          ae = "";
        } finally {
          h(S, !1);
        }
    }
    const ke = Ht("absol-deep-link-url", ({ payload: C }) => {
        ce(C);
      }),
      j = Q1((C) => {
        for (const He of C) ce(He);
      }),
      $ = Ht("absol://update-available", ({ payload: C }) => {
        tl.set(C),
          Aa.push({
            type: "update",
            message: `ABSOL v${C.version} disponível`,
            action: {
              label: "Ver",
              fn: () => Ct.open("sistema", fs("sistema")),
            },
          });
      }),
      Ze = Ht("absol://update-required", ({ payload: C }) => {
        h(b, { ...C, mandatory: !0 }, !0);
      }),
      ye = Ht("absol://match-sync-started", () => {
        ds.start();
      }),
      he = Ht("absol://match-imported", ({ payload: C }) => {
        const He = (C == null ? void 0 : C.synced) !== !1;
        ds.finish(He), m();
        const at = ya();
        if (!at) return;
        const Et = [
          rs.refresh(at.token, { force: !0 }),
          Va.refresh(at.token, { force: !0 }),
          Wa.refresh(at.token, { force: !0 }),
        ];
        He && Promise.allSettled([...Et, fa.refresh()]).then(E);
      }),
      te = setInterval(m, 900 * 1e3);
    function ne() {
      const C = ya();
      C && Va.refresh(C.token);
    }
    const Ue = setInterval(ne, 300 * 1e3);
    return (
      document.addEventListener("visibilitychange", de),
      ii.init(),
      () => {
        ge.then((C) => C()),
          qe.then((C) => C()),
          je.then((C) => C()),
          Ie.then((C) => C()),
          Xe.then((C) => C()),
          Ye.then((C) => C()),
          rt.then((C) => C()),
          ft.then((C) => C()),
          Je.then((C) => C()),
          ke.then((C) => C()),
          j.then((C) => C()),
          $.then((C) => C()),
          Ze.then((C) => C()),
          ye.then((C) => C()),
          he.then((C) => C()),
          ds.reset(),
          document.removeEventListener("visibilitychange", de),
          clearInterval(Ue),
          De(),
          clearInterval(te),
          ii.destroy(),
          fa.destroy();
      }
    );
  });
  let I = oe("login"),
    W = oe(""),
    ve = !1,
    Y = oe(!1),
    X = oe(!1),
    ie,
    P,
    ue = q(() => Ao.url.pathname);
  Gt(() => {
    o() === null && e(I) === "app" && ((ae = ""), h(I, "login"));
  });
  function E() {
    hi(Jo(fa.recent)[0]);
  }
  function de() {
    if (document.visibilityState !== "visible") return;
    const G = ya();
    G && Va.refresh(G.token);
  }
  function _e() {
    oa.login(), h(I, "loading"), Ct.open("inicio", fs("inicio"));
    const G = ya();
    G && Ve("set_tray_nick", { nick: `${G.user.tag}` });
  }
  function Ee() {
    oa.logout(), h(Y, !1), h(I, "login");
  }
  function be(G) {
    h(W, ve ? "handoff" : G, !0), h(I, "offline");
  }
  function Q() {
    h(W, ""), h(I, "loading");
  }
  function le() {
    oa.logout(), Ve("quit_app");
  }
  async function m() {
    try {
      (await Ve("check_update")) || tl.set(null);
    } catch {}
  }
  async function O() {
    P
      ? await (ie == null
          ? void 0
          : ie.revealFromCenter(P, () => {
              h(I, "app");
            }))
      : h(I, "app"),
      fa.init().then(E),
      m();
    const G = ya();
    G && (Xo(G.token), rs.init(G.token), Va.init(G.token), Wa.init(G.token));
    const we = v()
      .filter((De) => De.enabled && vs(De.id, "FREE"))
      .map((De) => De.id);
    Ve("set_modules", { ids: we }).catch(() => {}),
      (await Ve("get_lol_status").catch(() => "offline")) === "ingame" &&
        (h(T, "ingame"), Ve("enter_game_mode"));
  }
  var L = $1(),
    k = Lt(L);
  {
    var B = (G) => {
        var Pe = ma(),
          we = Lt(Pe);
        er(we, () => t.children), n(G, Pe);
      },
      ee = q(() => re.has(e(ue))),
      me = (G) => {
        var Pe = V1(),
          we = Lt(Pe);
        St(
          vd(we, {}),
          (he) => (ie = he),
          () => ie,
        );
        var Fe = r(we, 2);
        {
          var De = (he) => {
            ki(he, {
              fixed: !0,
              transparent: !0,
              onCloseRequest: () => Ve("quit_app"),
            });
          };
          K(Fe, (he) => {
            (e(I) !== "app" || e(b)) && he(De);
          });
        }
        var ge = r(Fe, 2);
        {
          var qe = (he) => {
            L1(he, { onLogin: _e });
          };
          K(ge, (he) => {
            e(I) === "login" && he(qe);
          });
        }
        var je = r(ge, 2);
        {
          var Ie = (he) => {
            Wl(he, {
              onDone: O,
              onAuthFail: Ee,
              onServerOffline: be,
              get isReload() {
                return e(Y);
              },
            });
          };
          K(je, (he) => {
            e(I) === "loading" && he(Ie);
          });
        }
        var Xe = r(je, 2);
        {
          var Ye = (he) => {
            I1(he, {
              onClose: le,
              onRetry: Q,
              get reason() {
                return e(W);
              },
            });
          };
          K(Xe, (he) => {
            e(I) === "offline" && he(Ye);
          });
        }
        var rt = r(Xe, 2);
        {
          var ft = (he) => {
            ld(he, { onCancel: () => h(X, !1) });
          };
          K(rt, (he) => {
            e(X) && he(ft);
          });
        }
        var Je = r(rt, 2);
        {
          var ce = (he) => {
            x1(he, {
              get gameRiotId() {
                return e(F).gameRiotId;
              },
              get subRiotId() {
                return e(F).subRiotId;
              },
              onDismiss: () => h(F, null),
            });
          };
          K(Je, (he) => {
            e(F) && he(ce);
          });
        }
        var ke = r(Je, 2);
        let j;
        var $ = l(ke);
        h1($, {
          get lolState() {
            return e(T);
          },
          get appVersion() {
            return e(Z);
          },
          get obsActive() {
            return c();
          },
          onCloseRequest: () => {
            localStorage.getItem("absol_minimize_on_close") !== "false"
              ? Ve("minimize_to_tray")
              : h(X, !0);
          },
        }),
          a(ke),
          St(
            ke,
            (he) => (P = he),
            () => P,
          );
        var Ze = r(ke, 2);
        {
          var ye = (he) => {
            _1(he, {});
          };
          K(Ze, (he) => {
            e(I) === "app" && !e(b) && he(ye);
          });
        }
        w(() => {
          (j = N(ke, 1, "shell svelte-12qhfyh", null, j, {
            hidden: e(I) !== "app",
          })),
            (ke.inert = !!e(b));
        }),
          n(G, Pe);
      };
    K(k, (G) => {
      e(ee) ? G(B) : G(me, -1);
    });
  }
  var J = r(k, 2);
  {
    var se = (G) => {
      Wl(G, {});
    };
    K(J, (G) => {
      e(S) && G(se);
    });
  }
  var H = r(J, 2);
  {
    var U = (G) => {
      var Pe = K1(),
        we = l(Pe),
        Fe = r(l(we), 4),
        De = l(Fe);
      a(Fe);
      var ge = r(Fe, 2);
      {
        var qe = (Je) => {
          var ce = W1(),
            ke = l(ce, !0);
          a(ce), w(() => x(ke, e(b).notes)), n(Je, ce);
        };
        K(ge, (Je) => {
          e(b).notes && Je(qe);
        });
      }
      var je = r(ge, 2),
        Ie = l(je, !0);
      a(je);
      var Xe = r(je, 2);
      {
        var Ye = (Je) => {
          var ce = U1();
          n(Je, ce);
        };
        K(Xe, (Je) => {
          e(g) && Je(Ye);
        });
      }
      var rt = r(Xe, 2);
      {
        var ft = (Je) => {
          var ce = G1(),
            ke = r(l(ce), 2),
            j = r(l(ke), 2),
            $ = l(j, !0);
          a(j), a(ke), _t(2), a(ce), w(() => x($, e(_))), n(Je, ce);
        };
        K(rt, (Je) => {
          e(_) && Je(ft);
        });
      }
      a(we),
        a(Pe),
        w(() => {
          x(De, `v${e(b).version ?? ""}`),
            (je.disabled = e(g)),
            x(
              Ie,
              e(g)
                ? "Instalando…"
                : e(_)
                  ? "Tentar novamente"
                  : "Instalar agora",
            );
        }),
        pe("click", je, V),
        n(G, Pe);
    };
    K(H, (G) => {
      e(I) === "app" && e(b) && G(U);
    });
  }
  n(i, L), Ce(), s();
}
Bt(["click"]);
export { _2 as component, w2 as universal };
