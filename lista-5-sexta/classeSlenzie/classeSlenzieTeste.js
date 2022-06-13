/*
class Slenzie
    Atributos
        evento
        perguntas
        perguntasArquivadas

    Metodos
        adicionarPergunta
        arquivarPergunta
        votarPergunta
        reativarPergunta
*/

// Exemplo para testar Slenzie

const slenzie = new Slenzie();

console.log(slenzie.adicionarPergunta('maria', 'Como fazer animações em CSS?')); // Deve armazenar um objeto em perguntas como {usuario: 'maria', pergunta: 'Como fazer animações em CSS?', votos: 0}
console.log(slenzie.adicionarPergunta('nicole', 'Por que devemos usar métodos?')); // Deve armazenar um objeto em perguntas como {usuario: 'nicole', pergunta: 'Por que devemos usar métodos?', votos: 0}
console.log(slenzie.adicionarPergunta('caique', 'Para que serve a tag aside?')); // Deve armazenar um objeto em perguntas como {usuario: 'caique', pergunta: 'Para que serve a tag aside?', votos: 0}
console.log(slenzie.arquivarPergunta()); // Deve remover o objeto do usuário caique de perguntas e armazenar em perguntasArquivadas
console.log(slenzie.votarPergunta(1)); // Deve aumentar em 1 a propriedade votos do usuário nicole e reordenar perguntas com base na propriedade votos em ordem decrescente
console.log(slenzie.reativarPergunta(0)); // Deve remover o objeto do usuário caique de perguntasArquivadas e armazenar em perguntas