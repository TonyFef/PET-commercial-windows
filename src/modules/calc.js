import { animate } from "./helpers";

const calc = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block");
    // console.log(calcBlock);
    const calcType = document.querySelector(".calc-type");
    const calcSquare = document.querySelector(".calc-square");
    const calcCount = document.querySelector(".calc-count");
    const calcDay = document.querySelector(".calc-day");
    const total = document.getElementById("total");

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = +calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcCount.value > 1) {
            calcCountValue += calcCount.value / 10;
        }

        if (calcSquare.value && calcType.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;

            animate({
                duration: 250,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    total.textContent = (+progress * totalValue).toFixed();
                },
            });
        }
        if (calcSquareValue == "") {
            total.textContent = 0;
        }
    };

    calcBlock.addEventListener("input", (e) => {
        // console.log(typeof calcSquare.value);
        if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
            countCalc();
        }
    });
};

export default calc;
