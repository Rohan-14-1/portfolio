fetch("navbar.html")
.then(res => res.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;

    const menuIcon = document.getElementById("menuIcon");
    const drawer = document.getElementById("navDrawer");
    const overlay = document.getElementById("navOverlay");
    const closeBtn = document.getElementById("closeMenu");

    // FIX HERE
    const links = document.querySelectorAll(".nav-link");

    if(!menuIcon || !drawer || !overlay || !closeBtn) return;

    function openDrawer(){
        drawer.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeDrawer(){
        drawer.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    menuIcon.addEventListener("click", openDrawer);
    closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);

    // Highlight active page
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {
        const linkPage = link.getAttribute("href");

        if(linkPage === currentPage){
            link.classList.add("active");
        }

        link.addEventListener("click", function(){
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
            closeDrawer();
        });
    });

    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape"){
            closeDrawer();
        }
    });
});