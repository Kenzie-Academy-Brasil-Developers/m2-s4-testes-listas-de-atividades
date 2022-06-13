class Estoque {
  /*
    Atributos
        quantidadeMinimaEstoque
        quantidadeMaximaEstoque
        itensEstoque
    */

  //Métodos
  verificaEstoque() {}

  adicionarItem() {}

  removerItem() {}

  pesquisarItem() {}

  atualizarEstoque() {}
}

itensEstoque = {
  eletronicos: [
    { id: 1, nome: "Tv", preco: 1200, estoque: 80 },
    { id: 2, nome: "Computadores", preco: 3000, estoque: 100 },
    { id: 3, nome: "Celulares", preco: 800, estoque: 54 },
    { id: 4, nome: "Fones", preco: 5, estoque: 41 },
    { id: 5, nome: "Webcam", preco: 50, estoque: 36 },
    { id: 6, nome: "Mouse", preco: 3, estoque: 354 },
    { id: 7, nome: "Tablet", preco: 20, estoque: 150 },
    { id: 8, nome: "Mousepads", preco: 2, estoque: 1000 },
    { id: 9, nome: "Headsets", preco: 35, estoque: 80 },
    { id: 10, nome: "Impressoras", preco: 1, estoque: 50 },
    { id: 12, nome: "No-breaks", preco: 14, estoque: 36 },
    { id: 13, nome: "Memória ram", preco: 3, estoque: 12 },
  ],
  materialEscolar: [
    { id: 1, nome: "Caderno", preco: 10, estoque: 80 },
    { id: 2, nome: "Estojo", preco: 30, estoque: 100 },
    { id: 3, nome: "Mochila", preco: 70, estoque: 54 },
    { id: 4, nome: "Lapiseira", preco: 5, estoque: 32 },
    { id: 5, nome: "Fichario", preco: 50, estoque: 20 },
    { id: 6, nome: "Borracha", preco: 3, estoque: 85 },
    { id: 7, nome: "Lancheira", preco: 20, estoque: 100 },
    { id: 8, nome: "Caneta", preco: 2, estoque: 1000 },
    { id: 9, nome: "Cola branca", preco: 35, estoque: 250 },
    { id: 10, nome: "Borracha", preco: 1, estoque: 400 },
    { id: 11, nome: "Lápis de cor", preco: 14, estoque: 63 },
    { id: 12, nome: "Apontador", preco: 3, estoque: 5 },
  ],
  automotivo: [],
  cozinha: [
    { id: 1, nome: "Panela", preco: 10, estoque: 80 },
    { id: 2, nome: "Cafeteira", preco: 30, estoque: 100 },
    { id: 3, nome: "Louça", preco: 70, estoque: 54 },
    { id: 4, nome: "Copos", preco: 5, estoque: 32 },
    { id: 5, nome: "Fogão", preco: 50, estoque: 20 },
    { id: 6, nome: "Geladeira", preco: 1, estoque: 400 },
    { id: 7, nome: "Abridor de garrafa", preco: 14, estoque: 63 },
    { id: 8, nome: "Forno elétrico", preco: 3, estoque: 5 },
  ],
  petShop: [{ id: 1, nome: "Tapete Higiênico", preco: 10, estoque: 80 }],
};

const estoque = new Estoque(5, 20);

console.log(estoque.quantidadeMinimaEstoque); // Deve retornar 5

console.log(estoque.quantidadeMaximaEstoque); // Deve retornar 20

console.log(estoque.verificaEstoque(cozinha)); // Deve retornar [{ id: 8, nome: "Forno elétrico", preco: 3, estoque: 5 }]

console.log(estoque.verificaEstoque()); // Deve retornar [{ id: 12, nome: "Apontador", preco: 3, estoque: 5 },{ id: 8, nome: "Forno elétrico", preco: 3, estoque: 5 }]

estoque.adicionarItem(
  { id: 1, nome: "Tapete Higiênico", preco: 10, estoque: 20 },
  "petShop"
);

console.log(estoque.itensEstoque.petShop); // Deve retornar [{ id: 1, nome: "Tapete Higiênico", preco: 10, estoque: 100 }]

console.log(
  estoque.adicionarItem(
    { id: 2, nome: "Cama para cachorro grande", preco: 100, estoque: 2 },
    "petShop"
  )
); // Deve retornar false

estoque.adicionarItem(
  { id: 2, nome: "Cama para cachorro grande", preco: 100, estoque: 10 },
  "petShop"
);

console.log(estoque.itensEstoque.petShop); // Deve retornar [{ id: 1, nome: "Tapete Higiênico", preco: 10, estoque: 100 }, { id: 2, nome: "Cama para cachorro grande", preco: 100, estoque: 10 }]

console.log(estoque.removerItem(7, "cozinha")); // Deve retornar true

console.log(estoque.itensEstoque.cozinha.length === 7); // Deve retornar true

console.log(estoque.removerItem(9, "cozinha")); // Deve retornar false

console.log(estoque.pesquisarItem(1, "eletronicos")); // Deve retornar { id: 1, nome: "Tv", preco: 1200, estoque: 80 }

console.log(estoque.pesquisarItem(20, "eletronicos")); // Deve retornar false

console.log(estoque.atualizarEstoque(13, "eletronicos", 10)); // Deve retornar { id: 13, nome: "Memória ram", preco: 3, estoque: 22}

console.log(estoque.atualizarEstoque(15, "eletronicos", 20)); // Deve retornar false
