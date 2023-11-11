# 019 K번째 수 https://www.acmicpc.net/problem/11004

import sys
input = sys.stdin.readline

N, K = map(int, input().split())
input_data = list(map(int, input().split()))
input_data.sort()

print(input_data[K-1])

