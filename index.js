var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImg1 = "dice" + randomNumber1;
var randomImageSource1 = randomDiceImg1 + ".png";


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImg2 = "dice" + randomNumber2;
var randomImageSource2 = randomDiceImg2 + ".png";


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!! 🥳";}

else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!! 🥳";}

else{
    document.querySelector("h1").innerHTML="Draw 😅";}