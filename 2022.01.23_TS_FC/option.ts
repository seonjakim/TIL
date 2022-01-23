// option type
export type Some<A> ={
  readonly _tag: "Some",
  readonly value: A
}

export type None = {
  readonly _tag: "None"
}

export type Option<A> = Some<A> | None

export const some = <A>(value: A): Option<A> => ({ _tag: "Some", value })

export const none = (): Option<never> => ({ _tag: "None" })

export const isSome = <A>(oa: Option<A>): oa is Some<A> => oa._tag === 'Some'
export const isNone = <A>(oa: Option<A>): oa is None => oa._tag === 'None'

export const fromUndefined = <A>(a: A | undefined): Option<A> => {
  if (a === undefined) return none()
  return some(a)
}

export const getOrElse = <A>(oa: Option<A>, defaultValue: A): A => {
  // 값이 없으면 지정된 값을 사용한다.  
  if (isNone(oa)) return defaultValue
  // 값이 있다면 해당 값을 사용한다.
  return oa.value
}
