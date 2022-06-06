var userName = 'Danny';
// ternary expression syntax = conditon ? result if true : result if false
var greet = userName === '' ? 'Hello!' : `Hello, ${userName}!`;

console.log(greet)

var userQuestion = 'Does Jade love me?';
console.log(`${userName} asked, "${userQuestion}"`);

//generating a random number using math.random inside math.floor
// *7 (will generate a number between 0-6 so you need to add +1 after the closing bracket to include the count to 7)
var randomNumber = Math.floor(Math.random()*7)+1;

var eightBall = '';

// if statement for generating eightBall reply based on randomNumber's generated number
if (randomNumber === 0) {
    eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
    console.log(eightBall);
} else if (randomNumber === 2) {
    eightBall = 'Reply is hazy, try again soon';
    console.log(eightBall);
} else if (randomNumber === 3) {
    eightBall = 'Do not count on it';
    console.log(eightBall);
} else if (randomNumber === 4) {
    eightBall = 'My sources say no';
    console.log(eightBall);
} else if (randomNumber === 5) {
    eightBall = 'Outlook not so good';
    console.log(eightBall);
} else if (randomNumber === 6) {
    eightBall = 'Signs point to yes';
    console.log(eightBall);
} else {
    eightBall = 'Cannot predict right now';
    console.log(eightBall);
}