const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
  editA() {
    this.a = 'AAAAAA'
  }
};

// Object to String
const stringfiedComplexObject = JSON.stringify(obj1);

// String to object
const obj2 = JSON.parse(stringfiedComplexObject)

// El obj2 fue copiado y es autonomo, pero no funciona con funciones