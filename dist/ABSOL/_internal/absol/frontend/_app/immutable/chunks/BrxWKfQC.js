import { g as i, i as l } from "./miXHpl0f.js";
const u = 0.3,
  f = "Modo de jogo não suportado";
function h(o, t) {
  return (
    i.set(o, { scaleX: 0, transformOrigin: "left center" }),
    i.set(t, { scaleX: 0, transformOrigin: "left center" }),
    i
      .timeline({ delay: u })
      .to(o, { scaleX: 1, duration: 0.22, ease: "power2.out" })
      .to(t, { scaleX: 1, duration: 0.4, ease: "power2.out" }, "<0.08")
      .set(o, { transformOrigin: "right center" })
      .to(o, { scaleX: 0, duration: 0.22, ease: "power2.in" }, ">0.06")
      .set(t, { transformOrigin: "right center" })
      .to(t, { scaleX: 0, duration: 0.4, ease: "power2.in" }, ">0.12")
  );
}
function y(o, t) {
  var e;
  o &&
    ((e = t.tl) == null || e.kill(),
    (t.tl = void 0),
    i.fromTo(
      o,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
        onComplete: () => {
          (t.tl = i.timeline({ repeat: -1, repeatDelay: 0.7 })),
            t.tl
              .to(o, { y: -3, scale: 1.06, duration: 0.1, ease: "power2.out" })
              .to(o, { y: 0, scale: 1, duration: 0.1, ease: "power2.in" })
              .to(o, { y: -2, scale: 1.04, duration: 0.08, ease: "power2.out" })
              .to(o, { y: 0, scale: 1, duration: 0.08, ease: "power2.in" })
              .to(o, { y: -4, scale: 1.08, duration: 0.12, ease: "power2.out" })
              .to(o, { y: 0, scale: 1, duration: 0.14, ease: "power2.in" });
        },
      },
    ));
}
function g(o, t) {
  let e;
  return {
    schedule() {
      e && clearTimeout(e),
        (e = setTimeout(() => {
          const a = o();
          a &&
            i.to(a, {
              backgroundColor: t,
              duration: 1.2,
              ease: "power2.inOut",
            });
        }, 5e3));
    },
    cancel() {
      e && (clearTimeout(e), (e = void 0));
    },
  };
}
async function w(o, t, e) {
  if ((localStorage.setItem(`${e}_locked`, String(t)), t)) {
    const a = await o.outerPosition();
    localStorage.setItem(`${e}_pos`, JSON.stringify({ x: a.x, y: a.y }));
  }
}
const r = 6;
function d(o) {
  if (!o) return null;
  const t = o.getBoundingClientRect();
  if (t.width <= 0 || t.height <= 0) return null;
  const e = window.devicePixelRatio || 1;
  return {
    x: (t.left - r) * e,
    y: (t.top - r) * e,
    width: (t.width + r * 2) * e,
    height: (t.height + r * 2) * e,
  };
}
function m(o) {
  let t = "",
    e;
  async function a(n) {
    const s = { enabled: n, hotspot: n ? d(o()) : null },
      c = JSON.stringify(s);
    if (c !== t) {
      t = c;
      try {
        await l("set_overlay_click_through", s);
      } catch {
        t = "";
      }
    }
  }
  return {
    sync: a,
    start(n) {
      e && clearInterval(e), (e = setInterval(() => void a(n()), 300));
    },
    stop() {
      e && clearInterval(e), (e = void 0);
    },
  };
}
export { f as U, y as a, h as b, m as c, g as d, w as p };
