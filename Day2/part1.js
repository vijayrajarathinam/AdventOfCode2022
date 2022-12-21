const fs = require("fs");
const readBuffer = fs.readFileSync("./Day2/input.txt", "utf-8");
const inputs = readBuffer.split(/\r?\n/).map((line) => line);

const scorePlate = {
  "A X": 4,
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
};

let total = 0;

inputs.forEach((input) => {
  total += scorePlate[input];
});

console.log(total);
