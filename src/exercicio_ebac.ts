//TYPESCRIPT

// uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, 
// e uma função de saudação que deverá receber um nome e retornar 
// a concatenação “Olá “ + nome;

//MULTIPLICACAO
function multiplicacao(a:number,b:number):number{
    return a*b;
}
const resultado1: number = multiplicacao(2, 9);
console.log(resultado);


//NOME
function saudacao(nome:string):string{
    return "Ola!"+ nome;
}
const saudar:string = saudacao('Susy');
console.log(saudar);
