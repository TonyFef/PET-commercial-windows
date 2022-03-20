import { animate } from "./helpers";

export const documents = (secondOverlay) => {
    const docsImg = document.querySelectorAll(".sertificate-document");
    // const docsOverlays = document.querySelectorAll(".document-overlay");
    // console.log(docsImg);

    docsImg.forEach((doc) => {
        doc.addEventListener("mouseenter", (e) => {
            const docLink = e.target.closest("a");
            const overlay = docLink.querySelector(".document-overlay");
            // overlay.style.opacity = 1;
            animate({
                duration: 150,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    overlay.style.opacity = progress;
                },
            });
        });
        doc.addEventListener("mouseleave", (e) => {
            const docLink = e.target.closest("a");
            const overlay = docLink.querySelector(".document-overlay");

            animate({
                duration: 150,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    overlay.style.opacity = progress / progress - progress;
                },
            });
        });
        doc.addEventListener("click", (e) => {
            console.log(secondOverlay);
            const docModal = document.querySelector("#bigDoc");
            docModal.classList.add("show");
            docModal.classList.remove("none");
            secondOverlay.style.display = "block";
            e.preventDefault();

            secondOverlay.addEventListener("click", () => {
                docModal.classList.add("none");
                secondOverlay.style.display = "none";
            });
        });
    });
};

const shower = () => {
    const docsSection = document.getElementById("documents");
    const bigDoc = document.createElement("img");
    bigDoc.src = "images/documents/document4.jpg";
    bigDoc.id = "bigDoc";
    bigDoc.classList.add("none");
    // bigDoc.classList.add("show");
    docsSection.append(bigDoc);
};
shower();
