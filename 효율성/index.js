// 연속부분수열 (투포인터 알고리즘)
function solution(target, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}
console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));

// 아나그램 (해쉬)
function solution(str1, str2) {
  let answer = true;
  const map = new Map();
  if (str1.length !== str2.length) return false;
  for (let x of str1) {
    if (map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 1);
  }
  for (let x of str2) {
    if (!map.has(x) || map.get(x) === 0) return false;
    map.set(x, map.get(x) - 1);
  }
  return answer;
}

function solution(D, arr) {
  let answer = 0;
  let sum = 0;
  let lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (rt - lt === D) {
      sum -= arr[lt++];
    }
    answer = Math.max(answer, sum);
  }
  return answer;
}

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));

// 모든 아나그램 찾기
function solution(n, m) {
  let answer = 0;
  n = n.toLowerCase();
  const sortedM = m.split("").sort().join("");
  for (let i = m.length; i <= n.length; i++) {
    const cur = n
      .slice(i - m.length, i)
      .split("")
      .sort()
      .join("");
    if (cur === sortedM) answer++;
  }
  return answer;
}

console.log(solution("bacaAacba", "abc"));
