import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

export const askQuestions = (questions, name) => {
  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i][0];
    const correctAnswer = questions[i][1];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    const isAnswerCorrect = answer === correctAnswer;

    if (!isAnswerCorrect) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
    }
    if (i === questions.length - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export const startGame = (questions, rules) => {
  const playerName = readlineSync.question('May I have your name? ');

  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${playerName}!`);
  console.log(rules);

  askQuestions(questions, playerName);
};
