import { a as E, b as M } from "./DXITvGue.js";
import { p as S, t as k, g as R, w as U, Z as W, j as Z } from "./BYGgIge7.js";
import { b as z, s as D, c as F } from "./DfOSvqDi.js";
import { a as _, s as I, c as L, i as j, g as x } from "./miXHpl0f.js";
import { p as m } from "./BCrg8Att.js";
const H =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>',
  N =
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>';
var P = M(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"></svg>',
);
function Q(r, t) {
  S(t, !0);
  let h = m(t, "size", 3, 20),
    g = m(t, "filled", 3, !1),
    l = m(t, "class", 3, ""),
    d = W(() => D(g() ? N : H));
  var o = P();
  z(o, () => U(d), !0),
    Z(o),
    k(() => {
      _(o, "width", h()),
        _(o, "height", h()),
        I(o, 0, L(l())),
        F(o, t.color ? `color:${t.color}` : void 0);
    }),
    E(r, o),
    R();
}
async function V(r, t) {
  await j("plugin:opener|open_url", { url: r, with: t });
}
const X = "▛▜▟▙▞▚▗▖▘▝▐▕▋▌▍▎▏",
  A = new WeakMap();
function Y(r, t, h = {}) {
  var C;
  const {
    chars: g = `${t}${X}`,
    duration: l = 0.45,
    delay: d = 0,
    revealDelay: o = 0.1,
    scrambleColor: v,
    leadColor: u,
    leadChars: b = 2,
    onComplete: p,
    onInterrupt: B,
  } = h;
  (C = A.get(r)) == null || C.kill(), (r.textContent = "");
  const a = Array.from({ length: t.length }, (n, c) => {
    const e = document.createElement("span");
    (e.textContent = t[c]),
      (e.style.display = "inline-block"),
      (e.style.overflow = "hidden"),
      (e.style.textAlign = "center"),
      (e.style.whiteSpace = "pre"),
      (e.style.verticalAlign = "middle"),
      r.appendChild(e);
    const s = e.getBoundingClientRect().width;
    return (e.style.width = `${s}px`), e;
  });
  if (v) for (let n = 0; n < t.length; n++) a[n].style.color = v;
  const f = { p: 0 };
  let i = 0;
  const y = x.to(f, {
    p: 1,
    duration: l,
    delay: d,
    ease: "none",
    overwrite: !0,
    onUpdate() {
      const n = f.p * l,
        c = l > o ? x.utils.clamp(0, 1, (n - o) / (l - o)) : 1,
        e = Math.floor(c * t.length);
      for (let s = i; s < e; s++)
        (a[s].textContent = t[s]), (a[s].style.color = "");
      i = e;
      for (let s = i; s < t.length; s++)
        a[s].textContent = g[(Math.random() * g.length) | 0];
      if (u) {
        const s = Math.min(i + b, t.length);
        for (let w = i; w < s; w++) a[w].style.color = u;
      }
    },
    onComplete() {
      a.forEach((n, c) => {
        (n.textContent = t[c]), (n.style.color = "");
      }),
        p == null || p();
    },
    onInterrupt: B,
  });
  return A.set(r, y), y;
}
export { Q as X, V as o, Y as s };
