// CRIANDO INTERFACE

interface Pessoa {
    nome: string;
    idade1: number;
    email?: string; // Propriedade opcional
    saudacao(): void; // Método que nao retorna nada
}

//Agora, podemos usar essa interface para definir objetos que correspondam a essa estrutura:

const pessoa1: Pessoa = {
    nome: "João",
    idade1: 30,
    saudacao() {
        console.log("Olá!");
    }
};

const pessoa2: Pessoa = {
    nome: "Maria",
    idade1: 25,
    email: "maria@example.com",
    saudacao() {
        console.log("Oi!");
    }
};

//////////////////////////////////////////////////
//EBAC VIDEO7

//CONTA BANCARIA

class Conta{
    numeroDaConta:number;
    saldo:number=0;
    constructor(numeroDaConta:number){
        this.numeroDaConta= numeroDaConta
    }
}

class ContaSalario extends Conta{
    depositar(valor:number){
        this.saldo += valor;
    }
}

//criando interface
interface ITransacional{
    transferir(valor:number,destinatario:Conta): boolean;
    taxaTrasferencia:number;
}

interface IExemplo2{
    cnpj:number;
}
interface IExemplo3 extends IExemplo2{
    telefone:number;
}

//usando a interface

class ContaCorrente extends Conta implements ITransacional, IExemplo3{
    transferir(valor:number, destinatario:Conta){
        destinatario.saldo+= valor;
        return true;
    }
    cnpj:number = 0;
    telefone:number = 0;


    taxaTrasferencia:number = 0 //se fosse positivo teria que colocar (destinatario.saldo+= valor - this.taxaTrasnferencia;

}