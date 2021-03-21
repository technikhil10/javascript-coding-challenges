// let js='amazing';
// if(js==='amazing') alert('Javascript is FUN!')

//Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.


//Solution

//According to Data1:
//Mass of both
const massJohn = 92
const massMarks = 78

//Heights of both
const heightJohn = 1.95
const heightMarks = 1.69

//Applying BMI Formula

const marksBMI = massMarks/(heightMarks ** 2)
const johnBMI = massJohn/(heightJohn ** 2)

const markHigherBMI = (marksBMI <= johnBMI);


//************************************************************************************************* */

//Coding Challenge #2


// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉

if(!markHigherBMI){
    console.log(`According to Data 1: Mark's BMI(${marksBMI}) is higher than John's BMI(${johnBMI})`);
}
else{
    console.log(`According to Data 1: John's BMI(${johnBMI}) is higher than Mark's BMI(${marksBMI})`);
}


//********************************************************************************************************** */

//Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀


//Solution
//According to Data 1:
const koalasAvg = (88 + 91 + 110)/3
const dolphinsAvg = (96 + 108 + 89)/3



if(koalasAvg > dolphinsAvg && koalasAvg>=100)
{
    console.log(`Koalas(${koalasAvg}) win Trophy over Dolphins(${dolphinsAvg})`);
}
else if(dolphinsAvg > koalasAvg && dolphinsAvg >=100){
    console.log(`Dolphins(${dolphinsAvg}) win Trophy over Koalas(${koalasAvg})`);
}
else if(koalasAvg === dolphinsAvg && koalasAvg>=100)
{
    console.log(`Its a draw!`);
}
else{
    console.log(`No Team wins the Trophy!`);
}

