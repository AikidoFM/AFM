(() => {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#nav");

  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  // Ferme le menu si on clique un lien (mobile)
  nav.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.matches && t.matches("a.nav__link")) {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
})();
