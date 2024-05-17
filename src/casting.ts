//CASTING INTRO

// "casting" se refere à conversão de um tipo de dado para outro. Isso é útil quando 
// você deseja garantir que um valor tenha um tipo específico para realizar determinadas operações.

//Usando "as"

let minhaVariavel1: any = "123";
let meuNumero1: number = minhaVariavel1 as number;
console.log(typeof meuNumero1); // output: string

let minhaVariavel111: any = "123";
let meuNumero1111: number = parseInt(minhaVariavel1);
console.log(typeof meuNumero1111); // output: number

//Em TypeScript, as é mais útil quando você está trabalhando com tipos mais complexos, 
//como union types ou tipos personalizados. Para converter uma string em um número, 
// é melhor usar funções como parseInt() ou parseFloat().
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Usando "< >"
let minhaVariavel: any = "123";
let meuNumero = <number> minhaVariavel;
console.log(typeof meuNumero); // output: number

// Aqui, o mesmo resultado é alcançado usando a sintaxe de "<>".
//  Ambos os métodos são amplamente aceitos, mas o uso de "as" é mais comum em projetos TypeScript, 
//  pois o "<>" pode ser confundido com operadores de comparação.

// No entanto, é importante ter em mente que o casting nem sempre é seguro.
//  Se você tentar converter um tipo para outro que não é compatível, 
//  você pode obter resultados inesperados ou erros em tempo de execução. 
// É sempre uma boa prática verificar se a conversão é segura antes de realizar o casting.

///////////////////////////////////////////////////////////////////////////////////////////////////

//EBAC VIDEO 4 

//CONVERTENDO TIPOS DADOS PARA OUTRO TIPO DE DADOS

// namespace
// Cria pastas virtuais para evitar erros nas nomenclaturas das variaveis de outros arquivos
//toFixed() adiciona casas decimais
//toString converte qualquer tipo para string
namespace casting {
    let idade: any = 25;
    
    // Como número
    let idadeComoNumero: number = idade as number;
    console.log(typeof idadeComoNumero); // "number"
    console.log(idadeComoNumero.toFixed()); // 25 (toFixed() retorna um numero decimal)

    // Como string
    let idadeComoString: string = idade.toString();
    console.log(typeof idadeComoString); // "string"
    console.log(idadeComoString.length); // 2 (length de uma string)
}
// para compilar (TS para JS)
// npm tsc

// para executar
// node src/casting.js

//para usar a versao mais recente do node e npm
//nvm use node

////////////////////////////////////////////////////
//Sobrescrever um tipo (com UNKNOWN)
namespace casting2{
    let nome:string = 35 as unknown as string;
    let nomeString:string = nome.toString();
    console.log(typeof nomeString, "eh string agora");
}