const myArrayObj = [
  {
    nome: "Ana Luiza",
    sobreNome: "Apgaua",
  },
  {
    nome: "Juliana",
    sobreNome: "Apgaua",
  },
  {
    nome: "Marcelo",
    sobreNome: "Apgaua",
  },
  {
    nome: "Marcela",
    sobreNome: "Apgaua",
  },
  {
    nome: "Lucas",
    sobreNome: "Apgaua",
  },
  {
    nome: "Deborah",
    sobreNome: "Apgaua",
  },
];

for (let item of myArrayObj) {
  if (item.nome === "Ana Luiza") {
    console.log("O mamae ta te esperando");
    continue;
  }

  if (item.nome === "Marcelo") {
    console.log("O primo ta te esperando");
    break;
  }
  console.log(item);
}
