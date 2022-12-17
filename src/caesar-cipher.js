function caesarCipher(string, number) {
  let word = string.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let shiftedLetters = [];

  word.forEach((element) => {
    let positionInAlphabet = alphabet.indexOf(element);
    let newPosition = positionInAlphabet + number;
    let letterOutcome;

    // if string is in capital letter, output should also be in capital letter
    /*if (element.toUpperCase() === element) {
      alphabet.forEach((letter) => {
        letter.toUpperCase();
      });
    } else {
      alphabet.forEach((letter) => {
        letter.toLowerCase();
      });
    }*/

    if (newPosition > 25) {
      // 25 in this case stands for the last index (position) in alphabet array
      let remainder = newPosition - 25;
      letterOutcome = alphabet[remainder - 1];
    } else {
      letterOutcome = alphabet[newPosition];
    }

    shiftedLetters.push(letterOutcome);
  });
  let output = shiftedLetters.join("");
  console.log(output);
  // return output;
}

caesarCipher("abc", 3);
module.exports = caesarCipher;
