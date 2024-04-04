A = list(map(int, input()))

# 최댓값을 찾아 앞으로 swap 시켜주기
for i in range(len(A)):
    max_value = i
    for j in range(i+1, len(A)):
        if A[max_value] < A[j]:
            max_value = j
    if A[max_value] > A[i]:
        temp = A[i]
        A[i] = A[max_value]
        A[max_value] = temp

for i in range(len(A)):
    print(A[i], end='')