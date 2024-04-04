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
