const stringArray = ["A", "C", "D", "W", "L", "B"];

console.log(stringArray.sort());
console.log(stringArray.reverse());

const numberArray = [10, 20, 30, 40, 50, 1000, 1, 55, 15];

console.log(numberArray.sort((a, b) => a - b));
console.log(numberArray.sort((a, b) => b - a));
console.log(numberArray.sort((a, b) => a - b).reverse());

const objArray = [
  {
    nome: "APG Neto",
  },
  {
    nome: "APG Paulo",
  },
  {
    nome: "APG Guilherme",
  },
  {
    nome: "APG APG",
  },
  {
    nome: "APG N",
  },
  {
    nome: "APG P",
  },
];

console.log(objArray.sort((a, b) => a.nome.localeCompare(b.nome)));
console.log(objArray.sort((a, b) => b.nome.localeCompare(a.nome)));
console.log(objArray.sort((a, b) => a.nome.localeCompare(b.nome)).reverse());
