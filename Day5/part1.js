const fs = require("fs");
const readBuffer = fs.readFileSync("./Day5/input.txt", "utf-8");
const inputs = readBuffer.split(/\r?\n/).map((line) => line);

const stacks = inputs.slice(0, 9);
const instructions = inputs.slice(10, inputs.length);

instructions.forEach((instruction) => {
  let curr = instruction
    .replace("move", "")
    .replace("from", "")
    .replace("to", "")
    .trim()
    .split("  ");

  console.log(curr);
});
