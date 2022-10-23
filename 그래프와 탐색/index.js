// 경로탐색 (DFS 인접행렬)
function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));

// 경로탐색(인접리스트)
function solution() {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  let path = [];
  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          path.push(graph[v][i]);
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
          path.pop();
        }
      }
    }
  }

  ch[1] = 1;
  DFS(1);
  return answer;
}

// 미로탐색
function solution(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  const bx = board.length - 1,
    by = board[0].length - 1;
  function DFS(x, y) {
    if (x === bx && y === by) {
      answer++;
      return;
    }
    for (let i = 0; i < dx.length; i++) {
      const nx = dx[i] + x,
        ny = dy[i] + y;
      if (nx >= 0 && ny >= 0 && nx <= bx && ny <= by && board[nx][ny] === 0) {
        board[nx][ny] = 1;
        DFS(nx, ny);
        board[nx][ny] = 0;
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
}

// 송아지 찾기(BFS)
function solution(s, e) {
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  ch[s] = 1;
  queue.push(s);
  dis[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }
}

// 왜 안될까??
function solution(s, e) {
  const set = new Set();
  const dis = [-1, 1, 5];
  function BFS(L, cur) {
    if (cur === e) return L;
    for (let i = 0; i < dis.length; i++) {
      const nx = cur + dis[i];
      if (set.has(nx)) continue;
      set.add(nx);
      BFS(L + 1, nx);
    }
  }
  return BFS(0, s);
}

// 섬나라 아일랜드 (DFS)
function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        answer++;
        DFS(i, j);
      }
    }
  }
  function DFS(x, y) {
    board[x][y] = 0;
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i],
        ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }
  return answer;
}

// 섬나라 아일랜드 (BFS)
function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let q = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        BFS(i, j);
      }
    }
  }

  function BFS(x, y) {
    board[x][y] = 0;
    q.push([x, y]);
    answer++;
    while (q.length) {
      const [cx, cy] = q.shift();
      for (let k = 0; k < dx; k++) {
        let nx = cx + dx[k],
          ny = cy + dy[k];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
          board[nx][ny] = 0;
          q.push([nx, ny]);
        }
      }
    }
  }
}
