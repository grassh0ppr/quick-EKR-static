const mobileNavButton = document.querySelector(".btn-mobile-nav");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav-link");
const body = document.body;
const submitForm = document.getElementById("submitForm");
const form = document.querySelector(".contact");

// mobile nav toggle
mobileNavButton.addEventListener("click", () => {
  body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
  });
});

// Art gallery reveal
const showArtGallery = document.getElementById("show-art-gallery");
const artGallerySection = document.getElementById("art-gallery");
if (showArtGallery && artGallerySection) {
  showArtGallery.addEventListener("click", function (e) {
    e.preventDefault();
    artGallerySection.style.display = "block";

    // Add entrance animation class
    artGallerySection.classList.add("gallery-revealed");

    // Smooth scroll to gallery
    artGallerySection.scrollIntoView({ behavior: "smooth" });

    // Trigger staggered animations for art pieces
    const artPieces = document.querySelectorAll(".art-piece");
    artPieces.forEach((piece, index) => {
      setTimeout(() => {
        piece.style.animationDelay = `${index * 0.1}s`;
        piece.classList.add("animate-in");
      }, 100);
    });
  });
}

// Lightbox functionality for art gallery
const lightboxOverlay = document.getElementById("lightbox-overlay");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxDescription = document.getElementById("lightbox-description");
const artPieces = document.querySelectorAll(".art-piece");

artPieces.forEach((img) => {
  img.addEventListener("click", function () {
    lightboxImg.src = this.src;
    lightboxImg.alt = this.alt;

    // Extract and display the description from alt text
    const description = this.alt;
    lightboxDescription.textContent = description;

    lightboxOverlay.style.display = "flex";
    lightboxClose.focus();
  });
});

// Lightbox functionality for setup picture link
const setupPicLink = document.querySelector(".setup-pic-link");
if (setupPicLink) {
  setupPicLink.addEventListener("click", function (e) {
    e.preventDefault();
    const imageSrc = this.getAttribute("data-image");
    const description = this.getAttribute("data-description");

    lightboxImg.src = imageSrc;
    lightboxImg.alt = description;
    lightboxDescription.textContent = description;

    lightboxOverlay.style.display = "flex";
    lightboxClose.focus();
  });
}

function closeLightbox() {
  lightboxOverlay.style.display = "none";
  lightboxImg.src = "";
  lightboxDescription.textContent = "";
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxClose.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " " || e.key === "Escape")
      closeLightbox();
  });
}
if (lightboxOverlay) {
  lightboxOverlay.addEventListener("click", function (e) {
    if (e.target === lightboxOverlay) closeLightbox();
  });
}
document.addEventListener("keydown", function (e) {
  if (lightboxOverlay.style.display !== "none" && e.key === "Escape")
    closeLightbox();
});
