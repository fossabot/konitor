import fs from 'fs-extra'

export const getFilesFromDir = async (dir, extension) => {
  const dirCont = await fs.readdir(dir)
  const re = new RegExp(`.*\.(${extension})`, 'ig')
  const files = dirCont.filter(elm => elm.match(re))

  return files
}
