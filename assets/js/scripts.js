const content = {
  tr: {
    greeting: "Hey! Hoş geldin!",
    intro: "4 yıldır Flutter kullanarak mobil uygulamalar yapıyorum. Hem serbest çalışarak hem de kendi projelerimi geliştirerek bu yolda ilerliyorum.",
    passion: "Ayrıca YouTube kanalımda bildiklerimi paylaşmayı çok seviyorum. İnsanlara bir şeyler öğretmek beni mutlu ediyor!",
    education: "Klasik eğitim yolunu tercih etmedim ve lise sonrası kendi yolumu çizdim. Üniversite yerine pratik deneyim kazanmaya odaklandım. Her gün yeni şeyler öğrenerek kendimi geliştirmeye devam ediyorum.",
    projects: "Projeler",
    email: "E-posta",
  },

  en: {
    greeting: "Hey! Welcome!",
    intro: "I've been developing mobile applications using Flutter for 4 years. I'm progressing on this path both as a freelancer and by developing my own projects.",
    passion: "I also love sharing my knowledge on my YouTube channel. Teaching people makes me happy!",
    education: "I didn't choose the traditional education path and charted my own course after high school. Instead of university, I focused on gaining practical experience. I continue to improve myself by learning new things every day.",
    projects: "Projects",
    email: "Email",
  },
};

// URL'deki `lang` parametresini alın
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get("lang") || "tr"; // varsayılan dil Türkçe

// Sayfadaki metinleri değiştirin
document.getElementById("greeting").innerText = content[lang].greeting;
document.getElementById("intro").innerText = content[lang].intro;
document.getElementById("passion").innerText = content[lang].passion;
document.getElementById("education").innerText = content[lang].education;
document.getElementById("projects").innerText = content[lang].projects;
document.getElementById("email").innerText = content[lang].email;

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navRight = document.querySelector(".nav-right");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenuBtn.classList.toggle("active");
    navRight.classList.toggle("active");
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
