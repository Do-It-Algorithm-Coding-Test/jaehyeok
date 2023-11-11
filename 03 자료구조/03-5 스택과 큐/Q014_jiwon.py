# 절댓값 힙
# 1. 배열에 정수 x != 0을 넣는다.
# 2. 배열에서 절댓값이 가장 작은 값을 출력한 후 그 값을 배열에서 제거한다. 
# 절댓값이 가장 작은 값이 여러 개일 경우에는 그 중 가장 작은 수를 출력하고, 그 값을 배열에서 제거
from queue import PriorityQueue
import sys
print = sys.stdout.write
input = sys.stdin.readline

N = int(input())
queue = PriorityQueue()

for i in range(N):
    request = int(input())
    if request == 0: # x = 0일 때
        if queue.empty(): # 큐가 비어있다면 0출력
            print('0\n')
        else: # 큐가 비어있지 않다면 절댓값이 최소인 값을 출력, 절댓값이 같아면 음수를 우선 출력
            temp = queue.get()
            print(str((temp[1])) + '\n')
    else: # x = 1일 때 put으로 큐에 새로운 값을 추가하고 우선순위 큐 정렬 기준으로 자동 정렬함
        queue.put((abs(request), request))



