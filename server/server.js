const express = require("express");
const app = express();
const db = require("./database.js");

// server port
const HTTP_PORT = 8044;
// client port
const CLIENT_HTTP_PORT = 8055;

// body parser
app.use(express.json());

// set headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // wildcard, only for localhost
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT));
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"});
});

// SLOGAN API

// get all slogans
app.get("/api/slogans", (req, res, next) => {
    const sql = "select * from slogan";
    let params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});


//get one slogan
app.get("/api/slogan/:id", (req, res, next) => {
    const sql = "select * from slogan where id = ?"
    let params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});

// add slogan
app.post("/api/slogan/", (req, res, next) => {
    let errors=[]
    if (!req.body.slogan) {
        res.status(400).json({"error": "No slogan specified"});
        return;
    }

    const sql ='INSERT INTO slogan (slogan) VALUES (?)';
    // body from post form react
    let params =[req.body.slogan]
    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": req.body.slogan
        })
    });
})

//update slogan
app.put("/api/slogan/:id", (req, res, next) => {
    if (!req.body.slogan) {
        res.status(400).json({"error": "No slogan specified"});
        return;
    }

    const sql = 'UPDATE slogan SET slogan = ? WHERE id = ?'; 
    let params = [req.body.slogan, req.params.id]
    db.run(
        sql,
        params,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message});
                return;
            }
            res.json({"message":"update", changes: this.changes})
    });
})

// delete slogan
app.delete("/api/slogan/:id", (req, res, next) => {
    db.run(
        'DELETE FROM slogan WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message});
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})

// Default response for any other request
app.use(function(req, res){
    res.json({"status":"404"});
});
