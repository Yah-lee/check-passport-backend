const user = require("../models/user.model");
exports.create = (req, res) => {
  try {
    user.create(req.body);
    return res.status(200).json({ message: "created" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to create user" });
  }
};
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userInfo = await user.findOne({
      where: {
        username,
        password,
      },
    });
    return res.status(200).json(userInfo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to create user" });
  }
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
