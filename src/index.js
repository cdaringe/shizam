'use strict'

const path = require('path')
const app = require('./app')
const logger = require('./logger')
const copyIfMissing = require('./copy-if-missing')
const getMissingDevDependencies = require('./get-missing-dev-deps')
const installDev = require('./install-dev-packages')
const installScripts = require('./install-scripts')
const pkgJSON = require(path.resolve(app.root, 'package.json'))

logger.info('installing shizam hooks and scripts into your project...') // eslint-disable-line
copyIfMissing(
  path.resolve(__dirname, '../templates/.jsdoc.json'),
  path.resolve(app.root, '.jsdoc.json')
)
installScripts(pkgJSON, app.toInstallScripts)

const toInstallDev = getMissingDevDependencies(pkgJSON, app.toInstallDevPkgs)
if (toInstallDev && toInstallDev.length) {
  logger.info('installing shizam-* ecosystem dep pkgs into your project...') // eslint-disable-line
  installDev(app.root, toInstallDev)
} else {
  logger.info('project has all shizam-* dev packages installed :)') // eslint-disable-line
}
