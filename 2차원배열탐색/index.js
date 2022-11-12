// 격자판 최대합
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let cross1 = (cross2 = 0);
  for (let i = 0; i < n; i++) {
    let sum1 = (sum2 = 0);
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
      // if (i === j) cross1 += arr[i][j];
      // if (i + j === n - 1) cross2 += [i][j];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  for (let i = 0; i < n; i++) {
    cross1 += arr[i][i];
    cross2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, cross1, cross2);
  return answer;
}
