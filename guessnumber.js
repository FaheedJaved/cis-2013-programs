
var intMax, intMin, intRandom, intGuess, intCount;

/* the prompt below makes sure that the user is entering a number that is on the lower side of the guessing range, but
 * it makes sure that the number is not lower than 0. This is so the user doesn't put in any negative values in the box.
*/
intMin = parseInt(prompt("Choose the lowest number (but not lower than 0) in your guessing range: "));

while (intMin < 0 || isNaN(intMin))
{
    intMin = parseInt(prompt("Sorry, your lowest number choice is invalid. \n" + "Please choose the lowest number (but not lower than 0) in your guessing range: "));
}
alert("Lowest number = " + intMin);



/* the prompt below looks for the user input of a number that is on the higher side of the guessing range. This also makes sure
 * that the user is actually entering a number that is two higher than the lower range number. This is because the guessing game would
 * not work if the higher number is below or the same as the lower range number. 
*/
intMax = parseInt(prompt("Choose the highest number (at least two higher than your lowest) in your guessing range: "));

while (isNaN(intMax) || intMax < intMin + 2)
{
    intMax = parseInt(prompt("Sorry, your highest number choice is invalid. \n" + "Please choose the highest number (at least two higher than your lowest) in your guessing range: "));
}
alert("Highest number = " + intMax);



/* the code below is actually looking at the random number that gets generated based on the above inputs, it makes sure that the random number
 * is between the lower boundary and the higher boundry. This gives it a range to choose from the numbers in that specific range. The function MathRandom
 * generates a number from zero to one and Mathfloor rounds to the nearest integer. 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


intCount = 1;


/* The prompt below is telling the user to enter the number they guess is the random number, the code below
 * makes sure that the number guessed by the user is an actual number and is whithin the given high and low ranges. 
*/
intGuess = parseInt(prompt("Enter your guess"));
while (intGuess < intMin || intGuess > intMax)
{
    intGuess = parseInt(prompt("The guess is not between " + intMin + " and " + intMax));
}


/* The code below is like the check for the game, it checks to see if the random number you put in is the same as the generated number.
 * The code will also tell the user if the number guessed is too high or too low based on the random number generated.
 * The user will know if they are low or high to the actual number.
 */
while (intGuess != intRandom)
{
    if (intGuess < intRandom)
    {
        alert ("Guess is too low");
       
}
else
{
    alert ("Guess is too high");
    
}

intGuess = parseInt(prompt("Enter your guess"));
while (intGuess < intMin || intGuess > intMax || isNaN(intGuess))
  {
    intGuess = parseInt(prompt("The guess is not between " + intMin + " and " + intMax));
  }
 intCount++;
 }
 
 

// Once the user guesses the number this alert should come up once finished with the amount of trys it took to figure out the number. 
alert("Congratulations! You guessed the correct number (" + intRandom +")\n" +
		" and it took you " + intCount + " attempt(s)!");