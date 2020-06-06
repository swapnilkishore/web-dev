var randomNumber1 = Math.random();
randomNumber1 *= 5;
randomNumber1 += 1;
randomNumber1 = Math.round(randomNumber1);


var randomNumber2 = Math.random();
randomNumber2 *= 5;
randomNumber2 += 1;
randomNumber2 = Math.round(randomNumber2);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerText = "Player 1 won!!!!";
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerText = "Player 2 won!!!!";
}
else
{
  document.querySelector("h1").innerText = "Draw. Go agane!!!";
}
