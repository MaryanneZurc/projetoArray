let prompt = require('prompt-sync')();

console.log('====Calculadora Aritmética====')
console.log('\n(1) - somar');
console.log('(2) - subtrair');
console.log('(3) - multiplicar');
console.log('(4) - dividir\n');

let operacao = parseFloat(prompt('Escolha a operação aritmética: '));
let numero1 =parseFloat(prompt('Digite o primeiro nr: '));
let numero2 = parseFloat(prompt('Digite o segundo nr: '));
let resultado

if(operacao===1)
    {
    resultado = (numero1+numero2);
 console.log('O resultado da soma eh: ', resultado);
}
else if(operacao===2)
{
    resultado = (numero1-numero2);
    console.log('O resultado da subtração eh: ', resultado);
}
else if(operacao===3)
    {
    resultado = (numero1*numero2);
    console.log('O resultado da multiplicar eh: ',resultado);
}
else if(operacao===4 && numero2!==0)
{
    resultado = (numero1/numero2);
    console.log('O resultado da divisão em: ',resultado)
}
console.log('O uso do zero não é permitido')








