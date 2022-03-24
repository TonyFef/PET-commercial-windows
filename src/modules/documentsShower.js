export const shower = () => {
    const docsSection = document.getElementById("documents");
    const docs = document.getElementsByClassName("doc-modal");

    const bigDoc = document.createElement("div");
    bigDoc.innerHTML = `
        <img src="images/documents/original/document4.jpg" alt="Профремонт" id="bigDoc" class="big-doc__img">
        <span title="Close" class="add-modal__close modal__close">x</span>
    `;

    bigDoc.classList.add("none");
    bigDoc.classList.add("doc-div");
    docsSection.append(bigDoc);

    for (let doc of docs) {
        doc.addEventListener("click", () => {
            console.log("doc");
        });
    }
};
