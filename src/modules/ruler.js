export const ruler = (overlay) => {
    const servicesButtons = document.querySelectorAll(".btn-sm");
    const servicesModalWindow = document.querySelector(".services-modal");
    const servicesModalClose = document.querySelector(".services-modal__close");

    servicesButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            servicesModalWindow.style.display = "block";
            overlay.style.display = "block";
        });
    });
    servicesModalClose.addEventListener("click", () => {
        servicesModalWindow.style.display = "none";
        overlay.style.display = "none";
    });
};
