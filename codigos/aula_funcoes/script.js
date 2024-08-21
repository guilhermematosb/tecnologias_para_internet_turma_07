let valor01 = 100

function somar(valor01 = 0, valor02 = 0) {
    console.log(valor01+valor02); 
}


const somarFuncaoAnonima  = function(valor01, valor02) {
    console.log(valor01+valor02); 
}

// console.log(somarFuncaoAnonima(5, 5));

const somarFuncaoArrow = (valor01, valor02) => {
    console.log(valor01+valor02); 
}

// console.log(typeof somarFuncaoArrow);

function processaNumero(numero, callback) {
    let resultado = numero * 2;
    callback(resultado);
}

function mostrarResultado(resultado) {
    console.log(`O resultado é: ${resultado}`);
}

processaNumero(5, mostrarResultado);

processaNumero(10, function (resultado) {
    console.log(`O resultado é: ${resultado}`);
})

processaNumero(10, (resultado) => {
    console.log(`O resultado é: ${resultado}`);
})






