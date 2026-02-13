// Typing Animation
const text = [
    "B.Tech AIML Student",
    "AI Developer",
    "Machine Learning Enthusiast",
    "Open to Internships"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    currentText = text[i];

    if (!isDeleting) {
        document.getElementById("typing-text").innerHTML =
            currentText.substring(0, j++);
    } else {
        document.getElementById("typing-text").innerHTML =
            currentText.substring(0, j--);
    }

    if (!isDeleting && j === currentText.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect();


// Scroll Reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
