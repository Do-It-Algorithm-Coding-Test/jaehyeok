# 1546 - 평균

n = int(input())
score = list((map(int,input().split())))
m = max(score)

for i in range(n):
    avg = score[i]/m*100

new_avg = sum(avg)/n
print("%.2f"  %new_avg)