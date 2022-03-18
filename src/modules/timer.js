export const timer = (deadline) => {
    const timerDays = document.getElementById("timer-days");
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");

    const timerDaysSecond = document.querySelector("#count1");
    const timerHoursSecond = document.querySelector("#count2");
    const timerMinutesSecond = document.querySelector("#count3");
    const timerSecondsSecond = document.querySelector("#count4");

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, days, hours, minutes, seconds };
    };
    const updateClock = () => {
        let getTime = getTimeRemaining();

        if (getTime.hours < 10) {
            timerHours.textContent = `0${getTime.hours}`;
        } else {
            timerHours.textContent = getTime.hours;
        }
        let minutesShower = getTime.minutes < 10 ? (timerMinutes.textContent = `0${getTime.minutes}`) : (timerMinutes.textContent = getTime.minutes);
        let secondsShower = getTime.seconds < 10 ? (timerSeconds.textContent = `0${getTime.seconds}`) : (timerSeconds.textContent = getTime.seconds);
        let daysShower = getTime.days < 10 ? (timerDays.textContent = `0${getTime.days}`) : (timerDays.textContent = getTime.days);
        let hoursShower = getTime.hours < 10 ? (timerHours.textContent = `0${getTime.hours}`) : (timerHours.textContent = timerHours.days);

        let minutesShowerSecond =
            getTime.minutes < 10 ? (timerMinutesSecond.textContent = `0${getTime.minutes}`) : (timerMinutesSecond.textContent = getTime.minutes);
        let secondsShowerSecond =
            getTime.seconds < 10 ? (timerSecondsSecond.textContent = `0${getTime.seconds}`) : (timerSecondsSecond.textContent = getTime.seconds);
        let daysShowerSecond = getTime.days < 10 ? (timerDaysSecond.textContent = `0${getTime.days}`) : (timerDaysSecond.textContent = getTime.days);
        let hoursShowerSecond =
            getTime.hours < 10 ? (timerHoursSecond.textContent = `0${getTime.hours}`) : (timerHoursSecond.textContent = timerHours.days);

        if (getTime.timeRemaining < 0) {
            timerDays.textContent = "00";
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        }

        if (getTime.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        }
    };
    updateClock();
};
