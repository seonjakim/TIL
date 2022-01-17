// object
// premitive type을 못 넣도록 하는 용도
const obj: object = {}

// tuple
let x: [string, number]

x = ["hello", 39]

const person: [string, number] = ["Mark", 39]

const [first, second] = person

// structural type system :  구조가 같으면 같은 타입이다.

interface IPerson {
  name: string
  age: number
  speak(): string
}

type PersonType = {
  name: string
  age: number
  speak(): string
}

let personInterface: IPerson = {} as any
let personType: PersonType = {} as any

personInterface = personType
personType = personInterface

// nominal type system : 구조가 같아도 이름이 다르면 다른 타입이다.
type PersonID = string & { readonly brand: unique symbol }

function PersonID(id: string): PersonID {
  return id as PersonID
}

function getPersonById(id: PersonID) {}

getPersonById(PersonID('id-aaaaa'))
getPersonById('id-aaaaa') //  error TS2345: Argument of type 'string' 
// is not assignable to parameter of type 'PersonID'. Type 'string' is not
// assignable to type '{ readonly brand: unique symbol }'.