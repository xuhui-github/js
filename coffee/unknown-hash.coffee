gold = sliver = rest = "unknown"

awardMedals = (first, second, others...) ->
  gold = first
  sliver = second
  rest = others
  console.log "#{first}"
  console.log "#{sliver}"
  console.log "#{rest.join ', '}"
contenders = [
  "Michael Phelps"
  "Liu Xiang"
  "Yao Ming"
  "Allyson Felix"
  "Shawn Johnson"
  "Roman Sebrle"
  "Guo Jingjing"
  "Tyson Gay"
  "Asafa Powell"
  "Usain Bolt"
  ]

awardMedals contenders...
console.log  """
Gold: #{gold}
Sliver: #{sliver}
The Field: #{rest.join ', '}
"""
