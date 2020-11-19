let param: boolean=true;

console.log("------------- Ciclos -------------------");
    let iter: number = 0;
    let str2: string = "DO WHILE\n";
    do {
        iter++;
        if (iter > 0 && iter <= 5) {
            str2 = str2 + "\tCINCO VECES ESTO\n";
        }
        if (iter > 5 && iter <= 10) {
            if (iter == 6) {
                str2 = str2 + "\t";
            }
            str2 = str2 + iter + " ";
            if (iter == 10) {
                str2 = str2 + "\n";
            }
        }
        if (iter > 10 && iter <= 15) {
            if (iter == 11) {
                str2 = str2 + "\t";

            }
            str2 = str2 + (iter + 1) + " ";
        }
    } while (iter < 15 && param);
    console.log(str2);

    console.log('------------ WHILE ANIDADO ---------------');
    iter = 0;
    let iter2: number = 0;
    while (iter < 5 && param) {
        iter2 = 0;
        console.log("TABLA DEL " + iter);
        while (iter2 < 5) {
            console.log(iter + " x " + iter2 + " = " + (iter * iter2) + "\n");
            iter2++;
        }
        iter++;
    }

    console.log('------------ FOR ANIDADOS ---------------');
    for (let i: number = 0; i < 10 && param; i++) {
        let output: string = '';
        for (let j: number = 0; j < 10 - i; j++) {
            output = output + ' ';
        }
        for (let k: number = 0; k <= i; k++) {
            output = output + '* ';
        }
        console.log(output);
    }

    let ifs : number = 0;
    if (10 - 15 >= 0 && 44.44 == 44.44) {
        ifs--;
    }
    else if(false || false){
        ifs--;
    }
    else {
        if (15 + 8 == 22 - 10 + 5 * 3 - 4 && 13 * 0 > -1) {
            if (10.0 != 11.0 - 1.01) {
                ifs = 100;
            }
            else {
            }
        }
        else {
        }
    }
    console.log('If: ', ifs);

    let n:number = 1;
    switch (n) {
        case 0:
            console.log('Switch 1 malo');
        case 3:
            console.log('Switch 1 malo');
            break;
        case 1:
            console.log('Switch 1 bueno');
        case 2:
            console.log('Switch 1 malo');
            break;
        default:
            console.log('Switch 1 bueno');
    }

