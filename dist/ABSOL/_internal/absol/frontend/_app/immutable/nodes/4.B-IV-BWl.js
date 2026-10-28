import { a as I, f as N } from "../chunks/DXITvGue.js";
import { o as V, a as Q } from "../chunks/zmacCIoP.js";
import {
  p as $,
  t as F,
  g as G,
  k as p,
  w as t,
  x as E,
  y as X,
  i as d,
  j as u,
} from "../chunks/BYGgIge7.js";
import { d as J, a as b, s as q } from "../chunks/D6JgBVoW.js";
import { a as K, h as Y } from "../chunks/DfOSvqDi.js";
import { i as Z, l as ee, s as B, g as f } from "../chunks/miXHpl0f.js";
import { b as C } from "../chunks/DdrE9EQ-.js";
import { g as ae } from "../chunks/BloJ8z93.js";
import { X as te, o as se, s as oe } from "../chunks/Bh1kG0_E.js";
import { U as ie } from "../chunks/5muZMSkm.js";
var re = N(
  '<div role="button" tabindex="0"><div class="accent svelte-16p9alo"></div> <div class="body svelte-16p9alo"><img src="/logo.svg" alt="" class="logo svelte-16p9alo"/> <span class="title svelte-16p9alo"></span> <span> </span> <span class="cta svelte-16p9alo"> </span></div> <button class="close svelte-16p9alo" aria-label="Dispensar"><!></button></div>',
);
function he(D, H) {
  $(H, !0);
  const _ = ae(),
    P = 2e4;
  let n = E(!0),
    s = E(!1),
    a,
    l,
    m;
  const U = "!<>-_\\/[]{}—=+*^?#";
  function j(e) {
    if (!l) return;
    const r = t(s)
      ? "Partida não registrada"
      : t(n)
        ? "Partida sincronizada"
        : "Sincronização pendente";
    e && t(n)
      ? oe(l, r, {
          chars: U,
          scrambleColor: "var(--lose)",
          leadColor: "var(--lime)",
          leadChars: 2,
          duration: 1,
          revealDelay: 0,
        })
      : (l.textContent = r);
  }
  let o, v;
  function z() {
    o && clearTimeout(o), (o = setTimeout(g, P));
  }
  function L() {
    m && f.to(m, { rotate: 180, duration: 0.25, ease: "power2.out" }), g();
  }
  function x() {
    if (t(s)) {
      se(`${ie}/#assinar`), g();
      return;
    }
    Z("show_main_window"), g();
  }
  function M() {
    a &&
      ((a.style.willChange = "transform"),
      f.fromTo(
        a,
        { scaleX: 0.85, x: 8, opacity: 0 },
        {
          scaleX: 1,
          x: 0,
          opacity: 1,
          duration: 0.32,
          ease: "back.out(1.4)",
          clearProps: "transform",
          onComplete: () => {
            a && (a.style.willChange = "auto");
          },
        },
      ));
  }
  function g() {
    if ((o && clearTimeout(o), !a)) {
      _.hide();
      return;
    }
    (a.style.willChange = "transform, opacity"),
      f.to(a, {
        opacity: 0,
        scaleX: 0.85,
        x: 8,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          a && (a.style.willChange = "auto"), _.hide();
        },
      });
  }
  V(async () => {
    v = await ee("absol://match-imported", async ({ payload: e }) => {
      X(n, (e == null ? void 0 : e.synced) !== !1),
        X(s, (e == null ? void 0 : e.reason) === "no_quota");
      const r = await _.isVisible();
      a && (f.killTweensOf(a), f.set(a, { opacity: 1, scaleX: 1, x: 0 })),
        j(r),
        r || M(),
        z();
    });
  }),
    Q(() => {
      v == null || v(), o && clearTimeout(o);
    });
  var i = re();
  let y;
  var w = p(d(i), 2),
    S = p(d(w), 2);
  C(
    S,
    (e) => (l = e),
    () => l,
  );
  var h = p(S, 2);
  let k;
  var O = d(h, !0);
  u(h);
  var T = p(h, 2),
    R = d(T, !0);
  u(T), u(w);
  var c = p(w, 2),
    W = d(c);
  te(W, { size: 16 }),
    u(c),
    C(
      c,
      (e) => (m = e),
      () => m,
    ),
    K(
      c,
      (e, r) => {
        var A;
        return (A = Y) == null ? void 0 : A(e, r);
      },
      () => ({ scale: 1.1, pressScale: 0.9 }),
    ),
    u(i),
    C(
      i,
      (e) => (a = e),
      () => a,
    ),
    F(() => {
      (y = B(i, 1, "toast svelte-16p9alo", null, y, {
        failed: !t(n) && !t(s),
        quota: t(s),
      })),
        (k = B(h, 1, "detail svelte-16p9alo", null, k, {
          "hidden-detail": t(n),
        })),
        q(
          O,
          t(s)
            ? "Sua partida grátis de hoje já foi usada"
            : "Não consegui buscar os dados da partida recente",
        ),
        q(
          R,
          t(s)
            ? "Clique para assinar e continuar evoluindo"
            : "Clique para abrir o ABSOL",
        );
    }),
    b("click", i, x),
    b("keydown", i, (e) => {
      e.key === "Enter" && x();
    }),
    b("click", c, (e) => {
      e.stopPropagation(), L();
    }),
    I(D, i),
    G();
}
J(["click", "keydown"]);
export { he as component };
