export const headerModal = (window, button, close, overlay) => {
    button.addEventListener("click", () => {
        window.style.display = "block";
        overlay.style.display = "block";
    });
    close.addEventListener("click", () => {
        window.style.display = "none";
        overlay.style.display = "none";
    });
};
