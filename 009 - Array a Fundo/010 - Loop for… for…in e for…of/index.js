const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
  {
    nome: "APG",
    sobreNome: "Neto",
  },
  {
    nome: "Paulo",
    sobreNome: "Neto",
  },
  {
    nome: "Guilherme",
    sobreNome: "Neto",
  },
];

for(let i = 0; i < 10; i++){
  console.log(i);
}

for (let i = 0; i < myArray.length; i++){
  console.log[myArrayObj[i].nome];
}

for(let item of myArrayObj){
  console.log(item.nome, item.sobreNome);
}

fot(let item2 in myArrayObj){
  console.log(item2);
}