//  npm run tsc_nodemon
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// OOP 
// CLASS
var Computer = /** @class */ (function () {
    // Constructur
    function Computer(cpu, mainboard, isNewVersion) {
        this.cpu = cpu;
        this.mainboard = mainboard;
        this.isNewVersion = isNewVersion;
    }
    // Function
    Computer.prototype.computerAllInformation = function () {
        console.log("CPU: ".concat(this.cpu, ", Mainboard: ").concat(this.mainboard, ", IsNewVersion: ").concat(this.isNewVersion));
    };
    Object.defineProperty(Computer.prototype, "getCpu", {
        /////////////////////////////////////////////
        // Getter and Setter
        // Cpu
        get: function () {
            return this.cpu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computer.prototype, "setCpu", {
        set: function (cpu) {
            this.cpu = cpu;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computer.prototype, "getMainboard", {
        // Get Set Mainboard
        get: function () {
            return this.mainboard;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computer.prototype, "setMainboard", {
        set: function (mainboard) {
            this.mainboard = mainboard;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computer.prototype, "getIsNewVersion", {
        // Get Set NewVersion 
        get: function () {
            return this.isNewVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computer.prototype, "setIsNewVersion", {
        set: function (isNewVersion) {
            this.isNewVersion = isNewVersion;
        },
        enumerable: false,
        configurable: true
    });
    return Computer;
}());
// cpu:number, mainboard:string, isNewVersion:boolean
// 1.Instance (Computer)
var computerInstance = new Computer(5, "mainboard XKL78", true);
console.log(computerInstance);
computerInstance.computerAllInformation();
// 1.Instance (Computer)
var computerInstance2 = new Computer(5, "mainboard XKL78", true);
computerInstance2.setCpu = 1;
computerInstance2.setMainboard = "GTX 4090";
computerInstance2.setIsNewVersion = false;
console.log(computerInstance2.getCpu);
console.log(computerInstance2.getIsNewVersion);
console.log(computerInstance2.getMainboard);
console.log("/////////////////////////////");
/////////////////////////////////////////////////////////////////
// GENERICS
var Computer2 = /** @class */ (function () {
    function Computer2() {
    }
    return Computer2;
}());
var computerValue1 = new Computer2();
computerValue1.cpu = "generics CPU 4.5GHZ";
computerValue1.mainboard = "generics Mainboard GTX963";
computerValue1.isNewVersion = "generics 14 Gen";
console.log(computerValue1);
console.log(computerValue1.cpu);
console.log(computerValue1.mainboard);
console.log(computerValue1.isNewVersion);
/////////////////////////////////////////////////////////////////
// INHERITANCE
var Msi = /** @class */ (function (_super) {
    __extends(Msi, _super);
    function Msi(cpu, mainboard, isNewVersion) {
        return _super.call(this, cpu, mainboard, isNewVersion) || this;
    }
    return Msi;
}(Computer));
// Inheritance super class new verebilirsiniz
var dataComputer = new Computer(9, "msi-mainboard XKL78", false);
var msiComputer = new Msi(9, "msi-mainboard XKL78", false);
console.log(msiComputer);
msiComputer.computerAllInformation();
/////////////////////////////////////////////////////////////////
// ABSTRACT 
// Gövdeli+Gövdesiz Method
var Car = /** @class */ (function () {
    // Constructur
    function Car(carPrice, carVersion, carModel) {
        this.carPrice = carPrice;
        this.carVersion = carVersion;
        this.carModel = carModel;
    }
    // Function (Gövdeli)
    Car.prototype.carAllInformation = function () {
        console.log("carPrice: ".concat(this.carPrice, ", carVersion: ").concat(this.carVersion, ", carModel: ").concat(this.carModel));
    };
    Object.defineProperty(Car.prototype, "getCarPrice", {
        /////////////////////////////////////////////
        // Getter and Setter
        // carPrice
        get: function () {
            return this.carPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setCarPrice", {
        set: function (carPrice) {
            this.carPrice = carPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getCarVersion", {
        // Get Set CarVersion
        get: function () {
            return this.carVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setCarVersion", {
        set: function (carVersion) {
            this.carVersion = carVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "getCarModel", {
        // Get Set NewVersion 
        get: function () {
            return this.carModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "setCarModel", {
        set: function (carModel) {
            this.carModel = carModel;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(carPrice, carVersion, carModel) {
        return _super.call(this, carPrice, carVersion, carModel) || this;
    }
    Audi.prototype.carVersionAndModel = function () {
        console.log("Car Version: ");
    };
    return Audi;
}(Car));
// Abstract super class new veremezsiniz.
// Gövdeli ve Gövdesiz metotlar
// const carData= new Car(9,"msi-mainboard XKL78",false);
//carPrice:number, carVersion:string, carModel:string
var audiCar = new Audi(50, "Version 44", "A3");
console.log(audiCar);
audiCar.carAllInformation();
function getPrice(iComputer) {
    console.log("Computer: " + iComputer.mainboard);
}
getPrice({ cpu: 5, mainboard: "Main XYZ89", isNewVersion: true });
var ComputerInterface = /** @class */ (function () {
    function ComputerInterface(cpu, mainboard, isNewVersion) {
        this.cpu = cpu;
        this.mainboard = mainboard;
        this.isNewVersion = isNewVersion;
    }
    return ComputerInterface;
}());
