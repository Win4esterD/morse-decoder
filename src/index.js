const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const dictionary = {
    10: ".",
    11: "-",
  };
  const wordsDecoded = [];

  for (let i = 0; i < expr.length; i += 10) {
    wordsDecoded.push(expr.slice(i, i + 10));
  }

  const lettersDecoded = wordsDecoded.map((wordCoded) => {
    const word = [];

    for (let i = 0; i < wordCoded.length; i += 2) {
      if (wordCoded[i] === "*") {
        word.push(" ");
        break;
      } else if (wordCoded[i] === "1") {
        word.push(dictionary[wordCoded[i] + wordCoded[i + 1]]);
      }
    }

    return word;
  });

  let result = "";

  for (let letter of lettersDecoded) {
    if (letter.join("") !== " ") {
      result += MORSE_TABLE[letter.join("")];
    } else {
      result += letter.join("");
    }
  }

  return result;
}

module.exports = {
  decode,
};
