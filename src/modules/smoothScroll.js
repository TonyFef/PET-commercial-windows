import { elementScrollIntoView, scrollIntoView } from "seamless-scroll-polyfill";

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
        // console.log(typeof scrollY);

        if (scrollY >= 850) {
            upButton.style.display = "block";
            upButton.style.transition = "all 1s";
        } else {
            upButton.style.display = "none";
        }
    };

    setInterval(onChange, 25);

    // const onEntry = (entry) => {
    //     entry.forEach((change) => {
    //         if (change.isIntersecting) {
    //             upButton.style.display = "block";
    //         }
    //     });
    // };

    // let options = { threshold: [0.5] };
    // let observer = new IntersectionObserver(onEntry, options);
    // let element = document.getElementById("benefits");
    // observer.observe(element);
};
