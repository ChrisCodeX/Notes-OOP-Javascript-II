const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    facebook: undefined,
    twitter: undefined,
    instagram: undefined,
  }
};

const juan = deepCopy(studentBase);
//* Ninguna propiedad del objeto Juan se podrá eliminar
Object.seal(juan);

//* Pregunta si tiene todas sus propiedades protegidas
Object.isSealed(juan);

//* Pregunta si tiene todas sus propiedades protegidas y además no se pueden agregar otras
Object.isFrozen(juan);