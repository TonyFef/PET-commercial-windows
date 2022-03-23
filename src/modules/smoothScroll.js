import { elementScrollIntoView } from "seamless-scroll-polyfill";

export const smoothScroll = () => {
    const upButton = document.querySelector(".smooth-scroll");
    upButton.style.display = "none";

    upButton.addEventListener("click", () => {
        const top = document.getElementById("header");

        if (top) {
            elementScrollIntoView(top, {
                behavior: "smooth",
                block: "start",
            });
        }
    });

    let scrollY;
    const onChange = () => {
        scrollY = window.scrollY;

        if (scrollY >= 850) {
            upButton.style.display = "block";
            upButton.style.transition = "all 1s";
        } else {
            upButton.style.display = "none";
        }
    };

    window.addEventListener("scroll", onChange);
};
