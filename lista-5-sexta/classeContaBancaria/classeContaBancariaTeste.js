/*
class ContaBancaria
    Atributos
        numero
        titular
        saldo
        limite

    Metodos
        depositar
        sacar
        imprimirDados
*/

// Exemplo para testar ContaBancaria

const contaJoao = new ContaBancaria('07685-3', 'Jardel', 2500, 500);

console.log(contaJoao.depositar(1000)); // Deve retornar 3500 e "A conta de número 07685-3 de Jardel possui um saldo de R$ 3.500,00 e um limite de R$ 500,00"
console.log(contaJoao.sacar(250)); // Deve retornar 3250 e "A conta de número 07685-3 de Jardel possui um saldo de R$ 3.250,00 e um limite de R$ 500,00"
