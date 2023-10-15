const fs = require("fs");
const inputData = fs.readFileSync("dev/stdin").toString().split("\n");

const scores = inputData[1].split(" ").map((v) => +v);

const max = Math.max.apply(null, scores);

for (let i = 0; i < scores.length; i++) {
  scores[i] = (scores[i] / max) * 100;
}
const avg = scores.reduce((a, b) => a + b) / scores.length;

console.log(avg);
