/*class Veiculo {
    Atributos
        proprietario
        placa
        tipoCombustivel
        anoFabricacao

}
*/

/*class Automovel extends Veiculo{
    Atributos 
        herdando os atributos de Veiculo e os atributos abaixo:
            qtdLugares
            qtdPortas
    }

    retornarInformacoes() {}
}*/

/*class Caminhao extends Veiculo {
     Atributos 
        herdando os atributos de Veiculo e o atributo abaixo:
            cargaMaxima


    retornarInformacoes() {}
}*/

const automovel = new Automovel("Maria", "POO-2022", "Gasolina", "2022", 5, 4)
const retornoInfosAutomovel = "Placa: POO-2022; ano: 2022; tipo de combustível: Gasolina; quantidade de lugares: 5; quantidade de portas: 4; proprietário: Maria"

console.log(automovel.retornarInformacoes() === retornoInfosAutomovel) // comparando o retorno do método com a variável para ver se são iguais. Se forem, a classe está correta. 

const caminhao = new Caminhao("Sidny", "SID-2023", "Diesel", "2022", "1 tonelada")
const retornoInfosCaminhao = "Placa: SID-2023; ano: 2022; tipo de combustível: Diesel; carga máxima: 1 tonelada; proprietário: Sidny"

console.log(caminhao.retornarInformacoes() === retornoInfosCaminhao) //comparando o retorno do método com a variável para ver se são iguais. Se forem, a classe está correta. 