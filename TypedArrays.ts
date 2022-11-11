interface myArr {
  name: string
  age: number
  address: string | number
}

const data: myArr[] = []

data.push({ name: 'usman', age: 20, address: 'xyz' })
data.push({ name: 'usman', age: 30, address: 'xyz' })
data.push({ name: 'usman', age: 40, address: 'xyz' })
data.push({ name: 'usman', age: 50, address: 'xyz' })

const compareFun = (a: myArr, b: myArr) => {
  if (a.age > b.age) {
    return -1
  } else if (a.age < b.age) {
    return 1
  }
  return 0
}

const sortedByAge = data.sort(compareFun)
console.log(sortedByAge)
