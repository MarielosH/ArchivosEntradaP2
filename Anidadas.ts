let v : number = 2;
let w : number = 1;
let x : number = 2;
let y : number = 3;
let z : number = 4;

function p1(a : number, b : number) : void{
    let w : number = 11;
    let x : number = 12;
    let y : number = 13;
    let temp : number = 0;
    function p11() : void{
        let w : number = 21;
        let x : number = 22;
        function p111() : void{
            let w : number = 31;
            if(z == 0) {
                console.log("Local 31 = ",w);
                console.log("Ambito Padre 22 = ",x);
                console.log("Ambito Padre de Padre 13 = ",y);
                console.log("Global 0 = ",z);
                console.log("Parametro por valor de Padre de Padre 1 = ",a);
                console.log("Parametro por referencia de Padre de Padre 2 = ",b);
                b = 1000;
                funcion_global();
                return;
            }
            z--;
            p111();
        }

       
        y = 13;
        p111();
        p1(1,x);
    }
    if(v > 0){
        v--;
        temp = v;
        console.log("****** Iteracion: ", temp);
        p11();
        console.log("****** Fin iteracion: ", temp);
    }
}

function p11() : void{
    console.log('Aqui no debe entrar');
}

function funcion_global() : void{
    console.log('Llamada global');
}

let m: number=1;
p1(m,x);
