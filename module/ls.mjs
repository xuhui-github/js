import _fs from 'fs'
const fs=_fs.promise;
import util from 'util';

(async() => {
  const files = await fs.readdir('.');
  for (let fn of files){
    console.log(fn);
  }
})().catch(err => {console.error(err);});

