var fs = require("fs");
var input = fs.readFileSync("example.txt").toString().split("\n");
var cases = input[0];
var splited = input[1].split(" ");

var stack = [];
for (var i = 0; i < Number(cases); i++) {
  while (
    stack.length !== 0 &&
    Number(splited[i]) > Number(splited[stack[stack.length - 1]]) // 원소 > 스택의 젤 위
  ) {
    splited[stack.pop()] = splited[i]; //원래배열의 원소를 오큰수로 바꾼다
  }
  stack.push(i);
}

console.log(stack);
while (stack.length !== 0) {
  splited[stack.pop()] = -1;
}
console.log(splited.join(" ").trim());
