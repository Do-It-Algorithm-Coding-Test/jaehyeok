# 슬라이딩 윈도우를 deque으로 구현하면 정렬 효과를 볼 수 있음
# deque의 구조
# 왼쪽 : appendleft() 삽입, popleft() 삭제
# 오른쪽 : append() 삽입, pop() 삭제

import sys
from collections import deque
input = lambda : sys.stdin.readline().rstrip()


N, L = map(int, input().split())
A = list(map(int, input().split()))
dq = deque()

for i in range(N):
    while dq and dq[-1][1] > A[i]:
        dq.pop()
    
    dq.append((i, A[i]))

    while dq and dq[0][0] < i - L + 1 :
        dq.popleft()

    print(dq[0][1], end = " ")
