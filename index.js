var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);
var pngNumber = "images/dice"+randomNumber1+".png";
var pngNumber2 = "images/dice"+randomNumber2+".png";
// var array = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
// var randomImage = array[randomNumber1];
// var randomImage2 = array[randomNumber2];
document.querySelector("img.img1").setAttribute("src", pngNumber);
document.querySelector("img.img2").setAttribute("src", pngNumber2);
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🔥 player 1 wins";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "🔥 player 2 wins";
}else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "🔥 Draw! 🔥";
}
