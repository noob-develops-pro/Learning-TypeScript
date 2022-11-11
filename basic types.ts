// primitive type annotation
const a = 5 //a is considered as number
const myname: string = 'Usman'
const age: number = 25
const isAlive: boolean = true
// array of string
const names: string[] = ['imran', 'Nick', 'Rebecca', 'Lily']
//arr of numbers
// function annotation with parameter type annotation and return type annotation
let greetings: (x: string) => void
greetings = function (x) {
  console.log(x)
}
// object type annotation

let person: { name: string; heightInCentimeters: number }
// Implementation of a person object
person = {
  name: 'Mark',
  heightInCentimeters: 183,
}
