import sys
input = sys.stdin.readline

n = int(input())
data = list(map(int, input().split()))
data.sort()

count = 0
hap = 0

for i in range(n):
    target = data[i]
    start = 0
    end = n-1
    while(start < end):
        hap = data[start] + data[end]
        if(hap == target):
            if(start != i and end != i):
                count += 1
                break
            elif(start == i):
                start += 1
            else:
                end -= 1
        elif(hap < target):
            start += 1
        else:
            end -= 1

print(count)
    