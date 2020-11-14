//Detecting Button Press
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnterHTML = this.innerHTML;
        makeSound(buttonInnterHTML);
        buttonAnimation(buttonInnterHTML);
    })
}

//Detecting Key Press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

//Play the sound
function makeSound(key) {
    let audio;
    switch (key) {
        case "w":
            audio = new Audio("sounds/tom1.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom2.mp3");
            break;
        case "s":
            audio = new Audio("sounds/tom3.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom4.mp3");
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "l":
            audio = new Audio("sounds/kick.mp3");
            break;
        default:
            console.log(key);
    }
    audio.play();
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add('pressed');
    setTimeout(function (){
        activeButton.classList.remove('pressed');
    }, 100);
}