// Interfaces: Uma interface é uma forma de definir a estrutura de um objeto.
//  Você pode definir propriedades e seus tipos, 
// bem como métodos que devem existir em um objeto. 

interface Pessoa1 {
    nome: string;
    idade1: number;
}

const pessoa55: Pessoa1 = {
    nome: "João",
    idade1: 30
};


// Tipos Literais: Você pode criar tipos que representam
//  um conjunto específico de valores usando tipos literais. 

type DiaDaSemana = "Segunda" | "Terça" | "Quarta" | "Quinta" | "Sexta" | "Sábado" | "Domingo";

let dia: DiaDaSemana;
dia = "Segunda"; // Válido
dia = "Sexta";   // Válido
dia = "Quarta";  // Válido
//dia = "Julho";   // Inválido, pois "Julho" não é um DiaDaSemana válido



// Tipos Union: Você pode combinar tipos existentes usando a união (|) para criar um novo tipo. 
// Isso permite que uma variável aceite mais de um tipo.


type ID = number | string;

let identificador: ID;
identificador = 123;    // Válido
identificador = "abc";  // Válido
//identificador = true;   // Inválido, pois boolean não é um tipo permitido



// Tipos Genéricos: Você pode criar tipos que são parametrizados por outros tipos. 
// Isso permite a reutilização de código e flexibilidade.

type Par<T> = [T, T];

let parDeNumeros: Par<number>;
parDeNumeros = [1, 2];         // Válido
//parDeNumeros = ["um", "dois"]; // Inválido, pois "um" e "dois" não são números


//EBAC VIDEO5

//1) estrutura do custon type
//um array de objeto

type aluno={
    nome:string;
    cursos?:string[]; //um array de strings
    idade: number;
}

//2) criar array de objetos

const alunos : aluno[] =[ //a const alunos vai receber a estrutura (com os tipos definidos) de aluno
    {
    nome:"Susy",
    cursos:["Front-end","UX"],
    idade:37,

    },
    {
    nome:"Italo",
    cursos:["Python","SQL"],
    idade:32,
    },
]
//3) PUSH para adiciobar aluno com estrutura de aluno[]
alunos.push({
    nome:"Julia",
    cursos:["Back-end"],
    idade:18,
})

//4) criar um novoAluno 
//5) sem a propriedade cursos (colocar "?" depois do nome da propriedade la em type aluno={}) 
const novoAluno:aluno={
    nome:"Lucas",
    idade:20,
}

//funcoes (para exibir o valor da propriedade)
function exibeAluno(aluno:aluno){ //argumento aluno tera estrutura de aluno ///"type aluno={}"///
    console.log(aluno.nome);
}