function priceOfTomato() {
  return 7000
}

function priceOfOrange() {
  return 15000
}

function priceOfApple() {
  return 10000
}

function getPrice(name: string) {
  if (name === 'tomato') return 7000
  else if (name === 'orange') return 15000
  else if (name === 'apple') return 10000
}

const priceOfFruit = {
  tomato: 7000,
  orange: 15000,
  apple: 10000
}

function list1() {
  return priceOfApple() + priceOfOrange() + priceOfTomato()
}

function list2() {
  // 2 boxes of Tomato
  return priceOfTomato() + priceOfTomato()
}

function list3() {
  // 100 boxes of Orange
  return priceOfOrange() * 100
}