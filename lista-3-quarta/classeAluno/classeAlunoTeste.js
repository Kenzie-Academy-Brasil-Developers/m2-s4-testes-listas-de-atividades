class Aluno {
  /*
  Atributos
      nome
      curso
      turno
      mediaCorte
      materias  
  */

  //Métodos
  verificarMateriasAprovadas() {}

  verificarAprovacaoSemestre() {}
}

const materiasJoao = [
  {
    nome: "Calculo I",
    avaliacoes: [6, 8, 10, 8],
  },
  {
    nome: "Pensamento Computacional",
    avaliacoes: [9, 8, 10, 9],
  },
];

const materiasFabio = [
  {
    nome: "Linguagem Orientada a Objetos",
    avaliacoes: [5, 6, 7, 2],
  },
  {
    nome: "Arquitetura de Organização de Computadores",
    avaliacoes: [6, 5, 7, 1],
  },
];

const joao = new Aluno(
  "João",
  "Ciência da Computação",
  "Noturno",
  9,
  materiasJoao
);

const fabio = new Aluno(
  "Fabio",
  "Engenharia da Computação",
  "Vespertino",
  8,
  materiasFabio
);

console.log(joao.nome); // Deve retornar João
console.log(joao.curso); // Deve retornar Ciência da Computação
console.log(joao.turno); // Deve retornar Noturno

joao.verificarMateriasAprovadas();

console.log(joao.materias); // Deve retornar [{nome: "Calculo I", avaliacoes: [6, 8, 10, 8], status: false},{nome: "Pensamento Computacional", avaliacoes: [9, 8, 10, 9],status: true}]

joao.verificarAprovacaoSemestre();

console.log(joao.quantidadeAprovacoes); // Deve retornar 1
console.log(joao.status); // Deve retornar false

fabio.verificarMateriasAprovadas();
fabio.verificarAprovacaoSemestre();

console.log(fabio.quantidadeAprovacoes); // Deve retornar 0
console.log(fabio.status); // Deve retornar false
