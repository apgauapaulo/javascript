function isValidDeclaration() {
  const soma = 1 + 2;

  if (soma === 3) {
    return true;
  }

  return false;
}

const isValidExpression = function () {
  return false;
};

const isValidArrow = () => {
  const multiplicacao = 2 * 2;
  return multiplicacao;
};

console.log(isValidArrow());
