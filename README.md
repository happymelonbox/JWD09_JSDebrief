
# JS-1 Debrief Activity
  
**Before you begin:** all members of the group fork, clone and open this repository and once open, run in the terminal 'node index.js' without quotation marks, your terminal should print test, if it does, you're ready to go.
  
  
In your groups, you will 'peer program' to work on these activities together. Each of you has a role to play in the group. Rotate roles at each checkpoint. Here is a suggestion of roles:  
  
  
**The Navigator/s:** Reads the instructions and instructs the Driver how to do it. You will need to communicate commands very clearly and precisely.  
  
  
**The Driver:** Listen to the Navigator/s and follow their instructions exactly. If they are not clear in their instructions, ask questions until it is clear what they want you to do. You will be the one sharing your screen and typing the code. Even if they tell you something you think is wrong, type what they ask. You can provide helpful hints if the group gets stuck.  
  
**If you get stuck:** Remember to not re-invent the wheel - feel free to Google if you get stuck! Read the errors in the terminal if there are any. Make sure you’ve spelt variable names correctly. Try to use comments ( // ) to write your logic down in plain English of the steps your code should take, and then try implementing the JavaScript. Reach out to your instructor to join your breakout room if you get very stuck! You can also check the answers.  
  
  
**Check Point 1 - Variables and Comparisons**  
**Check Point 2 - If / Else**  
**Check Point 3 - Advanced If / Else and Refactoring If / Else !**  
  
  
  
  
  
  
  
  
  
  
  
  
  
## **Check Point 1 - Variables and Comparisons** ##
Check your group’s answers to the following questions using a JS file and node after guessing!  
Note: The quotation marks for “blue”, etc may sometimes not work if you copy and paste from the Google doc - so rewrite the marks yourself if this happens!  
Given that  
let skyColor = "blue";  
let carColor = "blue";  
let hairColor = "black";  
What will the following result in?  
console.log(skyColor === carColor);  
console.log(skyColor === hairColor);  
console.log(skyColor !== hairColor);  

Given that x = 6 and y = 3, what will the following result in?  
(x < 10 && y > 1)  
(x == 5 || y == 5)   
!(x == y)   

## **Check Point 2 - If** ##
Swap the person sharing their screen/acting as The Driver.  
Use an if statement to check if a number is less than 20.  
Inputs  
Text: number to check  
Outputs   
Message if true: "Your number is less than 20."  
Message if false: "Your number is greater than or equal to 20.  
  
Declare a number and assign it a value. Use an if and else   statement to determine if a number is odd or even.  
  
Use an if and else statement to declare a number and assign it a   value. Determine if a number is negative, positive or zero   
(hint: you may want to use Google for this one, there is a way to  use the Math.sign for this)  
  
  
## **Check Point 3 - Advanced If / Else and Refactoring If / Else !** ##
Swap the person sharing their screen/acting as The Driver.  
Use an if and else statement to determine the greater of two   numbers a = 10; b=50;   
Try the above using a ternary operator   
  
Declare month as a string variable and assign a value to it. Use  an if and else statement to determine the season in Australia   (Hint: use Logical operators).  
  
Use a switch statement to find out what to do at a set of traffic lights.  
Inputs  
Text: word/string to check  
Outputs  
Message if "green": You should go!  
Message if "orange": "you should slow down…  
Message if "red: You should stop!  
Message if none of the above: Please enter a valid value.  
  
Use a switch statement to check a student's grade based on their   mark.  
Inputs  
Text: number/mark to check  
Outputs  
Message if less than 50: Fail  
Message if less than 70: Pass  
Message if less than 86: Credit  
Message if 86 or over: Distinction  
  
  
**---- Bonus Challenge If You Finish Early (Answer) ----**
Swap the person sharing their screen/acting as The Driver.  
Guessing game - let the user enter a number 1 and 10 and generate   a secret random number. If their number matches the random number,   congratulate them. You can make this more complicated by giving   them multiple choices.  
  
  
### Part One  
Accomplish the above task without getting user input - instead,   make dummy variables that hold what a user’s ‘guess’ is and make   sure your logic works first. You’ll need the following   
Variables/inputs  
Random Number: Variable that generates a random number.  
Right User Guess: Variables that represents a right user guess.   You will need to make it equal to the random number variable.  
Wrong User Guess: A variable that represents a wrong user guess.   Put in a wrong number here.  
And the following outputs:  
If the right guess variable is given: Message if correct guess:   Congratulations! You guessed the number!  
If the wrong guess variable is given: Message if wrong guess: Game   Over!  
  
  
### Part Two  
Now we will update our static code to take in a user’s guess   rather than us giving a static right and wrong guess variable!   There are two ways you may choose to accomplish this, and both   will require some research one your part! This may be difficult,   so take your time!  
  

**First Way To Do This:**  
 You do so in the browser using the browser console like in the answers below using prompt() and Document.write.  
  
OR  
  
**Second Way To Do This:**   
You use a node package called readline-sync to allow the user to input answers in the terminal and not have to use the browser.   
  
**To Install:** npm install readline-sync --save To Use in JS File:   require(‘readline-sync’);  
output in console - console.log(), readlineSync.question();  
  
**Extension:** If the user guesses wrong, let them guess again! Let them do this 3 times before saying Game Over.   
(Hint: You can use nested if/else statements to achieve this)  



