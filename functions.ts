// Function type annotations
//function name(a:type,b:type)returnType{...body of the function}
function getAverage(a: number, b: number, c: number): string {
  const total = a + b + c
  const average = total / 3
  return `the average is ${average}`
}
const average = getAverage(5, 5, 5)
// console.log(average)
// Optional paramters c?:number
function getAverageOptoinal(a: number, b: number, c?: number): string {
  if (typeof c !== 'undefined') {
    const total = a + b + c
    const average = total / 3
    return `the average is ${average}`
  } else {
    const total = a + b
    const average = total / 2
    return `the average is ${average}`
  }
}
// const value = getAverageOptoinal(4, 5)
// console.log(value)
//defaulst parameters

function defaulsPara(a: number = 3, b?: number): number {
  if (typeof b === 'undefined') return a
  return a + b
}

const ax = defaulsPara(5)
const bx = defaulsPara(5, 5)
// console.log(ax)
// console.log(bx)

//Rest Parameters
let ar: number[] = [4, 6, 2]
const add = (...a: number[]) => {
  let re: number = 0
  for (let i = 0; i < a.length; i++) {
    re += a[i]
  }
  return re
}

let az: number = add(...ar)
console.log(az, 'az')
