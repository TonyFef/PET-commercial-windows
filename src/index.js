import { headerModal } from "./modules/headerModal";
import { ruler } from "./modules/ruler";
import { timer } from "./modules/timer";

const headerModalWindow = document.getElementById("header-modal");
const headerModalButton = document.getElementById("headerModalButton");
const headerModalClose = document.getElementById("headerModalClose");
const overlay = document.querySelector(".overlay");

// const servicesModalClose = document.getElementById("headerModalClose");

headerModal(headerModalWindow, headerModalButton, headerModalClose, overlay);
ruler(overlay);
setTimeout(timer, 1, "26 march 2022")
