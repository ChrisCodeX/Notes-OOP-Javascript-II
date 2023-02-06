/* Object */
const chris = {
  name: 'Christian',
  age: 24,
  approvedCourses: ['Curso 1'],
  
  addCourse(newCourse) {
    console.log('this', this)
    console.log('this.approvedCourses', this.approvedCourses)
    this.approvedCourses.push(newCourse)
  }
}

/* Adding additional propperties */
Object.defineProperty(chris, 'navigator', {
  value: 'Chrome',
  // Esta propiedad no se muestra como enumerada (Object.keys)
  enumerable: false,
  writable: true,
  configurable: true
})

Object.defineProperty(chris, 'editor', {
  value: 'VSCode',
  enumerable: true,
  // Esta propiedad no puede cambiarse, pero sí eliminarse
  writable: false,
  configurable: true
})

Object.defineProperty(chris, 'terminal', {
  value: 'WSL',
  enumerable: true,
  writable: true,
  // La propiedad no puede editarse, pero sí eliminarse
  configurable: false
})

Object.defineProperty(chris, 'PruebaNasa', {
  value: 'extraterrestres',
  enumerable: false,
  writable: false,
  configurable: false
})

/* Navegador Web */
console.log('Object', chris);
// Show keys - Navigator no aparece
console.log('Object.keys:', Object.keys(chris));

// Navigator aparece
console.log('Object.getOwnPropertyNames:', Object.getOwnPropertyNames(chris));

// Eliminar propiedades
delete chris.navigator
console.log('Chris Object', chris);

/* Object Manipulation - Todas las propiedades */
// Configurable: false
Object.seal(chris);

// Writtable: false
Object.freeze(chris);