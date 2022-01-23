import * as O from './option'

const stockItem = (item: Item): string => {
  const optionDiscountPrice = O.fromUndefined(item.discountPrice)
  const discountPrice = O.getOrElse(optionDiscountPrice, 0)
  let saleText = ''

  if (O.isSome(optionDiscountPrice)) {
    saleText = `(${discountPrice}원 할인)`
  }
  return `
    <li>
      <h2>${item.name}</h2>
      <div>가격: ${item.price - discountPrice}원 ${saleText}</div>
      <div>수량: ${item.quantity}</div>
    </li>
  `
}

const totalDiscountPrice = totalCalculator(list, (item) => {
  // item.discountPrice |> O.fromUndefined($) |> O.getOrElse($, 0)
  let discountPrice = 0

  if (item.discountPrice) {
    discountPrice = item.discountPrice
  }
  return discountPrice * item.quantitiy
})