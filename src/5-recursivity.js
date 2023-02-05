function recursiva(numero) {
  console.log(numero);
  if (numero >= 5) {
    return 5;
  }
  return recursiva(numero + 1);
}

// Equivalencia con el ciclo while
let num = 0

while(num < 5) {
  console.log(num);
  num++
}