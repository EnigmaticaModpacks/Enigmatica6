onEvent('postinit', event => {
  // Loads Java class field
  var client = java('shadows.menu.PackMenuClient')
  client.loadConfig()
})