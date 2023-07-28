const user = require("../models/user.model");
const bcrypt = require("bcrypt");
exports.createuser = async (req, res) => {
    user
      .findOne({
        where: {
          username: req.body.username,
        },
      })
      .then(async (data) => {
        if (data != null) {
          return res.status(200).json({ error: "User is exist" });
        }
        const password = await bcrypt.hash(req.body.password, 10);
        user.create({ ...req.body, password: password }).then(
          (data) => {
            return res.status(201).json({ message: "created" });
          }
        ).catch((err) => {
          return res.status(400).json({ error: err });
        });
      })
      
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  user
    .findOne({
      where: {
        username: username,
      },
    })
    .then(async (data) => {
      const invalidPassword = await bcrypt.compare(password, data.password);
      if (!invalidPassword) {
        return res.status(401).json({ error: "Invalid password" });
      }
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(400).json({ error: "User or password incorrect" });
    });
};

exports.findAll = (req, res) => {
  user
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
