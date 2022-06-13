class Televisao {

    /*
    Atributos
        canalAtual
        volumeAtual
    */

    //Métodos
    aumentarVolume() {}

    diminuirVolume() {}

    aumentarCanal() {}

    diminuirCanal() {}

    trocarCanal(canal) {}

    consultarCanal() {}

    consultarVolume() {}
}

const televisaoA = new Televisao(10, 25)
console.log(`${televisaoA.aumentarVolume()} should be 26`)
console.log(`${televisaoA.diminuirVolume()} should be 25`)
console.log(`${televisaoA.diminuirVolume()} should be 24`)
console.log(`${televisaoA.consultarVolume()} should be 24`)

console.log(`${televisaoA.aumentarCanal()} should be 11`)
console.log(`${televisaoA.diminuirCanal()} should be 10`)
console.log(`${televisaoA.diminuirCanal()} should be 9`)

console.log(`${televisaoA.trocarCanal(5)} should be 5`)
console.log(`${televisaoA.trocarCanal(12)} should be 12`)
console.log(`${televisaoA.consultarCanal()} should be 12`)


const televisaoB = new Televisao(0, 1)
console.log(`${televisaoB.aumentarVolume()} should be 2`)
console.log(`${televisaoB.diminuirVolume()} should be 1`)
console.log(`${televisaoB.diminuirVolume()} should be 0`)
console.log(`${televisaoB.consultarVolume()} should be 0`)
console.log(`${televisaoB.diminuirVolume()} should be "A televisão não aceita volume negativo"`)

console.log(`${televisaoB.aumentarCanal()} should be 1`)
console.log(`${televisaoB.diminuirCanal()} should be 0`)
console.log(`${televisaoB.diminuirCanal()} should be "O canal não pode ser um número negativo"`)

console.log(`${televisaoB.trocarCanal(-1)} should be O canal não pode ser um número negativo`)
console.log(`${televisaoB.trocarCanal(2)} should be 2`)
console.log(`${televisaoB.consultarCanal()} should be 2`)