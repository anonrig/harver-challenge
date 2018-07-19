const { getRandomWordSync, getRandomWord } = require('word-maker');

for (let i = 0; i < 100; i++) {
  console.log(`${i+1}: ${getRandomWordSync()}`);
}
