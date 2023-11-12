var fs = require("fs");
var input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sortArr = input.slice(1).sort((a, b) => a - b);
console.log(sortArr.join("\n"));

// for (let i = 0; i < SortArr.length; i++) {
//   console.log(SortArr[i]);
// }
//for문으로 돌리면 시간초과 에러가 나는데 얘도 시간복잡도가 O(N)아닌가 ..? 왜나는지 궁금해서 찾아봤다.
//https://www.acmicpc.net/board/view/47265 -> console.log()가 많이 느려서 생긴 문제였다.
