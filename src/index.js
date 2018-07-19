const { getRandomWordSync, getRandomWord } = require('word-maker');

for (let i = 1; i <= 100; i++) {
  let keyword = getRandomWordSync();

  if (i % 15 == 0) {
    keyword = 'FizzBuzz';
  } else if (i % 3 == 0) {
    keyword = 'Fizz';
  } else if (i % 5 == 0) {
    keyword = 'Buzz';
  }

  console.log(`${i}: ${keyword}`);
}
