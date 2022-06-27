//const http = require("http");
var express = require("express");
var cors = require("cors");
var app = express();
var PORT = process.env.port || 8000;

// let corsOptions = {
//   origin: "*", // 출처 허용 옵션
//   credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
// };

// app.use(cors(corsOptions));
app.use(cors());

const mariadb = require("mariadb");
const db = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  port: 3306,
  database: "bbs",
});

app.get("/1", (req, res) => {
  const sqlQuery = "INSERT INTO requested (rowno) VALUES (1)";
  db.query(sqlQuery, (err, result) => {
    console.log(err);
    res.send("success!");
  });
});

c

app.post("/insert", (req, res) => {
  console.log("-------------------------------");
  console.log(req);
  var title = req.body.title;
  var content = req.body.content;

  title = "eerewrewrwe";
  content = "werewfsdffsdf";
  console.log("-------------------------------");
  console.log(title, content);
  const sqlQuery =
    "INSERT INTO BOARD (BOARD_TITLE, BOARD_CONTENT, REGISTER_ID) FROM (?,?,artistJay);";
  db.query(sqlQuery, [title, content], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.post("/update", (req, res) => {
  var title = req.body.title;
  var content = req.body.content;

  const sqlQuery =
    "UPDATE BOARD SET BOARD_TITLE = ?, BOARD_CONTENT = ?, UPDATER_ID) FROM (?,?,artistJay);";
  db.query(sqlQuery, [title, content], (err, result) => {
    res.send(result);
  });
});

https: app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
