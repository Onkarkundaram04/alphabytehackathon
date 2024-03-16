const form = document.querySelector("form"),
    uField = form.querySelector(".username"),
    uInput = uField.querySelector("input"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    (uInput.value == "" || /[^a-zA-Z0-9]/.test(uInput.value)) ? uField.classList.add("shake", "error"): checkUsername();
    (eInput.value == "") ? eField.classList.add("shake", "error"): checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error"): checkPass();

    setTimeout(() => {
        uField.classList.remove("shake");
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    uInput.onkeyup = () => { checkUsername(); }
    eInput.onkeyup = () => { checkEmail(); }
    pInput.onkeyup = () => { checkPass(); }

    function checkUsername() {
        if (uInput.value == "" || /[^a-zA-Z0-9]/.test(uInput.value)) {
            uField.classList.add("error");
            uField.classList.remove("valid");
            let errorTxt = uField.querySelector(".error-txt");

            (uInput.value != "") ? errorTxt.innerText = "Username can't contain special characters or spaces": errorTxt.innerText = "Username can't be blank";
        } else {
            uField.classList.remove("error");
            uField.classList.add("valid");
        }
    }

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");

            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address": errorTxt.innerText = "Email can't be blank";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass() {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    if (!uField.classList.contains("error") && !eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = form.getAttribute("action");
    }
}
