# ���� ��
# 1. �迭�� ���� x != 0�� �ִ´�.
# 2. �迭���� ������ ���� ���� ���� ����� �� �� ���� �迭���� �����Ѵ�. 
# ������ ���� ���� ���� ���� ���� ��쿡�� �� �� ���� ���� ���� ����ϰ�, �� ���� �迭���� ����
from queue import PriorityQueue
import sys
print = sys.stdout.write
input = sys.stdin.readline

N = int(input())
queue = PriorityQueue()

for i in range(N):
    request = int(input())
    if request == 0: # x = 0�� ��
        if queue.empty(): # ť�� ����ִٸ� 0���
            print('0\n')
        else: # ť�� ������� �ʴٸ� ������ �ּ��� ���� ���, ������ ���Ƹ� ������ �켱 ���
            temp = queue.get()
            print(str((temp[1])) + '\n')
    else: # x = 1�� �� put���� ť�� ���ο� ���� �߰��ϰ� �켱���� ť ���� �������� �ڵ� ������
        queue.put((abs(request), request))



