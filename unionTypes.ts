//union a or b
let union: boolean | number | null | undefined

//okay
union = 5
union = true
union = null
union = undefined
//not okay
// union = 'str'

type p = string | number
const c: p = 'str'
//Literal Types

//str litral
let z: 'pak' | 'newZ' | 'Engl'
z = 'pak'
// z = 'pakistan'
//number literal

let num: 100 | 200 | 300
num = 300
// num = 400 //false
// Hybrid union/literal type

type bio = string | number | string
type bio2 = string | number | boolean

const bioData: bio = 'usman'
const h1: bio2 = 555
const h2: bio2 = true

console.log(bioData)
