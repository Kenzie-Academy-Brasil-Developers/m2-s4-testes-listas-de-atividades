class Onibus {
  /*
  Atributos
      capacidade
      origem
      destinoFinal
      paradas
      passageiros
  */

  //Métodos
  efetuarParada() {}
}

const paradas = [
  "São Paulo-SP",
  "Campinas-SP",
  "São José dos Campos-SP",
  "Volta Redonda-RJ",
];
const passageiros = [
  {
    nome: "Luis da Silva",
    rg: "1234567890",
    bilhete: {
      origem: "Curitiba-PR",
      destino: "São José dos Campos-SP",
      poltrona: 15,
    },
  },
  {
    nome: "João da Silva",
    rg: "1234567891",
    bilhete: {
      origem: "São Paulo-SP",
      destino: "Rio de Janeiro-RJ",
      poltrona: 16,
    },
  },
];

const kenzieBus = new Onibus(
  40,
  "Curitiba-PR",
  "Rio de Janeiro-RJ",
  paradas,
  passageiros
);

console.log(kenzieBus.capacidade); // Deve retornar 40
console.log(kenzieBus.origem); // Deve retornar Curitiba-PR
console.log(kenzieBus.destinoFinal); // Deve retornar Rio de Janeiro-RJ

console.log(kenzieBus.efetuarParada("Rio de Janeiro-RJ")); // Deve retornar [{nome: "João da Silva", rg: "1234567891", bilhete: {origem: "São Paulo-SP", destino: "Rio de Janeiro-RJ", poltrona: 16}, viagemConcluida: true}]

console.log(kenzieBus.efetuarParada("São Paulo-SP")); // Deve retornar []
