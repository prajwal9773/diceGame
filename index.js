var randomNumber1= Math.floor(Math.random()*6+1);
var dice="dice" + randomNumber1 +".png";
var images_left=dice;
document.querySelectorAll(".img1")[0].setAttribute("src",images_left) ;
var randomNumber2= Math.floor(Math.random()*6+1);
var dice="dice" + randomNumber2 +".png";
var images_right= dice;
document.querySelectorAll(".img2")[0].setAttribute("src",images_right) ;
if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 wins !!";
}
else{
    document.querySelector("h1").textContent="Player 2 wins !!";
}
