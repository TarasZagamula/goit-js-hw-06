const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    const formElement = event.currentTarget.elements;

    const mail = formElement.email.value;
    const password = formElement.password.value

    const formData = {
        mail,
        password,
    };

    if (mail === `` || password === ``) {
        alert(`Нужно заполнить поля`)
    } else console.log(formData)

   
}

