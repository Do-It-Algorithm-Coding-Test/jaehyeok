# 11659 - 구간 합 구하기 4

import sys
input = sys.stdin.readline

n, m = map(int, input().split())
numbers = list(map(int, input().split()))
pre = [0]
sum = 0

for i in range(n):
  sum += numbers[i]
  pre.append(sum)

for i in range(m):
  a, b = map(int, input().split())
  print(pre[b] - pre[a-1])