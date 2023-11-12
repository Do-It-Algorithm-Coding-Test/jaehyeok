const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  let sum = 0;
  input.shift();
  const str = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  for (let i = 0; i < str.length; i++) {
    sum += str[i] * (str.length - i);
  }

  return sum;
}

console.log(solution(input));
