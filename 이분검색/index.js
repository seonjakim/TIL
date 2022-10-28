// 선택정렬
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
}

console.log(solution([13, 5, 11, 7, 23, 15]));

// 버블정렬
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

// Special Sort
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < 0 && arr[j] > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

// 삽입정렬
function solution(arr) {
  let answer = arr;
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    for (let j = i - 1; j > -1; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = tmp;
        break;
      }
    }
  }
  return answer;
}

// 이분검색
function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }
  return answer;
}

// 결정알고리즘
function solution(target, arr) {
  let answer;
  let lt = Math.max(...arr),
    rt = arr.reduce((acc, cur) => acc + cur, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(arr, mid) <= target) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }
  return answer;
}

function count(arr, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of arr) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 마구간 정하기 (결정 알고리즘)
function solution(N, C) {
  let answer;
  N.sort((a, b) => a - b);
  let lt = 1,
    rt = N[N.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(N, mid) >= C) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
}

function count(arr, capa) {
  let cnt = 1,
    ep = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= capa) {
      cnt++;
      ep = arr[i];
    }
  }
  return cnt;
}

console.log(solution([1, 2, 8, 4, 9], 3));

// 회의실 배정
function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0;
  for (let [start, end] of meeting) {
    if (start >= et) {
      answer++;
      et = end;
    }
  }
  return answer;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
