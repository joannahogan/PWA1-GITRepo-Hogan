/******************************************
 Week 2 Assignment: Develop Duel #2
 Joanna Hogan       05 DEC 14
 *******************************************/


// self-executing function
(function(){ // Start of function

    console.log("FIGHT!!!");  // Display "Fight!!!" to console


    //Replace variables for each player with an array declaring name, damage, & health
    var playerOne = ["Spiderman", 20, 100];
    var playerTwo = ["Batman", 20, 100];


    //initiate round
    var round=0;  // Declare variable round to equal zero

    function fight(){
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]); // Display alert with names and starting health
        for (var i = 0; i < 10; i++) // For loop with conditions
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5; // Declare variable minDamage1 to be the result of the expression
            var minDamage2 = playerTwo[1] * .5; // Declare variable minDamage2 to be the result of the expression
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1); // Calculate player 1 damage
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2); // Calculate player 2 damage

            //inflict damage
            playerOne[2]-=f1; // Decreases player 1 health by f1 calculation
            playerTwo[2]-=f2;  // Decreases player 2 health by f2 calculation

            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]);  // Display to console player names and health status

            //check for victor
            var result = winnerCheck();  // Function winnerCheck calculates resuld
            console.log(result);  // Display result in console
            if (result==="no winner")  // If statement to continue game if no winner
            {
                round++; // Round incrementally increased by one
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]); // Alert to user current health at the end of the round

            } else{  // Else statement to alert user of winner and end game
                alert(result);  // Alert to user the result
                break; // Break out of the loop
            };

          };
    };

    function winnerCheck(){  // Function to calculate if there is a winner
        var result="no winner";  // Result is string "no winner"
        if (playerOne[2]<1 && playerTwo[2]<1) // If statement for both players losing
        {
            result = "You Both Die";  // Both players losing results in string of "You both die"
        } else if(playerOne[2]<1){ // Else if statement if player 2 wins
            result =playerTwo[0]+" WINS!!!"  // Result is Batman wins
        } else if (playerTwo[2]<1)  // Else if statement if player 1 wins
        {
            result = playerOne[0]+" WINS!!!"  // Result is Spiderman wins
        };
       return result; // Return result to previous code
    };

    /*******  The program gets started below *******/
    fight();  // Call function fight

})();