let home = 0;
let guest = 0;
document.getElementById("home").innerText = home;
document.getElementById("guest").innerText = guest;

let minutes = 11;
let seconds = 60;
let i = 1;
document.getElementById("time").innerText = "12:00";
document.getElementById("time-mobile").innerText = "12:00";

function plus1Home(){
    home += 1;
    document.getElementById("home").innerText = home;
    leader();
}
function plus2Home(){
    home += 2;
    document.getElementById("home").innerText = home;
    leader();
}
function plus3Home(){
    home += 3;
    document.getElementById("home").innerText = home;
    leader();
}

function plus1Guest(){
    guest += 1;
    document.getElementById("guest").innerText = guest;
    leader();
}
function plus2Guest(){
    guest += 2;
    document.getElementById("guest").innerText = guest;
    leader();
}
function plus3Guest(){
    guest += 3;
    document.getElementById("guest").innerText = guest;
    leader();
}
function startGame(){
    document.querySelector(".start-game").style.visibility = "hidden";
    var myInterval = setInterval(Timeout, 1000);
    function Timeout(){
        seconds--;
        document.getElementById("time").innerText = minutes + ":" + seconds;
        document.getElementById("time-mobile").innerText = minutes + ":" + seconds;

        if(seconds === 0){
            minutes--;
            seconds = 60;
        }
        if(minutes === -1){
            document.getElementById("time").innerText = "12:00";
            document.getElementById("time-mobile").innerText = "12:00";

            clearInterval(myInterval);
            document.getElementById("period" + i).style.backgroundColor = "#F94F6D";
            document.querySelector(".start-game").style.visibility = "visible";
            minutes = 11;
            seconds = 60;
            i++;
        }
        if(i === 5){
            document.querySelector(".new-game").style.display = "block";
            document.querySelector(".start-game").style.display = "none";
        }
    }
}
function newGame(){
    home = 0;
    guest = 0;
    minutes = 11;
    seconds = 60;
    i = 1;
    document.getElementById('home').innerHTML= home;
    document.getElementById('guest').innerHTML= guest;
    leader();
    document.querySelector('.new-game').style.display="none";
    document.querySelector(".start-game").style.display ="block";
    document.querySelector(".start-game").style.visiblity = "visible";
    for(let i = 1; i < 5; i++){
        document.getElementById("period"+i).style.backgroundColor="";
    }
}
function leader(){
    if(home > guest){
        document.querySelector(".leader-home").style.backgroundColor = "#F94F6D";
        document.querySelector(".leader-guest").style.backgroundColor = "";
    }
    else if(guest > home){
        document.querySelector(".leader-home").style.backgroundColor = "";
        document.querySelector(".leader-guest").style.backgroundColor = "#F94F6D";
    }
    else{
        document.querySelector(".leader-home").style.backgroundColor = "";
        document.querySelector(".leader-guest").style.backgroundColor = "";
    }
}

