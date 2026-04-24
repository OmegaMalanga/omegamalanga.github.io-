// Smooth scroll already enabled in CSS, but this adds active link highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const images = document.querySelectorAll(".projects-container img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const close = document.getElementById("close");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

const text = "Web Developer & Computer Engineering Student";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

window.onload = typeEffect;

const reveals = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
});

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

close.onclick = () => (modal.style.display = "none");

const menuIcon = document.getElementById("menu-icon");
const navLinksContainer = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinksContainer.classList.toggle("active");
});

const navLinksItems = document.querySelectorAll(".nav-links a");

navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("active");
  });
});
