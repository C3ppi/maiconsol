import {
  m,
  ar as _,
  X as i,
  u as h,
  as as k,
  W as l,
  w as g,
  at as b,
  R as v,
} from "./BYGgIge7.js";
import { s as x, p as c } from "./01emwyd4.js";
function R(r = !1) {
  const t = m,
    e = t.l.u;
  if (!e) return;
  let o = () => b(t.s);
  if (r) {
    let n = 0,
      s = {};
    const d = v(() => {
      let u = !1;
      const f = t.s;
      for (const a in f) f[a] !== s[a] && ((s[a] = f[a]), (u = !0));
      return u && n++, n;
    });
    o = () => g(d);
  }
  e.b.length &&
    _(() => {
      p(t, o), l(e.b);
    }),
    i(() => {
      const n = h(() => e.m.map(k));
      return () => {
        for (const s of n) typeof s == "function" && s();
      };
    }),
    e.a.length &&
      i(() => {
        p(t, o), l(e.a);
      });
}
function p(r, t) {
  if (r.l.s) for (const e of r.l.s) g(e);
  t();
}
const y = {
  get error() {
    return c.error;
  },
  get status() {
    return c.status;
  },
  get url() {
    return c.url;
  },
};
x.updated.check;
const W = y;
export { R as i, W as p };
