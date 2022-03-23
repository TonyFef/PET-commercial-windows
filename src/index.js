import { modal } from "./modules/modal";
import { timer } from "./modules/timer";
import { shower } from "./modules/documentsShower";
import { swiper } from "./modules/swiper";
import { saleValidation } from "./modules/saleValidation";
import { smoothScroll } from "./modules/smoothScroll";

const overlay = document.querySelector(".overlay");
const swiper1 = ".benefits-inner";
const swiper2 = ".swiper2";

modal(overlay);
timer("26 march 2022");
swiper(swiper1, swiper2);
shower();
saleValidation();
// saleValidation({ formId: "form1", someElem: [{ type: "block", id: "total" }] });
// saleValidation({ formId: "form2", someElem: [{ type: "block", id: "total" }] });
smoothScroll();
