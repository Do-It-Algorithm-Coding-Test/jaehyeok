var fs = require("fs");
var input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

let N = input.shift();
let Arr = input.map((element, index) => [element, index]);
let copiedArray = Arr.slice();
let sortArr = Arr.sort((a, b) => a[0] - b[0]);
let answer = [];

for (let i = 0; i < N; i++) {
  answer.push(sortArr[i][1] - copiedArray[i][1]);
}

console.log(Math.max(...answer) + 1);

//이해가 가지 않았는데 jaehyeok님이 올리신 https://infinitt.tistory.com/229을 보니 이해가 바로 되었다.
