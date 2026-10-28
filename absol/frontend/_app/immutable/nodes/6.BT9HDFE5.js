import { c as at, a as n, f as z, b as I } from "../chunks/DXITvGue.js";
import { o as Nt, a as qt } from "../chunks/zmacCIoP.js";
import {
  p as Ht,
  X as st,
  w as e,
  Y as rt,
  x as i,
  I as Ut,
  u as ot,
  y as s,
  f as pe,
  g as Wt,
  i as v,
  k as h,
  aq as jt,
  j as c,
  t as R,
  Z as Ne,
} from "../chunks/BYGgIge7.js";
import { d as Vt, a as it, s as fe } from "../chunks/D6JgBVoW.js";
import { i as y } from "../chunks/BQhwzbP1.js";
import { k as Yt } from "../chunks/BeJYRrUC.js";
import { g as d, l as ge, s as qe, a as D } from "../chunks/miXHpl0f.js";
import { b as O } from "../chunks/DdrE9EQ-.js";
import { g as Jt, L as me, P as Kt } from "../chunks/BloJ8z93.js";
import {
  b as Gt,
  a as Qt,
  c as Zt,
  d as $t,
  p as ea,
  U as ta,
} from "../chunks/BrxWKfQC.js";
var aa = z(
    '<div class="drag-layer svelte-b7vz6y" data-tauri-drag-region=""></div>',
  ),
  sa = I('<polyline points="18 15 12 9 6 15"></polyline>'),
  ra = I('<polyline points="6 9 12 15 18 9"></polyline>'),
  oa = z(
    '<button class="expand-btn svelte-b7vz6y"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><!></svg></button>',
  ),
  ia = I(
    '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
  ),
  na = I(
    '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>',
  ),
  la = z(
    '<div class="gold-header svelte-b7vz6y"><div class="header-balloon svelte-b7vz6y" aria-hidden="true"><span class="header-balloon-dot svelte-b7vz6y"></span> <span class="header-balloon-dot svelte-b7vz6y"></span> <span class="header-balloon-dot svelte-b7vz6y"></span></div> <span class="gold-header-text svelte-b7vz6y"> </span></div>',
  ),
  va = z('<span class="blocked-msg svelte-b7vz6y"> </span>'),
  ca = I('<polygon points="12,4 22,18 2,18"></polygon>'),
  da = I('<polygon points="12,20 22,6 2,6"></polygon>'),
  ua = I(
    '<svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor"><!></svg>',
  ),
  pa = I('<path class="svelte-b7vz6y"></path>'),
  fa = z(
    '<div class="gold-main svelte-b7vz6y"><div class="gold-left svelte-b7vz6y"><span class="value svelte-b7vz6y"> </span> <!></div> <div class="gold-right svelte-b7vz6y"><span class="delta-label svelte-b7vz6y">ÚLTIMO MINUTO</span> <span> </span></div></div> <svg class="spark svelte-b7vz6y" width="100%" preserveAspectRatio="none"><line class="zero svelte-b7vz6y" x1="0"></line><!></svg>',
    1,
  ),
  ga = z('<span class="blocked-msg svelte-b7vz6y">Servidor offline</span>'),
  ma = z(
    '<span class="blocked-msg svelte-b7vz6y">Fila sem coach gratuito</span>',
  ),
  ha = z(
    '<span class="inactive-msg svelte-b7vz6y">Assine para desbloquear</span>',
  ),
  _a = z(
    '<div class="divider svelte-b7vz6y"></div> <div class="delta-row svelte-b7vz6y"><!></div>',
    1,
  ),
  ba = z('<div class="gold-body svelte-b7vz6y"><!> <!></div>'),
  wa = z(
    '<div><div class="intro-bar intro-red svelte-b7vz6y"></div> <div class="intro-bar intro-green svelte-b7vz6y"></div> <!> <div class="row svelte-b7vz6y"><span class="status svelte-b7vz6y"><span class="status-logo-wrap svelte-b7vz6y"><img src="/logo.svg" alt="ABSOL" class="status-logo svelte-b7vz6y"/></span> <span class="status-state">ANÁLISE DE <span class="status-hl svelte-b7vz6y">GOLD</span></span></span> <div class="right svelte-b7vz6y"><!> <button class="lock-btn svelte-b7vz6y"><!></button></div></div> <!></div>',
  );
