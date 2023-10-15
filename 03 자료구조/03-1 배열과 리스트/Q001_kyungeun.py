#11720 - 숫자의 합 구하기 

n = int(input())
numbers = input()
sum = 0

for i in range(n):
    sum += int(numbers[i])

print(sum)