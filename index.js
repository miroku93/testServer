let http = require("http");
let url = require("url");
let db_config = require(__dirname + "/config/database.js");
let conn = db_config.init();
//request, response
let server = http.createServer((req, res) => {
  console.log("req :" + req.url);

  switch (req.url) {
    case "/":
      console.log("---------/----------");
      conn.query("SELECT * FROM board", function (error, results, fields) {
        if (error) throw error;

        console.log(results[0].BOARD_ID, results[1].BOARD_ID);
      });
      break;

    case "/insert":
      console.log("----------insert---------");
      break;

    default:
  }

  res.end("status: " + res.statusCode);
});

server.listen(8080, () => {
  console.log("서버 시작되었습니다 포트: 8080");
});
