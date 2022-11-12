// 가운데 문자 출력 (substring, substr)
// function solution(bridge_length, weight, truck_weights) {
//   // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
//   let time = 0,
//     qu = [[0, 0]],
//     weightOnBridge = 0;

//   // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
//   while (qu.length > 0 || truck_weights.length > 0) {
//     // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
//     //    다리 위 트럭 무게 합에서 빼준다.
//     if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

//     if (weightOnBridge + truck_weights[0] <= weight) {
//       // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면
//       //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
//       weightOnBridge += truck_weights[0];
//       qu.push([truck_weights.shift(), time + bridge_length]);
//     } else {
//       // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
//       //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
//       //    참고: if 밖에서 1 더하기 때문에 -1 해줌
//       if (qu[0]) time = qu[0][1] - 1;
//     }
//     // 시간 업데이트 해준다.
//     time++;
//   }
//   return time;
// }

// Javascript program to find all substring that
// contain all vowels

// Returns true if x is vowel.
function isVowel(x) {
  // Function to check whether a character is
  // vowel or not
  return x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
}

function findSubstring(str) {
  let hash = new Set();
  // To store vowels

  // Outer loop picks starting character and
  // inner loop picks ending character.
  let n = str.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // If current character is not vowel,
      // then no more result substrings
      // possible starting from str[i].
      if (isVowel(str[j]) == false) break;

      // If vowel, then we insert it in hash
      hash.add(str[j]);

      // If all vowels are present in current
      // substring
      if (hash.size == 5) console.log(str.substring(i, j + 1) + " ");
    }
    hash.clear();
  }
}

// Driver code
let str = "aeoibsddaaeiouudb";
//findSubstring(str);

// Javascript program to find all substring that
// contain all vowels

// Returns true if x is vowel.
// function isVowel(x) {
//   // Function to check whether a character is
//   // vowel or not
//   return x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
// }

// // Function to FindSubstrings of string
// function findSubstring(str) {
//   let hash = new Set();

//   // To store vowels
//   let start = 0;
//   for (let i = 0; i < str.length; i++) {
//     // If current character is vowel then
//     // insert into hash ,
//     if (isVowel(str[i]) == true) {
//       hash.add(str[i]);

//       // If all vowels are present in current
//       // substring
//       if (hash.size == 5) document.write(str.substring(start, i + 1) + " ");
//     } else {
//       start = i + 1;
//       hash.clear();
//     }
//   }
// }

// // Driver Code
// let str = "aeoibsddaeiouudb";
// findSubstring(str);

function solution(L1, L2) {
  let map = [L1, L2];
  let dp = Array.from({ length: 2 }, () =>
    Array.from({ length: L1.length }, () => 0)
  );
  //console.log(dp);
  const visited = new Set();
  let dx = [0, 1, -1],
    dy = [1, 0, 0];
  let q = [];
  q.push([0, 0]);
  q.push([1, 0]);
  dp[0][0] = barrierNum(map[0][0]);
  dp[1][0] = barrierNum(map[1][0]);
  visited.add("0,0");
  visited.add("1,0");
  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < dx.length; i++) {
      let nx = x + dx[i],
        ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < dp.length && ny < dp[0].length) {
        console.log(nx, ny);
        if (visited.has(`${nx},${ny}`)) continue;
        visited.add(`${nx},${ny}`);
        dp[nx][ny] = Math.min(dp[nx][ny], dp[x][y] + barrierNum(map[nx][ny]));
        q.push([nx, ny]);
      }
    }
  }
  console.log(dp);
}
function barrierNum(x) {
  return x === "x" ? 1 : 0;
}

solution(".xxx...x", "..x.xxxx");
