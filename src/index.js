import { headerModal } from "./modules/headerModal";
import { ruler } from "./modules/ruler";
import { timer } from "./modules/timer";
import { documents } from "./modules/documents";
import { swiper } from "./modules/swiper";

const headerModalWindow = document.getElementById("header-modal");
const headerModalButton = document.getElementById("headerModalButton");
const headerModalClose = document.getElementById("headerModalClose");
const overlay = document.querySelector(".overlay");

headerModal(headerModalWindow, headerModalButton, headerModalClose, overlay);
ruler(overlay);
timer("26 march 2022");
// setTimeout(timer, 1, "26 march 2022");
documents(overlay);
swiper();
