var fs = require("fs");
var input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
input.shift();

let sortArr = input.sort((a, b) => a - b);
for (let i = 0; i < sortArr.length; i++) {
  console.log(sortArr[i]);
}
