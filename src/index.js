import { modal } from "./modules/modal";
import { timer } from "./modules/timer";
import { shower } from "./modules/documentsShower";
import { swiper } from "./modules/swiper";
import { saleValidation } from "./modules/saleValidation";
import { smoothScroll } from "./modules/smoothScroll";
import { calc } from "./modules/calc.js";

let overlay = document.querySelector(".overlay");
const swiper1 = ".benefits-inner";
const swiper2 = ".swiper2";

modal(overlay);
timer("26 march 2022");
swiper(swiper1, swiper2);
shower();
saleValidation();
smoothScroll();
calc();
