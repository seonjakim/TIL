// Partial Application  부분적용
// 인자가 여러 개인 함수의 전체 인자 중에
// 인자 몇 개를 고정하여 더 작은 개수의
// 인자를 가지는 또 다른 함수를 생성하는 프로세스

const delivery = (present: string, from: string, to: string) => {
  return `
    보내는 물건: ${present}
    보내는 사람: ${from}
    받는 사람: ${to}
  `;
};

const curry =
  <A, B, C, D>(f: (a: A, b: B, c: C) => D) =>
  (a: A) =>
  (b: B) =>
  (c: C) =>
    f(a, b, c);

const curriedDelivery = curry(delivery);

export const main = () => {
  console.clear();

  const momsPresent = curriedDelivery("상품권")("엄마");
  console.log(momsPresent("아들"));
};
