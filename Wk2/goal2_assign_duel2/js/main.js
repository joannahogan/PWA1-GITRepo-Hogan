/******** Joanna Hogan 12/1/14 ANALYZE Duel #1 ********

 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){ // Start of function

    console.log("FIGHT!!!");  // Display "Fight!!!" to console

    //player name
    var playerOneName = "Spiderman";  // Declare variable for player one
    var playerTwoName = "Batman";  // Declare variable for player two

    //player damage
    var player1Damage = 20;  // Declare variable for damage to player one
    var player2Damage = 20;  // Declare variable for damage to player two

    //player health
    var playerOneHealth = 100;  // Declare variable for health player one
    var playerTwoHealth = 100;  // Declare variable for health player two

    //initiate round
    var round=0;  // Declare variable round to equal zero

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); // Display alert with names and starting health
        for (var i = 0; i < 10; i++) // For loop with conditions
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; // Declare variable minDamage1 to be the result of the expression
            var minDamage2 = player2Damage * .5; // Declare variable minDamage2 to be the result of the expression
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); // Calculate player 1 damage
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); // Calculate player 2 damage

            //inflict damage
            playerOneHealth-=f1; // Decreases player 1 health by f1 calculation
            playerTwoHealth-=f2;  // Decreases player 2 health by f2 calculation

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);  // Display to console player names and health status

            //check for victor
            var result = winnerCheck();  // Function winnerCheck calculates resuld
            console.log(result);  // Display result in console
            if (result==="no winner")  // If statement to continue game if no winner
            {
                round++; // Round incrementally increased by one
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); // Alert to user current health at the end of the round

            } else{  // Else statement to alert user of winner and end game
                alert(result);  // Alert to user the result
                break; // Break out of the loop
            };

          };
    };

    function winnerCheck(){  // Function to calculate if there is a winner
        var result="no winner";  // Result is string "no winner"
        if (playerOneHealth<1 && playerTwoHealth<1) // If statement for both players losing
        {
            result = "You Both Die";  // Both players losing results in string of "You both die"
        } else if(playerOneHealth<1){ // Else if statement if player 2 wins
            result =playerTwoName+" WINS!!!"  // Result is Batman wins
        } else if (playerTwoHealth<1)  // Else if statement if player 1 wins
        {
            result = playerOneName+" WINS!!!"  // Result is Spiderman wins
        };
       return result; // Return result to previous code
    };

    /*******  The program gets started below *******/
    fight();  // Call function fight

})();