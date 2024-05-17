"use strict";
// TypeScript é um superset tipado do JavaScript. 
// Isso significa que você pode definir tipos
// para parâmetros de função e para o valor de retorno de uma função.
function soma(a, b) {
    return a + b;
}
let resultado = soma(5, 3);
console.log("O resultado da soma é:", resultado);
// Neste exemplo, a função soma recebe dois parâmetros do tipo number e
//  retorna um valor do tipo number. Portanto, quando você chama a função soma,
//  espera-se que você forneça dois números como argumentos e o resultado será um número.
//////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//VIDEO3 EBAC
//tipagem implicita x tipagem explicita
/////////////////////////////////////////////////////////////////////////////////////////////////
//TIPAGEM DE FUNCOES (EBAC INTRO)
function calcularArea(base, altura) {
    return base * altura;
}
//TIPAGEM DE ARROW FUNCTIONS  => signifca RETURN
const calcularArea2 = (base, altura) => base * altura;
//.....................................................................................
//TIPAGEM COM OPERADOR REST (...)
function somar3(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}
//uso da função somar3
const resultado2 = somar3(1, 2, 3, 4, 5);
console.log("O resultado da soma é:", resultado2);
//.................................................................................
//OPERADOR REST +  COM void
// Neste caso, a função somar aceita uma lista variável de números (...numeros: number[])
//  e não retorna nada (void).
//  Quando a função é chamada, ela apenas registra 
//  os números no console e não retorna nenhum valor.
function somar(...numeros) {
    console.log(numeros);
}
//OPERADOR REST + SEM void
//Aqui, a função somar também aceita uma lista variável de números,
// mas desta vez ela retorna a soma dos números utilizando o método reduce().
// A assinatura da função agora especifica que ela retorna um valor do tipo number.
function somar2222(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}
///////////////////////////////////////////////////////////////////////
//Tipagem de funcoes com UNION TYPE   |
//Retorno de 2 tipos diferentes com valores diferentes
function teste() {
    if (10 > 5) {
        return 'dez eh maior do que cinco';
    }
    else {
        return 5;
    }
}
//Se recebesse esse valor numa variavel, qual tipo ela seria?
const resultadoDoTeste = teste(); // function teste(): string|number
