const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./miXHpl0f.js", "./BYGgIge7.js"]),
) => i.map((i) => d[i]);
var cs = Object.defineProperty;
var us = Object.getPrototypeOf;
var ds = Reflect.get;
var Et = (e) => {
  throw TypeError(e);
};
var fs = (e, t, s) =>
  t in e
    ? cs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (e[t] = s);
var At = (e, t, s) => fs(e, typeof t != "symbol" ? t + "" : t, s),
  $t = (e, t, s) => t.has(e) || Et("Cannot " + s);
var C = (e, t, s) => (
    $t(e, t, "read from private field"), s ? s.call(e) : t.get(e)
  ),
  ae = (e, t, s) =>
    t.has(e)
      ? Et("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, s);
var he = (e, t, s) => ($t(e, t, "access private method"), s);
var kt = (e, t, s) => ds(us(e), s, t);
import { a as H, b as Xe, f as j, c as Ot, t as Rt } from "./DXITvGue.js";
import { o as Ht, a as ps } from "./zmacCIoP.js";
import {
  p as fe,
  t as Q,
  g as pe,
  w as n,
  j as b,
  Z as M,
  x as G,
  I as hs,
  y as D,
  b4 as Lt,
  ad as vs,
  aI as ke,
  X as De,
  i as L,
  k as T,
  f as Ut,
  u as ms,
} from "./BYGgIge7.js";
import { b as ze } from "./DdrE9EQ-.js";
import {
  a as Y,
  s as ee,
  c as Ft,
  i as Bt,
  l as _s,
  g as nt,
} from "./miXHpl0f.js";
import { p as Ee, s as Ae, a as ne } from "./BCrg8Att.js";
import { e as Je, s as Z, r as Kt, d as zt, a as rt } from "./D6JgBVoW.js";
import { i as de } from "./BQhwzbP1.js";
import { w as gs, p as ws, e as Ne, a as Pe } from "./D9awVeru.js";
import { _ as et } from "./Dp1pzeXC.js";
import { w as te, g as Gt, d as se } from "./D1hAezf3.js";
import { A as we } from "./5muZMSkm.js";
import { b as jt, c as dt, s as qt, a as Ge, h as xs } from "./DfOSvqDi.js";
const ys =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M120-120v-300h60v198l558-558H540v-60h300v300h-60v-198L222-180h198v60H120Z"/></svg>',
  Ss =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M120-120v-300h60v198l558-558H540v-60h300v300h-60v-198L222-180h198v60H120Z"/></svg>';
var bs = Xe(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Es(e, t) {
  fe(t, !0);
  let s = Ee(t, "size", 3, 20),
    a = Ee(t, "filled", 3, !1),
    i = Ee(t, "class", 3, ""),
    u = M(() => qt(a() ? Ss : ys));
  var l = bs();
  jt(l, () => n(u), !0),
    b(l),
    Q(() => {
      Y(l, "width", s()),
        Y(l, "height", s()),
        ee(l, 0, Ft(i())),
        dt(l, t.color ? `color:${t.color}` : void 0);
    }),
    H(e, l),
    pe();
}
const As =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m282-225-42-42 240-240 240 240-42 42-198-198-198 198Zm0-253-42-42 240-240 240 240-42 42-198-198-198 198Z"/></svg>',
  $s =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m282-225-42-42 240-240 240 240-42 42-198-198-198 198Zm0-253-42-42 240-240 240 240-42 42-198-198-198 198Z"/></svg>';
var ks = Xe(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Rs(e, t) {
  fe(t, !0);
  let s = Ee(t, "size", 3, 20),
    a = Ee(t, "filled", 3, !1),
    i = Ee(t, "class", 3, ""),
    u = M(() => qt(a() ? $s : As));
  var l = ks();
  jt(l, () => n(u), !0),
    b(l),
    Q(() => {
      Y(l, "width", s()),
        Y(l, "height", s()),
        ee(l, 0, Ft(i())),
        dt(l, t.color ? `color:${t.color}` : void 0);
    }),
    H(e, l),
    pe();
}
const dr = we.includes("stagespun.dev");
function Ls() {
  return Promise.resolve();
}
var Ie, Ce, Te, Oe, He;
class Ds {
  constructor() {
    ae(this, Ie, G(hs([])));
    ae(this, Ce, G(null));
    ae(this, Te, G(0));
    ae(this, Oe, G(0));
    At(this, "nextZ", 1);
    ae(this, He, G(null));
  }
  get windows() {
    return n(C(this, Ie));
  }
  set windows(t) {
    D(C(this, Ie), t, !0);
  }
  get focusedId() {
    return n(C(this, Ce));
  }
  set focusedId(t) {
    D(C(this, Ce), t, !0);
  }
  get canvasWidth() {
    return n(C(this, Te));
  }
  set canvasWidth(t) {
    D(C(this, Te), t, !0);
  }
  get canvasHeight() {
    return n(C(this, Oe));
  }
  set canvasHeight(t) {
    D(C(this, Oe), t, !0);
  }
  get rightPanel() {
    return n(C(this, He));
  }
  set rightPanel(t) {
    D(C(this, He), t, !0);
  }
  openRightPanel(t) {
    this.rightPanel = t;
  }
  closeRightPanel(t) {
    this.rightPanel === t && (this.rightPanel = null);
  }
  heightFor(t, s) {
    return Math.min(Math.max(t, s), this.canvasHeight || t);
  }
  centerY(t) {
    return Math.min(
      Math.max((this.canvasHeight - t) / 2, 0),
      Math.max(0, this.canvasHeight - t),
    );
  }
  open(t, s) {
    if (this.windows.find((u) => u.id === t)) {
      this.focus(t);
      return;
    }
    if (((this.windows = []), t === "inicio")) {
      this.windows.push({
        id: t,
        appId: t,
        zIndex: ++this.nextZ,
        x: 0,
        y: 0,
        height: 0,
        defaultHeight: 0,
        minHeight: 0,
      }),
        (this.focusedId = t);
      return;
    }
    const i = this.heightFor(s.defaultHeight, s.minHeight);
    this.windows.push({
      id: t,
      appId: t,
      zIndex: ++this.nextZ,
      x: 0,
      y: this.centerY(i),
      height: i,
      defaultHeight: s.defaultHeight,
      minHeight: s.minHeight,
    }),
      (this.focusedId = t);
  }
  reflow() {
    for (const t of this.windows)
      t.appId !== "inicio" &&
        ((t.height = this.heightFor(t.defaultHeight, t.minHeight)),
        (t.y = this.centerY(t.height)));
  }
  registerTriggerClose(t, s) {
    const a = this.windows.find((i) => i.id === t);
    a && (a.triggerClose = s);
  }
  toggle(t, s) {
    const a = this.windows.find((i) => i.id === t);
    if (!a) {
      this.open(t, s);
      return;
    }
    a.triggerClose ? a.triggerClose() : this.close(t);
  }
  close(t) {
    if (
      ((this.windows = this.windows.filter((s) => s.id !== t)),
      this.focusedId === t)
    ) {
      const s = [...this.windows].sort((a, i) => i.zIndex - a.zIndex)[0];
      this.focusedId = (s == null ? void 0 : s.id) ?? null;
    }
  }
  focus(t) {
    const s = this.windows.find((a) => a.id === t);
    s && ((s.zIndex = ++this.nextZ), (this.focusedId = t));
  }
  reset() {
    (this.windows = []), (this.focusedId = null), (this.rightPanel = null);
  }
}
(Ie = new WeakMap()),
  (Ce = new WeakMap()),
  (Te = new WeakMap()),
  (Oe = new WeakMap()),
  (He = new WeakMap());
const Yt = new Ds(),
  je = te(!0),
  Dt = te(!1),
  ft = "absol_session";
function ve() {
  try {
    const e = localStorage.getItem(ft);
    if (!e) return null;
    const t = JSON.parse(e);
    return Date.now() > t.expiresAt ? (Qt(), null) : t;
  } catch {
    return null;
  }
}
function pt(e) {
  localStorage.setItem(ft, JSON.stringify(e));
}
function Qt() {
  localStorage.removeItem(ft);
}
async function fr(e, t) {
  const s = await fetch(`${we}/api/auth/app/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: e, password: t }),
  }).catch((u) => {
    throw new Error(`Servidor offline ou inacessível.
Tente novamente mais tarde.`);
  });
  if (s.status === 429) {
    const u = s.headers.get("Retry-After");
    throw new Error(
      u
        ? `Muitas tentativas.
Tente novamente em ${u} segundos.`
        : `Muitas tentativas.
Tente novamente mais tarde.`,
    );
  }
  if (!s.ok) {
    const u = await s.json().catch(() => ({ error: "Erro desconhecido." }));
    throw new Error(u.error ?? "Erro desconhecido.");
  }
  const a = await s.json(),
    i = {
      token: a.token,
      user: {
        email: a.email,
        tag: a.riot_id ?? "",
        role: a.main_role ?? "",
        plan:
          a.subscription_status === "active" ||
          a.subscription_status === "cancelled"
            ? "PRO"
            : "FREE",
        subscriptionStatus: a.subscription_status ?? "free",
        subscriptionPlan: a.subscription_plan ?? "",
        createdAt: a.created_at ?? "N/A",
        expiresSub: a.subscription_expires_at ?? "N/A",
        freeDailyRemaining: a.free_daily_remaining ?? 1,
        freeMatchInUse: a.free_match_in_use ?? !1,
      },
      expiresAt: Date.now() + 720 * 60 * 60 * 1e3,
    };
  pt(i);
  try {
    const { invoke: u } = await et(
      async () => {
        const { invoke: l } = await import("./miXHpl0f.js").then((g) => g.f);
        return { invoke: l };
      },
      __vite__mapDeps([0, 1]),
      import.meta.url,
    );
    await u("set_session", {
      token: a.token,
      subscriptionStatus: a.subscription_status ?? "free",
      subscriptionPlan: a.subscription_plan ?? "",
      subscriptionExpiresAt: a.subscription_expires_at ?? "",
      riotId: a.riot_id ?? "",
      mainRole: a.main_role ?? "",
      isLogin: !0,
    });
  } catch {}
  return i;
}
let Re = null;
function pr(e) {
  return (
    Re ||
    ((Re = (async () => {
      try {
        const t = await fetch(`${we}/api/auth/app/token-login`, {
          method: "POST",
          headers: { Authorization: `Bearer ${e}` },
        }).catch(() => {
          throw new Error("Servidor offline ou inacessível.");
        });
        if (!t.ok) throw new Error("Sessão inválida ou expirada.");
        const s = await t.json(),
          a = {
            token: e,
            user: {
              email: s.email,
              tag: s.riot_id ?? "",
              role: s.main_role ?? "",
              plan:
                s.subscription_status === "active" ||
                s.subscription_status === "cancelled"
                  ? "PRO"
                  : "FREE",
              subscriptionStatus: s.subscription_status ?? "free",
              subscriptionPlan: s.subscription_plan ?? "",
              createdAt: s.created_at ?? "N/A",
              expiresSub: s.subscription_expires_at ?? "N/A",
              freeDailyRemaining: s.free_daily_remaining ?? 1,
              freeMatchInUse: s.free_match_in_use ?? !1,
            },
            expiresAt: Date.now() + 720 * 60 * 60 * 1e3,
          };
        pt(a);
        try {
          const { invoke: i } = await et(
            async () => {
              const { invoke: u } = await import("./miXHpl0f.js").then(
                (l) => l.f,
              );
              return { invoke: u };
            },
            __vite__mapDeps([0, 1]),
            import.meta.url,
          );
          await i("set_session", {
            token: e,
            subscriptionStatus: s.subscription_status ?? "free",
            subscriptionPlan: s.subscription_plan ?? "",
            subscriptionExpiresAt: s.subscription_expires_at ?? "",
            riotId: s.riot_id ?? "",
            mainRole: s.main_role ?? "",
            isLogin: !0,
          });
        } catch {}
        return a;
      } finally {
        Re = null;
      }
    })()),
    Re)
  );
}
function Ms(e) {
  const t = ve();
  if (t) {
    if (e.subscription_status === "server_unreachable") {
      je.set(!1);
      return;
    }
    if (e.subscription_status === "coach_paused") {
      je.set(!1), Dt.set(!0);
      return;
    }
    je.set(!0),
      Dt.set(!1),
      (t.user.subscriptionStatus = e.subscription_status),
      (t.user.subscriptionPlan = e.subscription_plan),
      (t.user.expiresSub = e.subscription_expires_at),
      (t.user.tag = e.riot_id || t.user.tag),
      (t.user.role = e.main_role || t.user.role),
      (t.user.plan =
        e.subscription_status === "active" ||
        e.subscription_status === "cancelled"
          ? "PRO"
          : "FREE"),
      e.free_daily_remaining !== void 0 &&
        (t.user.freeDailyRemaining = e.free_daily_remaining),
      e.free_match_in_use !== void 0 &&
        (t.user.freeMatchInUse = e.free_match_in_use),
      pt(t);
  }
}
async function hr(e) {
  try {
    const { invoke: t } = await et(
      async () => {
        const { invoke: s } = await import("./miXHpl0f.js").then((a) => a.f);
        return { invoke: s };
      },
      __vite__mapDeps([0, 1]),
      import.meta.url,
    );
    await t("sync_machine_info");
  } catch {}
}
const ht = "absol_experience",
  Ns = 300 * 1e3;
function vt() {
  return typeof localStorage < "u";
}
function Fe() {
  var e;
  if (!vt()) return null;
  try {
    const t = localStorage.getItem(ht);
    if (!t) return null;
    const s = JSON.parse(t);
    return typeof ((e = s == null ? void 0 : s.experience) == null
      ? void 0
      : e.level) != "number" || typeof s.fetchedAt != "number"
      ? null
      : s;
  } catch {
    return null;
  }
}
function Ps(e) {
  vt() &&
    localStorage.setItem(
      ht,
      JSON.stringify({ experience: e, fetchedAt: Date.now() }),
    );
}
function Ws() {
  vt() && localStorage.removeItem(ht);
}
function Mt(e, t = !1) {
  return t || !e ? !0 : Date.now() - e.fetchedAt >= Ns;
}
async function Is(e) {
  const t = await fetch(`${we}/api/app/experience/me`, {
    headers: { Authorization: `Bearer ${e}` },
  });
  if (!t.ok) throw new Error(`experience ${t.status}`);
  const s = await t.json();
  if (!(s != null && s.experience))
    throw new Error("experience ausente na resposta");
  return s.experience;
}
function Cs() {
  const e = Fe(),
    { subscribe: t, set: s } = te((e == null ? void 0 : e.experience) ?? null),
    a = te(null);
  let i = null,
    u = (e == null ? void 0 : e.experience) ?? null;
  function l(h) {
    const v = u;
    (u = h),
      s(h),
      !(!v || h.total_xp <= v.total_xp) &&
        a.update((d) => ({
          xp: ((d == null ? void 0 : d.xp) ?? 0) + (h.total_xp - v.total_xp),
          from_level: (d == null ? void 0 : d.from_level) ?? v.level,
          from_level_xp: (d == null ? void 0 : d.from_level_xp) ?? v.level_xp,
          from_xp_for_next_level:
            (d == null ? void 0 : d.from_xp_for_next_level) ??
            v.xp_for_next_level,
          leveled_up:
            h.level > ((d == null ? void 0 : d.from_level) ?? v.level),
        }));
  }
  async function g(h, v = {}) {
    var W;
    const d = h ?? ((W = ve()) == null ? void 0 : W.token),
      N = Fe();
    return !d || !Mt(N, v.force)
      ? ((N == null ? void 0 : N.experience) ?? null)
      : i ||
          ((i = Is(d)
            .then((I) => (Ps(I), l(I), I))
            .catch((I) => {
              const P = Fe();
              return (
                P != null && P.experience && s(P.experience),
                (P == null ? void 0 : P.experience) ?? null
              );
            })
            .finally(() => {
              i = null;
            })),
          i);
  }
  function x(h) {
    const v = Fe();
    (u = (v == null ? void 0 : v.experience) ?? null), s(u), Mt(v) && g(h);
  }
  function y() {
    Ws(), (u = null), s(null), a.set(null), (i = null);
  }
  function m() {
    a.set(null);
  }
  return {
    subscribe: t,
    init: x,
    refresh: g,
    clear: y,
    consumeGain: m,
    gain: { subscribe: a.subscribe },
  };
}
const Me = Cs(),
  Ts = Me.gain,
  mt = "absol_riot_profile",
  Os = 360 * 60 * 1e3;
function _t() {
  return typeof localStorage < "u";
}
function Be() {
  if (!_t()) return null;
  try {
    const e = localStorage.getItem(mt);
    if (!e) return null;
    const t = JSON.parse(e);
    return !(t != null && t.profile) || typeof t.fetchedAt != "number"
      ? null
      : t;
  } catch {
    return null;
  }
}
function Hs(e) {
  _t() &&
    localStorage.setItem(
      mt,
      JSON.stringify({ profile: e, fetchedAt: Date.now() }),
    );
}
function Us() {
  _t() && localStorage.removeItem(mt);
}
function Fs(e) {
  if (!e) return null;
  const t = new Date(e).getTime();
  return Number.isNaN(t) ? null : t;
}
function Nt(e, t = !1) {
  if (t || !e) return !0;
  const s = Fs(e.profile.next_refresh_at);
  return s !== null ? Date.now() >= s : Date.now() - e.fetchedAt >= Os;
}
function Bs() {
  const e = Be(),
    { subscribe: t, set: s } = te((e == null ? void 0 : e.profile) ?? null);
  let a = null;
  async function i(g, x = {}) {
    const y = Be();
    return !g || !Nt(y, x.force)
      ? ((y == null ? void 0 : y.profile) ?? null)
      : a ||
          ((a = Bt("get_riot_profile")
            .then((m) => (Hs(m), s(m), m))
            .catch((m) => {
              const h = Be();
              return (
                h != null && h.profile && s(h.profile),
                (h == null ? void 0 : h.profile) ?? null
              );
            })
            .finally(() => {
              a = null;
            })),
          a);
  }
  function u(g) {
    const x = Be();
    s((x == null ? void 0 : x.profile) ?? null), g && Nt(x) && i(g);
  }
  function l() {
    Us(), s(null), (a = null);
  }
  return { subscribe: t, init: u, refresh: i, clear: l };
}
const Vt = Bs(),
  gt = "absol_riot_ranked",
  Ks = 1800 * 1e3;
function wt() {
  return typeof localStorage < "u";
}
function Ke() {
  var e;
  if (!wt()) return null;
  try {
    const t = localStorage.getItem(gt);
    if (!t) return null;
    const s = JSON.parse(t);
    return !((e = s == null ? void 0 : s.ranked) != null && e.queues) ||
      typeof s.fetchedAt != "number"
      ? null
      : s;
  } catch {
    return null;
  }
}
function zs(e) {
  wt() &&
    localStorage.setItem(
      gt,
      JSON.stringify({ ranked: e, fetchedAt: Date.now() }),
    );
}
function Gs() {
  wt() && localStorage.removeItem(gt);
}
function js(e) {
  if (!e) return null;
  const t = new Date(e).getTime();
  return Number.isNaN(t) ? null : t;
}
function Pt(e, t = !1) {
  if (t || !e) return !0;
  const s = js(e.ranked.next_refresh_at);
  return s !== null ? Date.now() >= s : Date.now() - e.fetchedAt >= Ks;
}
function qs() {
  const e = Ke(),
    { subscribe: t, set: s } = te((e == null ? void 0 : e.ranked) ?? null);
  let a = null;
  async function i(g, x = {}) {
    const y = Ke();
    return !g || !Pt(y, x.force)
      ? ((y == null ? void 0 : y.ranked) ?? null)
      : a ||
          ((a = Bt("get_riot_ranked")
            .then((m) => (zs(m), s(m), m))
            .catch((m) => {
              const h = Ke();
              return (
                h != null && h.ranked && s(h.ranked),
                (h == null ? void 0 : h.ranked) ?? null
              );
            })
            .finally(() => {
              a = null;
            })),
          a);
  }
  function u(g) {
    const x = Ke();
    s((x == null ? void 0 : x.ranked) ?? null), g && Pt(x) && i(g);
  }
  function l() {
    Gs(), s(null), (a = null);
  }
  return { subscribe: t, init: u, refresh: i, clear: l };
}
const xt = qs(),
  Jt = "absol_wallpaper_by_account",
  Zt = "absol_wallpaper_account",
  at = "absol_wallpaper_champion",
  it = "absol_wallpaper_auto",
  We = "Maokai",
  tt = !1;
let qe = null;
function Ys(e) {
  if (typeof e == "string") return { champion: e, auto: tt };
  if (typeof e != "object" || e === null || Array.isArray(e)) return null;
  const { champion: t, auto: s } = e;
  return typeof t != "string" ? null : { champion: t, auto: s === !0 };
}
function yt() {
  if (typeof localStorage > "u") return {};
  try {
    const e = localStorage.getItem(Jt);
    if (!e) return {};
    const t = JSON.parse(e);
    if (typeof t != "object" || t === null || Array.isArray(t)) return {};
    const s = Object.entries(t)
      .map(([a, i]) => [a, Ys(i)])
      .filter((a) => a[1] !== null);
    return Object.fromEntries(s);
  } catch {
    return {};
  }
}
function Xt(e) {
  if (!(typeof localStorage > "u"))
    try {
      localStorage.setItem(Jt, JSON.stringify(e));
    } catch {
      return;
    }
}
function es(e) {
  if (!qe) return;
  const t = yt(),
    s = t[qe] ?? { champion: We, auto: tt };
  (t[qe] = { ...s, ...e }), Xt(t);
}
function Qs() {
  if (typeof localStorage > "u") return { champion: We, auto: tt };
  const e = localStorage.getItem(Zt),
    t = e ? yt()[e] : void 0;
  return (
    t || {
      champion: localStorage.getItem(at) ?? We,
      auto: localStorage.getItem(it) === "1",
    }
  );
}
const ts = Qs(),
  ot = te(ts.champion),
  lt = te(ts.auto),
  Vs = {
    subscribe: ot.subscribe,
    set(e) {
      es({ champion: e }), ot.set(e);
    },
  },
  Js = {
    subscribe: lt.subscribe,
    set(e) {
      es({ auto: e }), lt.set(e);
    },
  };
function Wt(e) {
  if (typeof localStorage > "u") return;
  (qe = e), localStorage.setItem(Zt, e);
  const t = yt();
  if (Object.keys(t).length === 0) {
    const a = localStorage.getItem(at),
      i = localStorage.getItem(it);
    (a !== null || i !== null) &&
      ((t[e] = { champion: a ?? We, auto: i === "1" }), Xt(t));
  }
  localStorage.removeItem(at), localStorage.removeItem(it);
  const s = t[e];
  ot.set((s == null ? void 0 : s.champion) ?? We),
    lt.set((s == null ? void 0 : s.auto) ?? tt);
}
function vr(e) {
  !e || !Gt(Js) || Vs.set(gs(e.champion, e.skinNum));
}
var oe, le, ue, Ze, ie, Le, Ye;
const St = class St extends Map {
  constructor(s) {
    super();
    ae(this, ie);
    ae(this, oe, new Map());
    ae(this, le, G(0));
    ae(this, ue, G(0));
    ae(this, Ze, Lt || -1);
    if (s) {
      for (var [a, i] of s) super.set(a, i);
      C(this, ue).v = super.size;
    }
  }
  has(s) {
    var a = C(this, oe),
      i = a.get(s);
    if (i === void 0)
      if (super.has(s)) (i = he(this, ie, Le).call(this, 0)), a.set(s, i);
      else return n(C(this, le)), !1;
    return n(i), !0;
  }
  forEach(s, a) {
    he(this, ie, Ye).call(this), super.forEach(s, a);
  }
  get(s) {
    var a = C(this, oe),
      i = a.get(s);
    if (i === void 0)
      if (super.has(s)) (i = he(this, ie, Le).call(this, 0)), a.set(s, i);
      else {
        n(C(this, le));
        return;
      }
    return n(i), super.get(s);
  }
  set(s, a) {
    var h;
    var i = C(this, oe),
      u = i.get(s),
      l = super.get(s),
      g = super.set(s, a),
      x = C(this, le);
    if (u === void 0)
      (u = he(this, ie, Le).call(this, 0)),
        i.set(s, u),
        D(C(this, ue), super.size),
        ke(x);
    else if (l !== a) {
      ke(u);
      var y = x.reactions === null ? null : new Set(x.reactions),
        m =
          y === null ||
          !((h = u.reactions) != null && h.every((v) => y.has(v)));
      m && ke(x);
    }
    return g;
  }
  delete(s) {
    var a = C(this, oe),
      i = a.get(s),
      u = super.delete(s);
    return (
      i !== void 0 && (a.delete(s), D(i, -1)),
      u && (D(C(this, ue), super.size), ke(C(this, le))),
      u
    );
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var s = C(this, oe);
      D(C(this, ue), 0);
      for (var a of s.values()) D(a, -1);
      ke(C(this, le)), s.clear();
    }
  }
  keys() {
    return n(C(this, le)), super.keys();
  }
  values() {
    return he(this, ie, Ye).call(this), super.values();
  }
  entries() {
    return he(this, ie, Ye).call(this), super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    return n(C(this, ue)), super.size;
  }
};
(oe = new WeakMap()),
  (le = new WeakMap()),
  (ue = new WeakMap()),
  (Ze = new WeakMap()),
  (ie = new WeakSet()),
  (Le = function (s) {
    return Lt === C(this, Ze) ? G(s) : vs(s);
  }),
  (Ye = function () {
    n(C(this, le));
    var s = C(this, oe);
    if (C(this, ue).v !== s.size) {
      for (var a of kt(St.prototype, this, "keys").call(this))
        if (!s.has(a)) {
          var i = he(this, ie, Le).call(this, 0);
          s.set(a, i);
        }
    }
    for ([, i] of C(this, oe)) n(i);
  });
let ct = St;
const mr = "PDL pendente",
  _r =
    "A Riot ainda nao publicou o resultado desta partida. O PDL aparece sozinho em alguns minutos.",
  Zs = 6e4,
  Xs = 10 * 6e4;
function It(e, t = Date.now()) {
  return e.some(
    (s) => s.lp_pending && t - new Date(s.synced_at).getTime() < Xs,
  );
}
const Ct = {
    420: "Solo/Duo",
    440: "Flex",
    450: "ARAM",
    400: "Normal",
    430: "Normal",
    0: "Custom",
  },
  en = {
    RANKED_SOLO_5x5: "Solo/Duo",
    RANKED_FLEX_SR: "Flex",
    ARAM: "ARAM",
    NORMAL: "Normal",
    CLASSIC: "Normal",
  },
  tn = { RANKED_SOLO_5x5: 420, RANKED_FLEX_SR: 440, ARAM: 450 };
function sn(e, t) {
  return Ct[e]
    ? Ct[e]
    : t && t !== "Unknown" && t !== ""
      ? (en[t] ?? t)
      : "Partida";
}
function nn(e) {
  const t = Date.now() - new Date(e).getTime(),
    s = Math.floor(t / 6e4);
  if (s < 1) return "Agora";
  if (s < 60) return `${s}min atrás`;
  const a = Math.floor(s / 60);
  if (a < 24) return `${a}h atrás`;
  const i = Math.floor(a / 24);
  if (i < 7) return `${i}d atrás`;
  const u = Math.floor(i / 7);
  if (u < 5) return `${u} ${u === 1 ? "semana" : "semanas"} atrás`;
  const l = Math.floor(i / 30);
  return `${l} ${l === 1 ? "mês" : "meses"} atrás`;
}
function ss(e) {
  const t = Math.floor(e / 60),
    s = Math.floor(e % 60);
  return `${t}:${s.toString().padStart(2, "0")}`;
}
function rn(e) {
  return e === "win"
    ? "Win"
    : e === "loss"
      ? "Lose"
      : e === "remake"
        ? "Remake"
        : "Unknown";
}
function an(e) {
  return e.synced_at ?? e.played_at ?? e.started_at ?? new Date().toISOString();
}
function ns(e, t) {
  return t <= 0 ? 0 : e / (t / 60);
}
function on(e) {
  return e.queue_type ?? e.game_mode ?? "";
}
function ln(e) {
  return e.queue_id !== null ? e.queue_id : (tn[e.queue_type ?? ""] ?? 0);
}
function cn(e, t, s) {
  return e === "BLUE" || e === "100" || t === 100
    ? "BLUE"
    : e === "RED" || e === "200" || t === 200 || (s && s >= 6)
      ? "RED"
      : "BLUE";
}
function rs(e) {
  if (!e.id) return null;
  const t = e.game_duration_seconds ?? 0,
    s = e.champion_name ?? "Unknown",
    a = ln(e);
  return {
    id: e.id,
    synced_at: an(e),
    lp_delta: e.lp_delta,
    lp_pending: e.lp_pending ?? !1,
    report: {
      game_duration: t,
      result: rn(e.result),
      queue_id: a,
      queue_type: on(e),
      champion: s,
      skin_id: e.skin_id ?? null,
      xp_gained: e.xp_gained ?? null,
      position: e.position ?? "",
      kills: e.kills,
      deaths: e.deaths,
      assists: e.assists,
      cs_per_min: ns(e.cs, t),
      ward_score: e.ward_score,
      is_remake: e.is_remake || e.result === "remake",
    },
  };
}
function un(e) {
  return e.flatMap((t, s) =>
    t
      ? [
          {
            item_id: t,
            id: t,
            display_name: `Item ${t}`,
            slot: s,
            count: 1,
            consumable: !1,
          },
        ]
      : [],
  );
}
function dn(e) {
  const t = e.champion_name ?? "Unknown";
  return {
    champion: t,
    riot_id: e.riot_id ?? e.summoner_name ?? t,
    team: cn(e.team, e.team_id, e.participant_id),
    position: e.position ?? e.lane ?? e.role ?? "",
    level: 0,
    kills: e.kills,
    deaths: e.deaths,
    assists: e.assists,
    cs: e.cs,
    ward_score: e.vision_score,
    items: un(e.items),
    is_me: e.is_me,
  };
}
function fn(e) {
  const t = rs(e.match);
  if (!t) return null;
  const s = e.me ?? e.players.find((i) => i.is_me) ?? null,
    a = t.report.game_duration;
  return {
    id: t.id,
    synced_at: t.synced_at,
    champion: t.report.champion,
    result: t.report.result,
    queue_id: t.report.queue_id,
    queue_type: t.report.queue_type,
    game_duration: a,
    kills: (s == null ? void 0 : s.kills) ?? t.report.kills,
    deaths: (s == null ? void 0 : s.deaths) ?? t.report.deaths,
    assists: (s == null ? void 0 : s.assists) ?? t.report.assists,
    cs: (s == null ? void 0 : s.cs) ?? e.match.cs,
    cs_per_min: ns((s == null ? void 0 : s.cs) ?? e.match.cs, a),
    gold: (s == null ? void 0 : s.gold_earned) ?? e.match.gold,
    players: e.players.map(dn),
    is_remake: t.report.is_remake,
  };
}
function gr(e) {
  return e > 0 ? `+${e}` : `${e}`;
}
function pn(e) {
  const t = e.report,
    s = (t.kills + t.assists) / Math.max(1, t.deaths);
  return {
    id: e.id,
    champion: t.champion,
    kda: `${t.kills}/${t.deaths}/${t.assists}`,
    kdaRatio: s.toFixed(2),
    result:
      t.result === "Win"
        ? "WIN"
        : t.result === "Remake"
          ? "REMAKE"
          : t.result === "Unknown"
            ? "UNKNOWN"
            : "LOSE",
    cspm: t.cs_per_min.toFixed(1),
    duration: ss(t.game_duration),
    queue: sn(t.queue_id, t.queue_type),
    timeAgo: nn(e.synced_at),
    xpGained: t.xp_gained,
    lpDelta: e.lp_delta,
    lpPending: e.lp_pending ?? !1,
  };
}
function hn(e) {
  const t = (w) => w === "Win",
    s = (w) => w === "Lose" || w === "Loss",
    a = [],
    i = new Map(),
    u = new Map(),
    l = {
      bestKda: { value: 0, champion: "-", perfect: !1 },
      mostKills: { value: 0, champion: "-", perfect: !1 },
      mostAssists: { value: 0, champion: "-", perfect: !1 },
      bestCsMin: { value: 0, champion: "-", perfect: !1 },
      bestWardScore: { value: 0, champion: "-", perfect: !1 },
      mostDeaths: { value: 0, champion: "-", perfect: !1 },
      longestGame: { value: 0, champion: "-", perfect: !1 },
      fastestWin: { value: 0, champion: "-", perfect: !1 },
    };
  let g = 0,
    x = 0,
    y = 0,
    m = 0,
    h = 0,
    v = 0,
    d = 0,
    N,
    W = null,
    I = !0;
  for (const w of e) {
    const r = w.report;
    a.push(pn(w)),
      (t(r.result) || s(r.result)) &&
        (r.result === "Win" ? g++ : s(r.result) && x++,
        (y += r.kills),
        (m += r.deaths),
        (h += r.assists),
        (v += r.cs_per_min)),
      (t(r.result) || s(r.result)) &&
        (N === void 0 && ((N = r.result), (W = t(r.result) ? t : s)),
        I && W != null && W(r.result) ? d++ : (I = !1));
    const S = i.get(r.champion) ?? {
      games: 0,
      wins: 0,
      losses: 0,
      kills: 0,
      deaths: 0,
      assists: 0,
      cs: 0,
      cspm: 0,
    };
    S.games++,
      r.result === "Win"
        ? S.wins++
        : (r.result === "Lose" || r.result === "Loss") && S.losses++,
      (S.kills += r.kills),
      (S.deaths += r.deaths),
      (S.assists += r.assists),
      (S.cs += r.cs_per_min * (r.game_duration / 60)),
      (S.cspm += r.cs_per_min),
      i.set(r.champion, S);
    const O = r.deaths === 0 && (r.kills > 0 || r.assists > 0),
      U = r.deaths > 0 ? (r.kills + r.assists) / r.deaths : r.kills + r.assists;
    U > l.bestKda.value &&
      (l.bestKda = {
        value: Math.round(U * 10) / 10,
        champion: r.champion,
        perfect: O,
      }),
      r.kills > l.mostKills.value &&
        (l.mostKills = { value: r.kills, champion: r.champion, perfect: !1 }),
      r.assists > l.mostAssists.value &&
        (l.mostAssists = {
          value: r.assists,
          champion: r.champion,
          perfect: !1,
        }),
      r.cs_per_min > l.bestCsMin.value &&
        (l.bestCsMin = {
          value: Math.round(r.cs_per_min * 10) / 10,
          champion: r.champion,
          perfect: !1,
        }),
      r.ward_score > l.bestWardScore.value &&
        (l.bestWardScore = {
          value: Math.round(r.ward_score * 10) / 10,
          champion: r.champion,
          perfect: !1,
        }),
      r.deaths > l.mostDeaths.value &&
        (l.mostDeaths = { value: r.deaths, champion: r.champion, perfect: !1 }),
      r.game_duration > l.longestGame.value &&
        (l.longestGame = {
          value: r.game_duration,
          champion: r.champion,
          perfect: !1,
        }),
      r.result === "Win" &&
        (l.fastestWin.champion === "-" ||
          r.game_duration < l.fastestWin.value) &&
        (l.fastestWin = {
          value: r.game_duration,
          champion: r.champion,
          perfect: !1,
        });
    const F = new Date(w.synced_at),
      q = `${F.getFullYear()}-${String(F.getMonth() + 1).padStart(2, "0")}-${String(F.getDate()).padStart(2, "0")}`,
      f = u.get(q) ?? {
        count: 0,
        wins: 0,
        losses: 0,
        kills: 0,
        deaths: 0,
        assists: 0,
        cspmSum: 0,
      };
    f.count++,
      r.result === "Win"
        ? f.wins++
        : (r.result === "Lose" || r.result === "Loss") && f.losses++,
      (f.kills += r.kills),
      (f.deaths += r.deaths),
      (f.assists += r.assists),
      (f.cspmSum += r.cs_per_min),
      u.set(q, f);
  }
  const P = g + x,
    E = d ? `${d}${N && t(N) ? "W" : "L"}` : "—",
    $ =
      P === 0
        ? null
        : {
            wr: Math.round((g / P) * 100),
            avgKda: ((y + h) / Math.max(1, m)).toFixed(2),
            avgCspm: (v / P).toFixed(1),
            streak: E,
            wins: g,
            total: P,
          },
    k = Array.from(i.entries())
      .map(([w, r]) => ({
        champion: w,
        games: r.games,
        wins: r.wins,
        losses: r.losses,
        winRate: Math.round((r.wins / Math.max(1, r.wins + r.losses)) * 100),
        kdaRatio: ((r.kills + r.assists) / Math.max(1, r.deaths)).toFixed(2),
        avgKills: (r.kills / r.games).toFixed(1),
        avgDeaths: (r.deaths / r.games).toFixed(1),
        avgAssists: (r.assists / r.games).toFixed(1),
        avgCs: Math.round(r.cs / r.games),
        avgCspm: (r.cspm / r.games).toFixed(1),
      }))
      .sort((w, r) => r.games - w.games);
  return {
    all: a,
    stats: $,
    championStats: k,
    personalRecords: l,
    dayCounts: u,
  };
}
function vn() {
  const e = te([]),
    t = te(!1),
    s = te(!1);
  let a = null,
    i = null,
    u = null;
  const l = new ct();
  let g = null;
  function x() {
    return (
      g ||
      ((g = y().finally(() => {
        g = null;
      })),
      g)
    );
  }
  async function y() {
    var R;
    const f = ve();
    if (f) {
      t.set(!0), s.set(!1);
      try {
        await Ls();
        const c = await fetch(`${we}/api/app/match-v2?per_page=100`, {
          headers: { Authorization: `Bearer ${f.token}` },
        });
        if (!c.ok) {
          s.set(!0);
          return;
        }
        const z = (
          ((R = (await c.json()).matches) == null ? void 0 : R.items) ?? []
        )
          .map(rs)
          .filter((K) => K !== null);
        e.set(z), m(z);
      } catch {
        s.set(!0);
      } finally {
        t.set(!1);
      }
    }
  }
  function m(f) {
    h(),
      It(f) &&
        (i = setTimeout(() => {
          (i = null), x();
        }, Zs));
  }
  function h() {
    i && clearTimeout(i), (i = null);
  }
  async function v() {
    d(),
      await x(),
      (a = await _s("absol://match-imported", (R) => {
        var c;
        (c = R.payload) != null && c.synced && x();
      })),
      (u = () => {
        document.visibilityState === "visible" && It(Gt(e)) && x();
      }),
      document.addEventListener("visibilitychange", u);
  }
  function d() {
    a == null || a(),
      (a = null),
      u && document.removeEventListener("visibilitychange", u),
      (u = null),
      h();
  }
  function N() {
    d(), e.set([]), s.set(!1), t.set(!1), l.clear();
  }
  async function W(f) {
    const R = l.get(f);
    if (R) return R;
    const c = ve();
    if (!c) return null;
    try {
      const _ = await fetch(`${we}/api/app/match-v2/${f}`, {
        headers: { Authorization: `Bearer ${c.token}` },
      });
      if (!_.ok) return null;
      const z = await _.json(),
        K = z.match ? fn(z.match) : null;
      return K ? (l.set(f, K), K) : null;
    } catch {
      return null;
    }
  }
  const I = se(e, (f) => f),
    P = se(e, (f) =>
      f.slice(0, 4).map((R) => {
        const c = R.report,
          _ = (c.kills + c.assists) / Math.max(1, c.deaths);
        return {
          id: R.id,
          champion: c.champion,
          skinNum: c.skin_id ?? 0,
          xpGained: c.xp_gained,
          lpDelta: R.lp_delta,
          lpPending: R.lp_pending ?? !1,
          kda: `${c.kills}/${c.deaths}/${c.assists}`,
          kdaRatio: _.toFixed(2),
          result:
            c.result === "Win"
              ? "WIN"
              : c.result === "Remake"
                ? "REMAKE"
                : c.result === "Unknown"
                  ? "UNKNOWN"
                  : "LOSE",
          cspm: c.cs_per_min.toFixed(1),
          duration: ss(c.game_duration),
        };
      }),
    ),
    E = se(e, hn),
    $ = se(E, (f) => f.all),
    k = se(E, (f) => f.stats),
    w = se(E, (f) => f.championStats),
    r = se(w, (f) => f.slice(0, 5)),
    S = se(w, (f) => f.slice(0, 10)),
    O = se(E, (f) => f.personalRecords),
    U = se(E, (f) => f.dayCounts),
    F = se(t, (f) => f),
    q = se(s, (f) => f);
  return {
    recent: P,
    all: $,
    stats: k,
    dayCounts: U,
    matchRows: I,
    topChampions: r,
    topChampionsWinRate: S,
    personalRecords: O,
    loading: F,
    failed: q,
    init: v,
    destroy: d,
    reset: N,
    refresh: x,
    fetchDetail: W,
    detailsCache: l,
  };
}
const st = vn();
async function mn() {
  try {
    const { invoke: e } = await et(
      async () => {
        const { invoke: t } = await import("./miXHpl0f.js").then((s) => s.f);
        return { invoke: t };
      },
      __vite__mapDeps([0, 1]),
      import.meta.url,
    );
    await e("clear_session");
  } catch {}
}
function _n(e) {
  fetch(`${we}/api/auth/app/logout`, {
    method: "POST",
    headers: { Authorization: `Bearer ${e}` },
  }).catch(() => {});
}
function gn() {
  const { subscribe: e, set: t } = te(null);
  return {
    subscribe: e,
    init() {
      const s = ve();
      s && Wt(s.user.email), t(s);
    },
    login() {
      const s = ve();
      s && Wt(s.user.email), t(s);
    },
    logout() {
      const s = ve();
      s != null && s.token && _n(s.token),
        Qt(),
        Vt.clear(),
        xt.clear(),
        Me.clear(),
        st.reset(),
        t(null),
        mn(),
        Yt.reset();
    },
    syncSubscription(s) {
      Ms(s), t(ve());
    },
  };
}
const wn = gn();
var xn = j(
    '<span class="icon skeleton svelte-twu2oc" aria-hidden="true"></span>',
  ),
  yn = j('<span class="tag svelte-twu2oc"> </span>'),
  Sn = j(
    '<span class="free-status svelte-twu2oc" title="A carência acabou sem resposta do servidor. O coach volta sozinho quando ele responder.">Servidor Offline</span>',
  ),
  bn = j('<span class="plan-badge pro svelte-twu2oc">Plano Pro</span>'),
  En = j("<span> </span>"),
  An = j(
    '<div class="identity-widget svelte-twu2oc"><!> <img alt="Ícone de invocador"/> <div class="info svelte-twu2oc"><span class="name svelte-twu2oc"> <!></span> <!></div></div>',
  );
function $n(e, t) {
  fe(t, !0);
  const s = () => ne(wn, "$auth", u),
    a = () => ne(Vt, "$riotProfile", u),
    i = () => ne(je, "$serverReachable", u),
    [u, l] = Ae();
  let g = M(s),
    x = M(a),
    y = M(() => {
      var c, _;
      return (
        ((_ = (c = n(g)) == null ? void 0 : c.user.tag) == null
          ? void 0
          : _.split("#")[0]) ?? "—"
      );
    }),
    m = M(() => {
      var c, _;
      return (
        ((_ = (c = n(g)) == null ? void 0 : c.user.tag) == null
          ? void 0
          : _.split("#")[1]) ?? ""
      );
    }),
    h = M(() => {
      var c, _;
      return (
        ((c = n(g)) == null ? void 0 : c.user.subscriptionStatus) ===
          "active" ||
        ((_ = n(g)) == null ? void 0 : _.user.subscriptionStatus) ===
          "cancelled"
      );
    }),
    v = M(() => {
      var c;
      return (
        (((c = n(g)) == null ? void 0 : c.user.freeDailyRemaining) ?? 0) > 0 &&
        i()
      );
    }),
    d = M(() => {
      var c;
      return ((c = n(g)) == null ? void 0 : c.user.freeMatchInUse) === !0;
    }),
    N = M(() => {
      var c;
      return ((c = n(x)) == null ? void 0 : c.profile_icon_id) ?? 23;
    }),
    W = M(() => ws(n(N))),
    I = G(!1);
  De(() => {
    n(W), D(I, !1);
  });
  var P = An(),
    E = L(P);
  {
    var $ = (c) => {
      var _ = xn();
      H(c, _);
    };
    de(E, (c) => {
      n(I) || c($);
    });
  }
  var k = T(E, 2);
  let w;
  var r = T(k, 2),
    S = L(r),
    O = L(S, !0),
    U = T(O);
  {
    var F = (c) => {
      var _ = yn(),
        z = L(_);
      b(_), Q(() => Z(z, `#${n(m) ?? ""}`)), H(c, _);
    };
    de(U, (c) => {
      n(m) && c(F);
    });
  }
  b(S);
  var q = T(S, 2);
  {
    var f = (c) => {
        var _ = Ot(),
          z = Ut(_);
        {
          var K = (V) => {
              var re = Sn();
              H(V, re);
            },
            X = (V) => {
              var re = bn();
              H(V, re);
            };
          de(z, (V) => {
            i() ? V(X, -1) : V(K);
          });
        }
        H(c, _);
      },
      R = (c) => {
        var _ = En();
        let z;
        var K = L(_, !0);
        b(_),
          Q(() => {
            (z = ee(_, 1, "free-status svelte-twu2oc", null, z, {
              available: n(v),
              "in-use": n(d),
            })),
              Y(
                _,
                "title",
                i()
                  ? void 0
                  : "Sem conexão com o servidor do ABSOL — a partida gratuita volta quando ele responder.",
              ),
              Z(
                K,
                i()
                  ? n(v)
                    ? "Partida gratuita disponível"
                    : n(d)
                      ? "Partida gratuita em uso"
                      : "Partida gratuita indisponível"
                  : "Servidor Offline",
              );
          }),
          H(c, _);
      };
    de(q, (c) => {
      n(h) ? c(f) : c(R, -1);
    });
  }
  b(r),
    b(P),
    Q(() => {
      Y(k, "src", n(W)),
        (w = ee(k, 1, "icon svelte-twu2oc", null, w, { pending: !n(I) })),
        Z(O, n(y));
    }),
    Je("load", k, () => D(I, !0)),
    Je("error", k, () => D(I, !0)),
    Kt(k),
    H(e, P),
    pe(),
    l();
}
function Tt(e, t) {
  if (((e.textContent = ""), typeof t == "string")) {
    e.textContent = t;
    return;
  }
  if (t.icon) {
    const a = document.createElement("img");
    (a.className = "nav-tooltip-icon"),
      (a.src = t.icon),
      (a.alt = ""),
      e.appendChild(a);
  }
  const s = document.createElement("span");
  (s.textContent = t.label), e.appendChild(s);
}
let ge,
  Qe,
  Ve,
  be = null;
function kn() {
  ge ||
    ((ge = document.createElement("div")),
    (ge.className = "nav-tooltip-wrap"),
    (Qe = document.createElement("span")),
    (Qe.className = "nav-tooltip"),
    (Ve = document.createElement("span")),
    (Ve.className = "nav-tooltip-arrow"),
    ge.appendChild(Qe),
    ge.appendChild(Ve),
    document.body.appendChild(ge));
}
function ce(e, t) {
  kn();
  const s = ge,
    a = Qe,
    i = Ve;
  let u = t;
  function l() {
    const y = e.getBoundingClientRect(),
      m = y.left + y.width / 2 + 24,
      h = s.offsetWidth / 2,
      v = 8,
      d = Math.min(window.innerWidth - v - h, Math.max(v + h, m));
    (s.style.left = `${d}px`), (s.style.top = `${y.top - 6}px`);
    const N = y.left + y.width / 2;
    i.style.transform = `translateX(${N - d}px)`;
  }
  function g() {
    (be = e), Tt(a, u), l(), s.classList.add("visible");
  }
  function x() {
    be === e && ((be = null), s.classList.remove("visible"));
  }
  return (
    e.addEventListener("mouseenter", g),
    e.addEventListener("mouseleave", x),
    {
      update(y) {
        (u = y), be === e && Tt(a, y);
      },
      destroy() {
        e.removeEventListener("mouseenter", g),
          e.removeEventListener("mouseleave", x),
          be === e && ((be = null), s.classList.remove("visible"));
      },
    }
  );
}
var Rn = j('<span class="first-win-badge svelte-37r578"><!></span>'),
  Ln = j("<div></div>"),
  Dn = j(
    '<div class="player-level-widget svelte-37r578"><div class="label-row svelte-37r578"><span class="queue-label svelte-37r578">Nível Absol</span> <!></div> <div class="content svelte-37r578"><div> </div> <div class="info svelte-37r578"><div class="progress-track svelte-37r578"></div> <span class="xp-label svelte-37r578"><!></span> <span class="gain-badge svelte-37r578" aria-hidden="true"> </span></div></div></div>',
  );
function Mn(e, t) {
  fe(t, !0);
  const s = () => ne(Me, "$experience", i),
    a = () => ne(Ts, "$experienceGain", i),
    [i, u] = Ae(),
    l = 10,
    g = 1.2;
  let x = M(s),
    y = M(() => {
      var o;
      return ((o = n(x)) == null ? void 0 : o.first_win_of_day_available) ?? !1;
    }),
    m = G(null),
    h = G(0),
    v = G(0),
    d = G(0),
    N = G(""),
    W = G(!1),
    I = G(null),
    P = G(null),
    E = G(null),
    $,
    k = !1,
    w = 0;
  function r(o, A) {
    const B = A > 0 ? o / A : 0;
    return Math.min(l, Math.round(B * l));
  }
  function S(o) {
    D(m, (o == null ? void 0 : o.level) ?? null, !0),
      D(h, (o == null ? void 0 : o.level_xp) ?? 0, !0),
      D(v, (o == null ? void 0 : o.xp_for_next_level) ?? 0, !0),
      D(d, o ? r(o.level_xp, o.xp_for_next_level) : 0, !0),
      (w = n(d));
  }
  function O(o, A) {
    $ == null || $.kill(),
      (k = !0),
      D(m, o.from_level, !0),
      D(h, o.from_level_xp, !0),
      D(v, o.from_xp_for_next_level, !0),
      D(d, r(o.from_level_xp, o.from_xp_for_next_level), !0),
      (w = n(d)),
      D(N, `+${o.xp.toLocaleString("pt-BR")} XP`);
    const B = { xp: n(h), fill: n(d) },
      J = () => {
        D(h, Math.round(B.xp), !0), D(d, Math.round(B.fill), !0);
      };
    ($ = nt.timeline({
      onComplete: () => {
        (k = !1), D(N, ""), D(W, !1), S(A);
      },
    })),
      n(E) &&
        $.fromTo(
          n(E),
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.25, ease: "back.out(2)" },
          0,
        ),
      o.leveled_up
        ? $.to(
            B,
            {
              xp: o.from_xp_for_next_level,
              fill: l,
              duration: 0.55,
              ease: "power2.out",
              onUpdate: J,
            },
            0,
          )
            .call(() => {
              D(m, A.level, !0),
                D(v, A.xp_for_next_level, !0),
                D(W, !0),
                (B.xp = 0),
                (B.fill = 0),
                (w = 0),
                J();
            })
            .fromTo(
              n(P),
              { scale: 1 },
              {
                scale: 1.35,
                duration: 0.21,
                ease: "power2.out",
                yoyo: !0,
                repeat: 1,
              },
            )
            .call(() => {
              D(W, !1);
            })
            .to(
              B,
              {
                xp: A.level_xp,
                fill: r(A.level_xp, A.xp_for_next_level),
                duration: 0.62,
                ease: "power2.out",
                onUpdate: J,
              },
              ">0.08",
            )
        : $.to(
            B,
            {
              xp: A.level_xp,
              fill: r(A.level_xp, A.xp_for_next_level),
              duration: 0.7,
              ease: "power2.out",
              onUpdate: J,
            },
            0,
          ),
      n(E) &&
        $.to(
          n(E),
          { opacity: 0, y: -8, duration: 0.35, ease: "power2.in" },
          `>${g}`,
        );
  }
  De(() => {
    const o = n(x);
    k || S(o);
  }),
    De(() => {
      const o = a();
      if (!o) return;
      const A = ms(() => n(x));
      A && (Me.consumeGain(), O(o, A));
    }),
    De(() => {
      const o = n(d),
        A = n(I);
      if (!A || !k) {
        w = o;
        return;
      }
      if (o > w) {
        const B = Array.from(A.children).slice(w, o);
        nt.fromTo(
          B,
          { scale: 0.3 },
          { scale: 1, duration: 0.3, ease: "back.out(2.5)" },
        );
      }
      w = o;
    }),
    Ht(() => {
      Me.init();
    }),
    ps(() => {
      $ == null || $.kill();
    });
  var U = Dn(),
    F = L(U),
    q = T(L(F), 2);
  {
    var f = (o) => {
      var A = Rn(),
        B = L(A);
      Rs(B, { size: 16 }),
        b(A),
        Ge(
          A,
          (J, ye) => (ce == null ? void 0 : ce(J, ye)),
          () => "Bônus de primeira vitória do dia disponível",
        ),
        H(o, A);
    };
    de(q, (o) => {
      n(y) && o(f);
    });
  }
  b(F);
  var R = T(F, 2),
    c = L(R);
  let _;
  var z = L(c, !0);
  b(c),
    ze(
      c,
      (o) => D(P, o),
      () => n(P),
    );
  var K = T(c, 2),
    X = L(K);
  Ne(
    X,
    21,
    () => Array(l),
    Pe,
    (o, A, B) => {
      var J = Ln();
      let ye;
      Q(
        () =>
          (ye = ee(J, 1, "segment svelte-37r578", null, ye, {
            filled: B < n(d),
          })),
      ),
        H(o, J);
    },
  ),
    b(X),
    ze(
      X,
      (o) => D(I, o),
      () => n(I),
    );
  var V = T(X, 2),
    re = L(V);
  {
    var $e = (o) => {
        var A = Rt();
        Q(
          (B, J) => Z(A, `${B ?? ""} / ${J ?? ""} XP`),
          [
            () => n(h).toLocaleString("pt-BR"),
            () => n(v).toLocaleString("pt-BR"),
          ],
        ),
          H(o, A);
      },
      xe = (o) => {
        var A = Rt("— / — XP");
        H(o, A);
      };
    de(re, (o) => {
      n(m) !== null ? o($e) : o(xe, -1);
    });
  }
  b(V);
  var me = T(V, 2),
    p = L(me, !0);
  b(me),
    ze(
      me,
      (o) => D(E, o),
      () => n(E),
    ),
    b(K),
    b(R),
    b(U),
    Q(() => {
      (_ = ee(c, 1, "level-box svelte-37r578", null, _, { leveling: n(W) })),
        Z(z, n(m) ?? "—"),
        Z(p, n(N));
    }),
    H(e, U),
    pe(),
    u();
}
const ut = te("solo");
var Nn = j(
    '<div class="crest skeleton svelte-95xreo" aria-hidden="true"></div>',
  ),
  Pn = j(
    '<div class="rank-widget svelte-95xreo"><div class="queue-row svelte-95xreo"><button type="button">Solo/Duo</button> <button type="button">Flex</button></div> <div class="content svelte-95xreo"><!> <img alt=""/> <div class="info svelte-95xreo"><span class="tier svelte-95xreo"> </span> <span class="lp svelte-95xreo"> </span></div></div></div>',
  );
function Wn(e, t) {
  fe(t, !0);
  const s = () => ne(xt, "$riotRanked", i),
    a = () => ne(ut, "$rankedQueueView", i),
    [i, u] = Ae(),
    l = {
      IRON: "Ferro",
      BRONZE: "Bronze",
      SILVER: "Prata",
      GOLD: "Ouro",
      PLATINUM: "Platina",
      EMERALD: "Esmeralda",
      DIAMOND: "Diamante",
      MASTER: "Mestre",
      GRANDMASTER: "Grão-Mestre",
      CHALLENGER: "Desafiante",
    },
    g = {
      IRON: "Ferro",
      BRONZE: "Bronze",
      SILVER: "Prata",
      GOLD: "Ouro",
      PLATINUM: "Platina",
      EMERALD: "Esmeralda",
      DIAMOND: "Diamante",
      MASTER: "Mestre",
      GRANDMASTER: "GraoMestre",
      CHALLENGER: "Desafiante",
    },
    x = new Set(["MASTER", "GRANDMASTER", "CHALLENGER"]),
    y = "/elos/Unranked.png",
    m = "Unranked",
    h = "0 PDL";
  let v = M(s),
    d = M(a),
    N = M(() => {
      var p;
      return ((p = n(v)) == null ? void 0 : p.queues[n(d)]) ?? null;
    }),
    W = M(() => {
      var p;
      return w(((p = n(N)) == null ? void 0 : p.tier) ?? null);
    }),
    I = M(() => (n(W) ? `/elos/${g[n(W)]}.png` : y)),
    P = M(() => r(n(N))),
    E = M(() => S(n(N))),
    $ = G(!1);
  De(() => {
    n(I), D($, !1);
  });
  function k(p) {
    ut.set(p);
  }
  function w(p) {
    return p ? p.toUpperCase() : null;
  }
  function r(p) {
    const o = w((p == null ? void 0 : p.tier) ?? null);
    if (!o) return m;
    const A = p != null && p.rank && !x.has(o) ? ` ${p.rank}` : "";
    return `${l[o] ?? o}${A}`;
  }
  function S(p) {
    return p ? `${p.lp} PDL` : h;
  }
  var O = Pn(),
    U = L(O),
    F = L(U);
  let q;
  var f = T(F, 2);
  let R;
  b(U);
  var c = T(U, 2),
    _ = L(c);
  {
    var z = (p) => {
      var o = Nn();
      H(p, o);
    };
    de(_, (p) => {
      n($) || p(z);
    });
  }
  var K = T(_, 2);
  let X;
  var V = T(K, 2),
    re = L(V),
    $e = L(re, !0);
  b(re);
  var xe = T(re, 2),
    me = L(xe, !0);
  b(xe),
    b(V),
    b(c),
    b(O),
    Q(() => {
      (q = ee(F, 1, "queue-option svelte-95xreo", null, q, {
        active: n(d) === "solo",
      })),
        Y(F, "aria-pressed", n(d) === "solo"),
        (R = ee(f, 1, "queue-option svelte-95xreo", null, R, {
          active: n(d) === "flex",
        })),
        Y(f, "aria-pressed", n(d) === "flex"),
        Y(K, "src", n(I)),
        (X = ee(K, 1, "crest svelte-95xreo", null, X, { pending: !n($) })),
        Z($e, n(P)),
        Z(me, n(E));
    }),
    rt("click", F, () => k("solo")),
    rt("click", f, () => k("flex")),
    Je("load", K, () => D($, !0)),
    Je("error", K, () => D($, !0)),
    Kt(K),
    H(e, O),
    pe(),
    u();
}
zt(["click"]);
const In = {
  inicio: {
    defaultWidth: 620,
    defaultHeight: 520,
    minWidth: 420,
    minHeight: 380,
  },
  coaching: {
    defaultWidth: 860,
    defaultHeight: 840,
    minWidth: 800,
    minHeight: 480,
    maxWidth: 1400,
  },
  overlays: {
    defaultWidth: 720,
    defaultHeight: 480,
    minWidth: 670,
    minHeight: 400,
    maxWidth: 980,
  },
  calendario: {
    defaultWidth: 1200,
    defaultHeight: 820,
    minWidth: 1200,
    minHeight: 560,
    maxWidth: 1700,
  },
  historico: {
    defaultWidth: 920,
    defaultHeight: 800,
    minWidth: 880,
    minHeight: 420,
    maxWidth: 1300,
  },
  conquistas: {
    defaultWidth: 640,
    defaultHeight: 560,
    minWidth: 480,
    minHeight: 400,
    maxWidth: 1100,
  },
  audio: {
    defaultWidth: 500,
    defaultHeight: 659,
    minWidth: 420,
    minHeight: 380,
    maxWidth: 700,
  },
  sistema: {
    defaultWidth: 680,
    defaultHeight: 640,
    minWidth: 500,
    minHeight: 420,
    maxWidth: 900,
  },
  aparencia: {
    defaultWidth: 720,
    defaultHeight: 620,
    minWidth: 560,
    minHeight: 440,
    maxWidth: 1100,
  },
  novidades: {
    defaultWidth: 480,
    defaultHeight: 600,
    minWidth: 380,
    minHeight: 420,
    maxWidth: 700,
  },
  perfil: {
    defaultWidth: 450,
    defaultHeight: 600,
    minWidth: 420,
    minHeight: 400,
    maxWidth: 650,
  },
};
function Cn(e) {
  const t = In[e];
  if (!t) throw new Error(`Unknown app id: ${e}`);
  return t;
}
var Tn = j('<span class="weekday svelte-1pyf4cc"> </span>'),
  On = j('<div class="cell empty svelte-1pyf4cc"></div>'),
  Hn = j("<div></div>"),
  Un = j(
    '<div class="activity-widget svelte-1pyf4cc"><div class="header-row svelte-1pyf4cc"><span class="title svelte-1pyf4cc"> </span> <button class="maximize-btn svelte-1pyf4cc" aria-label="Ver calendário completo"><!></button></div> <div class="weekday-row svelte-1pyf4cc"></div> <div class="grid svelte-1pyf4cc"></div></div>',
  );
function Fn(e, t) {
  fe(t, !0);
  const s = () => ne(l, "$dayCounts", a),
    [a, i] = Ae(),
    u = Cn("calendario"),
    { dayCounts: l } = st,
    g = ["D", "S", "T", "Q", "Q", "S", "S"],
    x = [
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
    ];
  function y(r) {
    return `${r.getFullYear()}-${String(r.getMonth() + 1).padStart(2, "0")}-${String(r.getDate()).padStart(2, "0")}`;
  }
  const m = new Date();
  m.setHours(0, 0, 0, 0);
  let h = M(() => {
    const r = m.getFullYear(),
      S = m.getMonth(),
      U = new Date(r, S, 1).getDay(),
      F = new Date(r, S + 1, 0).getDate(),
      q = s(),
      f = [];
    for (let R = 0; R < U; R++)
      f.push({ day: null, count: 0, wins: 0, losses: 0, isToday: !1 });
    for (let R = 1; R <= F; R++) {
      const c = new Date(r, S, R),
        _ = q.get(y(c));
      f.push({
        day: R,
        count: (_ == null ? void 0 : _.count) ?? 0,
        wins: (_ == null ? void 0 : _.wins) ?? 0,
        losses: (_ == null ? void 0 : _.losses) ?? 0,
        isToday: c.getTime() === m.getTime(),
      });
    }
    return f;
  });
  function v(r) {
    return r <= 0 ? 0 : r === 1 ? 1 : r <= 3 ? 2 : 3;
  }
  function d(r) {
    if (r.count === 0) return `Dia ${r.day} · sem partidas`;
    const S = r.wins + r.losses,
      O = S > 0 ? Math.round((r.wins / S) * 100) : null,
      U = `${r.count} ${r.count === 1 ? "partida" : "partidas"}`;
    return O !== null
      ? `Dia ${r.day} · ${U} · ${O}% WR (${r.wins}V ${r.losses}D)`
      : `Dia ${r.day} · ${U}`;
  }
  var N = Un(),
    W = L(N),
    I = L(W),
    P = L(I);
  b(I);
  var E = T(I, 2),
    $ = L(E);
  Es($, { size: 14 }),
    b(E),
    Ge(
      E,
      (r, S) => (ce == null ? void 0 : ce(r, S)),
      () => "Ver calendário completo",
    ),
    Ge(
      E,
      (r, S) => {
        var O;
        return (O = xs) == null ? void 0 : O(r, S);
      },
      () => ({ scale: 1.1, pressScale: 0.9 }),
    ),
    b(W);
  var k = T(W, 2);
  Ne(
    k,
    21,
    () => g,
    Pe,
    (r, S) => {
      var O = Tn(),
        U = L(O, !0);
      b(O), Q(() => Z(U, n(S))), H(r, O);
    },
  ),
    b(k);
  var w = T(k, 2);
  Ne(
    w,
    21,
    () => n(h),
    Pe,
    (r, S) => {
      var O = Ot(),
        U = Ut(O);
      {
        var F = (f) => {
            var R = On();
            H(f, R);
          },
          q = (f) => {
            var R = Hn();
            let c;
            Ge(
              R,
              (_, z) => (ce == null ? void 0 : ce(_, z)),
              () => d(n(S)),
            ),
              Q(
                (_) => {
                  (c = ee(R, 1, "cell svelte-1pyf4cc", null, c, {
                    today: n(S).isToday,
                  })),
                    Y(R, "data-level", _);
                },
                [() => v(n(S).count)],
              ),
              H(f, R);
          };
        de(U, (f) => {
          n(S).day === null ? f(F) : f(q, -1);
        });
      }
      H(r, O);
    },
  ),
    b(w),
    b(N),
    Q(
      (r, S) => Z(P, `${r ?? ""} ${S ?? ""}`),
      [() => x[m.getMonth()], () => m.getFullYear()],
    ),
    rt("click", E, () => Yt.open("calendario", u)),
    H(e, N),
    pe(),
    i();
}
zt(["click"]);
var Bn = j(
    '<div class="bar-col svelte-6y2dj4"><span> </span> <div class="bar-track svelte-6y2dj4"><div></div></div> <span class="bar-label svelte-6y2dj4"> </span></div>',
  ),
  Kn = j(
    '<div class="winrate-widget svelte-6y2dj4"><span class="title svelte-6y2dj4">Win Rate por Semana</span> <div class="chart svelte-6y2dj4"></div></div>',
  );
function zn(e, t) {
  fe(t, !0);
  const s = () => ne(u, "$dayCounts", a),
    [a, i] = Ae(),
    { dayCounts: u } = st,
    l = new Date();
  l.setHours(0, 0, 0, 0);
  function g(v) {
    return `${v.getFullYear()}-${String(v.getMonth() + 1).padStart(2, "0")}-${String(v.getDate()).padStart(2, "0")}`;
  }
  let x = M(() => {
    const v = l.getFullYear(),
      d = l.getMonth(),
      N = new Date(v, d, 1).getDay(),
      W = new Date(v, d + 1, 0).getDate(),
      I = s(),
      P = [];
    for (let E = 1; E <= W; E++) {
      const $ = Math.floor((E - 1 + N) / 7);
      P[$] || (P[$] = { wins: 0, losses: 0 });
      const k = I.get(g(new Date(v, d, E)));
      k && ((P[$].wins += k.wins), (P[$].losses += k.losses));
    }
    return P.map((E, $) => {
      const k = E.wins + E.losses,
        w = k > 0 ? Math.round((E.wins / k) * 100) : null;
      return { label: `S${$ + 1}`, wr: w, wins: E.wins, losses: E.losses };
    });
  });
  function y(v) {
    return v.wr === null
      ? `Semana ${v.label.slice(1)} · sem partidas decididas`
      : `Semana ${v.label.slice(1)} · ${v.wr}% WR (${v.wins}V ${v.losses}D)`;
  }
  var m = Kn(),
    h = T(L(m), 2);
  Ne(
    h,
    21,
    () => n(x),
    Pe,
    (v, d) => {
      var N = Bn(),
        W = L(N);
      let I;
      var P = L(W, !0);
      b(W);
      var E = T(W, 2),
        $ = L(E);
      let k;
      b(E);
      var w = T(E, 2),
        r = L(w, !0);
      b(w),
        b(N),
        Q(
          (S) => {
            Y(N, "title", S),
              (I = ee(W, 1, "bar-value svelte-6y2dj4", null, I, {
                high: n(d).wr !== null && n(d).wr > 60,
              })),
              Z(P, n(d).wr !== null ? `${n(d).wr}%` : "—"),
              (k = ee($, 1, "bar-fill svelte-6y2dj4", null, k, {
                empty: n(d).wr === null,
              })),
              dt($, `height: ${n(d).wr ?? 0 ?? ""}%`),
              Z(r, n(d).label);
          },
          [() => y(n(d))],
        ),
        H(v, N);
    },
  ),
    b(h),
    b(m),
    H(e, m),
    pe(),
    i();
}
var Gn = Xe("<circle><title> </title></circle>"),
  jn = Xe(
    '<svg class="chart-svg svelte-10q22wa"><path fill="var(--lose)" fill-opacity="0.22" stroke="none"></path><path fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><!></svg>',
  ),
  qn = j('<div class="empty-chart svelte-10q22wa"> </div>'),
  Yn = j(
    '<div class="evolution-widget svelte-10q22wa"><div class="header svelte-10q22wa"><span class="title svelte-10q22wa">Evolução de PDL</span> <span> </span></div> <!></div>',
  );
function Qn(e, t) {
  fe(t, !0);
  const s = () => ne(xt, "$riotRanked", u),
    a = () => ne(ut, "$rankedQueueView", u),
    i = () => ne(g, "$matchRows", u),
    [u, l] = Ae(),
    { matchRows: g } = st,
    x = 190,
    y = 56,
    m = 6,
    h = 10,
    v = { solo: 420, flex: 440 },
    d = { solo: "Solo/Duo", flex: "Flex" };
  let N = M(s),
    W = M(a),
    I = M(() => v[n(W)]),
    P = M(() => d[n(W)]),
    E = M(() => {
      var p;
      return ((p = n(N)) == null ? void 0 : p.queues[n(W)]) ?? null;
    }),
    $ = M(() => {
      var p;
      return (p = n(E)) != null && p.tier ? n(E).lp : null;
    }),
    k = M(() => {
      const p = [];
      for (const o of i())
        if (o.report.queue_id === n(I)) {
          if (o.lp_delta === null) {
            if (p.length > 0) break;
            continue;
          }
          if ((p.push(o.lp_delta), p.length >= h)) break;
        }
      return p.reverse();
    }),
    w = M(() => {
      if (n(k).length === 0) return [];
      const p = n(k).reduce((B, J) => B + J, 0);
      let o = n($) !== null ? n($) - p : 0;
      const A = [o];
      for (const B of n(k)) (o += B), A.push(o);
      return A;
    }),
    r = M(() => (n(w).length ? Math.max(...n(w)) : 1)),
    S = M(() => (n(w).length ? Math.min(...n(w)) : 0)),
    O = M(() => Math.max(1, n(r) - n(S))),
    U = M(() => n(k).reduce((p, o) => p + o, 0));
  function F(p) {
    return m + (p / Math.max(1, n(w).length - 1)) * (x - m * 2);
  }
  function q(p) {
    return y - m - ((p - n(S)) / n(O)) * (y - m * 2);
  }
  function f(p) {
    return p > 0 ? `+${p}` : `${p}`;
  }
  let R = M(() =>
      n(w)
        .map((p, o) => `${o === 0 ? "M" : "L"} ${F(o)} ${q(p)}`)
        .join(" "),
    ),
    c = M(() =>
      n(w).length > 1
        ? `${n(R)} L ${F(n(w).length - 1)} ${y - m} L ${F(0)} ${y - m} Z`
        : "",
    ),
    _ = M(() => f(n(U)));
  var z = Yn(),
    K = L(z),
    X = T(L(K), 2);
  let V;
  var re = L(X, !0);
  b(X), b(K);
  var $e = T(K, 2);
  {
    var xe = (p) => {
        var o = jn();
        Y(o, "viewBox", "0 0 190 56");
        var A = L(o),
          B = T(A),
          J = T(B);
        Ne(
          J,
          17,
          () => n(w),
          Pe,
          (ye, Ue, Se) => {
            var _e = Gn(),
              bt = L(_e),
              as = L(bt, !0);
            b(bt),
              b(_e),
              Q(
                (is, os, ls) => {
                  Y(_e, "cx", is),
                    Y(_e, "cy", os),
                    Y(_e, "r", Se === n(w).length - 1 ? 3 : 2),
                    Y(
                      _e,
                      "fill",
                      Se > 0 && n(Ue) >= n(w)[Se - 1]
                        ? "var(--win)"
                        : "var(--accent)",
                    ),
                    Z(as, ls);
                },
                [
                  () => F(Se),
                  () => q(n(Ue)),
                  () =>
                    Se === 0
                      ? `${n(Ue)} PDL`
                      : `${n(Ue)} PDL (${f(n(k)[Se - 1])})`,
                ],
              ),
              H(ye, _e);
          },
        ),
          b(o),
          Q(() => {
            Y(A, "d", n(c)), Y(B, "d", n(R));
          }),
          H(p, o);
      },
      me = (p) => {
        var o = qn(),
          A = L(o);
        b(o), Q(() => Z(A, `Sem partidas ${n(P) ?? ""} com PDL`)), H(p, o);
      };
    de($e, (p) => {
      n(w).length > 1 ? p(xe) : p(me, -1);
    });
  }
  b(z),
    Q(() => {
      (V = ee(X, 1, "current svelte-10q22wa", null, V, {
        win: n(U) > 0,
        lose: n(U) < 0,
      })),
        Z(re, n(_));
    }),
    H(e, z),
    pe(),
    l();
}
var Vn = j(
  '<div class="page svelte-175vjqp"><div class="stack svelte-175vjqp"><!> <!> <!> <!> <!> <!></div></div>',
);
function wr(e, t) {
  fe(t, !0);
  let s = G(null);
  Ht(() => {
    n(s) &&
      nt.fromTo(
        Array.from(n(s).children),
        { opacity: 0, scaleX: 0.85, x: -8 },
        {
          opacity: 1,
          scaleX: 1,
          x: 0,
          duration: 0.32,
          ease: "back.out(1)",
          clearProps: "transform",
        },
      );
  });
  var a = Vn(),
    i = L(a),
    u = L(i);
  $n(u, {});
  var l = T(u, 2);
  Mn(l, {});
  var g = T(l, 2);
  Wn(g, {});
  var x = T(g, 2);
  Qn(x, {});
  var y = T(x, 2);
  Fn(y, {});
  var m = T(y, 2);
  zn(m, {}),
    b(i),
    ze(
      i,
      (h) => D(s, h),
      () => n(s),
    ),
    b(a),
    H(e, a),
    pe();
}
export {
  In as A,
  wr as H,
  dr as I,
  _r as L,
  Es as M,
  wn as a,
  mr as b,
  Dt as c,
  ss as d,
  hn as e,
  gr as f,
  Me as g,
  vr as h,
  Js as i,
  Ls as j,
  ve as k,
  Yt as l,
  st as m,
  ce as n,
  fr as o,
  xt as p,
  sn as q,
  Vt as r,
  je as s,
  nn as t,
  pt as u,
  pr as v,
  Vs as w,
  hr as x,
};
