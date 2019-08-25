var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.createOne("burger_name",[req.body.name], function(result) {

        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log(req.body);
    burger.updateOne(req.body, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
          res.status(200).end();
        }
    });
});
module.exports = router;