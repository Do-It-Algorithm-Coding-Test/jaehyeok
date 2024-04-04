# 018 ATM https://www.acmicpc.net/problem/11399

N = int(input())
input_data = list(map(int, input().split()))
input_data.sort()

sum_list = [0]*N
sum_list[0] = input_data[0]

for i in range(1, N):
    sum_list[i] = sum_list[i-1] + input_data[i]

result = 0
for i in range(N):
    result = result + sum_list[i]

print(result)

'''
배열이 오름 차순일 때 합이 최솟값이 되므로 오름 차순으로 정렬해준 뒤
합 배열을 만들고 합 배열의 총 합을 출력했다.
'''
