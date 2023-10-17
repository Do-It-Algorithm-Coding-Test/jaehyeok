n = int(input())
m = int(input())
numbers = list(map(int, input().split()))
count = 0

for i in range(n-1):
    for j in range(i+1, n):
        if(numbers[i] + numbers[j] == m):
            count += 1

print(count)