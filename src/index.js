import { modal } from "./modules/modal";
import { timer } from "./modules/timer";
import { shower } from "./modules/documentsShower";
import { swiper } from "./modules/swiper";
import { saleValidation } from "./modules/saleValidation";

const overlay = document.querySelector(".overlay");
const swiper1 = ".benefits-inner";
const swiper2 = ".row";
// const swiper2ForStyles = document.getElementsByClassName("row swiper")[0];
// swiper2ForStyles.classList.add("swiper2");
// console.log(swiper2ForStyles);
// const forms = document.getElementsByClassName("form-horizontal");

modal(overlay);
timer("26 march 2022");
swiper(swiper1, swiper2);
shower();
// saleValidation(forms);
saleValidation({ formId: "form1", someElem: [{ type: "block", id: "total" }] });
saleValidation({ formId: "form2", someElem: [{ type: "block", id: "total" }] });
