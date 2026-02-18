// Load Navbar
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // Mobile menu toggle
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.getElementById("navLinks");

    if(menuIcon){
        menuIcon.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});