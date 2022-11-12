// hard coded values strting from zero can be assigned vales to them , can be accessed using index
var vhicalType;
(function (vhicalType) {
    vhicalType[vhicalType["padalCycle"] = 0] = "padalCycle";
    vhicalType[vhicalType["motorCycle"] = 1] = "motorCycle";
    vhicalType[vhicalType["car"] = 2] = "car";
    vhicalType[vhicalType["lorry"] = 3] = "lorry";
})(vhicalType || (vhicalType = {}));
var lory = vhicalType.lorry;
// console.log(lory)
// console.log(vhicalType[3])
var colorValues;
(function (colorValues) {
    colorValues[colorValues["red"] = 10] = "red";
    colorValues[colorValues["green"] = 20] = "green";
    colorValues[colorValues["yellow"] = 30] = "yellow";
})(colorValues || (colorValues = {}));
// const enum don't allow index based access
// let laptop: string = enumConstant['mouse']
// let mouse: string = enumConstant[0]
// console.log(laptop)
