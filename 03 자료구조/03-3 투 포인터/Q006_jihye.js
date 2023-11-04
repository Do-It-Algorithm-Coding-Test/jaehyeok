const N = require("fs").readFileSync("example.txt").toString().trim();

let start_index = 0;
let end_index = 0;
let cnt = 1; // N이 15일 경우 숫자 15만 뽑는 경우의 수를 미리 넣고 초기화
let sum = 0;

while (end_index < N) {
  if (sum == N) {
    ++cnt;
    ++end_index;
    sum += end_index;
  } else if (sum > N) {
    // sum이 크면 왼쪽값 삭제
    sum -= start_index;
    start_index += 1;
  } else {
    // sum 이 작으면 범위 확장
    ++end_index;
    sum += end_index;
  }
}
console.log(cnt);

// N의 최댓값이 10,000,000 -> O(n)의 시간 복잡도 알고리즘 구현 -> 투 포인터 사용 ~!!
