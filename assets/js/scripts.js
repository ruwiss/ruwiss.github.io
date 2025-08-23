// Modern Hero Section Animations
document.addEventListener("DOMContentLoaded", function () {
  // Typing Animation for Hero Title
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = "";

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    setTimeout(type, 1000); // Start after 1 second
  }

  // Initialize typing animation for the hero title
  const animatedTitle = document.getElementById("animated-title");
  if (animatedTitle) {
    const titleText = animatedTitle.textContent;
    typeWriter(animatedTitle, titleText, 80);
  }

  // Animate stats numbers on scroll
  function animateNumbers() {
    const statNumbers = document.querySelectorAll(".stat-number, .mini-stat .stat-number");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const finalValue = target.textContent.replace(/[^0-9]/g, "");
            let currentValue = 0;
            const increment = finalValue / 50;
            const suffix = target.textContent.replace(/[0-9]/g, "");

            const timer = setInterval(() => {
              currentValue += increment;
              if (currentValue >= finalValue) {
                target.textContent = finalValue + suffix;
                clearInterval(timer);
              } else {
                target.textContent = Math.floor(currentValue) + suffix;
              }
            }, 30);

            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNumbers.forEach((stat) => observer.observe(stat));
  }

  // Enhanced profile image hover effects
  const profileImg = document.querySelector(".profile-img");
  if (profileImg) {
    profileImg.addEventListener("mouseenter", function () {
      // Add some dynamic particle effects on hover
      createParticles(this);
    });
  }

  function createParticles(element) {
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement("div");
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        animation: particleFloat 1s ease-out forwards;
        z-index: 1000;
      `;

      const rect = element.getBoundingClientRect();
      particle.style.left = rect.left + Math.random() * rect.width + "px";
      particle.style.top = rect.top + Math.random() * rect.height + "px";

      document.body.appendChild(particle);

      setTimeout(() => particle.remove(), 1000);
    }
  }

  // Add particle animation CSS
  const particleStyle = document.createElement("style");
  particleStyle.textContent = `
    @keyframes particleFloat {
      0% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      100% {
        opacity: 0;
        transform: translateY(-50px) scale(0);
      }
    }
  `;
  document.head.appendChild(particleStyle);

  // Initialize animations
  animateNumbers();

  // Enhanced social link hover effects
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) scale(1.1) rotate(5deg)";
    });

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1) rotate(0deg)";
    });
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
