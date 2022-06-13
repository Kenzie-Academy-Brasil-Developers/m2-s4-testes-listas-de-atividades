class Agenda {
    /*
    Atributos
        nome
        contatos = []
    */

    //Métodos
    //obj pessoa utilizado no código tem as propriedades nome e telefone
    adicionarContato(pessoa) {}

    removerContato(telefone) {
        //dica: pesquisar isNaN no mdn.
    }

    listarContatos() {}

    pesquisarContato(nome) {}

    editarContato(posicao, nome, telefone) {}
}

const agenda = new Agenda("Agenda da Nicole")

const pessoinhaUm = {nome: "Sidny", telefone: "992929393"}
const pessoinhaDois = {nome: "Heric", telefone: "36361515"}

agenda.adicionarContato(pessoinhaUm)
agenda.adicionarContato(pessoinhaDois)
let contatos =  [{"nome": "Sidny", "telefone": "992929393"},{"nome": "Heric", "telefone": "36361515"}]
console.log(agenda.contatos) // deve ser: [{nome: "Sidny", telefone: "992929393"},{nome: "Heric", telefone: "36361515"}]
console.log(`${agenda.adicionarContato(pessoinhaUm) === "Número de telefone já existente na lista"} should be true`) 

console.log(`${agenda.removerContato("churros") === "Digite um número para remover um contato."} should be true`) 
console.log(`${agenda.removerContato("123456") === "Contato não encontrado."} should be true`) 
agenda.removerContato("36361515")
console.log(agenda.contatos) // deve ser somente [{nome: "Sidny", telefone: "992929393"}] 

agenda.adicionarContato(pessoinhaDois)

agenda.listarContatos() // deve aparecer no console:
/*
1 - Nome:Sidny Telefone:992929393
1 - Nome:Heric Telefone:36361515
*/

agenda.removerContato("36361515")
agenda.removerContato("992929393")
console.log(`${agenda.listarContatos() === "Nenhum contato encontrado"} should be true`)

agenda.adicionarContato(pessoinhaUm)
agenda.adicionarContato(pessoinhaDois)

console.log(agenda.pesquisarContato("Sidny")) // deve ser {nome: 'Sidny', telefone: '992929393'}
console.log(`${agenda.pesquisarContato("Rogérin do Grau") === "Nenhum contato encontrado"} should be true`)

console.log(agenda.editarContato(1, "Heric Passarinho", "996963838")) // deve ser {nome: 'Heric Passarinho', telefone: '996963838'}
console.log(`${agenda.editarContato(2, "Victor Churros", "985851717") === "Nenhum contato encontrado"} should be true`)