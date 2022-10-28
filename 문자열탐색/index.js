// 회문문자열
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) return "NO";
  }
  return answer;
}
console.log(solution("gooG"));

// 팰린드롬
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

// 문자열 압축
function solution(s) {
  let answer = "";
  let cnt = 1;
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      cnt++;
    } else {
      answer += s[i - 1];
      if (cnt > 1) answer += cnt;
      cnt = 1;
    }
  }
  return answer;
}

console.log(solution("KKHSSSSSSE"));
