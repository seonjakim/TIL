import {cart, Item} from './index'

const stockItem = (item: Item): string => {
  let saleText = ''
  let discountPrice = 0

  if (item.discountPrice) {
    saleText = `(${item.discountPrice}원 할인)`
    discountPrice = item.discountPrice
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
  let discountPrice = 0

  if (item.discountPrice) {
    discountPrice = item.discountPrice
  }
  return discountPrice * item.quantitiy
})