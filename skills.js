// Different floating speed for each bubble
document.querySelectorAll(".skill-circle").forEach(circle=>{
    const speed = 3 + Math.random() * 4; // 3s to 7s
    circle.style.animationDuration = speed + "s";
});
