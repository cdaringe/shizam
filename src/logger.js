module.exports = {
  info () {
    var args = Array.from(arguments)
    args.unshift('[shizam]')
    console.log(args.join(' '))
  }
}
