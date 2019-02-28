var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ranletter = letters[Math.floor(Math.random()*letters.length)];
console.log(ranletter);



    var winstext = document.getElementById("wins-text");
    var maxlosses = document.getElementById("losses");
    var maxguess = document.getElementById("guessleft");
    var storeguess = document.getElementById("storeguess");
    var wins = 0;
    var losses = 0;
    var guessleft = 10;
    var storeguess = [];
console.log(storeguess)

   



document.onkeyup = function(event) {

var userkey = event.key;

if (userkey === ranletter){
    console.log("win");
    wins++;
    guessleft = 10;
    storeguess = []
    winstext.textContent = "wins: " + wins;
    ranletter = letters[Math.floor(Math.random()*letters.length)];
    console.log(ranletter);
}


else {guessleft--;
    storeguess.push(event.key) 
    document
}

    storeguess.textContent = "guesses so far" + storeguess;
    maxguess.textContent = "guessleft: " + guessleft;
    console.log("loss");
    if (guessleft===0){
        guessleft = 10;
        losses++;
        maxlosses.textContent = "losses: " + losses;
        storeguess = [];
         ranletter = letters[Math.floor(Math.random()*letters.length)];
console.log(ranletter);
    }



var html =
"<h1> Guess made: " + storeguess + "  " + "</h1>";

document.querySelector("#guessmade").innerHTML = html;
        
}
    
 





    











