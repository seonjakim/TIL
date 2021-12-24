// for문을 functional programing적으로
function loop(fn, acc, list) {
  if (list.length === 0) return acc

  const [head, ...tail] = list
  return loop(fn, fn(acc, head), tail)
}

const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, index) => index + start)

const plus = (a, b) => a + b

console.log(loop(plus, 0, range(1, 100))) // 5050

/**
 * 명확하고 순수한 effect
 * 효과와 계산이 직교하게 분리
 * 재사용하기 쉬운 추상화
 * 단순하고 일관된 인터페이스
 *
 * 핵심개념
 * - 함수를 합성해서 복잡한 프로그램을 쉽게 만들기
 * - 부수효과를 공통적인 방법으로 추상화
 *
 * 부수효과 (side effect)
 * - 반환 값으로는 알 수 없는 외부의 상태를 변경하거나 예상치 못한 작용을 하는 것
 *
 * 순수함수 (pure function)
 * - 똑같은 매개변수(입력)를 받으면 항상 같은 값을 반환하는 함수
 */

/**
 * 명령형 프로그래밍은 계산을 어떻게 할 것인지에 촛점을 맞춤
 * html의 변경으로 html이 re-rendering되지만 js파일 자체가 전부 실행되기보단 re-rendering된 부분과
 * 관련된 부분만 재실행됨. 이 경우 전역변수라는 부수효과는 초기화가 되지 않기때문에 값이 중첩되는 문제가 있음.
 */
