N = int(input())
seq = list(map(int, input().split()))
stack = []

for i in range(N):

    #스택이 비어있지 않으면서
    #현재 원소가 스택의 맨 뒤 원소가 가리키는 원소보다 큰 경우
    #해당 조건을 만족할 때 까지 stack의 원소를 pop 하면서
    #해당 인텍스의 값을 현재 원소로 바꿔준다

    while len(stack) != 0 and seq[stack[-1]] < seq[i]:
        seq[stack.pop()] = seq[i]
    
    stack.append(i)

while len(stack) != 0:
    seq[stack.pop()] = -1

print(*seq)