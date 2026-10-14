(function () {
  "use strict";
  var S = window.SITE, $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var HOVER = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  var wa = function (t) { return "https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(t || S.waText); };
  var im = function (id, w, alt) { return '<img src="' + S.img(id, w) + '" alt="' + alt + '" loading="lazy" onerror="this.style.display=\'none\'">'; };
  var logo = '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="2" y="2" width="36" height="36"/><path d="M10 31 20 9l10 22M14.5 22h11"/><path d="M20 9v-4" stroke="#B79B6A"/></svg>';
  var cur = location.pathname.split("/").pop() || "index.html";
  var nav = [["index.html", "Home"], ["about.html", "About"], ["services.html", "Services"], ["gallery.html", "Gallery"], ["contact.html", "Contact"]];
  var brand = '<a class="brand" href="index.html" aria-label="' + S.brand + ' ' + S.brandSub + ' home">' + logo + '<span><b>' + S.brand + '</b><small>' + S.brandSub + '</small></span></a>';

  /* header + footer */
  var light = document.body.dataset.header === "light";
  var h = $("#site-header");
  if (h) {
    h.className = "site-header" + (light ? " light" : "");
    h.innerHTML = '<nav class="navbar navbar-expand-lg"><div class="container">' + brand +
      '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle menu"><i class="fa-solid fa-bars"></i></button>' +
      '<div class="collapse navbar-collapse justify-content-end" id="mainNav"><ul class="navbar-nav align-items-lg-center">' +
      nav.map(function (n) { return '<li><a class="nav-link' + (n[0] === cur ? ' active" aria-current="page' : '') + '" href="' + n[0] + '">' + n[1] + '</a></li>'; }).join("") +
      '<li class="mt-2 mt-lg-0"><a class="btn-a btn-sm magnetic" href="contact.html">Free Consultation <i class="fa-solid fa-arrow-right"></i></a></li></ul></div></div></nav>';
    var onS = function () { h.classList.toggle("solid", scrollY > 40); var t = $(".totop"); if (t) t.classList.toggle("show", scrollY > 600); };
    addEventListener("scroll", onS, { passive: true }); onS();
  }
  var f = $("#site-footer");
  if (f) {
    f.innerHTML = '<div class="container"><div class="row g-4"><div class="col-lg-4">' + brand + '<p class="mt-3">' + S.tagline + '</p><div class="soc">' +
      [["instagram", "Instagram"], ["facebook-f", "Facebook"], ["pinterest-p", "Pinterest"], ["linkedin-in", "LinkedIn"]].map(function (x) { return '<a href="' + S.social[x[0].replace(/-f|-p|-in/, "")] + '" target="_blank" rel="noopener" aria-label="' + x[1] + '"><i class="fa-brands fa-' + x[0] + '"></i></a>'; }).join("") +
      '</div></div><div class="col-6 col-lg-2"><h5>Explore</h5><ul>' + nav.map(function (n) { return '<li><a href="' + n[0] + '">' + n[1] + '</a></li>'; }).join("") +
      '</ul></div><div class="col-6 col-lg-2"><h5>Services</h5><ul><li><a href="services.html">Residential</a></li><li><a href="services.html">Kitchens</a></li><li><a href="services.html">Commercial</a></li><li><a href="services.html">Styling</a></li></ul></div>' +
      '<div class="col-lg-4"><h5>Contact</h5><ul><li><i class="fa-solid fa-phone"></i> <a href="tel:' + S.phone.replace(/\s/g, "") + '">' + S.phone + '</a></li><li><i class="fa-solid fa-envelope"></i> <a href="mailto:' + S.email + '">' + S.email + '</a></li><li><i class="fa-solid fa-location-dot"></i> ' + S.address + '</li></ul></div></div>' +
      '<div class="copy d-flex flex-wrap justify-content-between gap-2"><span>&copy; ' + new Date().getFullYear() + ' ' + S.brand + ' ' + S.brandSub + '. All rights reserved.</span><span>' + S.hours + '</span></div></div>' +
      '<button class="totop" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button><a class="wa-fab" aria-label="Chat on WhatsApp" href="' + wa() + '" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i></a>';
    $(".totop").onclick = function () { scrollTo({ top: 0, behavior: RM ? "auto" : "smooth" }); };
  }

  /* data renders */
  var card = function (p, k) {
    return '<a class="pcard zoom ' + (p.s || "") + '" data-cat="' + p.c + '" data-i="' + k + '" href="gallery.html" aria-label="' + p.t + '"><div class="ph">' + im(p.i, 900, p.t + " - " + p.l + " interior") + '</div><span class="arr"><i class="fa-solid fa-arrow-right"></i></span><div class="cap"><small>' + p.l + '</small><h3>' + p.t + '</h3></div></a>';
  };
  var r = $('[data-render="projects"]'); if (r) r.innerHTML = S.projects.slice(0, 3).map(card).join("");
  r = $('[data-render="gallery"]'); if (r) r.innerHTML = S.projects.map(card).join("");
  r = $('[data-render="services-cards"]');
  if (r) r.innerHTML = S.services.slice(0, 4).map(function (s) { return '<div class="col-sm-6 col-lg-3" data-reveal><div class="scard"><b class="sn">' + "0" + (S.services.indexOf(s) + 1) + '</b><i class="fa-solid ' + s[3] + ' ic"></i><h3>' + s[0] + '</h3><p>' + s[1] + '</p><a class="lnk" href="services.html">Details <i class="fa-solid fa-arrow-right"></i></a></div></div>'; }).join("");
  r = $('[data-render="services-list"]');
  if (r) r.innerHTML = '<div class="row g-3">' + S.services.map(function (s, k) {
    return '<div class="col-sm-6 col-lg-3" data-reveal><article class="svc v' + (k % 4) + '" id="s' + (k + 1) + '"><div class="ph zoom">' + im(s[2], 700, s[0] + " interior design") + '<span class="num">0' + (k + 1) + '</span></div><div class="sb"><i class="fa-solid ' + s[3] + '"></i><h3>' + s[0] + '</h3><p>' + s[1] + '</p><a class="lnk" href="' + wa("Hello, I would like to enquire about: " + s[0]) + '" target="_blank" rel="noopener">Enquire <i class="fa-solid fa-arrow-right"></i></a></div></article></div>';
  }).join("") + '</div>';
  r = $('[data-render="stats"]');
  if (r) r.innerHTML = S.stats.map(function (s) { return '<div class="col-6 col-md-3 stat" data-reveal><b><span data-count="' + s[0] + '">0</span>' + s[1] + '</b><span>' + s[2] + '</span></div>'; }).join("");
  r = $('[data-render="testimonials"]');
  if (r) { var tc = S.testimonials.map(function (t) { return '<figure class="tcard"><i class="fa-solid fa-quote-left"></i><blockquote>' + t[0] + '</blockquote><figcaption><strong>' + t[1] + '</strong><span>' + t[2] + '</span></figcaption></figure>'; }).join(""); r.innerHTML = '<div class="marq"><div class="mtrack">' + tc + tc + '</div></div>'; }
  r = $('[data-render="team"]');
  if (r) r.innerHTML = S.team.map(function (m) { return '<div class="col-6 col-lg-3" data-reveal><div class="member"><div class="ph">' + im(m[2], 600, m[1] + " portrait") + '<div class="mso"><i class="fa-brands fa-linkedin-in"></i><i class="fa-brands fa-instagram"></i></div></div><h4>' + m[0] + '</h4><small>' + m[1] + '</small></div></div>'; }).join("");
  $$("[data-wa]").forEach(function (a) { a.href = wa(); a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-img]").forEach(function (el) { el.insertAdjacentHTML("afterbegin", im(el.dataset.img, +el.dataset.w || 1000, el.dataset.alt || "Interior design")); });
  $$("[data-hero]").forEach(function (el) {
    var v = S.heroVideo && el.hasAttribute("data-video") ? '<video autoplay muted loop playsinline preload="metadata" poster="' + S.img(el.dataset.hero, 1600) + '"' + (RM ? " hidden" : "") + '><source src="' + S.heroVideo + '" type="video/mp4"></video>' : "";
    el.innerHTML = '<img src="' + S.img(el.dataset.hero, 1600) + '" alt="' + (el.dataset.alt || "") + '" fetchpriority="high" onerror="this.style.display=\'none\'">' + v;
    var vid = $("video", el); if (vid) vid.addEventListener("error", function () { vid.remove(); });
  });

  /* gallery filter + lightbox */
  var gal = $("#gallery");
  if (gal) {
    var items = $$(".pcard", gal);
    $$(".filters button").forEach(function (b) {
      b.onclick = function () {
        $$(".filters button").forEach(function (x) { x.classList.remove("on"); x.setAttribute("aria-pressed", "false"); });
        b.classList.add("on"); b.setAttribute("aria-pressed", "true");
        var c = b.dataset.f;
        items.forEach(function (it) { it.classList.add("fade"); });
        setTimeout(function () { items.forEach(function (it) { var show = c === "all" || it.dataset.cat === c; it.classList.toggle("hide", !show); if (show) requestAnimationFrame(function () { it.classList.remove("fade"); }); }); }, RM ? 0 : 280);
      };
    });
    var lb = $("#lb"), idx = 0;
    var vis = function () { return items.filter(function (i) { return !i.classList.contains("hide"); }); };
    var show = function (n) { var v = vis(); idx = (n + v.length) % v.length; var p = S.projects[v[idx].dataset.i]; $("img", lb).src = S.img(p.i, 1600); $("img", lb).alt = p.t; $("figcaption", lb).textContent = p.t + " - " + p.l; };
    items.forEach(function (it) { it.addEventListener("click", function (e) { e.preventDefault(); idx = vis().indexOf(it); lb.classList.add("open"); show(idx); $(".x", lb).focus(); }); });
    var close = function () { lb.classList.remove("open"); };
    $(".x", lb).onclick = close; $(".pv", lb).onclick = function () { show(idx - 1); }; $(".nx", lb).onclick = function () { show(idx + 1); };
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) { if (!lb.classList.contains("open")) return; if (e.key === "Escape") close(); if (e.key === "ArrowLeft") show(idx - 1); if (e.key === "ArrowRight") show(idx + 1); });
  }

  /* before/after */
  $$(".ba").forEach(function (b) { var i = $("input", b); i.addEventListener("input", function () { $(".before", b).style.clipPath = "inset(0 " + (100 - i.value) + "% 0 0)"; $(".bar", b).style.left = i.value + "%"; }); });

  /* contact form */
  var form = $("#enquiry");
  if (form) {
    var note = $("#form-note"), say = function (m, bad) { note.textContent = m; note.className = "note show" + (bad ? " bad" : ""); };
    var rules = { name: function (v) { return v.trim().length > 1 || "Please enter your name."; }, email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || "Please enter a valid email address."; }, phone: function (v) { return /^[+\d][\d\s-]{7,15}$/.test(v.trim()) || "Please enter a valid phone number."; }, type: function (v) { return !!v || "Please choose a project type."; }, message: function (v) { return v.trim().length > 9 || "Please tell us a little about your project (10+ characters)."; } };
    var check = function (el) { var res = rules[el.name] ? rules[el.name](el.value) : true, ok = res === true; el.classList.toggle("is-invalid", !ok); el.setAttribute("aria-invalid", !ok); var e = el.parentNode.querySelector(".err"); if (e) e.textContent = ok ? "" : res; return ok; };
    $$("input,select,textarea", form).forEach(function (el) { el.addEventListener("blur", function () { check(el); }); });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = $$("input,select,textarea", form).map(check).every(Boolean);
      if (!ok) { say("Please correct the highlighted fields.", true); var b = $(".is-invalid", form); if (b) b.focus(); return; }
      var d = {}; $$("input,select,textarea", form).forEach(function (el) { d[el.name] = el.value; });
      if (S.formEndpoint) {
        fetch(S.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) })
          .then(function (res) { if (!res.ok) throw 0; form.reset(); say("Thank you - your enquiry has been sent. We will get back to you soon."); })
          .catch(function () { say("Sorry, we could not send your enquiry. Please try again or contact us on WhatsApp.", true); });
      } else {
        var msg = "Hello, I am " + d.name + ". Project: " + d.type + (d.budget ? ", budget: " + d.budget : "") + ". Phone: " + d.phone + ", email: " + d.email + ". " + d.message;
        say("Your enquiry is ready. WhatsApp will open so you can send it to us - nothing is sent until you press send there.");
        window.open(wa(msg), "_blank", "noopener");
      }
    });
  }

  /* animations */
  var plain = function () { $$("[data-count]").forEach(function (c) { c.textContent = c.dataset.count; }); };
  if (RM || !window.gsap || !window.ScrollTrigger) { plain(); return; }
  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  if ($(".hero")) {
    tl.from(".hero-bg img", { scale: 1.15, duration: 1.8, ease: "power2.out" }, 0).from(".hero .eyebrow", { opacity: 0, y: 16, duration: .7 }, .2)
      .from(".hero h1 .ln", { yPercent: 110, opacity: 0, duration: 1, stagger: .12 }, .3).from(".hero p, .hero .lead-row", { opacity: 0, y: 20, duration: .8, stagger: .12 }, .9);
  } else if ($(".page-hero")) {
    tl.from(".page-hero .crumb, .page-hero h1, .page-hero p", { opacity: 0, y: 24, duration: .8, stagger: .12 }).from(".page-hero .ph-bg img", { scale: 1.15, duration: 1.6, ease: "power2.out" }, 0);
  }
  gsap.set("[data-reveal]", { opacity: 0, y: 26 });
  ScrollTrigger.batch("[data-reveal]", { start: "top 90%", once: true, onEnter: function (el) { gsap.to(el, { opacity: 1, y: 0, duration: .8, stagger: .1, ease: "power3.out" }); } });
  gsap.set(".proj-grid .pcard,.gal .pcard", { opacity: 0, y: 30 });
  ScrollTrigger.batch(".proj-grid .pcard,.gal .pcard", { start: "top 92%", once: true, onEnter: function (el) { gsap.to(el, { opacity: 1, y: 0, duration: .8, stagger: .09, ease: "power3.out" }); } });
  $$("[data-mask]").forEach(function (el) { gsap.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }); });
  $$("[data-parallax]").forEach(function (el) { gsap.to($("img", el) || el, { yPercent: 12, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } }); });
  $$("[data-count]").forEach(function (c) { var o = { v: 0 }; ScrollTrigger.create({ trigger: c, start: "top 92%", once: true, onEnter: function () { gsap.to(o, { v: +c.dataset.count, duration: 1.8, ease: "power2.out", onUpdate: function () { c.textContent = Math.round(o.v); } }); } }); });
  if (HOVER) {
    $$(".magnetic").forEach(function (b) {
      b.addEventListener("pointermove", function (e) { var q = b.getBoundingClientRect(); gsap.to(b, { x: (e.clientX - q.left - q.width / 2) * .18, y: (e.clientY - q.top - q.height / 2) * .25, duration: .3 }); });
      b.addEventListener("pointerleave", function () { gsap.to(b, { x: 0, y: 0, duration: .5, ease: "elastic.out(1,.6)" }); });
    });
    $$(".layer").forEach(function (l) { l.addEventListener("pointermove", function (e) { var q = l.getBoundingClientRect(), x = (e.clientX - q.left) / q.width - .5, y = (e.clientY - q.top) / q.height - .5; gsap.to($(".b", l), { x: x * 16, y: y * 16, duration: .6 }); }); });
  }
  $$(".tilt").forEach(function (t) { if (!HOVER) return; t.addEventListener("pointermove", function (e) { var q = t.getBoundingClientRect(), x = (e.clientX - q.left) / q.width - .5, y = (e.clientY - q.top) / q.height - .5; gsap.to(t, { rotationY: x * 8, rotationX: -y * 8, transformPerspective: 800, duration: .5 }); }); t.addEventListener("pointerleave", function () { gsap.to(t, { rotationX: 0, rotationY: 0, duration: .7 }); }); });
  $$(".float").forEach(function (el, i) { gsap.to(el, { y: -10, duration: 2.2 + i * .4, yoyo: true, repeat: -1, ease: "sine.inOut" }); });
  addEventListener("load", function () { ScrollTrigger.refresh(); });
})();

/* scroll progress bar */
(function () {
  "use strict";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { return; }
  var bar = document.createElement("div");
  bar.className = "scroll-progress"; bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  var busy = false;
  function upd() { var h = document.documentElement.scrollHeight - innerHeight; bar.style.transform = "scaleX(" + (h > 0 ? Math.min(1, scrollY / h) : 0) + ")"; busy = false; }
  addEventListener("scroll", function () { if (!busy) { busy = true; requestAnimationFrame(upd); } }, { passive: true });
  upd();
})();
