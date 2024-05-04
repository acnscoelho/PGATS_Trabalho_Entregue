const calcularTotal = (ferramentas, comprar) => {

if (ferramentas.length == 0 || comprar.length == 0){
    throw new Error("Ambas as listas precisam ter ao menos um item.");
};



let soma = 0;
const comprados = [];
let indice = 0;

for (let i = 0; i < ferramentas.length; i++) {
    for (let j = 0; j < comprar.length; j++) {
        if (ferramentas[i].nome == comprar[j]) { 
            soma += ferramentas[i].preco;
            comprados[indice] = comprar[j];
            indice ++;
        }else if (comprados.length == 0){
            throw new Error("Nenhuma ferramenta desejada encontrada.");
        };
    };
};
    return `O valor a pagar pelas ferramentas (${comprados.join(", ")}) é R$ ${soma.toFixed(2)}`; 

};

module.exports = {
    calcularTotal
};