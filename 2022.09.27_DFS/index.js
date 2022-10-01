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
  let answer = Number.MIN_SAFE_INTEGER
  const len = pv.length
  function DFS(L, sum, t) {
    if (t > m) return
    if (L === len) {
      answer = Math.max(answer, sum)
      return
    }
    DFS(L + 1, sum + pv[L], t + pt[L])
    DFS(L + 1, sum, t)
  }
  DFS(0, 0, 0)
  return answer
}

// 중복순열구하기
function solution(n, m) {
  const answer = []
  const tmp = Array.from({length: m}, () => 0)
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice())
      return
    }
    for (let i = 1; i <= n; i++) {
      tmp[L] = i
      DFS(L + 1)
    }
  }
  DFS(0)
  return answer
}

// DFS-Cut edge tech
function solution(n,total) {
  let answer = Math.MAX_SAFE_INTEGER
  function DFS(L, sum) {
    if (sum > total) return
    if (L >= answer) return
    if (sum === total) {
      answer = Math.min(answer, L)
      return
    }
    for (let i = 0; i < n.length; i++) {
      DFS(L + 1, sum + n[i])
    }
    return answer
  }
  DFS(0, 0)
}

// 순열구하기
function solution(len, arr) {
  const answer = []
  const arrLen = arr.length
  const ch = Array.from({length: arrLen}, () => 0)
  const tmp = Array.from({length: len}, () => 0)
  function DFS(L) {
    if (L === len) {
      answer.push(tmp.slice())
    }
    for (let i = 0; i < arrLen; i++) {
      if (ch[i] === 0) {
        ch[i] = 1
        tmp[L] = arr[i]
        DFS(L + 1)
        ch[i] = 0
      }
    }
  }
  DFS(0)
  return answer
}

// 팩토리얼
function solution(n) {
  function DFS(n) {
    if (n === 1) return 1
    return n * DFS(n - 1)
  }
  return DFS(n)
}

// 조합수
function solution(n, r) {
  let answer
  let dy = Array.from(Array(n), () => Array(r).fill(0))
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r]
    if (n === r || r === 0) return 1
    return dy[n][r] = DFS(n -1, r -1) + DFS(n - 1, r)
  }
  return answer
}

// 수열 추측하기
function solution(n, f) {
  let answer, flag = 0
  const dy = Array.from(Array(n), () => Array(n).fill(0))
  const ch = Array.from({length : n + 1}, () => 0)
  const p = Array.from({length : n}, () => 0)
  const b = Array.from({length : n}, () => 0)

  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r]
    if (n === r || r === 0) return 1
    return dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r)
  }
  function DFS(L, sum) {
    if (flag) return
    if (L === n && sum === f) {
      answer = p.slice()
      flag = 1
      return
    }
    for (let i = 1; i <= n; i++) {
      if (ch[i] === 0) {
        ch[i] = 1
        p[L] = i
        DFS(L + 1, sum + (b[L] * p[L]))
        ch[i] = 0
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i)
  }
  DFS(0, 0)
  return answer
}
// 수열 추측하기 => push pop 사용해서
function solution(n, f) {
  let answer, flag = 0
  const dy = Array.from(Array(n), () => Array(n).fill(0))
  const ch = Array.from({length : n + 1}, () => 0)
  const p = []
  const b = Array.from({length : n}, () => 0)

  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r]
    if (n === r || r === 0) return 1
    return dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r)
  }
  function DFS(L, sum) {
    if (flag) return
    if (L === n && sum === f) {
      answer = p.slice()
      flag = 1
      return
    }
    for (let i = 1; i <= n; i++) {
      if (ch[i] === 0) {
        ch[i] = 1
        p.push(i)
        DFS(L + 1, sum + (b[L] * p[L]))
        ch[i] = 0
        p.pop()
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i)
  }
  DFS(0, 0)
  return answer
}