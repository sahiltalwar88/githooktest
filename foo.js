exports.handler = function (event, context) {
  context.succeed(
    event.map(function (x) {
      return 'sahil ' + x
    })
  )
}
