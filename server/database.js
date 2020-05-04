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
                // table is available
            } else {
                // Table just created, creating some rows
                var insert = 'INSERT INTO slogan (slogan) VALUES (?)'
                db.run(insert, ["Feed the Planet and It Will Nourish You."]),
                db.run(insert, ["Mother Earth Is Going to Get Mean If You Don't Go Green"])
            }
        });  
    }
});


module.exports = db
