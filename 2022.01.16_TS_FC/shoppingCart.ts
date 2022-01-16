const stockItem = (item: Item): string => {

}

const outOfStockItem = (item: Item): string => {

}

const totalCalculator = (list: Array<Item>, getValue: (item: Item) => number) => {
  let total = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i].outOfStock === false) {
      total += getValue(list[i])
    }
  }
  return total
}
// refactor
// 기능 정리 : 전체 목록 중 재고가 있는 상품만 getValue를 실행하고 그 갑을 모두 더한다.
// 1. 재고가 있는 상품만 분류하기
// 2. 분류된 상품들에 대해서 getValue 실행하기
// 3. getValue가 실행된 값 모두 더하기
const totalCalculator = (list: Array<Item>, getValue: (item: Item) => number) => {
  return list.filter(item => item.outOfStock === false)
  .map(getValue)
  .reduce((total, value) => total + value, 0)
}

const totalCount = (list: Array<Item>): string => {
  const totalCount = totalCalculator(list, (item) => item.quantitiy)
  return `<h2>전체 수량: ${totalCount}</h2>`
}

const totalPrice = (list: Array<Item>): string => {
  const totalPrice = totalCalculator(list, (item) => item.price * item.quantitiy)
  return `<h2>전체 가격: ${totalPrice}</h2>`
}