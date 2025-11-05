let homeScore = 0;
let guestScore = 0;

function homeScoreBoard(id) {
   if (id === "homeOne") {
        homeScore += 1;
        document.getElementById("home-score").textContent = homeScore;
   }
   
   else if(id === "homeTwo") {
        homeScore += 2;
        document.getElementById("home-score").textContent = homeScore;
   }
   
   else {
        homeScore += 3;
        document.getElementById("home-score").textContent = homeScore;
   }
}

function guestScoreBoard(id) {
    if (id === "guestOne") {
        guestScore += 1;
        document.getElementById("guest-score").textContent = guestScore;
    }
    
    else if(id === "guestTwo") {
        guestScore += 2;
        document.getElementById("guest-score").textContent = guestScore;
    }
    
    else {
        guestScore += 3;
        document.getElementById("guest-score").textContent = guestScore;
    }
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("guest-score").textContent = guestScore;
}