# 015 수 정렬하기 https://www.acmicpc.net/problem/2750

N = int(input())
data = [0]*N

for i in range(N):
    data[i] = int(input())
data.sort()

for i in range(N):
    print(data[i])


