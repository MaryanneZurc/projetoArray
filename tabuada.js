let prompt = require('prompt-sync')();
let senha = '1234';
let senhalogin = prompt('Digite a senha: ');

if(senhalogin!==senha)
{
    console.log('senha inválida');
}else{
let numero = parseFloat(prompt('Escolha a tabuada:'))

//laço de repetição tabuada multiplicação
console.log('\n tabuada de multiplicação');

for(let i=1; i<=10; i++){
    console.log(numero + ' * ' + i + ' = ' + (numero*i));
}
    //laço de repetição tabuada de divisão 
console.log('\n tabuada de divisão');

for(let i=1; i<=10; i++){
    console.log(numero + ' /' + i + ' = ' + ( numero/i).toFixed(2)); 
}

//laço de repetição tabuada de soma
console.log('\n tabuada de soma');

for(let i=1; i<=10; i++){
    console.log(numero + ' + ' + i + ' = ' + (numero+i));
}

//laço de repetição tabuada de subtração 
console.log('\n tabuada de subtração');

for(let i=1; i<=10; i++){
    console.log(numero + ' - ' + i + ' = ' + (numero-i));
}
}