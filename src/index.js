import { modal } from "./modules/modal";
import { timer } from "./modules/timer";
import { documents } from "./modules/documents";
import { swiper } from "./modules/swiper";

const overlay = document.querySelector(".overlay");

modal(overlay);
timer("26 march 2022");
documents(overlay);
swiper();
