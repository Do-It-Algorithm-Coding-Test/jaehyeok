# 017 소트인사이드 https://www.acmicpc.net/problem/1427

input_data = list(input())
N_list = [int(char) for char in input_data]
N_list.sort(reverse=True)

for i in range(len(N_list)):
    print(N_list[i], end='')

'''
선택정렬의 시간복잡도는 O(N^2)이고
sort()의 시간복잡도는 최악의 경우에도 O(NlogN)이므로 그냥 sort()를 사용했다.
'''
