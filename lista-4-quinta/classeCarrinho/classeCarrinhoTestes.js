class Carrinho {
  /*
    Atributos
        valorTotal
        qtdProdutos
        valorFrete
        itensCarrinho
    */

  //Métodos
  calcularPrecoPromocional() {}

  verificarDisponibildiade() {}
}

const itensCarrinho = [
  { nome: "Caderno", preco: 10, disponivel: true },
  { nome: "Estojo", preco: 30, disponivel: false },
  { nome: "Mochila", preco: 70, disponivel: true },
  { nome: "Lapiseira", preco: 5, disponivel: true },
  { nome: "Fichario", preco: 50, disponivel: true },
  { nome: "Borracha", preco: 3, disponivel: false },
  { nome: "Lancheira", preco: 20, disponivel: true },
];

const carrinho = new Carrinho(188, 7);

console.log(carrinho.valorFrete); // Deve retornar 50

carrinho.calcularPrecoPromocional();

console.log(carrinho.valorFrete); // Deve retornar 0

console.log(carrinho.verificarDisponibildiade()); // Deve retornar [{ nome: "Estojo", preco: 30, disponivel: false }, { nome: "Borracha", preco: 3, disponivel: false }]
