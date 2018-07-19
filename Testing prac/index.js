const express = require("express");
const app = express();
const morgan = require("morgan");

const users = [
  { id: 1, name: "jong" },
  { id: 2, name: "hong" },
  { id: 3, name: "hwa" }
];

app.use(morgan("dev"));

app.route("/users").get((req, res) => {
  req.query.limit = req.query.limit || 10;
  const limit = parseInt(req.query.limit, 10);
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }
  return res.json(users.slice(0, limit));
});

app.listen(3000, () => {
  console.log("server is running");
});

module.exports = app;
