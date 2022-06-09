let resta = (a=2, b=1) => {console.log(`El resultado de: ${a}-${b} es: ${a-b}`);};

resta();
resta(10, 3);

let posne = (num="none") => {
    if (num > 0) {
        console.log("El número es positivo");
    }
    else if (num < 0) {
        console.log("El número es negativo");
    }
    else {
        console.log("Debe ingresar un número");
    }
};

let valor = parent(prompt("Ingrese un número: "));
posne(valor);