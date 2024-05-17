//INTRODUCAO


//Classes
class Car {
    // Propriedades
    brand: string;
    model: string;
    year: number;
    
    // Método construtor
    constructor(brand: string, model: string, year: number) {
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
    batteryCapacity: number;
    
    constructor(brand: string, model: string, year: number, batteryCapacity: number) {
        super(brand, model, year); // Chama o construtor da classe pai
        this.batteryCapacity = batteryCapacity;
    }
    
    charge() {
        console.log(`Charging the ${this.brand} ${this.model}...`);
    }
}



//This
class Car1 {
    brand: string;
    model: string;
    year: number;
    
    constructor(brand: string, model: string, year: number) {
    this.brand = brand; // 'this.brand' se refere à propriedade 'brand' do objeto atual
    this.model = model; // 'this.model' se refere à propriedade 'model' do objeto atual
    this.year = year; // 'this.year' se refere à propriedade 'year' do objeto atual
    }
}


////////////////////////////////////////////////////////////////////////////////////////

//Encapsulamento 
//modificadores de ACESSO: PUBLIC, PRIVATE, PROTECTED

namespace encapsulamento{ //evita conflito de nomenclatura com outros arquivos
    class Person {
        private name: string;
        
        constructor(name: string) {
            this.name = name;
        }
        
        getName(): string {
            return this.name;
        }
    }
}


//PUBLIC

// Membros marcados como public são acessíveis de qualquer lugar. 
// Isso significa que eles podem ser acessados e modificados tanto dentro quanto fora da classe.

namespace modoficadorPublic{
    class Car {
        public brand: string;
        
        constructor(brand: string) {
            this.brand = brand;
        }
    }
    
    let myCar = new Car("Toyota");
    console.log(myCar.brand); // 'Toyota'
}

//PRIVATE

// Membros marcados como private são acessíveis apenas dentro da classe em que foram declarados. 
// Eles não podem ser acessados de fora da classe nem mesmo por subclasses.

namespace modificadorPrivate{
    class Car {
        private brand: string;
        
        constructor(brand: string) {
            this.brand = brand;
        }
        
        getBrand(): string {
            return this.brand; // Acessível dentro da classe
        }
    }

    let myCar = new Car("Toyota");
    console.log(myCar.getBrand()); // 'Toyota'
    //console.log(myCar.brand); // Erro: Property 'brand' is private and only accessible within class 'Car'
    // Membros marcados como private são acessíveis apenas dentro da classe em que foram declarados.
    //  Eles não podem ser acessados de fora da classe nem mesmo por subclasses.
}


//PROTECTED

//  Membros marcados como protected são semelhantes aos private,
//  mas também podem ser acessados dentro de subclasses da classe em que foram declarados.

namespace modificadorProtected{
    class Car {
        protected brand: string;
        
        constructor(brand: string) {
            this.brand = brand;
        }
    }
    
    class ElectricCar extends Car {
        constructor(brand: string) {
            super(brand);
        }
        
        getBrand(): string {
            return this.brand; // Acessível dentro da classe e subclasses
        }
    }
    
    let myElectricCar = new ElectricCar("Tesla");
    console.log(myElectricCar.getBrand()); // 'Tesla'
    //console.log(myElectricCar.brand); // Erro: Property 'brand' is protected and only accessible within class 'Car' and its subclasses
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

//POLIMORFISMO
//O polimorfismo permite que objetos de diferentes classes sejam tratados de maneira uniforme.
class Shape {
    area(): number {
        return 0;
    }
}

class Rectangle extends Shape {
    width: number = 0 ;
    height: number = 0;
    
    area(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    radius: number;
    
    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////

//EBAC VIDEO6

//CLASSE
namespace ebac{
    class Pessoa{
        name:string;//precisamos declarar o tipo da propriedade
        renda?: number;//"?" para propriedades opcionais dentro da classe colocar "?" no construtor tb
        constructor(name:string, renda?:number){ //serve para definir o metodo construtor da classe. 
            this.name = name;
            this.renda = renda;
        }
        dizoi():string{
            return `${this.name} disse oi`
        }
    }
}

//ENCAPSULAMENTO

//EM TS, é necessário declarar as propriedades antes de inicializá-las no construtor.

//modificadores

// público(public ou sub): padrão, acessível na classe, nas herdeiras e na instância;
// privado(private): acessível apenas na classe;
// Estático (static): acessível na classe; 
// Protegido (protected): acessível na classe e nas herdeiras.
//+= : mantem o valor atual e adiciona um novo valor

class ContaBancaria{
    protected saldo:number=0
    public numConta:number;
    constructor(numConta:number){
        this.numConta= numConta;
    }
    static retornaNumDoBanco(){
        return 125;
    }
    private getSaldo(){
        return this.saldo
    }
    depositar(valor:number){
        this.saldo += valor;
    }
}

//HERANCA
class ContaBancariaPessoaFisica extends ContaBancaria{
    depositar(valor:number):void{
        this.saldo = valor*2
    }
}

//Instancia
const ContaDaSusy=new ContaBancariaPessoaFisica(34567)

ContaBancaria.retornaNumDoBanco() //static

//nao precisa do NEW para a criar uma nova instancia, pois
//static faz com o retornaNumdoBanco seja acessivel a classe (ContaBancaria)