const { DataTypes } = require("sequelize");
const db = require("../configs/db.js");

const manual = db.define("manual", {
  passport: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = manual;