function Pa(nt, lt) {
  Ht(lt, !0);
  const B = Jt(),
    ee = 200,
    he = 32,
    vt = 90,
    _e = 100,
    He = 60,
    W = 10,
    ct = 6e4;
  let L = i(!0),
    te = i(null),
    P = i(!1),
    j = i(!1),
    F = i(!0),
    _ = i(0),
    V = i(""),
    Y = i(""),
    E,
    X;
  const be = $t(() => e(J), "rgba(21,21,21,0.2)"),
    we = Zt(() => e(te));
  st(() => {
    const a = e(L);
    e(x), e(te), rt().then(() => we.sync(a));
  });
  const dt = {
    TOP: `Lembre-se!
Controle a wave antes de lutar.`,
    JUNGLE: `Lembre-se!
Farm e objetivos mantêm seu ritmo.`,
    MIDDLE: `Lembre-se!
Puxe a wave antes de rotacionar.`,
    BOTTOM: `Lembre-se!
15 de farm = 1 kill.`,
    UTILITY: `Lembre-se!
Visão também cria vantagem.`,
  };
  function Ue(a) {
    return (a == null ? void 0 : a.trim().toUpperCase()) ?? "";
  }
  function ut() {
    return (
      dt[e(Y)] ??
      `Lembre-se!
15 de farm = 1 kill.`
    );
  }
  function We() {
    E && clearInterval(E), s(V, "");
    const a = ut();
    let t = 0;
    E = setInterval(() => {
      s(V, a.slice(0, ++t), !0),
        t >= a.length && (clearInterval(E), (E = void 0));
    }, 45);
  }
  function je() {
    E && (clearInterval(E), (E = void 0)), s(V, "");
  }
  let b = i(Ut([])),
    ae,
    se;
  function pt(a) {
    const t = Date.now();
    s(b, [...e(b), { t, v: a }].slice(-60), !0);
  }
  let ye = Ne(() => {
      if (e(b).length < 2) return 0;
      const t = Date.now() - ct,
        r = e(b).find((l) => l.t >= t) ?? e(b)[0];
      return e(_) - r.v;
    }),
    Ve = Ne(() => {
      if (e(b).length < 2) return "";
      const a = e(b).map((T) => T.v),
        t = Math.min(...a),
        r = Math.max(...a),
        l = r - t || 1,
        f = He / (e(b).length - 1),
        g = 1.5;
      return a
        .map((T, C) => {
          const A = C * f,
            Oe = g + ((r - T) / l) * (W - g * 2);
          return `${C === 0 ? "M" : "L"}${A.toFixed(1)},${Oe.toFixed(1)}`;
        })
        .join(" ");
    }),
    Ye = Ne(() => {
      if (e(b).length < 2) return W / 2;
      const a = e(b).map((T) => T.v),
        t = Math.min(...a),
        r = Math.max(...a),
        l = r - t || 1,
        f = 1.5,
        g = f + ((r - 0) / l) * (W - f * 2);
      return Math.max(f, Math.min(W - f, g));
    });
  function Je(a) {
    const t = Math.abs(a);
    return t >= 1e3
      ? (t / 1e3).toFixed(1).replace(/\.0$/, "") + "k"
      : String(t);
  }
  function ft(a) {
    return a === 0 ? "0" : (a > 0 ? "+" : "−") + Je(a);
  }
  let J = i(null),
    ke = i(null),
    K = i(null),
    re = i(null),
    ze = i(null),
    xe = i(null),
    Te = i(null),
    Le = i(null),
    oe = i(!1),
    ie = i(!0),
    Ee = i(!1),
    Se = i(!1);
  const N = {};
  async function Ke() {
    var t;
    (t = N.tl) == null || t.kill(), (N.tl = void 0), s(j, !0), s(P, !0);
    const a = e(xe);
    a &&
      d.fromTo(
        a,
        { width: 0, marginRight: 0 },
        { width: 36, marginRight: 8, duration: 0.5, ease: "back.out(1.1)" },
      ),
      await B.setSize(new me(ee, _e)),
      requestAnimationFrame(() => {
        const r = e(K);
        r &&
          d.fromTo(
            r,
            { opacity: 0, y: 8 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power3.out",
              onComplete: () => be.schedule(),
            },
          );
      });
  }
  st(() => {
    const a = e(J),
      t = e(ke),
      r = e(Te),
      l = e(Le);
    if (!a || !t || !r || !l) return;
    const f = ot(() => e(x) === "leaving"),
      g = a.querySelector(".delta-row");
    if (f)
      d.set([t, g], { opacity: 1, y: 0 }),
        d.set(r, { scaleX: 0, transformOrigin: "right center" }),
        d.set(l, { scaleX: 0, transformOrigin: "right center" }),
        d
          .timeline()
          .to([t, g], { opacity: 0, y: 4, duration: 0.2, ease: "power2.in" })
          .to(r, { scaleX: 1, duration: 0.22, ease: "power2.out" }, "<0.05")
          .to(l, { scaleX: 1, duration: 0.4, ease: "power2.out" }, "<0.08")
          .set(r, { transformOrigin: "left center" })
          .to(r, { scaleX: 0, duration: 0.22, ease: "power2.in" }, ">0.06")
          .set(l, { transformOrigin: "left center" })
          .to(l, { scaleX: 0, duration: 0.4, ease: "power2.in" }, ">0.12")
          .to(a, { opacity: 0, duration: 0.3, ease: "power2.in" }, "<0.1");
    else {
      d.set(a, { opacity: 1 }),
        d.set(t, { opacity: 0, y: 4 }),
        g && d.set(g, { opacity: 0, y: 4 });
      const T = ot(() => !e(ie));
      Gt(r, l)
        .call(() => {
          s(oe, !0);
        })
        .to(t, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" })
        .call(
          () =>
            requestAnimationFrame(() => {
              if (T) {
                Ke();
                return;
              }
              const C = e(re);
              C && d.to(C, { opacity: 1, duration: 0.4, ease: "power2.out" }),
                Qt(e(ze), N),
                We(),
                (X = setTimeout(() => {
                  const A = e(re);
                  A &&
                    d
                      .timeline({ onComplete: Ke })
                      .to(A, {
                        opacity: 0,
                        height: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        duration: 0.4,
                        ease: "power2.in",
                      });
                }, 6e3));
            }),
          [],
          "<",
        );
    }
    return () => {
      d.killTweensOf([a, t, r, l]), g && d.killTweensOf(g);
    };
  });
  let ne,
    le,
    x = i("hidden"),
    q;
  const gt = 1400,
    mt = 1400;
  Nt(async () => {
    we.start(() => e(L)),
      await B.setSize(new me(ee, vt)),
      (ae = await ge("absol://gold-diff", ({ payload: t }) => {
        const r = (t == null ? void 0 : t.diff) ?? 0;
        s(_, r, !0), pt(r);
      })),
      (se = await ge("absol://player-role", ({ payload: t }) => {
        const r = Ue(t == null ? void 0 : t.role);
        !r || r === e(Y) || (s(Y, r, !0), !e(j) && (e(V) || E) && We());
      })),
      (le = await ge("absol://game-live", ({ payload: t }) => {
        s(F, (t == null ? void 0 : t.coaching_active) ?? !1, !0),
          s(ie, (t == null ? void 0 : t.supported_mode) ?? !0, !0),
          s(Ee, (t == null ? void 0 : t.server_offline) ?? !1, !0),
          s(Se, (t == null ? void 0 : t.free_queue_blocked) ?? !1, !0);
        const r = Ue(t == null ? void 0 : t.role);
        r && s(Y, r, !0),
          e(F) || (s(_, 0), s(b, [], !0)),
          q && (clearTimeout(q), (q = void 0)),
          s(x, "entering"),
          setTimeout(() => {
            e(x) === "entering" && s(x, "live");
          }, gt);
      })),
      (ne = await ge("absol://game-ended", () => {
        s(x, "leaving"),
          (q = setTimeout(() => {
            var t;
            s(x, "hidden"),
              s(_, 0),
              s(b, [], !0),
              X && (clearTimeout(X), (X = void 0)),
              (t = N.tl) == null || t.kill(),
              (N.tl = void 0),
              je(),
              s(j, !1),
              s(P, !1),
              s(oe, !1),
              s(ie, !0),
              s(Ee, !1),
              s(Se, !1),
              s(Y, "");
          }, mt));
      }));
    const a = localStorage.getItem("absol_overlay_gold_pos");
    if (a) {
      const { x: t, y: r } = JSON.parse(a);
      await B.setPosition(new Kt(t, r));
    }
  }),
    qt(() => {
      var a;
      ae == null || ae(),
        se == null || se(),
        ne == null || ne(),
        le == null || le(),
        q && clearTimeout(q),
        X && clearTimeout(X),
        be.cancel(),
        (a = N.tl) == null || a.kill(),
        je(),
        we.stop();
    });
  let Me = !1;
  async function ht(a) {
    if ((a.stopPropagation(), Me)) return;
    const t = e(J);
    if (t) {
      Me = !0;
      try {
        if (e(P)) {
          const r = e(K);
          r &&
            (await new Promise((l) =>
              d.to(r, {
                opacity: 0,
                y: -5,
                duration: 0.25,
                ease: "power2.in",
                onComplete: l,
              }),
            )),
            await new Promise((l) =>
              d.to(t, {
                height: he,
                duration: 0.5,
                ease: "power2.inOut",
                onComplete: l,
              }),
            ),
            d.set(t, { clearProps: "height" }),
            s(P, !1),
            await B.setSize(new me(ee, he));
        } else {
          s(P, !0),
            await rt(),
            await B.setSize(new me(ee, _e)),
            d.fromTo(
              t,
              { height: he },
              {
                height: _e,
                duration: 0.6,
                ease: "power3.out",
                onComplete: () => d.set(t, { clearProps: "height" }),
              },
            );
          const r = e(K);
          r &&
            d.fromTo(
              r,
              { opacity: 0, y: 8 },
              {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power3.out",
                delay: 0.15,
                onComplete: () => be.schedule(),
              },
            );
        }
      } finally {
        Me = !1;
      }
    }
  }
  async function _t(a) {
    a.stopPropagation(), s(L, !e(L)), await ea(B, e(L), "absol_overlay_gold");
  }
  var Ge = at(),
    bt = pe(Ge);
  {
    var wt = (a) => {
      var t = at(),
        r = pe(t);
      Yt(
        r,
        () => (e(x) === "leaving" ? "leaving" : "alive"),
        (l) => {
          var f = wa();
          let g;
          var T = v(f);
          O(
            T,
            (o) => s(Te, o),
            () => e(Te),
          );
          var C = h(T, 2);
          O(
            C,
            (o) => s(Le, o),
            () => e(Le),
          );
          var A = h(C, 2);
          {
            var Oe = (o) => {
              var p = aa();
              n(o, p);
            };
            y(A, (o) => {
              e(L) || o(Oe);
            });
          }
          var ve = h(A, 2),
            Pe = v(ve),
            yt = v(Pe);
          O(
            yt,
            (o) => s(xe, o),
            () => e(xe),
          ),
            jt(2),
            c(Pe);
          var Qe = h(Pe, 2),
            Ze = v(Qe);
          {
            var kt = (o) => {
              var p = oa(),
                Q = v(p),
                Ce = v(Q);
              {
                var De = (m) => {
                    var k = sa();
                    n(m, k);
                  },
                  Ie = (m) => {
                    var k = ra();
                    n(m, k);
                  };
                y(Ce, (m) => {
                  e(P) ? m(De) : m(Ie, -1);
                });
              }
              c(Q),
                c(p),
                R(() => D(p, "title", e(P) ? "Minimizar" : "Maximizar")),
                it("click", p, ht),
                n(o, p);
            };
            y(Ze, (o) => {
              e(oe) && e(j) && o(kt);
            });
          }
          var G = h(Ze, 2),
            zt = v(G);
          {
            var xt = (o) => {
                var p = ia();
                n(o, p);
              },
              Tt = (o) => {
                var p = na();
                n(o, p);
              };
            y(zt, (o) => {
              e(L) ? o(xt) : o(Tt, -1);
            });
          }
          c(G),
            O(
              G,
              (o) => s(te, o),
              () => e(te),
            ),
            c(Qe),
            c(ve),
            O(
              ve,
              (o) => s(ke, o),
              () => e(ke),
            );
          var Lt = h(ve, 2);
          {
            var Et = (o) => {
              var p = ba(),
                Q = v(p);
              {
                var Ce = (m) => {
                  var k = la(),
                    H = v(k);
                  O(
                    H,
                    (Z) => s(ze, Z),
                    () => e(ze),
                  );
                  var ce = h(H, 2),
                    Ae = v(ce, !0);
                  c(ce),
                    c(k),
                    O(
                      k,
                      (Z) => s(re, Z),
                      () => e(re),
                    ),
                    R(() => fe(Ae, e(V))),
                    n(m, k);
                };
                y(Q, (m) => {
                  e(j) || m(Ce);
                });
              }
              var De = h(Q, 2);
              {
                var Ie = (m) => {
                  var k = _a(),
                    H = h(pe(k), 2),
                    ce = v(H);
                  {
                    var Ae = (u) => {
                        var w = va(),
                          $ = v(w, !0);
                        c(w), R(() => fe($, ta)), n(u, w);
                      },
                      Z = (u) => {
                        var w = fa(),
                          $ = pe(w),
                          Re = v($),
                          Be = v(Re),
                          Pt = v(Be);
                        c(Be);
                        var Ct = h(Be, 2);
                        {
                          var Dt = (S) => {
                            var M = ua();
                            let tt;
                            var Bt = v(M);
                            {
                              var Ft = (U) => {
                                  var Xe = ca();
                                  n(U, Xe);
                                },
                                Xt = (U) => {
                                  var Xe = da();
                                  n(U, Xe);
                                };
                              y(Bt, (U) => {
                                e(_) > 0 ? U(Ft) : U(Xt, -1);
                              });
                            }
                            c(M),
                              R(
                                () =>
                                  (tt = qe(
                                    M,
                                    0,
                                    "arrow svelte-b7vz6y",
                                    null,
                                    tt,
                                    { up: e(_) > 0, down: e(_) < 0 },
                                  )),
                              ),
                              n(S, M);
                          };
                          y(Ct, (S) => {
                            e(_) !== 0 && S(Dt);
                          });
                        }
                        c(Re);
                        var $e = h(Re, 2),
                          Fe = h(v($e), 2);
                        let et;
                        var It = v(Fe, !0);
                        c(Fe), c($e), c($);
                        var de = h($, 2);
                        D(de, "height", W), D(de, "viewBox", "0 0 60 10");
                        var ue = v(de);
                        D(ue, "x2", He);
                        var At = h(ue);
                        {
                          var Rt = (S) => {
                            var M = pa();
                            R(() => D(M, "d", e(Ve))), n(S, M);
                          };
                          y(At, (S) => {
                            e(Ve) && S(Rt);
                          });
                        }
                        c(de),
                          R(
                            (S, M) => {
                              fe(
                                Pt,
                                `${e(_) > 0 ? "+" : e(_) < 0 ? "−" : ""}${S ?? ""}`,
                              ),
                                (et = qe(
                                  Fe,
                                  1,
                                  "delta-value svelte-b7vz6y",
                                  null,
                                  et,
                                  { up: e(ye) > 0, down: e(ye) < 0 },
                                )),
                                fe(It, M),
                                D(ue, "y1", e(Ye)),
                                D(ue, "y2", e(Ye));
                            },
                            [() => Je(e(_)), () => ft(e(ye))],
                          ),
                          n(u, w);
                      },
                      St = (u) => {
                        var w = ga();
                        n(u, w);
                      },
                      Mt = (u) => {
                        var w = ma();
                        n(u, w);
                      },
                      Ot = (u) => {
                        var w = ha();
                        n(u, w);
                      };
                    y(ce, (u) => {
                      e(ie)
                        ? e(F)
                          ? u(Z, 1)
                          : e(Ee)
                            ? u(St, 2)
                            : e(Se)
                              ? u(Mt, 3)
                              : u(Ot, -1)
                        : u(Ae);
                    });
                  }
                  c(H),
                    O(
                      H,
                      (u) => s(K, u),
                      () => e(K),
                    ),
                    n(m, k);
                };
                y(De, (m) => {
                  e(P) && m(Ie);
                });
              }
              c(p), n(o, p);
            };
            y(Lt, (o) => {
              e(oe) && o(Et);
            });
          }
          c(f),
            O(
              f,
              (o) => s(J, o),
              () => e(J),
            ),
            R(() => {
              (g = qe(f, 1, "widget svelte-b7vz6y", null, g, {
                unlocked: !e(L),
                positive: e(F) && e(_) > 0,
                negative: e(F) && e(_) < 0,
                inactive: !e(F),
                leaving: e(x) === "leaving",
              })),
                D(
                  G,
                  "title",
                  e(L) ? "Desbloquear para mover" : "Travar posição",
                );
            }),
            it("click", G, _t),
            n(l, f);
        },
      ),
        n(a, t);
    };
    y(bt, (a) => {
      e(x) !== "hidden" && a(wt);
    });
  }
  n(nt, Ge), Wt();
}
Vt(["click"]);
export { Pa as component };
