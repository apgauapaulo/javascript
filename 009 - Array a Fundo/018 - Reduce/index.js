const pedidos = [
  {
    id: 420,
    nome: "APG",
    alimento: "Sandubão de Bacon",
    bebida: "Suco Limão",
    preco: 100,
  },
  {
    id: 152,
    nome: "Kelly",
    alimento: "Sandubão Vegano",
    bebida: "Suco de Laranja",
    preco: 59,
  },
  {
    id: 29,
    nome: "Marcio",
    alimento: "Coxinha",
    bebida: "Suco de Uva",
    preco: 33,
  },
  {
    id: 33,
    nome: "Ana",
    alimento: "Sandubão de Picanha",
    bebida: "Refrigerante",
    preco: 79,
  },
  {
    id: 55,
    nome: "Ju",
    alimento: "Pizza",
    bebida: "Refrigerante",
    preco: 47,
  },
];

const balancete = pedidos.reduce((total, element) => {
  return total + element.preco;
}, 0);

console.log(balancete);
