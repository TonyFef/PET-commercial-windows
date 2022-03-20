import { fixWhenScrollModal } from "./helpers";
import { closeWhenScrollModal } from "./helpers";
import { animate } from "./helpers";

export const modal = (overlay) => {
    const headerModalWindow = document.getElementById("header-modal");
    const servicesModalWindow = document.querySelector(".services-modal");
    const modalCloseBtns = document.getElementsByClassName("modal__close");

    const btnForModal = document.getElementsByClassName("btn-modal");

    for (let button of btnForModal) {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            document.body.style.position = "";
            document.body.style.top = "";
            if (button.classList.contains("btn-block")) {
                headerModalWindow.style.display = "block";
                overlay.style.display = "block";
                fixWhenScrollModal();
            } else if (button.classList.contains("btn-sm")) {
                servicesModalWindow.style.display = "block";
                overlay.style.display = "block";
                fixWhenScrollModal();
            } else if (button.classList.contains("document-overlay")) {
                const docsImg = document.querySelectorAll(".sertificate-document");

                docsImg.forEach((doc) => {
                    doc.addEventListener("mouseenter", (e) => {
                        const docLink = e.target.closest("a");
                        const overlay2 = docLink.querySelector(".document-overlay");
                        animate({
                            duration: 150,
                            timing(timeFraction) {
                                return timeFraction;
                            },
                            draw(progress) {
                                overlay2.style.opacity = progress;
                            },
                        });
                    });
                    doc.addEventListener("mouseleave", (e) => {
                        const docLink = e.target.closest("a");
                        const overlay2 = docLink.querySelector(".document-overlay");

                        animate({
                            duration: 150,
                            timing(timeFraction) {
                                return timeFraction;
                            },
                            draw(progress) {
                                overlay2.style.opacity = progress / progress - progress;
                            },
                        });
                    });
                    doc.addEventListener("click", (e) => {
                        const docModal = document.querySelector("#bigDoc");
                        docModal.classList.add("show");
                        docModal.classList.remove("none");
                        overlay.style.display = "block";
                        e.preventDefault();

                        overlay.addEventListener("click", (e) => {
                            e.preventDefault();
                            docModal.classList.add("none");
                            overlay.style.display = "none";
                        });
                    });
                });
            }
        });
    }
    for (let button of modalCloseBtns) {
        button.addEventListener("click", () => {
            headerModalWindow.style.display = "none";
            servicesModalWindow.style.display = "none";
            overlay.style.display = "none";
            closeWhenScrollModal();
        });
    }
};
