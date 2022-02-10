const mysql = require("../db/mysql").con;
const express = require("express");
router.post("/users", (req, res) => {
  let { name, company, city } = req.body;
  var sql = "INSERT INTO table1 values(?,?,?,?)";
  mysql.query(sql, [name, company, req.body.class, city], (err, result) => {
    if (err) throw err;
    else {
      res.send(result);
    }
    console.log("1 record inserted");
  });
});
router.get("/users", (req, res) => {
  let qry = "SELECT name, address FROM table1";
  let qry2 = "SELECT * FROM table1 WHERE address = 'karachi'";
  let qry3 = "SELECT * FROM table1";
  mysql.query(qry2, (err, result, fields) => {
    if (err) throw err;
    console.log(fields);
    res.send(result);
  });
});

router.patch("/users", (req, res) => {
  let qry =
    "UPDATE table1 SET address = 'karachi' WHERE address = 'Highway 37'";
  mysql.query(qry, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " records updated");
    res.send(result);
  });
});

router.delete("/users", (req, res) => {
  var qry = "DELETE FROM table1 WHERE name = 'Company Inc'";
  mysql.query(qry, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
    res.send(result);
  });
});
module.exports = router;
