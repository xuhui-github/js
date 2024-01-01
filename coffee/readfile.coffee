fs = require 'fs'

readFileContent = (error, content) ->
  console.log content.toString()

fs.readFile 'readfile.coffee', readFileContent


