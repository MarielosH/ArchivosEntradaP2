console.log("--------------------");
console.log("       GLOBAL       ");
console.log("--------------------");
let numbernumber:number = 5 + 2*2 + 5**5 + 10**2 + 1000/25 - 15**2;
let numberstring:string = 100 + "Usac";
let stringnumber:string = "Usac" + 2500;
let stringstring:string = "Universidad" + " San Carlos";
let stringboolean:string = "Sistemas" + true;
let stringboolean2:string = "Industrial" + false;
let booleanstring:string = true + "Sistemas";
let booleanstring2:string = false + "Industrial";

console.log(numbernumber);
console.log(numberstring);
console.log(stringnumber);
console.log(stringstring);
console.log(stringboolean);
console.log(stringboolean2);
console.log(booleanstring);
console.log(booleanstring2);

const n1:number = 5**3;
const n2:number = (n1+4**3)**3;
let n3:number = ((-(1+1+1+1+1-5-10)+(4*3-n1))+8200*3/10)*3;
let n4:number = n3/8/10;
console.log(n2,n4);

let str1:string = 'ComPi 2';

console.log('FUNCIONES STRING:');
console.log('Concatenacion:');
console.log(str1.concat(' C3D - segundo Proyecto'));
console.log('ToUpperCase:');
console.log(str1.toUpperCase());
console.log('ToLowerCase:');
str1 = str1 + ' SI SALE';
console.log(str1.toLowerCase());
console.log('length:');
console.log(str1.length);

console.log('Concatenacion + :');
console.log('string + string');
console.log(str1 + ' C3D - segundo Proyecto');
console.log('string + numero entero');
console.log('entero = ' + n2);
console.log('string + numero decimal');
console.log('decimal = ' + n4);




if(true){
    if(true){
        console.log("--------------------");
        console.log("       LOCAL         ");
        console.log("--------------------");
        let numbernumber:number = 5 + 2*2 + 5**5 + 10**2 + 1000/25 - 15**2;
        let numberstring:string = 100 + "Usac";
        let stringnumber:string = "Usac" + 2500;
        let stringstring:string = "Universidad" + " San Carlos";
        let stringboolean:string = "Sistemas" + true;
        let stringboolean2:string = "Industrial" + false;
        let booleanstring:string = true + "Sistemas";
        let booleanstring2:string = false + "Industrial";

        console.log(numbernumber);
        console.log(numberstring);
        console.log(stringnumber);
        console.log(stringstring);
        console.log(stringboolean);
        console.log(stringboolean2);
        console.log(booleanstring);
        console.log(booleanstring2);
    }
}
