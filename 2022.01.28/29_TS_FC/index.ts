export const fromUndefined = <A>(a: A | undefined): Option<A> => {
  if (a === undefined) return none();
  return some(a);
};

export const getOrElse = <A>(oa: Option<A>, defaultValue: A): A => {
  // 값이 없으면 지정된 값을 사용한다.
  if (isNone(oa)) return defaultValue;
  // 값이 있다면 해당 값을 사용한다.
  return oa.value;
};

export const map = <A, B>(oa: Option<A>, f: (a: A) => B): Option<B> => {
  // 값이 없으면 값이 없는 상태를 유지한다.
  if (isNone(oa)) return oa;
  // 값이 있으면 값을 함수에 적용한다.
  return some(f(oa.value));
};

export const mapOrElse = <A, B>(oa: Option<A>, f: (a: A) => B, defaultValue: B): B => {
  return getOrElse(map(oa, f), defaultValue);
};
