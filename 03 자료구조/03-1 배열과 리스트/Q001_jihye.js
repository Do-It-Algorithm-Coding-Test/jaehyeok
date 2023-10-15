const fs = require("fs");
const inputData = fs.readFileSync("dev/stdin").toString().split("\n");

const num = inputData[1];

const result = num
  .split("")
  .map((v) => +v)
  .reduce((acc, v) => acc + v);

console.log(result);
