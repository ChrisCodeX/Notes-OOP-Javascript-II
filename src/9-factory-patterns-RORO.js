function requiredParam(param) {
  throw new Error(`${param} is required`)
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
  learningPaths = []
} = {}) {
  const private = {}
  const public = {}

  return {
    name,
    age,
    socialMedia: {
      twitter,
      instagram,
      facebook
    },
    approvedCourses,
    learningPaths,
    changeName( newName ){
      this.name = newName
    }
  }
}

const chris = createStudent({
  name: 'Christian',
  age: 24,
  email: 'c.espinoza.code@gmail.com',
  twitter: 'chriscodex'
})