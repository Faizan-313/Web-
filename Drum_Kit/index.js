var buttons = document.querySelectorAll(".drum");
var len = buttons.length;

function playSound(key){
    switch(key){
        case "w":
            new Audio("./sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("./sounds/tom-4.mp3").play();
            break;
        default: console.log(buttonInnerHtml);
    }
}

for(var i = 0; i < len; i++){
    buttons[i].addEventListener("click", function (){
        var buttonInnerHtml = this.innerHTML;
        playSound(buttonInnerHtml);
        animation(buttonInnerHtml);
    });
}

document.addEventListener("keydown",function (event){
    playSound(event.key);
    animation(event.key);
})

function animation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}