"use strict";
//toString()
let num = 123;
let strNum = num.toString(); // converte o número 123 para a string "123"
let array = [1, 2, 3];
let strArray = array.toString(); // converte o array [1, 2, 3] para a string "1,2,3"
let date = new Date();
let strDate = date.toString(); // converte a data atual para sua representação de string
//...............................................................................................
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `${this.name}, ${this.age} years old`;
    }
}
let person = new Person("John", 30);
let strPerson = person.toString(); // "John, 30 years old"
///////////////////////////////////////////////////////////////////////////////////////////////////////
//toFixed()
let num1 = 10.12345;
let formattedNum = num1.toFixed(2);
console.log(formattedNum); // Saída: "10.12"
//parseInt()
let numeroString = "123";
let numero = parseInt(numeroString);
console.log(numero); // Saída: 123
///////////////////////////////////////////////////////////////////////////////////
//unknown() precisa de verificacao ou afirmacao do tipo
function soma33(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b; // Agora está correto
    }
    else {
        throw new Error('Os argumentos devem ser números');
    }
}
let resultado222 = soma(10, 20);
console.log(resultado222); // Saída: 30
