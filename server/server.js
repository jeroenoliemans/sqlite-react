// Create express app
const express = require("express");
const app = express();
const db = require("./database.js");

// Server port
const HTTP_PORT = 8044;
// Client port
const CLIENT_HTTP_PORT = 8055;

// body parser
app.use(express.json());

// set cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
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

// Insert here other API endpoints

// get all
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


//get one
app.get("/api/slogan/:id", (req, res, next) => {
    const sql = "select * from slogan where id = ?"
    console.log(req.params.id);
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

// add one
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

// delete one
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
