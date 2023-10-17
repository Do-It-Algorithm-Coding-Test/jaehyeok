n = int(input())
start = 1
end = 1
sum_value = 1
ans = 1

while(end != n):
    if(sum_value < n) : 
        end += 1
        sum_value += end
    else:
        if(sum_value == n):
            ans += 1
            end += 1
            sum_value += end
        elif(sum_value > n):
            sum_value -= start
            start += 1

print(ans)