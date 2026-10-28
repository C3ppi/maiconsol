import { c as ut, a as p, f as w, b as Le } from "../chunks/DXITvGue.js";
import { o as zt, a as Gt } from "../chunks/zmacCIoP.js";
import {
  p as Jt,
  X as ee,
  w as e,
  Y as te,
  x as i,
  I as vt,
  u as ae,
  y as t,
  f as Ee,
  g as Zt,
  Z as Kt,
  k as _,
  i as m,
  j as d,
  t as B,
} from "../chunks/BYGgIge7.js";
import { d as Yt, s as se, a as dt, e as pt } from "../chunks/D6JgBVoW.js";
import { i as P } from "../chunks/BQhwzbP1.js";
import { k as Qt } from "../chunks/BeJYRrUC.js";
import { g as $t, e as ea, i as ta, a as aa } from "../chunks/D9awVeru.js";
import { g as f, l as z, s as Pe, a as Ie } from "../chunks/miXHpl0f.js";
import { b } from "../chunks/DdrE9EQ-.js";
import { g as sa, P as mt, L as ft } from "../chunks/BloJ8z93.js";
import {
  b as oa,
  a as gt,
  c as ra,
  d as ia,
  p as na,
  U as la,
} from "../chunks/BrxWKfQC.js";
var ca = w(
    '<div class="drag-layer svelte-xybm77" data-tauri-drag-region=""></div>',
  ),
  ua = w(
    '<span class="status-state svelte-xybm77">ITENS <span style="color:#C1FF46">RECOMENDADOS</span></span>',
  ),
  va = w(
    '<span class="status-state inactive svelte-xybm77">DESCONECTADO</span>',
  ),
  da = Le('<polyline points="18 15 12 9 6 15"></polyline>'),
  pa = Le('<polyline points="6 9 12 15 18 9"></polyline>'),
  ma = w(
    '<button class="items-btn svelte-xybm77"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><!></svg></button>',
  ),
  fa = Le(
    '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
  ),
  ga = Le(
    '<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>',
  ),
  _a = w(
    '<div class="popup-header svelte-xybm77"><div class="header-balloon svelte-xybm77" aria-hidden="true"><span class="header-balloon-dot svelte-xybm77"></span> <span class="header-balloon-dot svelte-xybm77"></span> <span class="header-balloon-dot svelte-xybm77"></span></div> <div class="popup-header-text svelte-xybm77"><span> </span> <span class="nick svelte-xybm77"> </span> <span> </span></div></div>',
  ),
  ha = w('<div class="build-blocked svelte-xybm77"> </div>'),
  ya = w('<img class="item-icon svelte-xybm77"/>'),
  ba = w('<span class="item-num svelte-xybm77"></span>'),
  wa = w('<div><!> <span class="item-order svelte-xybm77"></span></div>'),
  xa = w(
    '<div></div> <div class="popup-body svelte-xybm77"><!> <!> <div class="popup svelte-xybm77"></div></div>',
    1,
  ),
  ka = w(
    '<div class="intro-bar intro-red svelte-xybm77"></div> <div class="intro-bar intro-green svelte-xybm77"></div> <div><!> <div class="row svelte-xybm77"><span class="status svelte-xybm77"><span class="status-logo-wrap svelte-xybm77"><img src="/logo.svg" alt="ABSOL" class="status-logo svelte-xybm77"/></span> <!></span> <div><span class="item-label svelte-xybm77"> </span></div> <div class="right svelte-xybm77"><!> <button class="lock-btn svelte-xybm77"><!></button></div></div> <!></div>',
    1,
  );
