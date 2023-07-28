const createuser = require("../models/createuser.model");

exports.createuser = (req, res) => {
  try {
    createuser.create(req.body);
    return res.status(200).json({ message: "created " });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to create user" });
  }
};
exports.findAll = (req, res) => {
  createuser
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