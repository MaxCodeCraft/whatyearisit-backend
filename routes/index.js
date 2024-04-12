var express = require("express");
var router = express.Router();

router.get("/year", (req, res) => {
  res.json({ year: new Date().getFullYear().toString() });
});

module.exports = router;
