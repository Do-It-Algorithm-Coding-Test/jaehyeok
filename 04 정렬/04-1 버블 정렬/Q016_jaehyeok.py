# 016 버블 소트 https://www.acmicpc.net/problem/1377

import sys
input = sys.stdin.readline

n = int(input())
arr = []
for i in range(n):
    arr.append( (int(input()), i) )

sorted_arr = sorted(arr)
answer = []

for i in range(n):
    answer.append(sorted_arr[i][1] - arr[i][1])

print(max(answer) + 1)

'''
이해가 잘 되지 않아서 https://infinitt.tistory.com/229 이 사이트를 참고했다.
'''
