/* ============================================================
   MAIN JS — sixtrsh.com
   ============================================================ */

/* ── Theme Toggle ───────────────────────────────────────────── */
(function () {
  const html = document.documentElement;
  const btn  = document.getElementById("theme-toggle");

  // Load saved preference, fall back to system preference
  const saved  = localStorage.getItem("sixtrsh-theme");
  const system = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  const initial = saved || system;
  html.setAttribute("data-theme", initial);

  btn.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("sixtrsh-theme", next);
  });
})();

/* ── Custom Crosshair Cursor ────────────────────────────────── */
const cursor = document.getElementById("cursor");

if (window.matchMedia("(pointer: fine)").matches && cursor) {
  // Instant position — no lag on the crosshair itself
  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }, { passive: true });

  // Focus state on interactive elements
  const interactables = "a, button, .photo-item, .product-card, .video-card, input, textarea";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactables)) cursor.classList.add("is-hover");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactables)) cursor.classList.remove("is-hover");
  });

  // Click pulse — rotate 45° and scale down, then snap back
  document.addEventListener("mousedown", () => cursor.classList.add("is-click"));
  document.addEventListener("mouseup",   () => cursor.classList.remove("is-click"));
}

/* ── Nav: scroll state + mobile menu ───────────────────────── */
const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
});

navLinks.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    document.body.classList.remove("no-scroll");
  });
});

/* ── Active nav link on scroll ─────────────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navItems.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach((s) => sectionObserver.observe(s));

/* ── Build Photo Grid ───────────────────────────────────────── */
function buildPhotoGrid() {
  const grid = document.getElementById("photo-grid");
  PHOTOS.forEach((photo) => {
    const item = document.createElement("div");
    item.className = "photo-item" + (photo.span ? ` span-${photo.span}` : "");
    item.innerHTML = `
      <div class="photo-inner">
        <img
          src="${photo.src}"
          alt="${photo.alt}"
          loading="lazy"
          class="photo-img"
          onerror="this.closest('.photo-inner').classList.add('img-error')"
        />
        <div class="photo-overlay">
          <span class="photo-label">${photo.alt}</span>
        </div>
      </div>`;
    grid.appendChild(item);
  });
}

/* ── Build Video Grid ───────────────────────────────────────── */
function buildVideoGrid() {
  const grid = document.getElementById("video-grid");
  VIDEOS.forEach((video) => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.dataset.embed = video.embedUrl;
    card.innerHTML = `
      <div class="video-thumb-wrap">
        <img
          src="${video.thumb}"
          alt="${video.title}"
          loading="lazy"
          class="video-thumb"
          onerror="this.closest('.video-thumb-wrap').classList.add('img-error')"
        />
        <div class="video-play-btn" aria-label="Play video">
          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        </div>
        <span class="video-type-badge">${video.type}</span>
      </div>
      <p class="video-title">${video.title}</p>`;
    card.addEventListener("click", () => openLightbox(video.embedUrl));
    grid.appendChild(card);
  });
}

/* ── Build Product Grid ─────────────────────────────────────── */
function buildProductGrid() {
  const grid = document.getElementById("product-grid");
  PRODUCTS.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-img-wrap">
        <img
          src="${product.img}"
          alt="${product.title}"
          loading="lazy"
          class="product-img"
          onerror="this.closest('.product-img-wrap').classList.add('img-error')"
        />
        <span class="product-tag">${product.tag}</span>
      </div>
      <div class="product-body">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <a href="${product.buyUrl}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">Buy Now</a>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

/* ── Work Tab Toggle ────────────────────────────────────────── */
document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".toggle-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const tab = btn.dataset.tab;
    document.querySelectorAll(".work-panel").forEach((p) => {
      p.classList.toggle("hidden", !p.id.endsWith(tab));
    });
  });
});

/* ── Lightbox ───────────────────────────────────────────────── */
const lightbox = document.getElementById("lightbox");
const lightboxEmbed = document.getElementById("lightbox-embed");
const lightboxClose = document.getElementById("lightbox-close");

function openLightbox(embedUrl) {
  lightboxEmbed.innerHTML = `<iframe src="${embedUrl}?autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  lightbox.classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.classList.remove("no-scroll");
  // Stop video by clearing src
  setTimeout(() => { lightboxEmbed.innerHTML = ""; }, 300);
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

/* ── Scroll reveal ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

function observeReveal(selector) {
  document.querySelectorAll(selector).forEach((el) => revealObserver.observe(el));
}

/* ── Contact form ───────────────────────────────────────────── */
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = document.getElementById("submit-btn");
  btn.textContent = "Sent ✓";
  btn.disabled = true;
  // Wire to Formspree / Netlify Forms / EmailJS in production
  setTimeout(() => {
    btn.textContent = "Send Message";
    btn.disabled = false;
    e.target.reset();
  }, 4000);
});

/* ── Lazy-load fade-in ──────────────────────────────────────── */
function initImageFade() {
  document.querySelectorAll("img.photo-img, img.video-thumb, img.product-img").forEach((img) => {
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", () => img.classList.add("loaded"));
    }
  });
}

/* ── Init ───────────────────────────────────────────────────── */
buildPhotoGrid();
buildVideoGrid();
buildProductGrid();
initImageFade();

// Observe reveal elements after DOM is built
observeReveal(".photo-item, .video-card, .product-card, .service-row, .about-container, .contact-left, .contact-form");
