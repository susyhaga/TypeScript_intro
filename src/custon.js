"use strict";
// Interfaces: Uma interface é uma forma de definir a estrutura de um objeto.
//  Você pode definir propriedades e seus tipos, 
// bem como métodos que devem existir em um objeto. 
const pessoa55 = {
    nome: "João",
    idade1: 30
};
let dia;
dia = "Segunda"; // Válido
dia = "Sexta"; // Válido
dia = "Quarta"; // Válido
let identificador;
identificador = 123; // Válido
identificador = "abc"; // Válido
let parDeNumeros;
parDeNumeros = [1, 2]; // Válido
//2) criar array de objetos
const alunos = [
    {
        nome: "Susy",
        cursos: ["Front-end", "UX"],
        idade: 37,
    },
    {
        nome: "Italo",
        cursos: ["Python", "SQL"],
        idade: 32,
    },
];
//3) PUSH para adiciobar aluno com estrutura de aluno[]
alunos.push({
    nome: "Julia",
    cursos: ["Back-end"],
    idade: 18,
});
//4) criar um novoAluno 
//5) sem a propriedade cursos (colocar "?" depois do nome da propriedade la em type aluno={}) 
const novoAluno = {
    nome: "Lucas",
    idade: 20,
};
//funcoes (para exibir o valor da propriedade)
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
