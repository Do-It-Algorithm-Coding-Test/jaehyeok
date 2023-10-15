# 013 카드2 https://www.acmicpc.net/problem/2164

from collections import deque

N = int(input())
myStack = deque()
for i in range(N, 0, -1):
    myStack.append(i)

while len(myStack) > 1:
    myStack.pop()
    myStack.appendleft(myStack.pop())

print(myStack.pop())
