let arr = [
  { nome: "APG", tel: "(99) 99999 9999" },
  { nome: "Neto", tel: "(99) 99999 9999" },
  { nome: "Amigo 1", tel: "(99) 99999 9999" },
  { nome: "Amigo 2", tel: "(99) 99999 9999" },
  { nome: "Amigo 3", tel: "(99) 99999 9999" },
];

console.table(arr);

console.log(arr.splice(4, 1));

console.table(arr);
