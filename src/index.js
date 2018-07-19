const { getRandomWordSync, getRandomWord } = require('word-maker');




const App = async () => {
  for (let i = 1; i <= 100; i++) {
    let keyword = '';

    try {
      keyword = await getRandomWord({withErrors: true});

      if (i % 15 == 0) {
        keyword = 'FizzBuzz';
      } else if (i % 3 == 0) {
        keyword = 'Fizz';
      } else if (i % 5 == 0) {
        keyword = 'Buzz';
      }
    } catch (error) {
      keyword = 'Doh!';
    }

    console.log(`${i}: ${keyword}`);
  }
};


App()
  .then(() => console.info('Finished'))
  .catch(error => console.error(`Error occurred ${error.message}`));
