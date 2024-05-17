"use strict";
// CRIANDO INTERFACE
//Agora, podemos usar essa interface para definir objetos que correspondam a essa estrutura:
const pessoa1 = {
    nome: "João",
    idade1: 30,
    saudacao() {
        console.log("Olá!");
    }
};
const pessoa2 = {
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
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
//usando a interface
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.cnpj = 0;
        this.telefone = 0;
        this.taxaTrasferencia = 0; //se fosse positivo teria que colocar (destinatario.saldo+= valor - this.taxaTrasnferencia;
    }
    transferir(valor, destinatario) {
        destinatario.saldo += valor;
        return true;
    }
}
