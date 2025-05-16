function toggleMenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const phrases = [
  "ucla cs student",
  "product manager",
  "entreprenuer"
];

let i = 0; // phrase index
let j = 0; // letter index
let isDeleting = false;
let currentPhrase = "";
const el = document.getElementById("typing-text");

function type() {
  const full = phrases[i];

  if (!isDeleting) {
    currentPhrase = full.substring(0, j + 1);
    j++;
    el.innerText = currentPhrase;

    if (j === full.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 3000); // Pause after full word
      return;
    }
  } else {
    currentPhrase = full.substring(0, j - 1);
    j--;
    el.innerText = currentPhrase;

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  }

  const delay = isDeleting
    ? Math.random() * (80 - 50) + 50
    : Math.random() * (150 - 100) + 100;

  setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", type);

function toggleThought(element) {
  const body = element.querySelector(".thought-body");
  body.style.display = body.style.display === "block" ? "none" : "block";
}

