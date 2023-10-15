# 014 절댓값 힙 구현하기 https://www.acmicpc.net/problem/11286

from queue import PriorityQueue
import sys
input = sys.stdin.readline

N = int(input())
q = PriorityQueue()

for i in range(N):
    data = int(input())
    if data == 0:
        if q.empty():
            print(0)
        else:
            num1, num2 = q.get()
            print(num2)
    else:
        if data > 0:
            q.put((data, data))
        else:
            q.put((-data, data))


