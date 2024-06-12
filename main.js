const login = document.getElementById('login');
const passwordInput = document.getElementById('exampleInputPassword1');
const passwordVisibilityCheckbox = document.getElementById('exampleCheck1');

passwordVisibilityCheckbox.addEventListener('change', function() {
    if (passwordVisibilityCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

login.addEventListener('click', function(e) {
    const formData = new FormData();
    formData.append('phone_number', document.getElementById('exampleInputEmail1').value);
    formData.append('password', passwordInput.value);
    e.preventDefault();
    fetch('https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin', {
        method: 'POST',
        body: formData,
    })
    .then(res => res.json())
    .then(res => {
        if (res.success) {
            alert("Muofaqiyatli o`tildi ");
            localStorage.setItem('access_token', res.data.tokens.accessToken.token);
        } else {
            alert("Xatolik!");
        }
    })
    .catch(err => {
        console.log(err);
    });
});
const phoneNumberInput = document.getElementById('exampleInputEmail1');
login.addEventListener('click', function(e) {
    e.preventDefault(); 

    if (validatePhoneNumber(phoneNumberInput.value) && validatePassword(passwordInput.value)) {

        const formData = new FormData();
        formData.append('phone_number', phoneNumberInput.value);
        formData.append('password', passwordInput.value);
        fetch('https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin', {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                window.location.href = "control.html";
            } else {
                alert("Error: Invalid credentials");
            }
        })
        .catch(err => {
            console.error(err);
            alert("Error: Unable to process request");
        });
    } else {
        alert("Error: Invalid phone number or password");
    }
});
function validatePhoneNumber(phoneNumber) {
    return true; 
}
function validatePassword(password) {
    return true;
}
