// 이진트리순회
function solution(v) {
  let answer;
  function DFS(v) {
    if (v > 7) return
    DFS(v * 2)
    DFS(v * 2 + 1)
  }

  DFS(v)
  return answer
}

// 부분집합 구하기
function solution(n) {
  let answer;
  let ch = Array.from({lenght: n + 1}, () => 0)
  function DFS(v) {
    if (v === n + 1) {
      let tmp = ''
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + ' '
      }
      if (tmp.length > 0) answer.push(tmp.trim())
    } else {
      ch[v] = 1
      DFS(v + 1)
      ch[v] = 0
      DFS(v + 1)
    }
  }

  DFS(v)
  return answer
}