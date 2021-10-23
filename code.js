"use strict"

const button = document.querySelector(".form__button");
const inputFirstName = document.querySelector(".form__text-1");
const inputLastName = document.querySelector(".form__text-2");
const inputPassword = document.querySelector(".form__password");
const inputEmail = document.querySelector(".form__email");

//functions
function comfirms(){
    let comfirming1 = comfirmFirstName(),
    comfirming2 = comfirmLastName(),
    comfirming3 = comfirmEmail(),
    comfirming4 = comfirmPassword();
    if(comfirming1 &&comfirming2 && comfirming3 &&comfirming4 ){
        button.value = "Sent";
        let inputs = document.getElementsByTagName("input");;
        for(let i = 0; i < inputs.length; i++){
            inputs[i].style.animation = "sent 3s forwards";
        }
    }
}

function comfirmFirstName(){
    let icon = document.querySelector(".icon-error-f-n");
    let text = document.querySelector(".text-error-f-n");

    if(inputFirstName.value == "" || inputPassword.value.length < 4){
        icon.classList.add("active-2");
        text.classList.add("active-2");
        inputFirstName.style.color = "var(--Red)";
        inputFirstName.classList.add("active");
        return false
    }
    else {
        icon.classList.remove("active-2");
        text.classList.remove("active-2");
        inputFirstName.style.color = "";
        inputFirstName.classList.remove("active");
        return true
    }
}

function comfirmLastName(){
    let icon = document.querySelector(".icon-error-l-n");
    let text = document.querySelector(".text-error-l-n");
    if(inputLastName.value == "" || inputPassword.value.length < 4){
        icon.classList.add("active-2");
        text.classList.add("active-2");
        inputLastName.style.color = "var(--Red)";
        inputLastName.classList.add("active");
        return false
    }
    else {
        icon.classList.remove("active-2");
        text.classList.remove("active-2");
        inputLastName.style.color = "";
        inputLastName.classList.remove("active");
        return true
    }
}

function comfirmEmail(){
    let icon = document.querySelector(".icon-error-e");
    let text = document.querySelector(".text-error-e");
    if(!inputEmail.value.includes(".com") || !inputEmail.value.includes("@")){
        icon.classList.add("active-2");
        text.classList.add("active-2");
        inputEmail.style.color = "var(--Red)";
        inputEmail.classList.add("active");
        return false
    }
    else {
        icon.classList.remove("active-2");
        text.classList.remove("active-2");
        inputEmail.style.color = "";
        inputEmail.classList.remove("active");
        return true
    }
}

function comfirmPassword(){
    let icon = document.querySelector(".icon-error-p");
    let text = document.querySelector(".text-error-p");
    if(inputPassword.value == "" || inputPassword.value.length < 8){
        icon.classList.add("active-2");
        text.classList.add("active-2");
        inputPassword.style.color = "var(--Red)";
        inputPassword.classList.add("active");
        return false
    }
    else {
        icon.classList.remove("active-2");
        text.classList.remove("active-2");
        inputPassword.style.color = "";
        inputPassword.classList.remove("active");
        return true
    }
}

//event
button.addEventListener("click",comfirms);