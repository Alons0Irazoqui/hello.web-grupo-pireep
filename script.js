(function () {
  const WA_NUMBER = "524722453157";
  document.body.classList.add("loading");

  const loader = document.getElementById("loader");
  const started = performance.now();
  const hideLoader = () => {
    const elapsed = performance.now() - started;
    const wait = Math.max(0, 1450 - elapsed);
    window.setTimeout(() => {
      loader?.classList.add("is-hidden");
      document.body.classList.remove("loading");
    }, wait);
  };
  if (document.readyState === "complete") hideLoader();
  else window.addEventListener("load", hideLoader, { once: true });

  const nav = document.getElementById("nav");
  const ham = document.getElementById("ham");
  const mob = document.getElementById("mob");
  ham?.addEventListener("click", () => {
    const open = !mob.classList.contains("is-open");
    mob.classList.toggle("is-open", open);
    ham.classList.toggle("is-active", open);
    ham.setAttribute("aria-expanded", String(open));
  });
  mob?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mob.classList.remove("is-open");
      ham?.classList.remove("is-active");
      ham?.setAttribute("aria-expanded", "false");
    });
  });

  let lastY = window.scrollY;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (nav) nav.style.transform = y > lastY && y > 220 ? "translateY(-116px)" : "translateY(0)";
    lastY = y;
    document.querySelectorAll(".hero-bg, .why-bg, .numbers-bg, .contact-info-bg").forEach((el) => {
      const rect = el.parentElement.getBoundingClientRect();
      const movement = Math.max(-34, Math.min(34, rect.top * -0.04));
      el.style.setProperty("--parallax", `${movement}px`);
    });
  }, { passive: true });

  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".rev").forEach((el) => reveal.observe(el));

  const words = [
    "plantas alimenticias",
    "farmacéuticas",
    "bodegas",
    "cuartos frios",
    "áreas de producción",
    "áreas sanitarias"
  ];
  const tw = document.getElementById("twText");
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  function typeLoop() {
    if (!tw) return;
    const current = words[wordIndex];
    tw.textContent = current.slice(0, charIndex);
    if (!deleting && charIndex < current.length) charIndex += 1;
    else if (deleting && charIndex > 0) charIndex -= 1;
    else if (!deleting) deleting = true;
    else {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
    const delay = deleting ? 36 : 78;
    window.setTimeout(typeLoop, !deleting && charIndex === current.length ? 1250 : delay);
  }
  typeLoop();

  const counted = new WeakSet();
  function animateNumber(el) {
    if (counted.has(el)) return;
    counted.add(el);
    const target = Number(el.dataset.count || el.dataset.heroCount || 0);
    if (!target) return;
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    const duration = 1100;
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) animateNumber(entry.target);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-count], [data-hero-count]").forEach((el) => countObserver.observe(el));

  function particles(canvas, options) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const color = options.color || "rgba(212,212,210,.55)";
    const accent = options.accent || "rgba(205,9,10,.52)";
    let width = 0;
    let height = 0;
    let dots = [];
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.6);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = width < 760 ? options.mobileCount : options.count;
      dots = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - .5) * options.speed,
        vy: (Math.random() - .5) * options.speed,
        r: Math.random() * 1.5 + .6,
        accent: i % 7 === 0
      }));
    }

    function frame() {
      ctx.clearRect(0, 0, width, height);
      dots.forEach((dot, i) => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = dot.accent ? accent : color;
        ctx.fill();
        for (let j = i + 1; j < dots.length; j++) {
          const other = dots[j];
          const dx = dot.x - other.x;
          const dy = dot.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < options.link) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = dot.accent || other.accent ? "rgba(205,9,10,.18)" : "rgba(212,212,210,.11)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
      if (!media.matches) requestAnimationFrame(frame);
    }

    resize();
    frame();
    window.addEventListener("resize", resize);
  }

  particles(document.getElementById("pcanvas"), { count: 86, mobileCount: 38, speed: .28, link: 118 });
  particles(document.getElementById("pcanvasWhy"), { count: 62, mobileCount: 28, speed: .22, link: 106, color: "rgba(255,255,255,.42)" });
  particles(document.getElementById("pcanvasGaleria"), { count: 72, mobileCount: 32, speed: .24, link: 112, accent: "rgba(39,100,147,.45)" });

  const form = document.getElementById("cForm");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("fn");
    const phone = document.getElementById("ft");
    const service = document.getElementById("fs");
    const message = document.getElementById("fm");
    const required = [name, phone, service];
    let valid = true;
    required.forEach((field) => {
      const ok = field.value.trim().length > 0;
      field.classList.toggle("is-invalid", !ok);
      valid = valid && ok;
    });
    if (!valid) {
      required.find((field) => !field.value.trim())?.focus();
      return;
    }
    const text = [
      "Hola Grupo PIREEP, quiero solicitar una cotización.",
      `Nombre: ${name.value.trim()}`,
      `Teléfono: ${phone.value.trim()}`,
      `Servicio: ${service.value}`,
      `Mensaje: ${message.value.trim() || "Sin mensaje adicional"}`
    ].join("\n");
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    form.reset();
  });
})();
