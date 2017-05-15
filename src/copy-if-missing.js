'use strict'

var utils = require('./utils')
var logger = require('./logger')
var fs = require('fs')

module.exports = function copyIfMissing (src, dest) {
  try {
    fs.lstatSync(dest)
    logger.info(`${dest} already present, skipping`)
  } catch (err) {
    if (err.code === 'ENOENT') {
      logger.info(`writing ${dest}`)
      utils.copyFile(src, dest)
    } else {
      throw err
    }
  }
}
