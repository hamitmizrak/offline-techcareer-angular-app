//  npm run tsc_nodemon


// Data Type (Temel Tipler)
console.log(" ")
console.log(" Temel Tipler ")

// 1-) Boolean
let isLogin: boolean = false;
console.log("Login mi ? " + isLogin);


// 2-) Number
let dataValue1: number = 44;
console.log("dataValue1: " + dataValue1);

let decimalValue: number = 15;
console.log(decimalValue);

let hexValue: number = 0xff19;
console.log(hexValue);

let binaryValue: number = 0b1011100;
console.log(binaryValue);

let octalValue: number = 0o777;
console.log(octalValue);


// 3-) String
let dataValue2: string = "Deneme";
console.log("dataValue2: " + dataValue2);


// 4-) Tuple: Dizide belirlediğimiz sırada data yaz
let tupleValue: [string, number];
tupleValue = ["Hamit", 44];
console.log(tupleValue);


// 5-) null, undefined 
let nulValue: null = null;
console.log(nulValue);

let undeValue: undefined = undefined;
console.log(undeValue);


// 6-) Any: Herhangi bir türdeki verileri kabul eder
let anyValue: any = 99;
console.log(anyValue);
anyValue = "Ben bir string"
console.log(anyValue);
anyValue = true;
console.log(anyValue);

let dataUnknown: unknown = 44
console.log("dataUnknown: " + dataUnknown);
dataUnknown = "str"
console.log("dataUnknown: " + dataUnknown);
dataUnknown = true;
console.log("dataUnknown: " + dataUnknown);


// 7-) Never: Hiçbir değerin olmayacağını gösterir.
// Hata fırlatmalarda kullanıyoruz.
function error(message: String): never {
    throw new Error(message);
}


// 8-) Union Type: Birden fazla tür eklemek istediğimizde
let unionTypeValue: string | number | boolean;
unionTypeValue = "ts öğreniyorum";
console.log(unionTypeValue);
unionTypeValue = 44;
console.log(unionTypeValue);
unionTypeValue = false;
console.log(unionTypeValue);


// 9-) Void:fonksiyon dönüş değeri olmasın
function normalFnc(): void {
    console.log("Normal Fonksiyon");
    // Hata: return dataValue1;
}
normalFnc();

const anonymousFnc = function (): void {
    console.log("anonymousFnc Fonksiyon");
    // Hata: return dataValue1;
}
anonymousFnc();

const arrowFnc = (): void => {
    console.log("arrowFnc Fonksiyon");
    // Hata: return dataValue1;
}
arrowFnc()

// 10-) Enum:  sabit listeler
enum WeekDay {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}
let enumValue: WeekDay = WeekDay.Tuesday;
console.log("enum value: " + enumValue);
console.log("enum value: " + WeekDay.Sunday);

////////////////////////////////////////////////////

// 11-) Array
// let computer:[]=[]
// let dataValue3:[]=[1,2,3,"Malatya",true,44.34];
// let dataValue3:number[]=[1,2,3];
let dataValue3: Array<number> = [12, 29, 35];
dataValue3[3]=99999;
console.log(dataValue3);
console.log(dataValue3[0]);
for (let i = 0; i < dataValue3.length; i++) {
    console.log(dataValue3[i]);
}

for (let temp in dataValue3) {
    console.log(temp + " " + dataValue3[temp]);
}

for (let temp of dataValue3) {
    console.log(temp);
}

////////////////////////////////////////////////////
// 12-) Object
const objectValue=()=>{
console.log("OBJECT ******");
let computer:{
    computerName:string,
    trade:string,
    newVersion:boolean,
    dataValue3: Array<number>
}={
    computerName:"Laptop",
    trade:"PC",
    newVersion:true,
    dataValue3: [12, 29, 35]
}

console.log(computer);
console.log(computer.computerName);
console.log(computer.trade);
console.log(computer.dataValue3);

}
objectValue()

////////////////////////////////////////////////////
// FUNCTIONS 
function sumReturn(data1: number, data2: any) {
    return data1 + data2
}
const data = sumReturn(3, 4);
console.log(data);

function sumVoid(data1: number, data2: any): void {
    console.log("data1: " + data1 + " data2:" + data2 + " toplamları:" + (data1 + data2));
    console.log(`data1: ${data1} data2:${data2} toplamları:${(data1 + data2)}`);
}
const data2 = sumVoid(3, 15);
console.log(data2);

// ? parametre ister ver ister verme
function isNoParam(data1: number, data2: number, data3?: number) {
    return data1 + data2;
}
let result2 = isNoParam(1, 2, 3);
console.log("? Param Fonksiyon:" + result2);
result2 = isNoParam(1, 9);
console.log("? Param Fonksiyon:" + result2);


////////////////////////////////////////////////////
// Rest Parameters
function sumRest(...sayilar: number[]): number {
    return sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
}
const resultRest = sumRest(1, 2, 3, 4);
console.log(resultRest);

////////////////////////////////////////////////////
// Conditional 

// Ternary
const conFunction = function () {
    const numValue = 15;

    // if else
    if (numValue > 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }

    // Ternary
    let result = (numValue > 0) ? "Positive" : "Negative";
    console.log(result);
}
conFunction()

const conFunction2 = function () {
    const number: number = 5;
    if (number == 0) {
        console.log("sayı 0");
    } else if (number === 1) {
        console.log("sayı 1");
    } else if (number === 3) {
        console.log("sayı 3");
    } else if (number === 2) {
        console.log("sayı 2");
    } else if (number === 4) {
        console.log("sayı 4");
    } else if (number === 5) {
        console.log("sayı 5");
    } else {
        console.log("0<=SAYI<=5 dışındadır");
    }
}
conFunction2();

const conFunction3 = function () {
    const numberData: number = 5;
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
}
conFunction3()

////////////////////////////////////////////////////
// Loop 
const forLoopFunc = () => {
    for (let i = 1; i <= 9; i++) {
        document.write(i)
    }
    document.writeln("</br>")
}
forLoopFunc()

const whileLoopFunc = () => {
    let k:number = 1;
    while ( k <= 9) {
        document.write(k)
        k++;
    }
    document.writeln("</br>")
}
whileLoopFunc()

const doWhileLoopFunc = () => {
    let i:number = 1;
    do{
       document.write(i)
        i++
    } while ( i <= 9);
    document.writeln("</br>")
}
doWhileLoopFunc()

////////////////////////////////////////////////////
// DATE  
const dateNow = (date: Date): void => {
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    console.log(`${hours}:${minutes}:${seconds}`);
}
const date = new Date();
dateNow(date);

////////////////////////////////////////////////////
// Math  
const mathFunction = (): void => {
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
}
mathFunction()

////////////////////////////////////////////////////
// STRING
let dataString = (): void => {
    const vocabulary = "typescript ÖĞRENiyorum typescript ";
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
}
dataString()


////////////////////////////////////////////////////
////////////////////////////////////////////////////

// CLASS

// GENERICS

// INHERITANCE

// ABSTRACT 

// INTERFACE