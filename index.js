var path = require('path')
var through = require('through')

module.exports = function(opts) {
  return through(function(file) {
    if (typeof opts === 'function') {
      var res = opts.call(this, file)
      if (res != null) {
        file.chunkName = res
        this.queue(file)
      }
    } else {
      file.chunkName = path.basename(file.path, path.extname(file.path))
      this.queue(file)
    }
  })
}
