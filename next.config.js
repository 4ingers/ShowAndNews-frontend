const path = require('path')

module.exports = {
  // loaderOptions: {
  //   scss: {
  //     prependData: `@import "@/styles/_variables.scss";`
  //   }
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}