function Fa(_t, ht) {
  Jt(ht, !0);
  const C = sa(),
    G = 32,
    oe = 90,
    yt = 27,
    bt = 4,
    wt = 8,
    Ke = 5,
    xt = 7;
  function Ye(a) {
    const s = Math.min(Math.max(a, Ke), xt);
    return s * yt + (s - 1) * bt + wt * 2 + 2;
  }
  let I = i(!0),
    Qe = i(!1),
    re = i(null);
  const Ae = ra(() => e(re));
  ee(() => {
    const a = e(I);
    e(h), e(re), te().then(() => Ae.sync(a));
  });
  let $e = i(""),
    D = i(vt([])),
    ie = i(null);
  const kt = {
    not_found: "Build não encontrada para esse campeão",
    unsupported_mode: la,
    no_coaching: "Partida grátis do dia já usada",
    server_offline: "Servidor offline",
    free_queue_blocked: "Fila sem coach gratuito",
  };
  let ne = i(!0),
    x = i(vt(new Set()));
  function et(a) {
    return e(x).has(a.id) || (a.alt_ids ?? []).some((s) => e(x).has(s));
  }
  let c = i(!1),
    J = i(!1),
    Oe = i(!1),
    R = i(!1),
    Ce = i(!1),
    M = i(!1),
    X = i(null),
    De = i(""),
    Me = i(""),
    Fe = i(""),
    tt = Kt(() => Ye(e(D).length)),
    A,
    F = i(!1);
  function at(a) {
    A && clearInterval(A);
    const s = "Analisei seus adversários,",
      n = `${e($e)}!`,
      l =
        s +
        `
` +
        n +
        `
` +
        "Recomendo esses itens.";
    let u = 0;
    A = setInterval(() => {
      u++;
      const k = l.slice(0, u),
        [S = "", ge = "", _e = ""] = k.split(`
`);
      t(De, S, !0),
        t(Me, ge, !0),
        t(Fe, _e, !0),
        u >= l.length && (clearInterval(A), (A = void 0));
    }, 30);
  }
  function st() {
    A && (clearInterval(A), (A = void 0)), t(De, ""), t(Me, ""), t(Fe, "");
  }
  const Z = {};
  let le,
    ce,
    ue,
    ve,
    de,
    pe,
    h = i("hidden"),
    U,
    me = i(null),
    Ne = i(null),
    qe = i(null),
    Be = i(null),
    Re = i(null),
    Xe = i(null),
    V = i(null),
    K = i(null),
    fe = i(null),
    Ue = i(null),
    N;
  const Ve = ia(() => e(me), "rgba(27,26,26,0.2)");
  ee(() => {
    const a = e(me),
      s = e(Ne),
      n = e(Re),
      o = e(Xe);
    if (!a || !s || !n || !o) return;
    if (ae(() => e(h) === "leaving"))
      f.set(a, { y: 0, opacity: 1 }),
        f.set(s, { opacity: 1, y: 0 }),
        f.set(n, { scaleX: 0, transformOrigin: "right center" }),
        f.set(o, { scaleX: 0, transformOrigin: "right center" }),
        f
          .timeline()
          .to(s, { opacity: 0, y: -4, duration: 0.2, ease: "power2.in" })
          .to(n, { scaleX: 1, duration: 0.22, ease: "power2.out" }, "<0.05")
          .to(o, { scaleX: 1, duration: 0.4, ease: "power2.out" }, "<0.08")
          .set(n, { transformOrigin: "left center" })
          .to(n, { scaleX: 0, duration: 0.22, ease: "power2.in" }, ">0.06")
          .set(o, { transformOrigin: "left center" })
          .to(o, { scaleX: 0, duration: 0.4, ease: "power2.in" }, ">0.12")
          .to(
            a,
            { y: -G, opacity: 0, duration: 0.35, ease: "power2.in" },
            "<0.1",
          );
    else {
      f.set(a, { y: 0, opacity: 1 }), f.set(s, { opacity: 0 }), t(c, !0);
      const u = ae(() => !e(ne));
      u && t(F, !0),
        W(u ? We : oe),
        oa(n, o)
          .call(() => {
            e(c) && t(R, !0);
          })
          .set(s, { opacity: 1 })
          .fromTo(
            e(qe) ?? s,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
          )
          .fromTo(
            e(Be) ?? s,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
            "<",
          )
          .call(
            () =>
              requestAnimationFrame(() => {
                if (u) {
                  ot();
                  return;
                }
                const k = e(K);
                k && f.to(k, { opacity: 1, duration: 0.4, ease: "power2.out" }),
                  gt(e(fe), Z),
                  at();
              }),
            [],
            "<",
          );
    }
    return () => f.killTweensOf([a, s, n, o]);
  });
  const We = 80;
  ee(() => {
    var s;
    if (!e(J)) return;
    const a =
      (s = ae(() => e(V))) == null ? void 0 : s.querySelectorAll(".item-slot");
    a != null &&
      a.length &&
      f.fromTo(
        a,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -5,
          duration: 0.4,
          stagger: { each: 0.05, from: "end" },
          ease: "power2.in",
        },
      );
  });
  const je = new Set();
  function St(a) {
    const s = a.querySelector(".item-icon") ?? a;
    f.timeline()
      .to(a, { scale: 1.22, duration: 0.22, ease: "power2.out" })
      .to(a, { scale: 1, duration: 0.62, ease: "elastic.out(1, 0.5)" })
      .fromTo(
        s,
        { boxShadow: "0 0 0 0 rgba(193, 255, 70, 0.85)" },
        {
          boxShadow: "0 0 0 5px rgba(193, 255, 70, 0)",
          duration: 0.8,
          ease: "power2.out",
          clearProps: "boxShadow",
        },
        0,
      );
  }
  ee(() => {
    var n;
    const a = e(D);
    e(x);
    const s =
      (n = ae(() => e(V))) == null ? void 0 : n.querySelectorAll(".item-slot");
    s != null &&
      s.length &&
      a.forEach((o, l) => {
        if (je.has(l) || !et(o)) return;
        je.add(l);
        const u = s[l];
        u && St(u);
      });
  });
  function ot() {
    requestAnimationFrame(() => {
      var n;
      const a = e(Ue),
        s = (n = e(V)) == null ? void 0 : n.querySelectorAll(".item-slot");
      a &&
        f.fromTo(
          a,
          { width: 0, marginRight: 0 },
          { width: 36, marginRight: 8, duration: 0.5, ease: "back.out(1.1)" },
        ),
        s != null &&
          s.length &&
          f.fromTo(
            s,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              delay: 0.1,
              stagger: 0.07,
              ease: "power2.out",
            },
          ),
        Ve.schedule();
    });
  }
  function Tt() {
    var a;
    (a = Z.tl) == null || a.kill(), (Z.tl = void 0), t(F, !0), W(We), ot();
  }
  ee(() => {
    if (!e(c)) {
      st(), N && (clearTimeout(N), (N = void 0));
      return;
    }
    if (!ae(() => !e(ne)))
      return (
        (N = setTimeout(() => {
          const a = e(K);
          a &&
            f
              .timeline({ onComplete: Tt })
              .to(a, {
                opacity: 0,
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                duration: 0.4,
                ease: "power2.in",
              });
        }, 1e4)),
        () => {
          N && (clearTimeout(N), (N = void 0));
        }
      );
  });
  const Et = 1400,
    Pt = 1400;
  let He = Ye(Ke);
  async function W(a) {
    const s = e(tt);
    if (s !== He)
      try {
        const n = await C.outerPosition(),
          o = await C.scaleFactor(),
          l = s - He,
          u = Math.round(l * o);
        await C.setPosition(new mt(n.x - u, n.y)), (He = s);
      } catch {}
    await C.setSize(new ft(s, a));
  }
  async function ze() {
    if (!(e(c) || e(M) || e(D).length === 0)) {
      t(M, !0);
      try {
        t(Oe, !0),
          await W(e(F) ? We : oe),
          await te(),
          t(c, !0),
          await te(),
          requestAnimationFrame(() => {
            var n;
            const a = e(K),
              s =
                (n = e(V)) == null ? void 0 : n.querySelectorAll(".item-slot");
            a &&
              f.to(a, {
                opacity: 1,
                duration: 0.4,
                delay: 0.1,
                ease: "power2.out",
              }),
              s != null &&
                s.length &&
                f.fromTo(
                  s,
                  { opacity: 0, y: -5 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: 0.15,
                    stagger: 0.06,
                    ease: "power3.out",
                  },
                ),
              e(F) || (gt(e(fe), Z), at()),
              Ve.schedule();
          });
      } finally {
        t(M, !1);
      }
    }
  }
  async function It() {
    if (!(!e(c) || e(M))) {
      t(M, !0);
      try {
        t(Oe, !1), t(J, !0);
        const a = (e(D).length - 1) * 60 + 240;
        await new Promise((s) => setTimeout(s, a)),
          t(c, !1),
          await new Promise((s) => setTimeout(s, 280)),
          t(J, !1),
          t(R, !0),
          t(X, null),
          await W(G);
      } finally {
        t(M, !1);
      }
    }
  }
  zt(async () => {
    var s, n;
    Ae.start(() => e(I)), $t();
    try {
      const o = localStorage.getItem("absol_session");
      o &&
        t(
          $e,
          (
            ((n = (s = JSON.parse(o)) == null ? void 0 : s.user) == null
              ? void 0
              : n.tag) ?? ""
          ).split("#")[0],
          !0,
        );
    } catch {}
    await te(),
      await W(e(c) ? oe : G),
      (le = await z("absol://build-path", async ({ payload: o }) => {
        o &&
          o.length > 0 &&
          (t(ie, null),
          t(D, o, !0),
          t(Ce, !0),
          await te(),
          await W(e(c) ? oe : G),
          e(h) !== "hidden" && !e(c) && !e(R) && ze());
      })),
      (ce = await z("absol://build-unavailable", ({ payload: o }) => {
        o != null && o.reason && t(ie, o.reason, !0);
      })),
      (ue = await z("absol://game-snapshot", ({ payload: o }) => {
        var k;
        e(Ce) &&
          !e(c) &&
          !e(R) &&
          ((o == null ? void 0 : o.game_time) ?? 0) >= 2 &&
          ze();
        const u = (
          ((k = o == null ? void 0 : o.my_player) == null ? void 0 : k.items) ??
          []
        ).filter((S) => !e(x).has(S.item_id));
        u.length > 0 &&
          t(x, new Set([...e(x), ...u.map((S) => S.item_id)]), !0);
      })),
      (pe = await z("absol://boot-completed", ({ payload: o }) => {
        const l = o == null ? void 0 : o.item_id;
        l && !e(x).has(l) && t(x, new Set([...e(x), l]), !0);
      })),
      (de = await z("absol://game-live", ({ payload: o }) => {
        t(Qe, (o == null ? void 0 : o.coaching_active) ?? !1, !0),
          t(ne, (o == null ? void 0 : o.supported_mode) ?? !0, !0),
          U && (clearTimeout(U), (U = void 0)),
          t(h, "entering"),
          setTimeout(() => {
            e(h) === "entering" && t(h, "live");
          }, Et);
      })),
      (ve = await z("absol://game-ended", () => {
        t(h, "leaving"),
          (U = setTimeout(() => {
            t(h, "hidden"),
              t(D, [], !0),
              t(x, new Set(), !0),
              je.clear(),
              t(c, !1),
              t(R, !1),
              t(Ce, !1),
              t(F, !1),
              t(ne, !0),
              C.setSize(new ft(e(tt), G));
          }, Pt));
      }));
    const a = localStorage.getItem("absol_overlay_pos");
    if (a) {
      const { x: o, y: l } = JSON.parse(a);
      await C.setPosition(new mt(o, l));
    }
  }),
    Gt(() => {
      var a;
      le == null || le(),
        ce == null || ce(),
        ue == null || ue(),
        pe == null || pe(),
        ve == null || ve(),
        de == null || de(),
        U && clearTimeout(U),
        Ve.cancel(),
        (a = Z.tl) == null || a.kill(),
        st(),
        Ae.stop();
    });
  async function Lt(a) {
    a.stopPropagation(), t(I, !e(I)), await na(C, e(I), "absol_overlay");
  }
  async function At(a) {
    a.stopPropagation(), !e(M) && (e(c) ? await It() : await ze());
  }
  var rt = ut(),
    Ot = Ee(rt);
  {
    var Ct = (a) => {
      var s = ut(),
        n = Ee(s);
      Qt(
        n,
        () => (e(h) === "leaving" ? "leaving" : "alive"),
        (o) => {
          var l = ka(),
            u = Ee(l);
          b(
            u,
            (r) => t(Re, r),
            () => e(Re),
          );
          var k = _(u, 2);
          b(
            k,
            (r) => t(Xe, r),
            () => e(Xe),
          );
          var S = _(k, 2);
          let ge;
          var _e = m(S);
          {
            var Dt = (r) => {
              var v = ca();
              p(r, v);
            };
            P(_e, (r) => {
              e(I) || r(Dt);
            });
          }
          var he = _(_e, 2),
            ye = m(he),
            it = m(ye);
          b(
            it,
            (r) => t(Ue, r),
            () => e(Ue),
          );
          var Mt = _(it, 2);
          {
            var Ft = (r) => {
                var v = ua();
                p(r, v);
              },
              Nt = (r) => {
                var v = va();
                p(r, v);
              };
            P(Mt, (r) => {
              e(Qe) ? r(Ft) : r(Nt, -1);
            });
          }
          d(ye),
            b(
              ye,
              (r) => t(qe, r),
              () => e(qe),
            );
          var be = _(ye, 2);
          let nt;
          var lt = m(be),
            qt = m(lt, !0);
          d(lt), d(be);
          var Ge = _(be, 2),
            ct = m(Ge);
          {
            var Bt = (r) => {
              var v = ma(),
                Q = m(v),
                we = m(Q);
              {
                var xe = (O) => {
                    var j = da();
                    p(O, j);
                  },
                  ke = (O) => {
                    var j = pa();
                    p(O, j);
                  };
                P(we, (O) => {
                  e(c) ? O(xe) : O(ke, -1);
                });
              }
              d(Q),
                d(v),
                B(() => Ie(v, "title", e(c) ? "Fechar build" : "Ver build")),
                dt("click", v, At),
                p(r, v);
            };
            P(ct, (r) => {
              (e(R) || e(c)) && e(F) && r(Bt);
            });
          }
          var Y = _(ct, 2),
            Rt = m(Y);
          {
            var Xt = (r) => {
                var v = fa();
                p(r, v);
              },
              Ut = (r) => {
                var v = ga();
                p(r, v);
              };
            P(Rt, (r) => {
              e(I) ? r(Xt) : r(Ut, -1);
            });
          }
          d(Y),
            b(
              Y,
              (r) => t(re, r),
              () => e(re),
            ),
            d(Ge),
            b(
              Ge,
              (r) => t(Be, r),
              () => e(Be),
            ),
            d(he),
            b(
              he,
              (r) => t(Ne, r),
              () => e(Ne),
            );
          var Vt = _(he, 2);
          {
            var Wt = (r) => {
              var v = xa(),
                Q = Ee(v);
              let we;
              var xe = _(Q, 2),
                ke = m(xe);
              {
                var O = (y) => {
                  var g = _a(),
                    q = m(g);
                  b(
                    q,
                    (E) => t(fe, E),
                    () => e(fe),
                  );
                  var L = _(q, 2),
                    H = m(L),
                    Se = m(H, !0);
                  d(H);
                  var $ = _(H, 2),
                    Ze = m($, !0);
                  d($);
                  var Te = _($, 2),
                    T = m(Te, !0);
                  d(Te),
                    d(L),
                    d(g),
                    b(
                      g,
                      (E) => t(K, E),
                      () => e(K),
                    ),
                    B(() => {
                      se(Se, e(De)), se(Ze, e(Me)), se(T, e(Fe));
                    }),
                    p(y, g);
                };
                P(ke, (y) => {
                  e(F) || y(O);
                });
              }
              var j = _(ke, 2);
              {
                var jt = (y) => {
                  var g = ha(),
                    q = m(g, !0);
                  d(g), B(() => se(q, kt[e(ie)])), p(y, g);
                };
                P(j, (y) => {
                  e(ie) && y(jt);
                });
              }
              var Je = _(j, 2);
              ea(
                Je,
                21,
                () => e(D),
                aa,
                (y, g, q) => {
                  var L = wa();
                  let H;
                  var Se = m(L);
                  {
                    var $ = (T) => {
                        var E = ya();
                        B(
                          (Ht) => {
                            Ie(E, "src", Ht), Ie(E, "alt", e(g).name);
                          },
                          [() => ta(e(g).id)],
                        ),
                          p(T, E);
                      },
                      Ze = (T) => {
                        var E = ba();
                        (E.textContent = q + 1), p(T, E);
                      };
                    P(Se, (T) => {
                      e(g).id ? T($) : T(Ze, -1);
                    });
                  }
                  var Te = _(Se, 2);
                  (Te.textContent = q + 1),
                    d(L),
                    B(
                      (T) =>
                        (H = Pe(L, 1, "item-slot svelte-xybm77", null, H, T)),
                      [() => ({ completed: et(e(g)) })],
                    ),
                    pt("mouseenter", L, () => t(X, e(g).name, !0)),
                    pt("mouseleave", L, () => {
                      e(X) === e(g).name && t(X, null);
                    }),
                    p(y, L);
                },
              ),
                d(Je),
                b(
                  Je,
                  (y) => t(V, y),
                  () => e(V),
                ),
                d(xe),
                B(
                  () =>
                    (we = Pe(Q, 1, "divider svelte-xybm77", null, we, {
                      instant: e(Oe),
                      closing: e(J),
                    })),
                ),
                p(r, v);
            };
            P(Vt, (r) => {
              (e(c) || e(J)) && r(Wt);
            });
          }
          d(S),
            b(
              S,
              (r) => t(me, r),
              () => e(me),
            ),
            B(() => {
              (ge = Pe(S, 1, "widget svelte-xybm77", null, ge, {
                unlocked: !e(I),
                expanded: e(c),
                leaving: e(h) === "leaving",
              })),
                (nt = Pe(be, 1, "item-label-wrap svelte-xybm77", null, nt, {
                  show: !!e(X),
                })),
                se(qt, e(X) ?? ""),
                Ie(
                  Y,
                  "title",
                  e(I) ? "Desbloquear para mover" : "Travar posição",
                );
            }),
            dt("click", Y, Lt),
            p(o, l);
        },
      ),
        p(a, s);
    };
    P(Ot, (a) => {
      e(h) !== "hidden" && a(Ct);
    });
  }
  p(_t, rt), Zt();
}
Yt(["click"]);
export { Fa as component };
