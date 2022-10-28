// 뒤집은 소수
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split("").reverse().join(""));
    // let res = 0;
    // while (x) {
    //   let t = x % 10;
    //   res = res * 10 + t;
    //   x = parseInt(x / 10);
    // }

    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

// 멘토링 문제
function solution(N, M) {
  let grade = new Map();
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < N; j++) {
      if (grade.has(M[i][j])) grade.set(M[i][j], grade.get(M[i][j]) + j);
      else grade.set(M[i][j], j);
    }
  }
  grade.entries();
  console.log(Array.from(grade.entries()).sort((a, b) => a[1] - b[1]));
}

console.log(
  solution(4, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
