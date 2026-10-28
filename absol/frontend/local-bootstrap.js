/* ABSOL — MODO LOCAL (sem login, sem servidor).
   1) cria uma sessão local "PRO" no localStorage (o app original exigia login em absol.lol);
   2) intercepta chamadas à API do servidor e responde localmente (vazio/ativo) em vez de falhar. */
(function () {
  try {
    var raw = localStorage.getItem("absol_session"), ok = false;
    try { var t = JSON.parse(raw); ok = !!(t && t.expiresAt > Date.now()); } catch (e) {}
    if (!ok) {
      localStorage.setItem("absol_session", JSON.stringify({
        token: "local",
        user: { email: "local@absol", tag: "", role: "", plan: "PRO", subscriptionStatus: "active", subscriptionPlan: "local",
                createdAt: "N/A", expiresSub: "N/A", freeDailyRemaining: 1, freeMatchInUse: false },
        expiresAt: Date.now() + 3650 * 24 * 3600 * 1000
      }));
    }
  } catch (e) {}
  var orig = window.fetch.bind(window);
  var api = /^(https:\/\/absol\.(lol|stagespun\.dev)|http:\/\/localhost:3000)\/api\//;
  var user = { token: "local", email: "local@absol", riot_id: "", main_role: "", subscription_status: "active", subscription_plan: "local",
               subscription_expires_at: "", created_at: "N/A", free_daily_remaining: 1, free_match_in_use: false };
  function json(body, status) { return Promise.resolve(new Response(JSON.stringify(body), { status: status || 200, headers: { "Content-Type": "application/json" } })); }
  window.fetch = function (input, init) {
    var url = typeof input === "string" ? input : (input && input.url) || "";
    if (!api.test(url)) return orig(input, init);
    var path = url.replace(api, "/api/").split("?")[0];
    if (path.indexOf("/api/auth/app/") === 0 || path === "/api/app/user/status") return json(user);
    if (path === "/api/app/match-v2") return json({ matches: { items: [] } });
    if (path === "/api/app/achievements/me") return json({ achievements: [] });
    if (path === "/api/app/user/notifications") return json({ notifications: [] });
    return json({ error: "modo local: sem servidor" }, 404);
  };
})();
