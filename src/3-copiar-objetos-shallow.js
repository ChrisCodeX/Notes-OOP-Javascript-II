const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e'
  }
};

/* Cuando se modifica una propiedad de un objeto, también se afecta al otro objeto */
// const obj2 = obj1;

/* Manual copy - forLoop - No afecta a los objetos anidados */
// Copia correctamente el valor de las propiedades en el primer nivel de anidamiento
// No afecta a los objetos anidados
const obj2 = {}

for (prop in obj1) {
  obj2[prop] = obj1[prop]
}

/* Copia con Object.assign */
// Mismo problema que con obj2
const obj3 = Object.assign({}, obj1)

/* Object.create */
// Obj4 hereda las propiedades del prototipo obj1
const obj4 = Object.create(obj1)