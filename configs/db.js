// db.js

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("check_passport", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  timezone: "+07:00",
  define: {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
    underscoredAll: true,
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Tables created successfully.");
  })
  .catch((err) => {
    console.error("Unable to create tables:", err);
  });

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
