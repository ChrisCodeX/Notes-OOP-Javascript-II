function requiredParam(param) {
  throw new Error(`${param} is required`);
}

// Object Factory
function createStudent({
  name = requiredParam('name'),
} = {}) {
}

// Declaración del objeto
const chris = createStudent({
  name: 'Christian',
  age: 24,
  email: 'c.espinoza.code@gmail.com',
  twitter: 'chriscodex',
});
