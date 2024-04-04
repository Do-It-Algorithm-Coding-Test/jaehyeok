const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, L] = input[0].split(" ").map((v) => +v);
const Arr = input[1].split(" ").map((v) => +v);

class Deque {
  // 인스턴스를 만들 때 처음에 default값
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  // 맨 앞에 삽입 메서드
  pushleft(item) {
    // 인스턴스의 0번 인덱스에 값이 있다면
    if (this.arr[0]) {
      for (let i = this.arr.length; i > 0; i--) {
        this.arr[i] = this.arr[i - 1];
      }
    }
    this.arr[this.head] = item;
    this.tail++;
  }

  // 맨 뒤에 삽입 메서드
  push(item) {
    this.arr[this.tail++] = item;
  }

  // 맨 앞에서 뽑아내는 메서드
  popleft() {
    // deque에 아이템이 있는지 여부 판단
    const result = this.head >= this.tail ? this.arr[this.head++] : null;
    return result;
  }

  // 맨 뒤에서 뽑아내는 메서드
  pop() {
    // deque에 아이템이 있는지 여부 판단
    const result = this.head >= this.tail ? this.arr[--this.tail] : null;
    return result;
  }
}
let deque = new Deque();
// deque.push(1);
// deque.push(23);

// console.log(deque.arr[deque.tail - 1]);
for (let i = 0; i < N; i++) {
  while (deque.arr && deque.arr[deque.tail - 1] > Arr[i]) {
    deque.pop();
  }
  deque.push(Arr[i]);
  if (deque.arr.length > L) {
    deque.popleft();
    console.log(deque.arr);
  }
  console.log(deque.arr);
}

//정렬 알고리즘( O（nlgn） )을 사용하지 않고 슬라이딩 윈도우와 덱( O（n） )을 이용하여 정렬효과를 보는 것이 핵심
//이 문제는 정답 JS 코드가 검색해도 안나온다
