const app = require("../index");
const dbSync = require("./sync-db");

dbSync()
  .then(result => {
    console.log("dbSync Success");

    app.listen(3000, (req, res) => {
      console.log("Server is Running");
    });
  })
  .catch(err => {
    console.log("dbSync Fail!!");
  });
