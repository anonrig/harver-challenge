const { getRandomWord } = require('word-maker');
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
  try {
    let response = [];
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

      response.push({id: i, keyword});
    }

    res.json(response);
  } catch(error) {
    res.status(500).json({error});
  }
});

app.listen(3000, () => console.info(`Listening server on port 3000`));
