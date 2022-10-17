function countdownTimer() {
    //countdownTimer will go from 50 to 0 by 5s
    console.log("countdownTimer() started");
}

function playCraps() {
    //troubleshooting playCraps() has started
    console.log("playCraps() started");

    var die1 = 0;
    var die2 = 0;

    die1 = Math.ceil(6 * Math.random()) + 1;
    die2 = Math.ceil(6 * Math.random()) + 1;

    console.log(die1);
    console.log(die2);

    document.getElementById("die1Res").innerHTML = "The result for die1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "The result for die2 is: " + die2;

    //check if craps (7 or 11)


    var sum = die1 + die2;
    if (sum == 7 || sum == 11) {
        console.log("you lose!!");
        document.getElementById("gameRes").innerHTML = "You did find victory. Please okay again and WIN!";
        //check for win (even doubles)
    } else if (die1 % 2 == 0 && die1 == die2) {
        console.log("you win!!");
        document.getElementById("gameRes").innerHTML = "you won!!";
        //check for tie
    } else {
        console.log("You did not win or lose");
        document.getElementById("gameRes").innerHTML = "You did not win or lose. Please play again to WIN!";
    }
}
//btrCountdownTimer() created to fulfill assignment: Effiency at Mission Control
function btrCountdownTimer() {
    console.log("btrCountdownTimer() started");
    var currTime = 50;

    for (var i = 0; i < 11; i++) {
        setTimeout(function () {
            //what we do each iteration
            console.log(currTime);
            document.getElementById("countDis").innerHTML = currTime;
            if (currTime == 0) {
                document.getElementById("countDis").innerHTML = "Blastoff!!!";
            }
            currTime = currTime -5;
        }, i * 5000)
    }
}