// İçerik artık direkt HTML'de sabit olarak tanımlı

// Mobile Menu Toggle & Animations
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navRight = document.querySelector(".nav-right");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenuBtn.classList.toggle("active");
    navRight.classList.toggle("active");
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe project cards
  document.querySelectorAll(".project-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Scroll indicator for projects
  const createScrollIndicator = () => {
    const indicator = document.createElement("div");
    indicator.className = "scroll-indicator";
    indicator.innerHTML = `
      <div class="scroll-text">Projelerimi keşfet</div>
      <div class="scroll-arrow">
        <i class="fas fa-chevron-down"></i>
      </div>
    `;
    document.body.appendChild(indicator);

    // Hide indicator when user scrolls
    let scrolled = false;
    window.addEventListener("scroll", () => {
      if (!scrolled && window.scrollY > 100) {
        indicator.style.opacity = "0";
        indicator.style.transform = "translateX(-50%) translateY(20px)";
        scrolled = true;
        setTimeout(() => {
          indicator.remove();
        }, 300);
      }
    });
  };

  // Create scroll indicator after a delay
  setTimeout(createScrollIndicator, 2000);
});

var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/67486a514304e3196ae9dc39/1idpdujr3";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
