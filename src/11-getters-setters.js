function requiredParam(param) {
  throw new Error(`${param} is required`);
}

// Object Factory
function createStudent({
  name = requiredParam('name'),
  age,
  email = requiredParam('email'),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
  };
  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name() {
      return private._name;
    },
    set name(newName) {
      if (newName.length === 0) {
        console.warn('Tu nombre debe tener al menos 1 caracter');
        return
      }
      private._name = newName;
    },
    // readName() {
    //   return private._name;
    // },
    // changeName(newName) {
    //   private._name = newName;
    // },
  };
  
  return public;
}

// Declaración del objeto
const chris = createStudent({
  name: 'Christian',
  age: 24,
  email: 'c.espinoza.code@gmail.com',
  twitter: 'chriscodex',
});

// See properties
console.log('Ver propiedades:', Object.getOwnPropertyDescriptors(chris));

// Cambiando la propiedad name
console.log('Cambiando la propiedad name:', Object.defineProperty(chris, 'name', {
  value: 'Javier'
}))
