let passWord = document.getElementById('password');
let confirmButton = document.getElementById('confirmButton');
let checkBoxButtons = document.querySelectorAll('[type=checkbox]');
let leverButtons = document.querySelectorAll('[type=range]');
let launchButton = document.getElementById('launchButton');
let rocket = document.getElementById('rocket');

function checkPassword() {
    if (passWord.value === "TrustNo1") {
        checkBoxButtons.forEach(e => {
            e.removeAttribute("disabled");
        });
        leverButtons.forEach(e => {
            e.removeAttribute("disabled");
        });
        passWord.setAttribute("disabled", "disabled");
        confirmButton.setAttribute("disabled", "disabled");
    }
}

confirmButton.addEventListener('click', checkPassword);



function checkCheckBoxes() {
    let counter = 0;
    for (let button in checkBoxButtons) {
        if (checkBoxButtons[button].checked) {
            counter++;
        }
    }
    let pass = (counter == 6) ? true : false;
    return pass;
}

function checkLevers() {
    let counter = 0;
    for (let lever in leverButtons) {
        if (leverButtons[lever].value == 100) {
            counter++;
        }
    }
    let pass = (counter == 5) ? true : false;
    return pass;
}

function unblockLaunch() {
    if (checkCheckBoxes() && checkLevers()) {
        launchButton.removeAttribute("disabled");
        launchButton.addEventListener("click", launch)
    }
}

function launch() {
    rocket.animate([
        // keyframes
        {transform: 'translateY(300px)'},
        {transform: 'translateX(275px)'}
    ], {
        // timing options
        duration: 4000,
        iterations: 1
    });
}