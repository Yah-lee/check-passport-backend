const { DataTypes } = require("sequelize");
const db = require("../configs/db.js");

const createuser = db.define("createuser", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = createuser;
