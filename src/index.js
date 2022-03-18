import { headerModal } from "./modules/headerModal";

const modalWindow = document.getElementById("header-modal");
const modalButton = document.getElementById("headerModalButton");
const headerModalClose = document.getElementById("headerModalClose");
const overlay = document.querySelector(".overlay");
console.log(modalWindow);
console.log(modalButton);
// console.log(headerModalClose);

headerModal(modalWindow, modalButton, headerModalClose, overlay);
