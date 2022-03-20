export const modal = (overlay) => {
    // console.log(button);
    const headerModalWindow = document.getElementById("header-modal");
    const servicesModalWindow = document.querySelector(".services-modal");
    const modalCloseBtns = document.getElementsByClassName("modal__close");
    const headerModalButton = document.getElementById("headerModalButton");

    const btnForModal = document.getElementsByClassName("btn-modal");

    for (let button of btnForModal) {
        button.addEventListener("click", () => {
            if (button.classList.contains("btn-block")) {
                headerModalWindow.style.display = "block";
                overlay.style.display = "block";
            } else if (button.classList.contains("btn-sm")) {
                servicesModalWindow.style.display = "block";
                overlay.style.display = "block";
            }
        });
    }
    for (let button of modalCloseBtns) {
        button.addEventListener("click", () => {
            headerModalWindow.style.display = "none";
            servicesModalWindow.style.display = "none";
            overlay.style.display = "none";
            
        });
    }
};
