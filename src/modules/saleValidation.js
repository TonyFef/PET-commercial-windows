export const saleValidation = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    let success = true;
    const forms = document.getElementsByClassName("form-horizontal");
    for (let form of forms) {
        const inputName = form.getElementsByTagName("input")[0];
        inputName.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Zа-яА-Я\s]/g, "");
        });

        const inputPhone = form.getElementsByTagName("input")[1];
        inputPhone.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^0-9\s\+]/g, "");
        });
    }

    const validate = (list) => {
        success = true;
        list.forEach((input) => {
            switch (input.name) {
                case "fio":
                    let result = input.value.length > 1 ? success : (success = false);
                    break;
                case "phone":
                    if (input.value.length > 1 && input.value.length < 17) {
                        return success;
                    } else {
                        return (success = false);
                    }
                    break;
            }
        });
    };

    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll("input[type='text']");
        const formData = new FormData(form);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        validate(formElements);

        if (success) {
            sendData(formBody)
                .then((data) => {
                    formElements.forEach((input) => {
                        input.value = "";
                    });
                })
                .catch((error) => {
                    console.error();
                });
        } else {
            alert("Данные не валидны!");
        }
    };

    try {
        if (!form) {
            throw new Error("Верниие форму на место!");
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }
};
