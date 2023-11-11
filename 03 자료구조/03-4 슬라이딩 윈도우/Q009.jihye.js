const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [S, P] = input[0].split(" ").map((v) => +v);
const DNA = input[1];
const [checkA, checkC, checkG, checkT] = input[2].split(" ").map((v) => +v);

const check = () => {
  if (
    dict["A"] >= checkA &&
    dict["C"] >= checkC &&
    dict["G"] >= checkG &&
    dict["T"] >= checkT
  )
    return true;
  else return false;
};

const dict = {};
[dict["A"], dict["C"], dict["G"], dict["T"]] = [0, 0, 0, 0];
let cnt = 0;
for (let i = 0; i < P; i++) dict[DNA[i]] += 1; // 첫번쨰

cnt = check() === true ? cnt + 1 : cnt;

for (let j = 0; j < S - P; j++) {
  //범위를 유지한채로 이동
  dict[DNA[j]] -= 1; //빠지는 문자열 업데이트
  dict[DNA[P + j]] += 1; // 신규로 들어오는 문자열 업데이트
  cnt = check() === true ? cnt + 1 : cnt;
}
console.log(cnt);
