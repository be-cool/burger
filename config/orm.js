var connection = require("../config/connection");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  let arr = [];
  for (let key in ob) {
    arr.push(`${key} = ${ob[key]}`);
  }
  return arr.toString();
}

const orm = {
  selectAll: (table, cb) => {
    let queryString = `SELECT * FROM ${table}`;
    connection.query(queryString, (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },
  insertOne: (table, column_names, values, cb) => {
    let queryString = `INSERT INTO ${table} (${column_names}) VALUES ("${values.toString()}")`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: (table, values, condition, cb) => {
    let queryString = `UPDATE ${table} SET ${objToSql(
      values
    )} WHERE ${condition}`;
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
