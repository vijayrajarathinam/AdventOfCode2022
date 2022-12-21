const fs = require("fs");
const readBuffer = fs.readFileSync("./Day7/input.txt", "utf-8");
const inputs = readBuffer.split(/\r?\n/).map((line) => line);

let path = "/home",
  dirs = { "/home": 0 };

inputs.forEach((input) => {
  if (input.startsWith("dir")) return;
  else if (input.startsWith("$")) {
    // listing dir - do nothing
    if (input.startsWith("ls", 2)) return;
    // changing path - change active dir
    else if (input.startsWith("cd", 2)) {
      //going back to the root
      if (input.startsWith("/", 5)) path = "/home";
      //going back one dir
      else if (input.startsWith("..", 5))
        path = path.substring(0, path.lastIndexOf("/"));
      // change path
      else {
        const dirName = input.substring(5, input.length);
        path = path + "/" + dirName;
        dirs[path] = 0;
      }
    }
  } else {
    const size = parseInt(input.split(" ")[0]);
    let dir = path;

    path.split("/").forEach(() => {
      dirs[dir] += size;
      dir = dir.substring(0, dir.lastIndexOf("/"));
    });
  }
});

// space require - space -unused
let limit = 30000000 - (70000000 - dirs["/home"]),
  validDirs = [];

Object.entries(dirs).forEach((activeDir) => {
  const [, size] = activeDir;
  if (limit <= size) validDirs.push(size);
});

console.log(Math.min(...validDirs));
