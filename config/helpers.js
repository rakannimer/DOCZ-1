const { readdir } = require('fs')
const { resolve: resolvePath } = require('path')

module.exports = {
  relativeToRoot (path = '.') {
    return resolvePath(__dirname, '..', path)
  },
  getEntryFiles (path) {
    return new Promise((resolve, reject) => {
      readdir(
        resolvePath(__dirname, '../', path),
        (err, items) => {
          if (err) reject(err)
          if (items) {
            resolve(
              Array.from(items).reduce((prev, current = '') => {
                if ((new RegExp('.DS_Store')).test(current)) return prev
                if ((new RegExp('typings')).test(current)) return prev
                if ((new RegExp('index.html')).test(current)) return prev
                if ((new RegExp('.mdx')).test(current)) return prev
                if ((new RegExp('.d.ts')).test(current)) return prev
                let fileName = current.replace('.js', '')
                if (fileName !== 'index') {
                  fileName = fileName + '/index'
                }
                return { ...prev, [fileName]: path + current }
              }, {})
            )
          }
        })
    })
  }
}
