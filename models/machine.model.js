const { DataTypes } = require("sequelize");
const db = require("../configs/db.js"); // Assuming you have a separate file for database connection

const machine = db.define("machine", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  detail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  passport_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  birthday: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  issue_country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  passport_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  expired_date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = machine;
