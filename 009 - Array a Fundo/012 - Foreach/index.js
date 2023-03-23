const myArrayObj = [
  {
    nome: "APG",
    sobreNome: "Apgaua",
  },
  {
    nome: "Ana",
    sobreNome: "Apgaua",
  },
  {
    nome: "Ju",
    sobreNome: "Apgaua",
  },
];

myArrayObj.forEach((item, index) => {
  if (item.nome === "Ana") {
    return console.log("A mamae ta te esperando");
  }

  console.log(index, item.nome);
});
