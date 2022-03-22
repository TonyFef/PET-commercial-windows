export const shower = () => {
    const docsSection = document.getElementById("documents");
    const bigDoc = document.createElement("img");
    bigDoc.src = "images/documents/original/document4.jpg";
    bigDoc.id = "bigDoc";
    bigDoc.classList.add("none");
    // bigDoc.innerHTML = `<span title="Close" class="add-modal__close modal__close">x</span>`
    docsSection.append(bigDoc);
};
