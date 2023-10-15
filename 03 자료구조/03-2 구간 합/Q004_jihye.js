const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((v) => +v);

const arrA = new Array(N);
const arrD = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
for (var i = 0; i < N; i++) {
  arrA[i] = input[i + 1].split(" ").map((v) => +v);
}

for (var i = 1; i <= N; i++) {
  for (var j = 1; j <= N; j++) {
    arrD[i][j] =
      arrD[i][j - 1] + arrD[i - 1][j] - arrD[i - 1][j - 1] + arrA[i - 1][j - 1];
  }
}

for (var j = 1; j <= M; j++) {
  const [x1, y1, x2, y2] = input[N + j].split(" ").map((v) => +v);

  result =
    arrD[x2][y2] - arrD[x1 - 1][y2] - arrD[x2][y1 - 1] + arrD[x1 - 1][y1 - 1];
  console.log(result);
}
