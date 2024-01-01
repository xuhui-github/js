class Animal
  constructor: (@name) ->
    console.log(@name)


class Parrot extends Animal

Animal::rip = true

parrot = new Parrot('Macaw')
console.log('This parrot is no more') if parrot.rip
