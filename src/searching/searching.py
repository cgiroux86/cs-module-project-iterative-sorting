def linear_search(arr, target):
    # Your code here
    for idx, val in enumerate(arr):
        if val == target:
            return idx
    return -1   # not found


# Write an iterative implementation of Binary Search
def binary_search(arr, target):
    if not arr:
        return -1
    a = sorted(arr)
    mid = len(a) // 2
    while a[mid] != target and len(a) > 1:
        if target < a[mid]:
            a = a[:mid]
            mid = len(a) // 2
        elif target > a[mid]:
            a = a[mid:]
            mid = len(a) // 2
    if a[mid] == target:
        return arr.index(a[mid])
    return -1


test = [1, 2, -5, 40, 12, 15, 8, 7, 0, 9]

print(binary_search(test, -6))
