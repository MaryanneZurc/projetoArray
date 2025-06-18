let prompt = require('prompt-sync')();
let senha = '12234';
let senhalogin = prompt('Digite a senha:');
if(senhalogin!==senha) {

console.log('senha inválida');
}else{
console.log('====Calculadora Aritmética====')
console.log('\n(1) somar');
console.log('(2) subtrair');
console.log('(3) multiplicar');
console.log('(4) dividir\n');

let operacao = parseFloat(prompt('Escolha a operação aritmética: '));
let numero1 =parseFloat(prompt('Digite o primeiro nr: '));
let numero2 = parseFloat(prompt('Digite o segundo nr: '));
let resultado

switch (operacao){
    case 1:
        resultado = (numero1+numero2)
       console.log('O resultado da soma eh:', resultado);
       break;
    case 2:
        resultado = (numero1-numero2);
        console.log('O resultado da subtração eh:', resultado);
       break;
    case 3:
        resultado = (numero1*numero2);
        console.log('O resultado da multiplicação eh:', resultado);
       break;
    case 4:
        if (numero2!==0){
            resultado = (numero1/numero2);
            console.log('O resultado da divisão eh:', resultado);
        }
        
        console.log('o numero não é divisível por zero');
        break;
        default:
        console.log('Não é possível executar essa operação');
    }
}



    
    