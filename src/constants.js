export const QUESTIONS_NUMBER = 3;

export const ARITHMETIC_PROGRESSION_LENGTH = 9;

export const TEXT_COLORS = {
  magenta: '\x1b[35m',
  yellow: '\x1b[33m%s\x1b[0m',
  cyan: '\x1b[36m%s\x1b[0m',
  red: '\x1b[31m',
};

export const LOCALE = {
  questions: {
    name: 'May I have your name? ',
    gameQuestion: {
      text1: 'Question: ',
      text2: 'Your answer: ',
    },
  },
  greetings: {
    text1: 'Welcome to the Brain Games!',
    text2: 'Hello, ',
    text3: '!',
  },
  answer: {
    correct: 'Correct!',
    wrong: {
      text1: ' is wrong answer ;(. Correct answer was ',
      text2: 'Let\'s try again, ',
    },
    finish: {
      text1: 'Congratulations, ',
      text2: '!',
    },
  },
};

export const RULES_CALC_GAME = 'What is the result of the expression?';

export const RULES_EVEN_GAME = 'Answer "yes" if the number is even, otherwise answer "no".';

export const RULES_GCD_GAME = 'Find the greatest common divisor of given numbers.';

export const RULES_PROGRESSION_GAME = 'What number is missing in the progression?';

export const RULES_PRIME_GAME = 'Answer "yes" if given number is prime. Otherwise answer "no".';
