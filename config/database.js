let mysql = require("mysql");
let db_info = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1234",
  database: "bbs",
};

module.exports = {
  init: function () {
    return mysql.createConnection(db_info);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) console.error("mysql connection error : " + err);
      else console.log("mysql is connected successfully!");
    });
  },
};
