const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((v) => +v);
const arrA = input[1].split(" ").map((v) => +v);
const arrS = new Array(arrA.length + 1).fill(0);
let C = new Array(M).fill(0);

arrA.forEach((v, i) => {
  arrS[i + 1] = arrS[i] + v;
  ++C[arrS[i + 1] % M];
});
let answer = C[0];
C.forEach((v) => {
  if (v != 0) {
    answer += (v * (v - 1)) / 2;
  }
});

console.log(answer);
