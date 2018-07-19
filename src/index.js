const { getRandomWordSync, getRandomWord } = require('word-maker');




const App = async () => {
  for (let i = 1; i <= 100; i++) {
    let keyword = await getRandomWord();

    if (i % 15 == 0) {
      keyword = 'FizzBuzz';
    } else if (i % 3 == 0) {
      keyword = 'Fizz';
    } else if (i % 5 == 0) {
      keyword = 'Buzz';
    }

    console.log(`${i}: ${keyword}`);
  }
};


App()
  .then(() => console.info('Finished'))
  .catch(error => console.error(`Error occurred ${error.message}`));
