// hard coded values strting from zero can be assigned vales to them , can be accessed using index
enum vhicalType {
  padalCycle,
  motorCycle,
  car,
  lorry,
}
const lory: vhicalType = vhicalType.lorry
// console.log(lory)
// console.log(vhicalType[3])
enum colorValues {
  red = 10,
  green = 20,
  yellow = 30,
}
//get values of color green
// console.log(colorValues['green'])

const enum enumConstant {
  mouse = 5,
  laptop,
  charger,
  keyboard,
}
// const enum don't allow index based access
// let laptop: string = enumConstant['mouse']
// let mouse: string = enumConstant[0]
// console.log(laptop)
