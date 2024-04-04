const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const Arr = input[1].split(" ").map(Number);

Arr.sort((a, b) => a - b);
console.log(Arr[K - 1]);
