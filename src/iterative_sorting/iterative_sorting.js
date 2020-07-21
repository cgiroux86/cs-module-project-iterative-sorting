const selection_sort = (arr) => {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        current = arr[i];
        arr[i] = arr[j];
        arr[j] = current;
      }
    }
  }
  console.log(arr);
};

const bubble_sort = (arr) => {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < arr[j]) {
        let current = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = current;
      }
    }
  }
  console.log(arr);
};

const insertion_sort = (arr) => {
  for (i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i;
    while (j > 0 && current < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = current;
  }
  console.log(arr);
};

const a = [69, 1, 12, -1, 5, -4, 7, 6, 15, 20, 45, 3, -8, 2];

insertion_sort(a);
bubble_sort(a);
selection_sort(a);
