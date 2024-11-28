const content = {
  tr: {
    greeting: "Merhaba!",
    intro: "Ben 4 yıldır Flutter ile mobil uygulamalar geliştiriyorum. Bu süreçte, freelance ve kişisel projelerle kendimi sürekli geliştirdim.",
    passion: "Bunun dışında, YouTube üzerinde eğitim içerikleri üreterek, bilgilerimi başkalarıyla paylaşıyorum. Bir şeyler anlatmaktan keyif alıyorum.",
    education: "Lise mezunu bir alaylıyım. Üniversite okumak istemedim. Bunun yerine kendime tecrübe katabilmek için sürekli olarak yeni bilgiler öğrenmeyi hedefledim.",
    projects: "Projeler",
    email: "E-posta",
  },

  en: {
    greeting: "Hi!",
    intro: "I have been developing mobile applications with Flutter for 4 years. During this time, I have constantly improved myself through freelance and personal projects.",
    passion: "Apart from that, I create educational content on YouTube to share my knowledge with others. I truly enjoy teaching and explaining things.",
    education: "I am a self-taught high school graduate. I chose not to attend university and instead focused on continuously learning new skills to gain experience.",
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
