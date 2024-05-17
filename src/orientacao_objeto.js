"use strict";
//INTRODUCAO
//Classes
class Car {
    // Método construtor
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // Método
    start() {
        console.log(`Starting the ${this.brand} ${this.model}...`);
    }
}
////////////////////////////////////////////////////////////////////////////////////////
//Objetos
let myCar = new Car("Toyota", "Corolla", 2020);
myCar.start(); // Saída: Starting the Toyota Corolla...
////////////////////////////////////////////////////////////////////////////////////////
//HERANCA
class ElectricCar extends Car {
    constructor(brand, model, year, batteryCapacity) {
        super(brand, model, year); // Chama o construtor da classe pai
        this.batteryCapacity = batteryCapacity;
    }
    charge() {
        console.log(`Charging the ${this.brand} ${this.model}...`);
    }
}
//This
class Car1 {
    constructor(brand, model, year) {
        this.brand = brand; // 'this.brand' se refere à propriedade 'brand' do objeto atual
        this.model = model; // 'this.model' se refere à propriedade 'model' do objeto atual
        this.year = year; // 'this.year' se refere à propriedade 'year' do objeto atual
    }
}
////////////////////////////////////////////////////////////////////////////////////////
//Encapsulamento 
//modificadores de ACESSO: PUBLIC, PRIVATE, PROTECTED
var encapsulamento;
(function (encapsulamento) {
    class Person {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }
})(encapsulamento || (encapsulamento = {}));
//PUBLIC
// Membros marcados como public são acessíveis de qualquer lugar. 
// Isso significa que eles podem ser acessados e modificados tanto dentro quanto fora da classe.
var modoficadorPublic;
(function (modoficadorPublic) {
    class Car {
        constructor(brand) {
            this.brand = brand;
        }
    }
    let myCar = new Car("Toyota");
    console.log(myCar.brand); // 'Toyota'
})(modoficadorPublic || (modoficadorPublic = {}));
//PRIVATE
// Membros marcados como private são acessíveis apenas dentro da classe em que foram declarados. 
// Eles não podem ser acessados de fora da classe nem mesmo por subclasses.
var modificadorPrivate;
(function (modificadorPrivate) {
    class Car {
        constructor(brand) {
            this.brand = brand;
        }
        getBrand() {
            return this.brand; // Acessível dentro da classe
        }
    }
    let myCar = new Car("Toyota");
    console.log(myCar.getBrand()); // 'Toyota'
    //console.log(myCar.brand); // Erro: Property 'brand' is private and only accessible within class 'Car'
    // Membros marcados como private são acessíveis apenas dentro da classe em que foram declarados.
    //  Eles não podem ser acessados de fora da classe nem mesmo por subclasses.
})(modificadorPrivate || (modificadorPrivate = {}));
//PROTECTED
//  Membros marcados como protected são semelhantes aos private,
//  mas também podem ser acessados dentro de subclasses da classe em que foram declarados.
var modificadorProtected;
(function (modificadorProtected) {
    class Car {
        constructor(brand) {
            this.brand = brand;
        }
    }
    class ElectricCar extends Car {
        constructor(brand) {
            super(brand);
        }
        getBrand() {
            return this.brand; // Acessível dentro da classe e subclasses
        }
    }
    let myElectricCar = new ElectricCar("Tesla");
    console.log(myElectricCar.getBrand()); // 'Tesla'
    //console.log(myElectricCar.brand); // Erro: Property 'brand' is protected and only accessible within class 'Car' and its subclasses
})(modificadorProtected || (modificadorProtected = {}));
///////////////////////////////////////////////////////////////////////////////////////////////////////
//POLIMORFISMO
//O polimorfismo permite que objetos de diferentes classes sejam tratados de maneira uniforme.
class Shape {
    area() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor() {
        super(...arguments);
        this.width = 0;
        this.height = 0;
    }
    area() {
        return this.width * this.height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////
//EBAC VIDEO6
//CLASSE
var ebac;
(function (ebac) {
    class Pessoa {
        constructor(name, renda) {
            this.name = name;
            this.renda = renda;
        }
        dizoi() {
            return `${this.name} disse oi`;
        }
    }
})(ebac || (ebac = {}));
//ENCAPSULAMENTO
//EM TS, é necessário declarar as propriedades antes de inicializá-las no construtor.
//modificadores
// público(public ou sub): padrão, acessível na classe, nas herdeiras e na instância;
// privado(private): acessível apenas na classe;
// Estático (static): acessível na classe; 
// Protegido (protected): acessível na classe e nas herdeiras.
//+= : mantem o valor atual e adiciona um novo valor
class ContaBancaria {
    constructor(numConta) {
        this.saldo = 0;
        this.numConta = numConta;
    }
    static retornaNumDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
//HERANCA
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
//Instancia
const ContaDaSusy = new ContaBancariaPessoaFisica(34567);
ContaBancaria.retornaNumDoBanco(); //static
//nao precisa do NEW para a criar uma nova instancia, pois
//static faz com o retornaNumdoBanco seja acessivel a classe (ContaBancaria)
