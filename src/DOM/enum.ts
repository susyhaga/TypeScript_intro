//Enums permitem que você crie um grupo de constantes relacionadas que podem ser usadas 
//com mais clareza e legibilidade no código. Eles são úteis quando você tem um conjunto 
//fixo de valores que representam algo significativo no seu aplicativo, como dias da semana,
// estados de uma aplicação, ou tipos de ações.
enum DiaDaSemana1 {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado
}

// Usando o enum
let hoje: DiaDaSemana1 = DiaDaSemana1.Quarta;

console.log(hoje); // Saída: 3


// No exemplo acima, DiaDaSemana é um enum que representa os dias da semana. 
// Cada membro do enum é atribuído automaticamente a um valor numérico, 
// começando do zero. Você também pode definir explicitamente os valores, se desejar:
enum DiaDaSemana2 {
    Domingo = 1,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado
}

console.log(DiaDaSemana2.Domingo); // Saída: 1
console.log(DiaDaSemana2.Sexta);   // Saída: 6

//Além disso, você pode usar enums com strings:
enum Estado {
    Ativo = "ACTIVE",
    Inativo = "INACTIVE",
    Pendente = "PENDING"
}

console.log(Estado.Ativo); // Saída: "ACTIVE"