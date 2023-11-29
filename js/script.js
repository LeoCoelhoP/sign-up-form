const password = document.querySelector("#user-password");
const confirmedPassword = document.querySelector("#confirm-user-password");

function isTheSame() {
    return (password.value === confirmedPassword.value) ? true: false;
}

password.addEventListener('input', () => {
    console.log(isTheSame)
    if (isTheSame()) {
        password.setCustomValidity('');
        confirmedPassword.setCustomValidity('');

    } else {
        password.setCustomValidity('Invalid field.');
        confirmedPassword.setCustomValidity('Invalid field.');
    }
});

confirmedPassword.addEventListener('input', () => {
    if (isTheSame()) {
        confirmedPassword.setCustomValidity('');
        password.setCustomValidity('');

    } else {
        confirmedPassword.setCustomValidity('Invalid field.');
        password.setCustomValidity('Invalid field.');
    }

});