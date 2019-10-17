var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll(data => {
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne("burger_name", req.body.burger_name, result => {
    res.json({ id: result.insertID });
  });
});

router.put("/:id", (req, res) => {
  let condition = `id=${req.params.id}`;
  burger.updateOne({ devoured: "true" }, condition, result =>
    result.changedRows === 0 ? res.status(404).end() : res.status(200).end()
  );
});

module.exports = router;