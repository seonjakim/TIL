// 계단오르기;
function solution(n) {
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  return dy[n];
}

// 최대부분증가수열(LIS);
function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    const cur = arr.slice(i - 1);
  }

  return answer;
}

function solution(arr) {
  let dy = Array.from({ length: arr.length + 1 }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let tmp = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > tmp) {
        tmp = dy[j];
      }
    }
    dy[i] = tmp + 1;
  }
  return Math.max(...dy);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));

// 동전교환(냅색 알고리즘)
function solution(m, coin) {
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  return dy[m];
}

// 최대점수 구하기(냅색 알고리즘)
function solution(t, p) {
  let dy = Array.from({ length: t + 1 }, () => 0);
  for (let i = 0; i < p.length; i++) {
    const [score, time] = p[i];
    for (let j = t; j >= time; j--) {
      dy[j] = Math.max(dy[j - time] + score, dy[j]);
    }
  }
  return dy[t];
}

solution(20, [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]);
