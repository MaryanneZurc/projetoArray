let prompt = require('prompt-sync')();
let senha = '1234';
let senhalogin = prompt('Digite a senha: ');

if(senhalogin!==senha)
{
    console.log('senha inválida');
}else{

let operacao = (prompt('Digite a operação: '));
let numero = parseFloat(prompt('Escolha a tabuada:'));

 switch (operacao){
    case 'soma':
        for(let i=1; i<=10; i++){
    console.log(numero + ' + ' + i + ' = ' + (numero+i));
        }
    break;
    case 'subtracao':
        for(let i=1; i<=10; i++){
    console.log(numero + ' - ' + i + ' = ' + (numero-i));
        }
    break;
    case 'multiplicacao':
        for(let i=1; i<=10; i++){
    console.log(numero + ' * ' + i + ' = ' + (numero*i));
        }
    break;
    case 'divisao':
        for(let i=1; i<=10; i++){
    console.log(numero + ' / ' + i + ' = ' + (numero/i));
        }
        break;
        default:
            console.log('Não é possível executar essa operação');
    }
}



        

    






