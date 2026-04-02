(function () {
  const content = document.getElementById("content");
  const menuBtn = document.querySelector("[data-toggle='wy-nav-top']");
  const tocLinks = [...document.querySelectorAll("#toc a[href^='#']")];
  const yearNode = document.querySelector("[data-year]");
  const linksById = new Map(
    tocLinks
      .map((link) => [link.hash.slice(1), link])
      .filter(([id]) => id)
  );

  const clearActive = () =>
    linksById.forEach((link) => link.parentElement?.classList.remove("active"));

  const setActiveById = (id) => {
    const link = linksById.get(id);
    if (!link) return;
    clearActive();
    link.parentElement?.classList.add("active");
  };

  const closeMenu = () => content?.classList.remove("shift");

  const onMenuToggle = (event) => {
    event.preventDefault();
    content?.classList.toggle("shift");
  };

  const onLinkClick = (event) => {
    const { hash } = event.currentTarget;
    if (!hash) return;
    const section = document.querySelector(hash);
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", hash);
    setActiveById(hash.slice(1));
    closeMenu();
  };

  const initScrollSpy = () => {
    const sections = [...linksById.keys()]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;
    if (!("IntersectionObserver" in window)) {
      setActiveById(sections[0].id);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const topVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (topVisible) setActiveById(topVisible.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
  };

  if (yearNode) yearNode.textContent = String(new Date().getFullYear());
  setActiveById(window.location.hash.slice(1) || linksById.keys().next().value);
  initScrollSpy();

  if (menuBtn) menuBtn.addEventListener("click", onMenuToggle);
  tocLinks.forEach((link) => link.addEventListener("click", onLinkClick));
})();
