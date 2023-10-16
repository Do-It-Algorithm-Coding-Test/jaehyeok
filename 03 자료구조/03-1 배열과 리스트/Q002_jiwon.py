n = int(input())

scores = list(map(int, input().split()))

m = max(scores)
sum_score = sum(scores)

print(((sum_score / m) * 100)/n)

 