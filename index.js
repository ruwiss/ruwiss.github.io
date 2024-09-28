const projectImage = document.getElementById("project_image");
const projects = document.querySelectorAll(".project");

// Medya sorgusu tanımla: max-width 720px'in üstü olmalı
const mediaQuery = window.matchMedia("(min-width: 721px)");

function handleHoverEvents() {
    if (mediaQuery.matches) {
        // Ekran genişliği 721px ve üzerindeyse hover olaylarını ekle
        projects.forEach((project) => {
            project.addEventListener("mouseover", handleMouseOver);
            project.addEventListener("mouseout", handleMouseOut);
        });
    } else {
        // Ekran genişliği 720px ve altındaysa olayları kaldır
        projects.forEach((project) => {
            project.removeEventListener("mouseover", handleMouseOver);
            project.removeEventListener("mouseout", handleMouseOut);
        });
        // Resmi gizle
        projectImage.style.display = "none";
    }
}

function handleMouseOver(event) {
    const newSrc = event.currentTarget.querySelector("source").src;
    projectImage.src = newSrc;
    projectImage.style.display = "block"; // Resmi göster
}

function handleMouseOut() {
    projectImage.style.display = "none"; // Resmi gizle
}

// Sayfa yüklendiğinde ve boyut değiştiğinde medya sorgusunu kontrol et
mediaQuery.addEventListener("change", handleHoverEvents); // Medya sorgusu değiştiğinde
window.addEventListener("resize", handleHoverEvents); // Pencere boyutu değiştiğinde
handleHoverEvents(); // Başlangıçta kontrol et
