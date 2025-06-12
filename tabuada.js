let prompt = require('prompt-sync')();
let numero = parseFloat(prompt('Escolha a tabuada:'))


for(let i=1; i<=10; i++){
    console.log(numero + ' * ' + i + ' = ' + (numero*i));

}
