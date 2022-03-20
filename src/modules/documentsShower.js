export const shower = () => {
    const docsSection = document.getElementById("documents");
    const bigDoc = document.createElement("img");
    bigDoc.src = "images/documents/original/document4.jpg";
    bigDoc.id = "bigDoc";
    bigDoc.classList.add("none");
    docsSection.append(bigDoc);
};
// shower();
