function toggleNav() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.classList.contains("nav-links-active")) {
        navLinks.classList.remove("nav-links-active");
    } else {
        navLinks.classList.add("nav-links-active");
    }
}



