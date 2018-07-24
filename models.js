const Sequelize = require("sequelize");
const sequelize = new Sequelize("awesome", "id", "pw", {
  dialect: "mysql",
  logging: false
});

const User = sequelize.define("User", {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
});

module.exports = { User, Sequelize, sequelize };
