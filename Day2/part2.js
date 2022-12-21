const fs = require("fs");
const readBuffer = fs.readFileSync("./Day2/input.txt", "utf-8");
const inputs = readBuffer.split(/\r?\n/).map((line) => line);

const scorePlate = {
  "A X": 3,
  "A Y": 4,
  "A Z": 8,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 2,
  "C Y": 6,
  "C Z": 7,
};

let total = 0;

inputs.forEach((input) => {
  total += scorePlate[input];
});

console.log(total);
