//JS로  큐 문제 푸는 법이 2가지
// 1 . push, shift -> 간단하지만 shift가 최악의 경우 O(n)의 시간복잡도를 가진다
// => 이걸로 풀었는데 당연히 시간초과 ->  N이 1000이하라면 사용해도 무방
const fs = require("fs");
let N = Number(fs.readFileSync("example.txt").toString().trim());

const queue = [];
for (var i = 1; i <= N; i++) {
  queue.push(i);
}

while (queue.length > 1) {
  queue.shift();
  queue.push(queue[0]);
  queue.shift();
}
console.log(queue[0]);

// 2 . 큐 직접 구현 (연결리스트사용)

// const fs = require("fs");
// let N = Number(fs.readFileSync("example.txt").toString().trim());

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    //노드 추가
    const node = new Node(data); //data를 가진 node를 만들어준다
    if (!this.head) {
      //헤드가 없을 경우 해당 노드를 헤드로
      this.head = node;
    } else {
      this.rear.next = node; //아닐 경우 마지막의 다음 노드로
    }
    this.rear = node; //마지막을 해당 노드로 한다
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return false; //헤드가 없으면 한개도 없는 것이므로 false 반환
    }
    const data = this.head.data; //헤드를 헤드의 다음 것으로 바꿔주고 뺀 data를 리텅
    this.head = this.head.next;
    this.length--;

    return data;
  }

  front() {
    return this.head && this.head.data;
  }
  getQueue() {
    if (!this.head) return false;
    let node = this.head;
    const arr = [];
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
}

const que = new Queue();
for (var i = 1; i <= N; i++) {
  que.enqueue(i);
}

while (que.length > 1) {
  que.dequeue();
  que.enqueue(que.front());
  que.dequeue();
}
console.log(que.front());
