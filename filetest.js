var fs = require("fs")
//import {unlink} from 'node:fs';
fs.unlink('./test',(err) => {
  if(err)
    console.log(err.message)
})
fs.opendir('.',(err,dir) => {
  var entrs=dir.readSync();
  for(file in entrs)
    console.log(entrs.name);
});

var csv=require("csv")

