const getFilenameFromPath = (path, extension = false) => {
  const regex = /(^.*[\\\/])(.+?)(\.[^.]*$|$)/
  const name = path.replace(regex, extension ? ' $2$3' : ' $2 ')
  return name
}

export default getFilenameFromPath