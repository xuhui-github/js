http = require 'http'

sourcefile = 'myfile'
fileContents = 'File not read yet.'

readSourceFile = ->
  fs.readFile sourcefile, 'utf-8', (error, data) ->
    if error
      console.log error
    else
      fileContents = data

fs.watchFile sourcefile, readSourceFile


server = http.createServer (request, response) ->
  response.end fileContents
server.listen 8080, '127.0.0.1'


