const machine = require("../models/machine.model");
const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/db.js");

exports.createmachine = (req, res) => {
  try {
    machine.create(req.body);
    return res.status(200).json({ message: "created" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to create user" });
  }
};

exports.findAll = (req, res) => {
  machine
    .findAndCountAll()
    .then((data) => {
      return res.status(200).json(data);
      if (data.length === 0) {
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: "Failed to find user" });
    });
};

exports.findByDateBetween = (req, res) => {
  const { startDate, endDate, detail } = req.query;

  let sql = null;
  if (detail) {
    sql = `SELECT * FROM machines WHERE detail like '%${detail}%' order by created_at desc`;
  } else {
    sql = `SELECT * FROM machines WHERE cast(created_at as date) >='${startDate}' and cast(created_at as date) <='${endDate}' order by created_at desc`;
  }
  sequelize
    .query(sql, { type: QueryTypes.SELECT })
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: "Failed to find user" });
    });
};

exports.findByDetail = (req, res) => {
  const { text } = req.query;
  sequelize
    .query(
      `SELECT * FROM machines WHERE detail like '%${text}%' order by created_at desc`,
      { type: QueryTypes.SELECT }
    )
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: "Failed to find user" });
    });
};
