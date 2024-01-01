extend = (obj, mixin) ->
  obj[name] = method for name, method of mixin
  obj

include = (kclass, mixin) ->
  extend kclass.prototype , mixin


class Parrot
  constructor: (@name) ->
  getname: -> 
     return @name
  setage: (@age) ->


include Parrot,
  isDeceased: true

(new Parrot).isDeceased
console.log((new Parrot 'Macow').name)
console.log((new Parrot 'Maaa').isDeceased)
console.log(name, method) for name,method of Parrot
console.log((new Parrot 'Mssss').getname())
p = new Parrot('Mooo')
p.setage(10)
console.log(p.name,p.age)
console.log(name,method) for name,method of Parrot
