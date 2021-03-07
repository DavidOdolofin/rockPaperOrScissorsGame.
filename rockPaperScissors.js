const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput ==='rock' || userInput ==='paper' || userInput ==='scissors' || userInput ==='bomb') {
    return userInput;
  } else {
    console.log('use "rock", "paper", "scissors" or "bomb" ');
  }
}

const getComputerChoice = () => {
  randomNumber=Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
     return 'rock';
     break;
    case 1:
      return 'paper';
      break;
    case 2:
     return 'scissors';
    break;
  }
}

const  determineWinner = (userChoice,         computerChoice)  => {
 if (userChoice === 'bomb') {
    if (computerChoice === 'paper' || computerChoice === 'rock' || computerChoice === 'scissors') {
    return 'user won';
    }
 }
 if (userChoice === computerChoice) {
   return 'tie game' ;
} 
if (userChoice === 'rock') {
   if (computerChoice === 'paper') {
     return 'computer won';
   }
} else {
     return 'user won';
   }
if (userChoice === 'paper') {
 if (computerChoice === 'scissors') {
   return 'computer won';
  }
 } else{
   return 'user won';
 }
if (userChoice === 'scissors') {
 if (computerChoice === 'paper' ) {
   return 'user won';
  } else{
   return 'computer won';
   }
  }
}

console.log(determineWinner('paper', 'rock'));

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();





