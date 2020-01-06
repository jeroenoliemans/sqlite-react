const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'db.sqlite';

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message);
      throw err;
    } else {
        console.log('Connected to SQLite database.');
        db.run(`CREATE TABLE slogan (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            slogan text
            )`,
        (err) => {
            if (err) {
                // Table is available
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO slogan (slogan) VALUES (?)'
                db.run(insert, ["My first slogan"]),
                db.run(insert, ["Second slogan"])
            }
        });  
    }
});


module.exports = db
