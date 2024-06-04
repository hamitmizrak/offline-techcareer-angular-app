// Data Type (Temel Tipler)
console.log(" ")
console.log(" Temel Tipler ")

// 1-) Boolean
let isLogin:boolean=false;
console.log("Login mi ? "+isLogin);

// 2-) Number
let dataValue1:number=44;
console.log("dataValue1: "+dataValue1);

// 3-) String
let dataValue2:string="Deneme";
console.log("dataValue2: "+dataValue2);


// 5-) Tuple: Dizide belirlediğimiz sırada data yaz
let tupleValue:[string,number];
tupleValue=["Hamit",44];
console.log(tupleValue);

// 6-) Any: Herhangi bir türdeki verileri kabul eder
let anyValue:any=99;
console.log(anyValue);
anyValue="Ben bir string"
console.log(anyValue);
anyValue=true;
console.log(anyValue);

// 4-) Array
//let dataValue3:[]=[1,2,3,"Malatya",true,44.34];
//let dataValue3:number[]=[1,2,3];
let dataValue3:Array<number>=[12,29,35];
console.log(dataValue3);
console.log(dataValue3[0]);
for (let i = 0; i < dataValue3.length; i++) {
    console.log(dataValue3[i]);
}

for (let temp in dataValue3) {
    console.log(temp+" "+dataValue3[temp]);
}

for (let temp of dataValue3) {
    console.log(temp);
}
