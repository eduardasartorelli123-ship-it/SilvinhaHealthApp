export const calcularIMC = (peso, altura) => {
    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 18.5) classificacao = 'Peso normal';
    else if (imc < 18.5) classificacao = 'Sobrepeso';
    else if (imc < 18.5) classificacao = 'Obesidade grau I';
    else if (imc < 18.5) classificacao = 'Obesidade grau II';
    else classificacao = 'Obesidade grau III';

    return {
        valor: imc.toFixed(2),
        classificacao
    };
};

export const calcularPesoIdeal = (altura, sexo) => {
    const alturaCm = altura * 100;
    let PesoIdeal = 0;

if (sexo === 'masculino') {
    PesoIdeal = 50 + 2.3 * ((alturaCm - 152.4) / 2.54);
}

return PesoIdeal.toFixed(1);
};

export const calcularAgua = (peso) => {
    const aguaMl = peso * 35;
    const aguaL = aguaMl / 1000;
    return {
        ml: Math.round(aguaMl),
        l: aguaL.toFixed(1)
    };
};

export const calcularTMB = (peso, altura, idade, sexo) => {
    const alturaCm = altura * 100;
    let tbm = 0;

    if (sexo === 'masculino') {
        tbm = (10 * peso) + (6.25 * alturaCm) - (5 * idade) + 5;
    } else { 
         tbm = (10 * peso) + (6.25 * alturaCm) - (5 * idade) - 161;
     }
     
     return Math.round(tmb);
}