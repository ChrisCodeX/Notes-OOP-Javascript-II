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
    readName() {
      return private._name;
    },
    changeName(newName) {
      private._name = newName;
    },
  };

  // Proteger a los métodos publicos
  // Protegiendo readName
  Object.defineProperty(public, 'readName', {
    writable: false,
    configurable: false,
  });
  
  // Protegiendo changeName
  Object.defineProperty(public, 'changeName', {
    writable: false,
    configurable: false,
  });
  return public;
}

// Declaración del objeto
const chris = createStudent({
  name: 'Christian',
  age: 24,
  email: 'c.espinoza.code@gmail.com',
  twitter: 'chriscodex',
});
