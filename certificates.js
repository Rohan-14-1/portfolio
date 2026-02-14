// Filter certificates
function filterCert(category){
    const cards = document.querySelectorAll(".cert-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    cards.forEach(card=>{
        if(category === "all" || card.dataset.category === category){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    });
}

// Scroll reveal
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el=>{
    observer.observe(el);
});