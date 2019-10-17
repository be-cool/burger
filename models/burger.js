const orm = require("../config/orm");

const burger = {
  selectAll: cb => orm.selectAll("burgers", res => cb(res)),
  insertOne: (column_names, values, cb) =>
    orm.insertOne("burgers", column_names, values, res => cb(res)),
  updateOne: (values, condition, cb) =>
    orm.updateOne("burgers", values, condition, res => cb(res))
};

module.exports = burger;