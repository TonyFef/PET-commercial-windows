export const modal = (overlay) => {
    // console.log(button);
    const headerModalWindow = document.getElementById("header-modal");
    const servicesModalWindow = document.querySelector(".services-modal");
    const modalCloseBtns = document.getElementsByClassName("modal__close");
    const headerModalButton = document.getElementById("headerModalButton");

    const btnForModal = document.getElementsByClassName("btn-modal");

    for (let button of btnForModal) {
        button.addEventListener("click", () => {
            document.body.style.position = "";
            document.body.style.top = "";
            if (button.classList.contains("btn-block")) {
                headerModalWindow.style.display = "block";
                overlay.style.display = "block";
                let scrollY = window.scrollY;
                document.body.style.position = "fixed";
                document.body.style.top = `-${scrollY}px`;
            } else if (button.classList.contains("btn-sm")) {
                servicesModalWindow.style.display = "block";
                overlay.style.display = "block";
                let scrollY = window.scrollY;
                document.body.style.position = "fixed";
                document.body.style.top = `-${scrollY}px`;
            }
        });
    }
    for (let button of modalCloseBtns) {
        button.addEventListener("click", () => {
            headerModalWindow.style.display = "none";
            servicesModalWindow.style.display = "none";
            overlay.style.display = "none";
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        });
    }
};
