//TIPAGEM IMPLICITA
//qndo vc nao declara o tipo que a variavel pode receber

let curso = 'front-end'
// curso = 10 //erro

////////////////////////////////////////////////////////////////////


//UNION TYPE COM TIPAGEM IMPliCITA
let valor; // sem tipo definido

valor = 10; // TypeScript inferirá que o tipo de 'valor' é number
console.log(typeof valor); // saída: number

valor = "texto"; // TypeScript inferirá que o tipo de 'valor' agora é string
console.log(typeof valor); // saída: string
//....................................................................

//TIPAGEM EXPLICITA
//qndo vc declara o tipo que variavel pode receber

let curso2:string[]=['front-end'] //ok


////////////////////////////////////////////////////////////////

//ou uniao de tipos diferentes
let idadeDaAna: number|string= 25;
idadeDaAna = '25 anos'

////////////////////////////////////////////////////////////////

// UNION TYPE COM TIPAGEM EXPLICITA |

let valo1: number | string; // Union Type

valor = 10; // válido
console.log(typeof valor); // saída: number

valor = "texto"; // válido
console.log(typeof valor); // saída: string

// valor = true; // inválido, pois booleano não está incluído na union type