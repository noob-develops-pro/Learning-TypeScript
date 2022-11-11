//interface and types
//interface is batter then type alias choose interface
interface personInterface {
  name: string
  age: number
}

const anotherPerson: personInterface = {
  name: 'usman',
  age: 25,
}

const firstPerson: personInterface = {
  name: 'first person',
  age: 25,
}
// console.log(anotherPerson)
// console.log(firstPerson)

// defining type

type personType = {
  fName: string
  address: string | number
}

const typePerson: personType = {
  fName: 'first name',
  address: 'can be number or string',
}

console.log(typePerson)
