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

// All keys from object
console.log(Object.keys(chris)); // ['name', 'age', 'approvedCourses', 'addCourse']

console.log(Object.getOwnPropertyNames(chris));

chris.addCourse('Curso 2')

// Array of arrays
console.log(Object.entries(chris)); // [Array(2), Array(2), Array(2), Array(2)]
// console.log(Object.entries(chris)[3][1]('Curso 3'));

console.log(Object.getOwnPropertyDescriptors(chris));

module.exports = {
  chris
}
