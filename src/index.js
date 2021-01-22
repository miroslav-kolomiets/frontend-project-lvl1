import readlineSync from 'readline-sync';

export const questionNumber = 3;

const askQuestions = (rounds, name) => {
  /* eslint-disable-next-line */
  for (const [question, correctAnswer] of rounds) {
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export const startGame = (questions, rules) => {
  const playerName = readlineSync.question('May I have your name? ');

  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${playerName}!`);
  console.log(rules);

  askQuestions(questions, playerName);
};
