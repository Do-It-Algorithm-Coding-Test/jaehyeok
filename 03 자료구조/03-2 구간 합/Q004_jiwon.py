n, m = list(map(int, input().split()))

numbers = [list(map(int, input().split())) for _ in range(n)]

row_prefix_sum = [[0] * (n + 1) for _ in range(n + 1)]
for i in range(1, n + 1):
    for j in range(1, n + 1):
        row_prefix_sum[i][j] = row_prefix_sum[i][j-1] + row_prefix_sum[i-1][j] - row_prefix_sum[i-1][j-1] + numbers[i-1][j-1]

for _ in range(m):
    x1, y1, x2, y2 = list(map(int, input().split()))
    result = row_prefix_sum[x2][y2] - row_prefix_sum[x2][y1-1] - row_prefix_sum[x1-1][y2] + row_prefix_sum[x1-1][y1-1]
    print(result)


    
