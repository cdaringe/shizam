'use strict'

var cp = require('child_process')
var logger = require('./logger')

module.exports = function installDevPackages (root, packages) {
  cp.exec(
    'yarn add --dev ' + packages.join(' '),
    { cwd: root },
    (err, stdout, stderr) => {
      if (err) throw err
      logger.info(stdout)
    }
  )
}
