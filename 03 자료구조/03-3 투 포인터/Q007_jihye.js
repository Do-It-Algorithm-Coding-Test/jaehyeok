const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const M = +input[1];
const Arr = input[2].split(" ").map((v) => +v);
let start_index = 0;
let end_index = N - 1;
let cnt = 0;

Arr.sort((a, b) => a - b); //정렬 O(nlgn)

while (end_index > start_index) {
  if (Arr[start_index] + Arr[end_index] < M) {
    ++start_index;
  } else if (Arr[start_index] + Arr[end_index] > M) {
    --end_index;
  } else {
    ++cnt;
    ++start_index;
    --end_index;
  }
}

console.log(cnt);
