const fs = require("fs");
const readBuffer = fs.readFileSync("./Day1/input.txt", "utf-8");
const inputs = readBuffer.split(/\r?\n/).map((line) => line);

let max = 0, // first with most calories
  max2 = 0, //second with most calories
  max3 = 0, // third with most calories
  count = 0;

inputs.forEach((input) => {
  if (input === "") count = 0;
  else count += parseInt(input);

  if (count > max) max = count;
  else if (count > max2) max2 = count;
  else if (count > max3) max3 = count;
});

console.log("Answer is", max + max2 + max3);
