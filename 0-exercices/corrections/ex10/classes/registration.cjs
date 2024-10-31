class Registration {
  constructor(repository, encryption) {
    this.repository = repository
    this.encryption = encryption
  }

  login() {
    const { user } = this.repository

    if (!(user.email && user.password)) {
      return { message: 'email or password incorrect' }
    }
    return this.repository
    .findAll()
    .then((users) => {
      return this.repository.findOne(users)
    })
    .catch((error) => `error users route ${error.message}`)
    .then((userStored) => {
      return this.encryption.comparePassword(user.password, userStored.password)
    })
    .then((result) => {
      if (result.isOk === true) {
        const token = this.encryption.generateToken(user)
        return { email: user.email, token }
      }
    })
    .catch(error => error)
  }

  subscribe() {
    const { user } = this.repository
    if (user && user.email && user.password) {
      const hash = this.encryption.hash(user.password)
      return hash
        .then((passwordHash) => {
          user.setPassword(passwordHash)
          return user
        })
        .catch((error) => {
          throw new Error(error.message)
        })
        .then(() => {
          // on pourrait récupérer user avec le mot de passe haché ici en placant un paramètre dans le then()
          return this.repository.insert()
        })
        .then((response) => {
          if (response.message === "success") {
            return response
          }
          throw new Error(response.message)
        })
        .catch(error => error)
    }
    throw new Error('email and password required')
  }
}
module.exports = Registration