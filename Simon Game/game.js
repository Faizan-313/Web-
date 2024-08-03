var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

$(document).keydown(function(){
    if (!started){
        $("h1").text("level "+level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function (){
    var chosenColor = $(this).attr("id");
    userClickedPattern.push(chosenColor);
    playAudio(chosenColor);
    animatePress(chosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] !== userClickedPattern[currentLevel]){
        playAudio("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");

        setTimeout(function (){
            $("body").removeClass("game-over");
        },300);
        startOver();
    }
    else{
        if (gamePattern.length === userClickedPattern.length){
            setTimeout(function (){
                nextSequence();
            },1000);
        }
    }
}

function nextSequence(){
    level++;
    userClickedPattern = [];
    $("h1").text("level "+level);
    var randomChosenColor =  buttonColors[Math.floor(Math.random()*4)];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    playAudio(randomChosenColor);
}

function playAudio(name){
    new Audio("./sounds/"+name+".mp3").play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColor).removeClass("pressed");
    },100);
}


function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}