// Data Type (Temel Tipler)
console.log(" ");
console.log(" Temel Tipler ");
// 1-) Boolean
var isLogin = false;
console.log("Login mi ? " + isLogin);
// 2-) Number
var dataValue1 = 44;
console.log("dataValue1: " + dataValue1);
// 3-) String
var dataValue2 = "Deneme";
console.log("dataValue2: " + dataValue2);
// 5-) Tuple: Dizide belirlediğimiz sırada data yaz
var tupleValue;
tupleValue = ["Hamit", 44];
console.log(tupleValue);
// 6-) Any: Herhangi bir türdeki verileri kabul eder
var anyValue = 99;
console.log(anyValue);
anyValue = "Ben bir string";
console.log(anyValue);
anyValue = true;
console.log(anyValue);
// 4-) Array
//let dataValue3:[]=[1,2,3,"Malatya",true,44.34];
//let dataValue3:number[]=[1,2,3];
var dataValue3 = [12, 29, 35];
console.log(dataValue3);
console.log(dataValue3[0]);
for (var i = 0; i < dataValue3.length; i++) {
    console.log(dataValue3[i]);
}
for (var temp in dataValue3) {
    console.log(temp + " " + dataValue3[temp]);
}
for (var _i = 0, dataValue3_1 = dataValue3; _i < dataValue3_1.length; _i++) {
    var temp = dataValue3_1[_i];
    console.log(temp);
}
