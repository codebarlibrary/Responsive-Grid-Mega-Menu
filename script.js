const menuBtn = document.querySelector(".btn-menu");
const closeBtn = document.querySelector(".btn-close");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.add("active");
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
}

const megaMenuBox = document.querySelector('.mega-box');
if (megaMenuBox) {
    const megaMenuListItem = megaMenuBox.parentElement;
    const megaMenuAnchor = megaMenuListItem.querySelector('a');

    if (megaMenuAnchor) {
        megaMenuAnchor.addEventListener("click", (e) => {
            if (window.innerWidth <= 970) {
                e.preventDefault();
                megaMenuListItem.classList.toggle("show-mega");
            }
        });
    }
}
