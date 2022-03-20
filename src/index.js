import { modal } from "./modules/modal";
import { timer } from "./modules/timer";
import { shower } from "./modules/documentsShower";
import { swiper } from "./modules/swiper";

const overlay = document.querySelector(".overlay");

modal(overlay);
timer("26 march 2022");
swiper();
shower();
