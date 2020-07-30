const getFilenameFromPath = (path, withExtension = false) => {
  const regex = /(^.*[\\\/])(.+?)(\.[^.]*$|$)/
  const name = path.replace(regex, withExtension ? ' $2$3' : ' $2 ')
  return name
}

export default getFilenameFromPath