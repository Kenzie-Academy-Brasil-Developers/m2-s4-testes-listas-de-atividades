class Pessoa {
    //atributos
        //nome
        //dataDeNascimento
        //cidade

    //métodos
    calcularIdade() {}
       
    apresentar() {}
}

const victor = new Pessoa("Victor", "02/03/1960", "Curitiba")
const jardel = new Pessoa("Jardel", "30/12/1998", "Londres")

console.log(`${victor.calcularIdade()} should be 62`)
console.log(`${victor.apresentar()} should be "Victor possui 62 anos de idade e atualmente está morando em Curitiba."`) 

console.log(`${jardel.calcularIdade()} should be 23`)
console.log(`${jardel.apresentar()} should be "Jardel possui 23 anos de idade e atualmente está morando em Londres."`) 
