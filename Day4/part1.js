const fs = require("fs");
const readBuffer = fs.readFileSync("./Day4/input.txt", "utf-8");
const inputs = readBuffer.split(/\r?\n/).map((line) => line);

let pairs = 0;
inputs.forEach((input) => {
  let [first, second] = input.split(",");

  first = first.split("-");
  second = second.split("-");

  const _ = (q) => parseInt(q);

  if (
    (_(first[0]) <= _(second[0]) && _(first[1]) >= _(second[1])) ||
    (_(second[0]) <= _(first[0]) && _(second[1]) >= _(first[1]))
  )
    pairs += 1;
});

console.log(pairs);
