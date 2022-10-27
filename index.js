function cliked(){
    var random1 = Math.floor(Math.random()*6)+1;
    var imageselector1 = "dice"+random1+".png";
    document.querySelector(".img1").setAttribute("src",imageselector1);


    var random2 = Math.floor(Math.random()*6)+1;
    var imageselector2 = "dice"+random2+".png";
    document.querySelector(".img2").setAttribute("src",imageselector2);

    if(random1>random2)
    {
        document.querySelector("h1").innerHTML="🚩Player 1 Wins";
        var audio = new Audio("claps.mp3");
        audio.play();
    }
    else if(random1<random2)
    {
        document.querySelector("h1").innerHTML="Player 2 Wins🚩";
        var audio = new Audio("claps.mp3");
        audio.play();
    }
    else{
        document.querySelector("h1").innerHTML="Draw!";
    }
}
