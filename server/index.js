const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "MyCourses@43",
  database: "employeesystem",
});

app.post("/create", (req, res) => {
  const emInfo = req.body.emInfo;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?, ?, ?, ?, ?)",
    [emInfo.name, emInfo.age, emInfo.country, emInfo.position, emInfo.wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Inserted Entry");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Sever is running at port 3001");
});
