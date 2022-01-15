/** 제네릭 */
const isNumber = (n: number) => {
  return n 
}

const isString = (s: string) => {
  return s
}

const isBoolean = (b: boolean) => {
  return b
}

const id = <T>(x: T) => {
  return x
}

const isExpensive = (price: number | undefined) => {
  if (price === undefined) return false
  return price > 10000
}

function isExpensivePrice(name: string): boolean {
  return isExpensive(getPrice(name))
}

const compose = (g: (y: number | undefined) => boolean, f: (s: string) => number | undefined) => (x: string) => {
  return g(f(x))
}

const compose = <A, B, C>(g: (y: B) => C, f: (s: A) => B) => (x: A) => {
  return g(f(x))
}

// <A, B, C>((B) => C, (A) => B) => (A) => C
