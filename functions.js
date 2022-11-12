// Function type annotations
//function name(a:type,b:type)returnType{...body of the function}
function getAverage(a, b, c) {
    var total = a + b + c;
    var average = total / 3;
    return "the average is ".concat(average);
}
var average = getAverage(5, 5, 5);
// console.log(average)
// Optional paramters c?:number
function getAverageOptoinal(a, b, c) {
    if (typeof c !== 'undefined') {
        var total = a + b + c;
        var average_1 = total / 3;
        return "the average is ".concat(average_1);
    }
    else {
        var total = a + b;
        var average_2 = total / 2;
        return "the average is ".concat(average_2);
    }
}
// const value = getAverageOptoinal(4, 5)
// console.log(value)
//defaulst parameters
function defaulsPara(a, b) {
    if (a === void 0) { a = 3; }
    if (typeof b === 'undefined')
        return a;
    return a + b;
}
var ax = defaulsPara(5);
var bx = defaulsPara(5, 5);
// console.log(ax)
// console.log(bx)
//Rest Parameters
var ar = [4, 6, 2];
var add = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var re = 0;
    for (var i = 0; i < a.length; i++) {
        re += a[i];
    }
    return re;
};
var az = add.apply(void 0, ar);
console.log(az, 'az');
