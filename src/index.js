import readlineSync from 'readline-sync';

export const getPlayerName = (locale) => readlineSync.question(locale.questions.name);

export const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

export const greatPlayer = (playerName, TEXT_COLORS, locale) => {
  console.log(TEXT_COLORS.yellow, locale.greetings.text1);
  console.log(TEXT_COLORS.cyan, `${locale.greetings.text2}${playerName}${locale.greetings.text3}`);
};

export const showRules = (TEXT_COLORS, locale) => {
  console.log(TEXT_COLORS.cyan, locale);
};

export const checkAnswer = (answer, correctAnswer) => answer === correctAnswer;
