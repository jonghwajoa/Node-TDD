const model = require("../models");

module.exports = () => {
  return model.sequelize.sync({});
};
