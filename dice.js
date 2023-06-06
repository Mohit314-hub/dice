var randomnumber1=Math.floor(Math.random()*6)+1;
var randomDiceImages1="dice"+randomnumber1+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImages1);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDiceImages2="dice"+randomnumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImages2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML=(" 🎆🎊PLAYER 1 WINS");

}
else if(randomnumber2>randomnumber1){
     document.querySelector("h1").innerHTML=(" 🎆🎊PLAYER 2 WINS");

}
else{
    document.querySelector("h1").innerHTML=("🎆🎊DRAW");

}