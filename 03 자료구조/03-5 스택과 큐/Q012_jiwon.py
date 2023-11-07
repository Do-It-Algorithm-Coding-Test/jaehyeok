N = int(input())
seq = list(map(int, input().split()))
stack = []

for i in range(N):

    #������ ������� �����鼭
    #���� ���Ұ� ������ �� �� ���Ұ� ����Ű�� ���Һ��� ū ���
    #�ش� ������ ������ �� ���� stack�� ���Ҹ� pop �ϸ鼭
    #�ش� ���ؽ��� ���� ���� ���ҷ� �ٲ��ش�

    while len(stack) != 0 and seq[stack[-1]] < seq[i]:
        seq[stack.pop()] = seq[i]
    
    stack.append(i)

while len(stack) != 0:
    seq[stack.pop()] = -1

print(*seq)