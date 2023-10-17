n = int(input())
m = int(input())
data = list(map(int, input().split()))
data.sort()

count = 0
hap = 0

start = 0
end = n-1
while(start < end):
    hap = data[start] + data[end]
    if(hap == m):
        count += 1
        start += 1
        end -= 1
    elif(hap > m):
        end -= 1
    else:
        start += 1

print(count)