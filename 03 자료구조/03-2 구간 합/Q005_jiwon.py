import sys, math
input = sys.stdin.readline

n,m = map(int,input().split())
arr = list(map(int,input().split()))

cnt_rem = [0]*m
cnt_rem[arr[0]%m]+=1

for i in range(1,n):
    arr[i] = (arr[i-1]+arr[i])%m
    cnt_rem[arr[i]]+=1

ans = cnt_rem[0]
for i in cnt_rem:
    if i>=2:
        ans += math.comb(i,2)
print(ans)