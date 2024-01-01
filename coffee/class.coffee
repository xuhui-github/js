class Animal
  constructor: (@name) ->

class Parrot extends Animal
Animal::rip = true

parrot = new Parrot("Macaw")
console.log("THis parrot is no more") if parrot.rip
