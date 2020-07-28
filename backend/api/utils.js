module.exports = {
  errorHandler: (err) => {
    console.warn('Error caught by server: ' + err)
    throw new Error(err)
  }
}