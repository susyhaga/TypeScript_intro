import { loadPartialConfigAsync } from "@babel/core"

let estaChovendo: boolean = false
estaChovendo = true

let idade: number = 25
let altura: number = 1.75

const nacionalidade:string = 'brasileira'

//.................................................................................................

//ARRAYS EM TS

//NAO PODEMOS TER UM ARRAY COM VARIOS TIPOS

//PARA TIPAR UM ARRAY
const colegas: string[] = ['lucas', 'paula'] 

//.................................................................................................

//Outra forma de tipar um array(usando a palavra reservada Array)
const tecnologias: Array<string> =['html','css','js']

//...............................................................................................

//Array apenas de leitura (usar palavra reservada ReadonlyArray)
const notas:ReadonlyArray<number> =[7,8,9,5]

// ATENCAO: 
// Array normal aceita o push(), 
// ARRAY APENAS DE LEITURA nao aceita o push(), ou seja, nao podemos adicionar itens nesse caso

//...............................................................................................
//TUPlAS
//Eh um tipo que permite uma estrutura do tipo array COM TIPOS DE DADOS DIFERENTES
const lista:[string, boolean, number] = ['susy', true, 36]

//Com as TUPLAS podemos adicionar nomes para os campos(string, boolean, number)
const lista2:[nome:string, estaEstudando:boolean, idade:number] = ['susy', true, 36]

//...............................................................................................
//UNION TYPE (uniao de tipos diferentes) |

//A variavel aceita mais de um tipo de dados

let idadeDaAna: number|string= 25;
idadeDaAna = '25 anos'

//...............................................................................................
// Any tipo que aceita qualquer loadPartialConfigAsync

// ideal para fazer integracao com back-end 
// quando vc nao sabe os tipos de dados que o backend vai devolver

let dadosDaApi: any;
dadosDaApi =10
dadosDaApi = true
dadosDaApi =[1,2,3]
dadosDaApi ='string'
