countWords = (text, delimiter) ->
  words = text.split delimiter
  words.length

countWords("this is just a test", ' ')
countWords
