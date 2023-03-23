function nomeFunc() {
  return "APG Neto";
}

console.log(nomeFunc());

const nomeFuncArrow = () => {
  return "APG Neto";
};

console.log(nomeFuncArrow());

const nomeFuncArrowReturn = () => "APG Neto";

console.log(nomeFuncArrowReturn());

const nomeFuncArrowHoisting = () => {
  return "APG Neto";
};

console.log(nomeFuncArrowHoisting());

function nomeFuncArguments() {
  return arguments;
}

console.log(nomeFuncArguments("APG Neto"));

const nomeFuncArrowParams = (param) => param;

function newFunc() {
  return "APG Neto";
}

console.log(new newFunc());

const newFuncArrow = () => {
  return "APG Neto";
};

console.log(new newFuncArrow());

const lanches = {
  cardapio: [
    { nome: "x-salada", preco: "R$ 25" },
    { nome: "x-bolovo", preco: "R$ 30" },
  ],

  meuPedidoFunc: function (select) {
    return console.log(this.cardapio[select]);
  },

  meuPedidoFuncTimeOut: function () {
    setTimeout(
      function () {
        console.log(this.cardapio);
        console.log(this);
      }.bind(this),
      1000
    );
  },

  meuPedidoArrowFunc: (select) => {
    this.cardapio = [
      { nome: "x-salada", preco: "R$ 25" },
      { nome: "x-bolovo", preco: "R$ 30" },
    ];

    return console.log(this.cardapio[select]);
  },
};

lanches.meuPedidoFunc(1);
lanches.meuPedidoArrowFunc(1);
lanches.meuPedidoFuncTimeOut();

class newFunc {
  constructor(nome) {
    this.nome = nome;
  }
}

const a = new newFunc("APG Neto");
console.log(a.nome);
