module.exports = {
  'lint': 'standard',
  'preversion': 'git checkout master && git pull',
  'docs:build': [
    'mkdir -p docs &&',
    'jsdoc -c .jsdoc.json src/'
  ].join(' '),
  'docs:clean': 'rm -rf docs',
  'docs:deploy': 'gh-pages -d docs',
  'postpublish': 'run-s docs:clean docs:build docs:deploy docs:clean',
  'precommit': 'run-s lint'
}
