function requiredParam(param) {
  throw new Error(`${param} is required`);
}

function createLearningPath({
  name = requiredParam('name'),
  courses = []
}) {
  const private = {
    _name: name,
    _courses: courses,
  };

  const public = {
    // Name property
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

    // Courses property
    get courses() {
      return private._courses;
    },
  };

  return public
}

// Object Factory
function createStudent({
  name = requiredParam('name'),
  age,
  email = requiredParam('email'),
} = {}) {
}

// Declaración del objeto
const chris = createStudent({
  name: 'Christian',
  age: 24,
  email: 'c.espinoza.code@gmail.com',
  twitter: 'chriscodex',
});

console.log('Ver los LP de chris', chris.learningPaths);

