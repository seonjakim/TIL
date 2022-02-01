// Option<A>
// 에러가 발생했다는 사실만 중요할 때
// Try<E, R>
// 어떤 에러가 발생했는지 그 내용도 중요할 때

const validateItem = (item: Item) => {
  if (item.quantity < 1) throw new Error("상품은 반드시 한 개 이상 담아야 합니다.")
  else if (item.quantity > 10) throw new Error("한 번에 10개를 초과하여 구매할 수 없습니다.")
}