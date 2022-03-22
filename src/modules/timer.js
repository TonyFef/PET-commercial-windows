export const timer = (deadline) => {
    const timerDays = document.getElementsByClassName("count1");
    const timerHours = document.getElementsByClassName("count2");
    const timerMinutes = document.getElementsByClassName("count3");
    const timerSeconds = document.getElementsByClassName("count4");
    let hourFormat;
    let dayFormat;
    let minutesFormat;
    let secondsFormat;

    let getHoursFormatDivs = document.getElementsByClassName("count_2");
    let getDaysFormatDivs = document.getElementsByClassName("count_1");
    let getMinutesFormatDivs = document.getElementsByClassName("count_3");
    let getSecondsFormatDivs = document.getElementsByClassName("count_4");

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        formatHours(hours);
        formatDays(days);
        formatMinutes(minutes);
        formatSeconds(seconds);

        return { timeRemaining, days, hours, minutes, seconds, hourFormat };
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();

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
    };

    const formatHours = (hours) => {
        if (hours < 1) {
            hourFormat = "Часов:";
        } else if (hours >= 1 && hours < 2) {
            hourFormat = "Час:";
        } else if (hours >= 2 && hours < 5) {
            hourFormat = "Часа:";
        } else if (hours >= 5 && hours < 21) {
            hourFormat = "Часов:";
        } else if (hours >= 21 && hours < 22) {
            hourFormat = "Час:";
        } else if (hours >= 22 && hours < 25) {
            hourFormat = "Часа:";
        }

        for (let span of getHoursFormatDivs) {
            span.childNodes[0].data = hourFormat;
        }
    };

    const formatDays = (days) => {
        if (days < 1) {
            dayFormat = "Дней:";
        } else if (days >= 1 && days < 2) {
            dayFormat = "День:";
        } else if (days >= 2 && days < 5) {
            dayFormat = "Дня:";
        } else if (days >= 5 && days < 21) {
            dayFormat = "Дней:";
        }

        for (let span of getDaysFormatDivs) {
            span.childNodes[0].data = dayFormat;
        }
    };

    const formatMinutes = (minutes) => {
        if (minutes < 1) {
            minutesFormat = "Минут:";
        } else if (minutes >= 1 && minutes < 2) {
            minutesFormat = "Минута:";
        } else if (minutes >= 2 && minutes < 5) {
            minutesFormat = "Минуты:";
        } else if (minutes >= 5 && minutes < 21) {
            minutesFormat = "Минут:";
        } else if (minutes >= 21 && minutes < 22) {
            minutesFormat = "Минута:";
        } else if (minutes >= 22 && minutes < 25) {
            minutesFormat = "Минуты:";
        } else if (minutes >= 25 && minutes < 31) {
            minutesFormat = "Минут:";
        } else if (minutes >= 31 && minutes < 32) {
            minutesFormat = "Минута:";
        } else if (minutes >= 32 && minutes < 35) {
            minutesFormat = "Минуты:";
        } else if (minutes >= 25 && minutes < 31) {
            minutesFormat = "Минут:";
        } else if (minutes >= 31 && minutes < 32) {
            minutesFormat = "Минута:";
        } else if (minutes >= 32 && minutes < 35) {
            minutesFormat = "Минуты:";
        } else if (minutes >= 35 && minutes < 41) {
            minutesFormat = "Минут:";
        } else if (minutes >= 41 && minutes < 42) {
            minutesFormat = "Минута:";
        } else if (minutes >= 42 && minutes < 45) {
            minutesFormat = "Минуты:";
        } else if (minutes >= 45 && minutes < 51) {
            minutesFormat = "Минут:";
        } else if (minutes >= 51 && minutes < 52) {
            minutesFormat = "Минута:";
        } else if (minutes >= 52 && minutes < 55) {
            minutesFormat = "Минуты:";
        } else if (minutes >= 55 && minutes < 61) {
            minutesFormat = "Минут:";
        }

        for (let span of getMinutesFormatDivs) {
            span.childNodes[0].data = minutesFormat;
        }
    };

    const formatSeconds = (seconds) => {
        if (seconds < 1) {
            secondsFormat = "Секунд:";
        } else if (seconds >= 1 && seconds < 2) {
            secondsFormat = "Секунда:";
        } else if (seconds >= 2 && seconds < 5) {
            secondsFormat = "Секунды:";
        } else if (seconds >= 5 && seconds < 21) {
            secondsFormat = "Секунд:";
        } else if (seconds >= 21 && seconds < 22) {
            secondsFormat = "Секунда:";
        } else if (seconds >= 22 && seconds < 25) {
            secondsFormat = "Секунды:";
        } else if (seconds >= 25 && seconds < 31) {
            secondsFormat = "Секунд:";
        } else if (seconds >= 31 && seconds < 32) {
            secondsFormat = "Секунда:";
        } else if (seconds >= 32 && seconds < 35) {
            secondsFormat = "Секунды:";
        } else if (seconds >= 25 && seconds < 31) {
            secondsFormat = "Секунд:";
        } else if (seconds >= 31 && seconds < 32) {
            secondsFormat = "Секунда:";
        } else if (seconds >= 32 && seconds < 35) {
            secondsFormat = "Секунды:";
        } else if (seconds >= 35 && seconds < 41) {
            secondsFormat = "Секунд:";
        } else if (seconds >= 41 && seconds < 42) {
            secondsFormat = "Секунда:";
        } else if (seconds >= 42 && seconds < 45) {
            secondsFormat = "Секунды:";
        } else if (seconds >= 45 && seconds < 51) {
            secondsFormat = "Секунд:";
        } else if (seconds >= 51 && seconds < 52) {
            secondsFormat = "Секунда:";
        } else if (seconds >= 52 && seconds < 55) {
            secondsFormat = "Секунды:";
        } else if (seconds >= 55 && seconds < 61) {
            secondsFormat = "Секунд:";
        }

        for (let span of getSecondsFormatDivs) {
            span.childNodes[0].data = secondsFormat;
        }
    };

    updateClock();
};
