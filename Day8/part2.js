const fs = require("fs");
const readBuffer = fs.readFileSync("./Day8/input.txt", "utf-8");
const inputs = readBuffer.split(/\r?\n/).map((line) => line);

const max = (num) => Math.max(num);

const ROWS = inputs.length,
  COLUMNS = inputs[0].length;

let edges = ROWS * 2 + (COLUMNS - 2) * 2;
let total = edges;

for (let row = 1; row <= ROWS - 1; row++) {
  for (let col = 1; col <= COLUMNS - 1; col++) {
    const tree = inputs[row][col];

    const left = Array.from(new Array(col + 1), (_, i) => inputs[row][col - i]);
    const right = Array.from(
      new Array(COLUMNS - col),
      (_, i) => inputs[row][col + i]
    );
    const up = Array.from(new Array(row + 1), (_, i) => inputs[row - i][col]);
    const down = Array.from(
      new Array(ROWS - row),
      (_, i) => inputs[row + i][col]
    );
    let score = 1;

    const lst = [...left, ...right, ...up, ...down];
    lst.forEach(() => {
      let tracker = 0;
      for (let i = 0; i < lst.length; i++) {
        if (lst[i] < tree) tracker += 1;
        else if (lst[i] == tree) {
          tracker += 1;
          break;
        } else break;
      }
      score *= tracker;
    });
  }
}

console.log(total);
