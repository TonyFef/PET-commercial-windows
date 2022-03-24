import { declOfNum } from "./timerModifier";

export const timer = (deadline) => {
    const timerDays = document.getElementsByClassName("count1");
    const timerHours = document.getElementsByClassName("count2");
    const timerMinutes = document.getElementsByClassName("count3");
    const timerSeconds = document.getElementsByClassName("count4");

    let getHoursFormatDivs = document.getElementsByClassName("count_2");
    let getDaysFormatDivs = document.getElementsByClassName("count_1");
    let getMinutesFormatDivs = document.getElementsByClassName("count_3");
    let getSecondsFormatDivs = document.getElementsByClassName("count_4");

    const updateClock = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        let getTime = { timeRemaining, days, hours, minutes, seconds };

        for (let item of timerDays) {
            getTime.days < 10 ? (item.textContent = `0${getTime.days}`) : (item.textContent = getTime.days);
        }
        for (let item of timerHours) {
            getTime.hours < 10 ? (item.textContent = `0${getTime.hours}`) : (item.textContent = getTime.hours);
        }
        for (let item of timerMinutes) {
            getTime.minutes < 10 ? (item.textContent = `0${getTime.minutes}`) : (item.textContent = getTime.minutes);
        }
        for (let item of timerSeconds) {
            getTime.seconds < 10 ? (item.textContent = `0${getTime.seconds}`) : (item.textContent = getTime.seconds);
        }

        if (getTime.timeRemaining <= 0) {
            timerDays.textContent = "00";
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        }

        if (getTime.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        }

        for (let span of getHoursFormatDivs) {
            span.childNodes[0].data = declOfNum(hours, [" Час: ", " Часа: ", " Часов: "]);
        }

        for (let span of getDaysFormatDivs) {
            span.childNodes[0].data = declOfNum(days, [" День: ", " Дня: ", " Дней: "]);
        }
        for (let span of getMinutesFormatDivs) {
            span.childNodes[0].data = declOfNum(minutes, [" Минута: ", " Минуты: ", " Минут: "]);
        }
        for (let span of getSecondsFormatDivs) {
            span.childNodes[0].data = declOfNum(seconds, [" Секунда: ", " Секунды: ", " Секунд: "]);
        }
    };

    updateClock();
};
