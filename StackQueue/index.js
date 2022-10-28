function solution(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")") {
      while (stack.pop() !== "(");
    } else {
      stack.push(str[i]);
    }
  }
  return stack.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

// 크레인 인형뽑기(스택)
function solution(board, moves) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < moves.length; i++) {
    const line = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][line] !== 0) {
        const tmp = board[j][line];
        board[j][line] = 0;
        if (stack[stack.length - 1] === tmp) {
          answer += 2;
          stack.pop();
        } else {
          stack.push(tmp);
        }
        break;
      }
    }
  }
  return answer;
}

const a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

// 후위식 연산(스택)
function solution(s) {
  let answer = [];
  for (let x of s) {
    if (!isNaN(x)) answer.push(Number(x));
    else {
      let rt = answer.pop();
      let lt = answer.pop();
      if (x === "+") answer.push(lt + rt);
      else if (x === "-") answer.push(lt - rt);
      else if (x === "*") answer.push(lt * rt);
      else if (x === "/") answer.push(lt / rt);
    }
  }
  return answer[0];
}

console.log(solution("352+*9-"));

// 쇠막대기
function solution(s) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      stack.pop();
      if (s[i - 1] === "(") answer += stack.length;
      else answer += 1;
    } else {
      stack.push(s[i]);
    }
  }
  return answer;
}

let str = "()(((()())(())()))(())";
console.log(solution(str));

// 공주구하기(큐)
function solution(N, K) {
  const q = Array.from({ length: N }, (_, i) => i + 1);
  let cnt = 0;
  while (q.length !== 1) {
    const cur = q.shift();
    cnt++;
    if (cnt === K) {
      cnt = 0;
    } else {
      q.push(cur);
    }
  }
  return q[0];
}

console.log(solution(8, 3));

// 교육과정설계 (큐)
function solution(man, sch) {
  const M = Array.from({ length: man.length }, (_, i) => man[i]);
  for (let x of sch) {
    if (x === M[0]) M.shift();
  }
  return M.length ? "NO" : "YES";
}

console.log(solution("CBA", "CBDAGE"));

// LRU (카카오 캐시 변형: 삽입정렬응용)
function solution(S, N) {
  let q = [];

  for (let x of N) {
    const idx = q.indexOf(x);
    if (idx !== -1) {
      q.splice(idx, 1);
      q.unshift(x);
    } else {
      q.unshift(x);
      if (q.length > S) q.pop();
    }
  }
  return q;
}

function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
