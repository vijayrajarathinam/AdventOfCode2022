const fs = require("fs");
const readBuffer = fs.readFileSync("./Day4/input.txt", "utf-8");
const inputs = readBuffer.split(/\r?\n/).map((line) => line);
const range = (start, end) =>
  Array.from(new Array(end + 1 - start), (_, i) => i + start);

let pairs = 0;
inputs.forEach((input) => {
  let [first, second] = input.split(",");

  first = first.split("-");
  second = second.split("-");

  const _ = (q) => parseInt(q);

  if (
    range(_(second[0]), _(second[1])).includes(_(first[0])) ||
    range(_(second[0]), _(second[1])).includes(_(first[1]))
  ) {
    pairs += 1;
  } else if (
    range(_(first[0]), _(first[1])).includes(_(second[0])) ||
    range(_(first[0]), _(first[1])).includes(_(second[1]))
  ) {
    pairs += 1;
  }
});

console.log(pairs);
