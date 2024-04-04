# 020 수 정렬 하기2 https://www.acmicpc.net/problem/2751

import sys
input = sys.stdin.readline

N = int(input())
input_data_list = []

for _ in range(N):
    input_data = int(input())
    input_data_list.append(input_data)
input_data_list.sort()

for i in range(N):
    print(input_data_list[i])
