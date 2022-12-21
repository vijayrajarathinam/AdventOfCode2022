const fs = require("fs");
const readBuffer = fs.readFileSync("./Day1/input.txt", "utf-8");
const inputs = readBuffer.split(/\r?\n/).map((line) => line);

let max = 0,
  count = 0;

inputs.forEach((input) => {
  if (input === "") count = 0;
  else count += parseInt(input);

  if (count > max) max = count;
});

console.log("Answer is", max);
