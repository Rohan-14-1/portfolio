const form = document.getElementById("contactForm");

if(form){
    form.addEventListener("submit", function() {
        // Clear form after submission
        setTimeout(() => {
            form.reset();
        }, 500);
    });
}
