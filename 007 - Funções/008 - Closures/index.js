function Calculadora(num1, num2) {
  const msg = "Resultado:";

  const soma = () => {
    return `${msg} ${num1 + num2}`;
  };

  const subtracao = () => {
    return `${msg} ${num1 - num2}`;
  };

  const multiplicacao = () => {
    return `${msg} ${num1 * num2}`;
  };

  const divisao = () => {
    return `${msg} ${num1 / num2}`;
  };

  return {
    soma: soma(),
    subtracao: subtracao(),
    multiplicacao: multiplicacao(),
    divisao: divisao(),
  };
}

console.log(Calculadora(10, 5));
