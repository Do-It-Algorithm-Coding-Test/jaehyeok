# 003 구간 합 구하기 1 (백준 11659번)

n, m = map(int, input("데이터의 개수, 질의 개수 : ").split())
num_list = list(map(int, input().split()))  #어떻게 n만큼 list를 받징..

#입력 받은 i와 j로 리스트 만들기
i_j_list = []       
for k in range(m):
    i_j = list(map(int,input().split()))
    i_j_list.append(i_j)

prefix_sum = [0]        # 구간 합 공식 : S[j] - S[i-1]
nums_sum = 0    # 합 배열 공식 : S[i] = S[i-1] + A[i]

for num in num_list:
    nums_sum += num
    prefix_sum.append(nums_sum)     # 합 배열 만들기

for i_j in i_j_list:
    i, j = i_j[0], i_j[1]
    print(prefix_sum[j] - prefix_sum[i-1])      # 합 배열에서 구간 합 구하기


# -- 책 코드 --
import sys
input = sys.stdin.readline
suNo, quizNo = map(int, input().split)
numbers = list(map(int, input().split()))
prefix_sum = [0]
temp = 0

for i in numbers:
    temp = temp +i
    prefix_sum.append(temp)

for i in range(quizNo):
    s, e = map(int, input().split())
    print(prefix_sum[e]-prefix_sum[s-1])
