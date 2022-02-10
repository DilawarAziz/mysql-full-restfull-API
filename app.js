const express = require("express");
const router = require("./src/routers/router");
const mysql = require("./src/db/mysql").con;
require("./src/db/mongoDb");
const app = express();
var PORT = 4000;
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
  console.log("Server listening on PORT", PORT);
});
