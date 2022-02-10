const mysql = require("mysql");
const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user",
  port: 3306,
});

connect.connect((err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("mysql connected");
  }
});

module.exports.con = connect;
