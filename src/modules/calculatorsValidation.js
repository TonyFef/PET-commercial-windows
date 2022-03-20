export const calculatorsValidation = () => {
    const square = document.querySelector(".calc-square");
    const count = document.querySelector(".calc-count");
    const day = document.querySelector(".calc-day");
    const calc = [square, count, day];

    const formNames = document.querySelectorAll(".form-name");
    const formPhones = document.querySelectorAll(".form-phone");
    const formEmails = document.querySelectorAll(".form-email");
    const topForm = document.querySelector(".top-form");
    const mess = document.querySelector(".mess");

    formNames.forEach((formName) => {
        const arrayNameForm = [];
        arrayNameForm.push(formName, topForm);
        arrayNameForm.forEach((item) => {
            item.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[^а-яА-Я\s]/g, "");
            });
        });
    });
    formPhones.forEach((formPhone) => {
        formPhone.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^0-9\s\()\-\+]/g, "");
        });
    });
    formEmails.forEach((formEmail) => {
        formEmail.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z\@\-\_\.\!\~\*\'\d]/g, "");
        });
    });
    mess.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s\d\.\!\?\'\,\:\;\"\-]/g, "");
    });
    calc.forEach((calculator) => {
        calculator.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[\D+]/g, "");
        });
    });
};

// export default calculatorsValidation;
