//  npm run tsc_nodemon
// Data Type (Temel Tipler)
console.log(" ");
console.log(" Temel Tipler ");
// 1-) Boolean
var isLogin = false;
console.log("Login mi ? " + isLogin);
// 2-) Number
var dataValue1 = 44;
console.log("dataValue1: " + dataValue1);
var decimalValue = 15;
console.log(decimalValue);
var hexValue = 0xff19;
console.log(hexValue);
var binaryValue = 92;
console.log(binaryValue);
var octalValue = 511;
console.log(octalValue);
// 3-) String
var dataValue2 = "Deneme";
console.log("dataValue2: " + dataValue2);
// 4-) Tuple: Dizide belirlediğimiz sırada data yaz
var tupleValue;
tupleValue = ["Hamit", 44];
console.log(tupleValue);
// 5-) null, undefined 
var nulValue = null;
console.log(nulValue);
var undeValue = undefined;
console.log(undeValue);
// 6-) Any: Herhangi bir türdeki verileri kabul eder
var anyValue = 99;
console.log(anyValue);
anyValue = "Ben bir string";
console.log(anyValue);
anyValue = true;
console.log(anyValue);
var dataUnknown = 44;
console.log("dataUnknown: " + dataUnknown);
dataUnknown = "str";
console.log("dataUnknown: " + dataUnknown);
dataUnknown = true;
console.log("dataUnknown: " + dataUnknown);
// 7-) Never: Hiçbir değerin olmayacağını gösterir.
// Hata fırlatmalarda kullanıyoruz.
function error(message) {
    throw new Error(message);
}
// 8-) Union Type: Birden fazla tür eklemek istediğimizde
var unionTypeValue;
unionTypeValue = "ts öğreniyorum";
console.log(unionTypeValue);
unionTypeValue = 44;
console.log(unionTypeValue);
unionTypeValue = false;
console.log(unionTypeValue);
// 9-) Void:fonksiyon dönüş değeri olmasın
function normalFnc() {
    console.log("Normal Fonksiyon");
    // Hata: return dataValue1;
}
normalFnc();
var anonymousFnc = function () {
    console.log("anonymousFnc Fonksiyon");
    // Hata: return dataValue1;
};
anonymousFnc();
var arrowFnc = function () {
    console.log("arrowFnc Fonksiyon");
    // Hata: return dataValue1;
};
arrowFnc();
// 10-) Enum:  sabit listeler
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Monday"] = 1] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
    WeekDay[WeekDay["Friday"] = 5] = "Friday";
    WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
    WeekDay[WeekDay["Sunday"] = 7] = "Sunday";
})(WeekDay || (WeekDay = {}));
var enumValue = WeekDay.Tuesday;
console.log("enum value: " + enumValue);
console.log("enum value: " + WeekDay.Sunday);
////////////////////////////////////////////////////
// 11-) Array
// let computer:[]=[]
// let dataValue3:[]=[1,2,3,"Malatya",true,44.34];
// let dataValue3:number[]=[1,2,3];
var dataValue3 = [12, 29, 35];
dataValue3[3] = 99999;
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
////////////////////////////////////////////////////
// 12-) Object
var objectValue = function () {
    console.log("OBJECT ******");
    var computer = {
        computerName: "Laptop",
        trade: "PC",
        newVersion: true,
        dataValue3: [12, 29, 35]
    };
    console.log(computer);
    console.log(computer.computerName);
    console.log(computer.trade);
    console.log(computer.dataValue3);
};
objectValue();
////////////////////////////////////////////////////
// FUNCTIONS 
function sumReturn(data1, data2) {
    return data1 + data2;
}
var data = sumReturn(3, 4);
console.log(data);
function sumVoid(data1, data2) {
    console.log("data1: " + data1 + " data2:" + data2 + " toplamları:" + (data1 + data2));
    console.log("data1: ".concat(data1, " data2:").concat(data2, " toplamlar\u0131:").concat((data1 + data2)));
}
var data2 = sumVoid(3, 15);
console.log(data2);
// ? parametre ister ver ister verme
function isNoParam(data1, data2, data3) {
    return data1 + data2;
}
var result2 = isNoParam(1, 2, 3);
console.log("? Param Fonksiyon:" + result2);
result2 = isNoParam(1, 9);
console.log("? Param Fonksiyon:" + result2);
////////////////////////////////////////////////////
// Rest Parameters
function sumRest() {
    var sayilar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sayilar[_i] = arguments[_i];
    }
    return sayilar.reduce(function (toplam, sayi) { return toplam + sayi; }, 0);
}
var resultRest = sumRest(1, 2, 3, 4);
console.log(resultRest);
////////////////////////////////////////////////////
// Conditional 
// Ternary
var conFunction = function () {
    var numValue = 15;
    // if else
    if (numValue > 0) {
        console.log("Positive");
    }
    else {
        console.log("Negative");
    }
    // Ternary
    var result = (numValue > 0) ? "Positive" : "Negative";
    console.log(result);
};
conFunction();
var conFunction2 = function () {
    var number = 5;
    if (number == 0) {
        console.log("sayı 0");
    }
    else if (number === 1) {
        console.log("sayı 1");
    }
    else if (number === 3) {
        console.log("sayı 3");
    }
    else if (number === 2) {
        console.log("sayı 2");
    }
    else if (number === 4) {
        console.log("sayı 4");
    }
    else if (number === 5) {
        console.log("sayı 5");
    }
    else {
        console.log("0<=SAYI<=5 dışındadır");
    }
};
conFunction2();
var conFunction3 = function () {
    var numberData = 5;
    switch (numberData) {
        case 0:
            console.log("sayı 0");
            break;
        case 1:
            console.log("sayı 1");
            break;
        case 4:
            console.log("sayı 4");
            break;
        case 5:
            console.log("sayı 5");
            break;
        case 2:
            console.log("sayı 2");
            break;
        case 3:
            console.log("sayı 3");
            break;
        default:
            console.log("0<=SAYI<=5 dışındadır");
            break;
    }
};
conFunction3();
////////////////////////////////////////////////////
// Loop 
var forLoopFunc = function () {
    for (var i = 1; i <= 9; i++) {
        document.write(i);
    }
    document.writeln("</br>");
};
forLoopFunc();
var whileLoopFunc = function () {
    var k = 1;
    while (k <= 9) {
        document.write(k);
        k++;
    }
    document.writeln("</br>");
};
whileLoopFunc();
var doWhileLoopFunc = function () {
    var i = 1;
    do {
        document.write(i);
        i++;
    } while (i <= 9);
    document.writeln("</br>");
};
doWhileLoopFunc();
////////////////////////////////////////////////////
// DATE  
var dateNow = function (date) {
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    console.log("".concat(hours, ":").concat(minutes, ":").concat(seconds));
};
var date = new Date();
dateNow(date);
////////////////////////////////////////////////////
// Math  
var mathFunction = function () {
    console.log(Math.PI);
    console.log(Math.E);
    console.log(Math.min(3, 9, 4, 99, -100));
    console.log(Math.max(3, 9, 4, 99, -100));
    console.log(Math.ceil(4.1));
    console.log(Math.floor(3.9));
    console.log(Math.round(1.5));
    console.log(Math.round(1.4));
    console.log(Math.random() * 9 + 1);
    console.log(Math.ceil(Math.random() * 9 + 1));
    console.log(Math.pow(2, 5));
    console.log(Math.sqrt(25));
    console.log(Math.abs(-56));
    console.log(Math.sin(Math.PI / 2));
};
mathFunction();
////////////////////////////////////////////////////
// STRING
var dataString = function () {
    var vocabulary = "typescript ÖĞRENiyorum typescript ";
    console.log(vocabulary);
    console.log(vocabulary.length);
    console.log(vocabulary.trim().length);
    console.log(vocabulary.toLocaleLowerCase());
    console.log(vocabulary.toUpperCase());
    console.log(vocabulary.indexOf("typescript"));
    console.log(vocabulary.lastIndexOf("typescript"));
    console.log(vocabulary.startsWith("t"));
    console.log(vocabulary.endsWith(" "));
    console.log(vocabulary.substring(2));
    console.log(vocabulary.substring(2, 5)); //2<=DATA<=5-1
    vocabulary = vocabulary.concat("sona ekle");
    console.log(vocabulary);
    console.log(vocabulary.replace(vocabulary, " değiştirXYZ"));
};
dataString();
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// CLASS
// GENERICS
// INHERITANCE
// ABSTRACT 
// INTERFACE
