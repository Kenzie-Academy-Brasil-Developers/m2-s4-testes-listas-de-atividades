class Elevador {
    /*
    Atributos
        andarAtual  
        totalAndares
        capacidade
        totalPessoas
    */
    
    //Métodos
    entrar() {}

    sair() {}

    subir() {}

    descer() {}
}

const elevadorA = new Elevador(10, 13, 5, 1)
console.log(`${elevadorA.entrar()} should be 2`)
console.log(`${elevadorA.sair()} should be 1`) // lembre-se que foi adicionada uma pessoa no console.log acima

console.log(`${elevadorA.subir()} should be 11`)
console.log(`${elevadorA.descer()} should be 10`) // lembre-se que o elevador subiu um andar no console.log acima

const elevadorB = new Elevador(1, 2, 2, 0)
console.log(`${elevadorB.entrar()} should be 1`)
console.log(`${elevadorB.sair()} should be 0`) // lembre-se que foi adicionada uma pessoa no console.log acima
console.log(`${elevadorB.sair()} should be "O elevador está vazio"`)

console.log(`${elevadorB.subir()} should be 2`)
console.log(`${elevadorB.subir()} should be "Não é possível subir. Esse andar é o último!`)
console.log(`${elevadorB.descer()} should be 1`) 
console.log(`${elevadorB.descer()} should be 0`) 
console.log(`${elevadorB.descer()} should be "Não é possível descer. Esse andar é o primeiro"`) 