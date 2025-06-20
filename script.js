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

// form submission
// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevent the default form submission
//   const firstName = document.getElementById("firstNameInput").value;
//   const lastName = document.getElementById("lastNameInput").value;
//   const email = document.getElementById("exampleInputEmail1").value;
//   const message = document.getElementById(
//     "exampleFormControlTextarea1"
//   ).value;

//   // Here you can handle the form data, e.g., send it to a server or display a message
//   console.log(
//     `First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Message: ${message}`
//   );
// });

// Art gallery reveal
const showArtGallery = document.getElementById("show-art-gallery");
const artGallerySection = document.getElementById("art-gallery");
if (showArtGallery && artGallerySection) {
  showArtGallery.addEventListener("click", function (e) {
    e.preventDefault();
    artGallerySection.style.display = "block";
    artGallerySection.scrollIntoView({ behavior: "smooth" });
  });
}

// Lightbox functionality for art gallery
const lightboxOverlay = document.getElementById("lightbox-overlay");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");
const artPieces = document.querySelectorAll(".art-piece");

artPieces.forEach((img) => {
  img.addEventListener("click", function () {
    lightboxImg.src = this.src;
    lightboxImg.alt = this.alt;
    lightboxOverlay.style.display = "flex";
    lightboxClose.focus();
  });
});

function closeLightbox() {
  lightboxOverlay.style.display = "none";
  lightboxImg.src = "";
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
