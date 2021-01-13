// keys.js - figure put what set of credentials should return

if (process.env.NODE_ENV === 'production') {
  // return the prod set of keys
  module.exports = require('./prod');
} else {
  // return the dev keys
  module.exports = require('./dev');
}