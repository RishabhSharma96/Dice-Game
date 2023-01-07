var randomNmuber1 = Math.floor(Math.random()*6 + 1);
var image1 = `dice${randomNmuber1}.png` ;
var imagesource1 = `images/${image1}`;
var finalImage1 = document.querySelectorAll("img")[0] ;
finalImage1.setAttribute("src", imagesource1) ;


var randomNmuber2 = Math.floor(Math.random()*6 + 1);
var image2 = `dice${randomNmuber2}.png` ;
var imagesource2 = `images/${image2}`;

var finalImage2 = document.querySelectorAll("img")[1] ;
finalImage2.setAttribute("src", imagesource2) ;


if(randomNmuber1===randomNmuber2){
    document.querySelector("h1").innerHTML = "Draw" ;
}
else if(randomNmuber1>randomNmuber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins" ;
}
else if(randomNmuber1<randomNmuber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins" ;
}