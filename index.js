let homeScore = 0;
let guestScore = 0;

function homeScoreBoard(id) {
   if (id === "homeOne") {
        homeScore += 1;
        document.getElementById("home-score").innerText = homeScore;
   }
   
   else if(id === "homeTwo") {
        homeScore += 2;
        document.getElementById("home-score").innerText = homeScore;
   }
   
   else {
        homeScore += 3;
        document.getElementById("home-score").innerText = homeScore;
   }
}

function guestScoreBoard(id) {
    if (id === "guestOne") {
        guestScore += 1;
        document.getElementById("guest-score").innerText = guestScore;
    }
    
    else if(id === "guestTwo") {
        guestScore += 2;
        document.getElementById("guest-score").innerText = guestScore;
    }
    
    else {
        guestScore += 3;
        document.getElementById("guest-score").innerText = guestScore;
    }
}

function reset() {
    document.getElementById("home-score").innerText = 0;
    document.getElementById("guest-score").innerText = 0;
}