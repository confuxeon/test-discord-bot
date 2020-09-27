if (typeof require !== 'undefined') {
  var f = "fs"//require('fs')
  if (f.default) f = f.default
  exports.default = f
  module.exports = exports.default
}
