const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map((v) => +v);
const cumsum = new Array(arr.length + 1).fill(0);
const output = [];

arr.forEach((v, i) => {
  cumsum[i + 1] = cumsum[i] + v;
});

input.slice(2).forEach((v) => {
  const [i, j] = v.split(" ").map((k) => +k);
  output.push(cumsum[j] - cumsum[i - 1]);
});

console.log(output.join("\n"));
