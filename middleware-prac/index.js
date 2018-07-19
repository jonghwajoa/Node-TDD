const express = require("express");
const app = express();
const morgan = require("morgan");

function logger(req, res, next) {
  console.log("i am log");
  next();
}

function logger2(req, res, next) {
  console.log("l am log2");
  next();
}

function errorHandle(err, req, res, next) {
  console.log("에러미들웨어!! 실행");

  res.send("에러미들웨어");
}

app.use(logger);
app.use(logger2);
app.use(morgan("dev"));

app.route("/").get((req, res) => {
  console.log("테스트중입니다.");
});

app.use(errorHandle);

app.listen(3000, () => {
  console.log("server is running");
});
