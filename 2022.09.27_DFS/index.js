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

// 합이 같은 부분집합
function solution(arr) {
  let answer = 'no', flag = 0
  let total = arr.reduce((a, b) => a + b, 0)
  const len = arr.length
  function DFS(L, sum) {
    if (flag) return
    if (L === len) {
      if ((total - sum) === sum) { 
        answer = "yes"
        flag = 1
      }
      return
    }
    DFS(L + 1, sum + arr[L])
    DFS(L + 1, sum)
  }
  DFS(0, 0)
  return answer
}

// 이진트리 DFS
function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER
  const len = arr.length
  function DFS(L, sum) {
    if (sum > c) return
    if (L === len) {
      answer = Math.max(answer, sum)
    } else {
      DFS(L + 1, sum + arr[L])
      DFS(L + 1, sum)
    }
  }
  DFS(0, 0)
  return answer
}

const arr = [81, 58, 42, 33, 61]

// 최대점수 구하기 (이진트리 DFS)
const pv = [10, 25, 15, 6, 7]
const pt = [5, 12, 8, 3, 4]
function solution(m, pv, pt) {
  let answer
  const len = pv.length
  function DFS(L, sum, t) {
    if (t > m) return
    if (L > len) {
      answer = Math.max(answer, sum)
      return
    }
    DFS(L + 1, )
  }
  DFS(0, 0, 0)
}

