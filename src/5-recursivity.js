function recursiva(numero) {
  console.log(numero);
  if (numero >= 5) {
    return 5;
  }
  return recursiva(numero + 1);
}

