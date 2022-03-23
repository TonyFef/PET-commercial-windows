import { animate } from "./helpers";

export const calc = () => {
    const calcBlock = document.getElementById("calc");
    const calcType = document.querySelector("#calc-type");
    const calcGlass = document.querySelector("#calc-type-material");
    const calcSquare = document.querySelector("#calc-input");
    const total = document.getElementById("calc-total");

    const countCalc = () => {
        let totalValue = 0;

        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        let calcGlassValue = +calcGlass.value;
        let calcSquareValue = +calcSquare.value;

        calcSquare.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[\D+\-]/g, "");
        });

        if (calcSquare.value && calcType.value) {
            totalValue = calcSquareValue * calcTypeValue;

            animate({
                duration: 250,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    total.value = (+progress * totalValue).toFixed();
                },
            });
        }
        if (calcSquare.value && calcType.value && calcGlassValue) {
            totalValue = calcGlassValue * calcSquareValue * calcTypeValue;

            animate({
                duration: 250,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    total.value = (+progress * totalValue).toFixed();
                },
            });
        }
        if (calcSquareValue == "") {
            total.value = 0;
        }
    };

    calcBlock.addEventListener("input", (e) => {
        if (e.target === calcType || e.target === calcGlass || e.target === calcSquare) {
            countCalc();
        }
    });
};
