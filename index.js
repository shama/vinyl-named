var path = require('path')
var through = require('through')

module.exports = function(opts) {
  return through(function(file) {
    if (typeof opts === 'function') {
      var res = opts.call(this, file)
      if (res != null) {
        file.named = res
        this.queue(file)
      }
    } else {
      var pathobj = path.parse(file.relative)
      file.named = path.join(pathobj.dir, pathobj.name)
      this.queue(file)
    }
  })
}
