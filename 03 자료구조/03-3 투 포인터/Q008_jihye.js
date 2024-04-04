const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, Arr] = input;
SortArr = Arr.split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);

cnt = 0;
for (let i = 0; i < N; i++) {
  start = 0;
  end = N - 1;

  while (end > start) {
    //  end 와 start가 만날때까지
    if (SortArr[end] + SortArr[start] == SortArr[i]) {
      if (end != i && start != i) {
        // 자기자신(i)이 end나 start가 되면 안돼
        ++cnt;
        break;
      } else if (start == i) {
        ++start;
      } else {
        --end;
      }
    } else if (SortArr[end] + SortArr[start] > SortArr[i]) {
      --end;
    } else {
      ++start;
    }
  }
}

console.log(cnt);
