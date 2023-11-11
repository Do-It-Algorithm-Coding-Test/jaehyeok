var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().trim().split("\n");
let Arr = input[0]
  .split("")
  .map((v) => +v)
  .sort((a, b) => b - a)
  .join("");
console.log(Arr);
