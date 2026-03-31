(function () {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const currentPage = document.body.getAttribute("data-page");

  if (nav && currentPage) {
    nav.querySelectorAll("a[data-link]").forEach((link) => {
      if (link.getAttribute("data-link") === currentPage) {
        link.classList.add("active");
      }
    });
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
  }

  const yearNode = document.querySelector("[data-year]");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  const revealTargets = document.querySelectorAll(".reveal");
  if (revealTargets.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    revealTargets.forEach((node) => observer.observe(node));
  } else {
    revealTargets.forEach((node) => node.classList.add("show"));
  }

  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    const status = document.querySelector("[data-contact-status]");
    const targetEmail = contactForm.getAttribute("data-email") || "";

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = String(contactForm.elements.name.value || "").trim();
      const email = String(contactForm.elements.email.value || "").trim();
      const subject = String(contactForm.elements.subject.value || "").trim();
      const message = String(contactForm.elements.message.value || "").trim();

      if (!name || !email || !message) {
        if (status) {
          status.textContent = "请先填写姓名、邮箱和正文。";
        }
        return;
      }

      const finalSubject = subject || "来自个人网站的新消息";
      const body = [
        "姓名: " + name,
        "邮箱: " + email,
        "",
        "留言内容:",
        message
      ].join("\n");

      const url =
        "mailto:" +
        encodeURIComponent(targetEmail) +
        "?subject=" +
        encodeURIComponent(finalSubject) +
        "&body=" +
        encodeURIComponent(body);

      window.location.href = url;
      if (status) {
        status.textContent = "已为你打开邮箱客户端，请确认并发送。";
      }
    });
  }

  const copyBtn = document.querySelector("[data-copy-email]");
  if (copyBtn) {
    copyBtn.addEventListener("click", async function () {
      const email = copyBtn.getAttribute("data-copy-email") || "";
      const status = document.querySelector("[data-contact-status]");

      try {
        await navigator.clipboard.writeText(email);
        if (status) {
          status.textContent = "邮箱地址已复制到剪贴板。";
        }
      } catch (_) {
        if (status) {
          status.textContent = "复制失败，请手动复制邮箱。";
        }
      }
    });
  }
})();
