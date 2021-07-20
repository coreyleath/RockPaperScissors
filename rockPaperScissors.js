let cpuWins = 0;
let yourWins = 0;
let draws = 0;


function randomHand() {
    cpuHand = Math.random()*3;
    if (cpuHand < 1) {
        cpuHand = "Rock";
    } else if (cpuHand < 2) {
        cpuHand = "Paper";
    } else {
        cpuHand = "Scissors";
    }
    return cpuHand;
}


function checkValidHand(hand) {
    if (hand === "Rock" || hand === "Paper" || hand === "Scissors") {
        return true;
    } else {
        return false;
    }
}


function rockPaperScissors(yourHand) {

    cpuHand = randomHand();

    if ((yourHand === "Rock" && cpuHand === "Scissors") || 
        (yourHand === "Paper" && cpuHand === "Rock") ||
        (yourHand === "Scissors" && cpuHand === "Paper")) {

            yourWins++;
            return `${yourHand} vs ${cpuHand}, you win!`

    } else if ((yourHand === "Rock" && cpuHand === "Paper") || 
                (yourHand === "Paper" && cpuHand === "Scissors") ||
                (yourHand === "Scissors" && cpuHand === "Rock")) {

            cpuWins++;
            return `${yourHand} vs ${cpuHand}, I win!`


    } else {

            draws++;
            return `${yourHand} vs ${cpuHand}, we tied!`
                
    }

}


function game() {
    cpuWins = 0;
    yourWins = 0;
    draws = 0;
    for (i = 0; i < 5; i++) {
        yourHand = prompt("Choose your hand!");
        yourHand = yourHand[0].toUpperCase() + yourHand.slice(1).toLowerCase();
        while (!checkValidHand(yourHand)) {
            console.log("I need a hand you can make!");
            yourHand = prompt("Choose your hand!");
            yourHand = yourHand[0].toUpperCase() + yourHand.slice(1).toLowerCase();
        }
        console.log(rockPaperScissors(yourHand) + ` The score is ${yourWins}-${cpuWins} and ${draws} draw(s).`);
    }
}