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

// Adding additional propperties
Object.defineProperty(chris, 'navigator', {
  value: 'Chrome',
  enumerable: false,
  writable: true,
  configurable: true
})

Object.defineProperty(chris, 'editor', {
  value: 'VSCode',
  enumerable: true,
  writable: false,
  configurable: true
})

Object.defineProperty(chris, 'terminal', {
  value: 'WSL',
  enumerable: true,
  writable: true,
  configurable: false
})

console.log(chris);
// Show keys - Navigator no aparece