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