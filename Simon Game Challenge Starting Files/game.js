
var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var check = false

$(document).keypress(function(event)
{
  if(!check)
  {
    nextSequence()
  }
  check = true;
})

$(".btn").click(function(event){
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
})

function playSound(name)
{
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function animatePress(currentColour)
{
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function nextSequence()
{
  level++;
  $("h1").text("Level " + level);
  var randomNumber = Math.random();
  randomNumber = randomNumber * 3;
  randomNumber = Math.round(randomNumber);
  randomChosenColour = buttonColor[randomNumber];
  console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}


function checkAnswer(currentLevel)
{
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
  {
    console.log("success");
    if(currentLevel === gamePattern.length - 1)
    {
      setTimeout(nextSequence(), 1000);
      userClickedPattern = [];
    }
  }
  else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("WRONG!!!");
    setTimeout(function()
  {
    $("body").removeClass("game-over");
  }, 200);
  setTimeout(function() {
    $("h1").text("Press A Key to Start");
  }, 500);
  startOver();
  }
}


function startOver()
{
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  check = false;
}
