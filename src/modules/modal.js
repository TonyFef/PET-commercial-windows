import { fixWhenScrollModal } from "./helpers";
import { closeWhenScrollModal } from "./helpers";
import { animate } from "./helpers";

export const modal = (overlay) => {
    const headerModalWindow = document.getElementById("header-modal");
    const servicesModalWindow = document.querySelector(".services-modal");
    const modalCloseBtns = document.getElementsByClassName("modal__close");
    let docsImg = document.querySelectorAll(".sertificate-document");

    const btnForModal = document.getElementsByClassName("btn-modal");
    const docsForModal = document.getElementsByClassName("doc-modal");

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
            }
        });

        let tempScreenWidth = document.documentElement.clientWidth;
        if (tempScreenWidth > 767) {
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
            });
        }
        //  else {
        //     docsImg.forEach((doc) => {

        //     })
        // }

        
    }

    for (let doc of docsForModal) {
        let tempScreenWidth = document.documentElement.clientWidth;

        if (tempScreenWidth > 767) {
            doc.addEventListener("click", (e) => {
                e.preventDefault();

                let docModal = document.querySelector(".doc-div");

                docModal.classList.add("show");
                docModal.classList.remove("none");
                overlay.style.display = "block";
                fixWhenScrollModal();
            });
        } else {
            doc.addEventListener("click", (e) => {
                e.preventDefault();
            });
        }
    }

    overlay.addEventListener("click", (e) => {
        e.preventDefault();

        headerModalWindow.style.display = "none";
        servicesModalWindow.style.display = "none";
        let docModal = document.querySelector(".doc-div");
        docModal.classList.add("none");
        overlay.style.display = "none";
        docModal.classList.remove("show");
        closeWhenScrollModal();
    });

    for (let button of modalCloseBtns) {
        button.addEventListener("click", (e) => {
            headerModalWindow.style.display = "none";
            servicesModalWindow.style.display = "none";
            let docModal = document.querySelector(".doc-div");
            docModal.classList.add("none");
            docModal.classList.remove("show");
            overlay.style.display = "none";
            closeWhenScrollModal();
        });
    }
};
