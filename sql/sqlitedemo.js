var sqlite3 = require('sqlite3');
var sqlite = require('sqlite');

(async () => {
  const db = await  sqlite.open({
    filename: './test.mv.db',
    driver: sqlite3.Database
  })
})();
