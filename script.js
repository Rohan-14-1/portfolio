// Typing Animation
const roles = [
    "B.Tech AIML Student",
    "Machine Learning Enthusiast",
    "AI Developer",
    "Open to Internships"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    const typingElement = document.getElementById("typing-text");

    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex--);
    }

    if (!isDeleting && charIndex === currentRole.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect();


// Scroll Reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

