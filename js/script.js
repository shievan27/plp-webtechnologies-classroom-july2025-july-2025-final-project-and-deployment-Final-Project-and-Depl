const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetPage = link.getAttribute("data-page");

    // Hide all pages
    pages.forEach(page => page.classList.remove("active"));

    // Show clicked page
    document.getElementById(targetPage).classList.add("active");
  });
});
