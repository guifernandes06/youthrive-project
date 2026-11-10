// youTHrive Malta - shared behaviour
(function () {
  const headerFallback = `
<header class="site-header" id="site-header">
  <div class="container header-container">
    <a class="logo brand" href="home.html" aria-label="youTHrive Malta home">
      <img src="../../public/images/youthrive-high-resolution-logo.png" alt="youTHrive Malta Logo" />
      <span>youTHrive Malta</span>
    </a>
    <nav class="site-nav" aria-label="Main navigation">
      <ul class="nav-menu" id="primary-menu">
        <li><a href="home.html">Home</a></li>
        <li><a href="about-us.html">About</a></li>
        <li><a href="our-work.html">Our Work</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="training.html">Training</a></li>
        <li><a href="news.html">News</a></li>
        <li><a href="Impact.html">Impact</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
    <a class="header-cta" href="get-involved.html">Get Involved</a>
    <button class="mobile-menu-toggle" type="button" aria-label="Open menu" aria-controls="primary-menu" aria-expanded="false">
      <i class="fas fa-bars" aria-hidden="true"></i>
    </button>
  </div>
</header>`;

  const footerFallback = `
<footer class="site-footer">
  <div class="footer-main">
    <div class="container footer-container">
      <div class="footer-brand">
        <a class="footer-logo" href="home.html" aria-label="youTHrive Malta home">
          <img src="../../public/images/youthrive-high-resolution-logo.png" alt="youTHrive Malta Logo" />
        </a>
        <p>Empowering people through innovation, inclusion, digital skills and active citizenship in Malta and across Europe.</p>
        <div class="social-icons" aria-label="Social links">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram" aria-hidden="true"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="footer-links"><h4>Navigation</h4><ul><li><a href="home.html">Home</a></li><li><a href="about-us.html">About Us</a></li><li><a href="our-work.html">Our Work</a></li><li><a href="projects.html">Projects</a></li><li><a href="news.html">News</a></li></ul></div>
      <div class="footer-links"><h4>Focus Areas</h4><ul><li><a href="our-work.html#text">Digital Skills</a></li><li><a href="training.html">Training & Resources</a></li><li><a href="projects.html">European Projects</a></li><li><a href="Impact.html">Impact</a></li><li><a href="get-involved.html">Get Involved</a></li></ul></div>
      <div class="footer-contact"><h4>Contact</h4><ul><li><i class="fas fa-map-marker-alt" aria-hidden="true"></i><span>Malta</span></li><li><i class="fas fa-envelope" aria-hidden="true"></i><a href="mailto:info@youthrivemalta.com">info@youthrivemalta.com</a></li><li><i class="fas fa-phone" aria-hidden="true"></i><a href="tel:+35612345678">+356 1234 5678</a></li></ul></div>
    </div>
  </div>
  <div class="footer-bottom"><div class="container footer-bottom-inner"><p>&copy; <span id="footer-year">2026</span> youTHrive Malta. All rights reserved.</p><a href="contact.html">Start a collaboration</a></div></div>
</footer>`;

  function includeComponent(file, elementId, fallbackHtml, callback) {
    const element = document.getElementById(elementId);
    if (!element) return;

    fetch(file)
      .then((response) => {
        if (!response.ok) throw new Error(`${file} returned ${response.status}`);
        return response.text();
      })
      .then((html) => {
        element.innerHTML = html;
        if (callback) callback();
      })
      .catch(() => {
        element.innerHTML = fallbackHtml;
        if (callback) callback();
      });
  }

  function highlightCurrentPage() {
    const currentPage = (window.location.pathname.split("/").pop() || "home.html").toLowerCase();
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      const linkPage = (link.getAttribute("href") || "").split("/").pop().toLowerCase();
      link.classList.toggle("active", linkPage === currentPage);
      if (linkPage === currentPage) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function attachMobileMenu() {
    const toggle = document.querySelector(".mobile-menu-toggle");
    const menu = document.querySelector(".nav-menu");
    if (!toggle || !menu || toggle.dataset.ready === "true") return;

    toggle.dataset.ready = "true";
    const icon = toggle.querySelector("i");

    function setOpen(open) {
      menu.classList.toggle("active", open);
      toggle.classList.toggle("active", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (icon) {
        icon.classList.toggle("fa-bars", !open);
        icon.classList.toggle("fa-xmark", open);
      }
      document.body.classList.toggle("menu-open", open);
    }

    toggle.addEventListener("click", () => setOpen(!menu.classList.contains("active")));
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
    document.addEventListener("click", (event) => {
      if (menu.classList.contains("active") && !menu.contains(event.target) && !toggle.contains(event.target)) {
        setOpen(false);
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) setOpen(false);
    });
  }

  function initHeaderScrollEffect() {
    const header = document.querySelector(".site-header, header");
    if (!header || header.dataset.scrollReady === "true") return;
    header.dataset.scrollReady = "true";

    const update = () => header.classList.toggle("scrolled", window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      if (anchor.dataset.smoothReady === "true") return;
      anchor.dataset.smoothReady = "true";
      anchor.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        const offset = document.querySelector(".site-header, header")?.offsetHeight || 80;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset - 16, behavior: "smooth" });
      });
    });
  }

  function setFooterYear() {
    const year = document.getElementById("footer-year");
    if (year) year.textContent = new Date().getFullYear();
  }

  function initAOS() {
    if (typeof AOS === "undefined" || window.__youThriveAOSReady) return;
    window.__youThriveAOSReady = true;
    AOS.init({ duration: 800, easing: "ease-in-out", once: true, offset: 80 });
  }

  function initComponents() {
    includeComponent("../components/header.html", "header-placeholder", headerFallback, () => {
      highlightCurrentPage();
      attachMobileMenu();
      initHeaderScrollEffect();
    });
    includeComponent("../components/footer.html", "footer-placeholder", footerFallback, setFooterYear);
  }

  window.attachMobileMenu = attachMobileMenu;
  window.highlightCurrentPage = highlightCurrentPage;

  document.addEventListener("DOMContentLoaded", () => {
    initComponents();
    initSmoothScrolling();
    initAOS();
  });
})();
