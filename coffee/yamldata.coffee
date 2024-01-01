phonebook =

numbers:

hannibal: '555-5551',

darth: '555-5552',

hal9000: 'disconnected',

freddy: '555-5554',

'T-800': '555-5555',

list: ->

"#{name}: #{number}" for name, number of @numbers,

add: (name, number) ->

if not (name of @numbers)

@numbers[name] = number

get: (name) ->

if name of @numbers

"#{name}: #{@numbers[name]}"

else

"#{name} not found"

console.log "Phonebook. Commands are add get list and exit."

process.stdin.setEncoding 'utf8'

stdin = process.openStdin()
