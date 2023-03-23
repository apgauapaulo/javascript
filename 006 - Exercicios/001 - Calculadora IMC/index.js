const peso = 80;
const altura = 1.77;
const imc = Number((peso / (altura * altura)).toFixed(2));

switch (true) {
  case imc < 17:
    console.log("Muito magrelo");
    break;

  case imc >= 17 && imc <= 18.49:
    console.log("Magro");
    break;

  case imc >= 18.5 && imc <= 24.99:
    console.log("Peso normal");
    break;

  case imc >= 25 && imc <= 29.99:
    console.log("Gordin");
    break;

  case imc >= 30 && imc <= 34.99:
    console.log("Gordo");
    break;

  case imc >= 35 && imc <= 39.99:
    console.log("Gordão");
    break;
}
