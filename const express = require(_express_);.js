const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

const User = require("./models/user.model");
const Test = require("./models/test.model");
const home = require("./models/home.model");


app.use(cors());
app.use(express.json());

// controllers
// models
// routes

app.post("/home", async (req, res) => {
  try {
    const {
      passport_type,
      first_name,
      last_name,
      gender,
      natinality,
      birthday,
      issue_conutry,
      password_number,
      expired_date,
    } = req.body;
    const newUser = await User.create({
      passport_type,
      first_name,
      last_name,
      gender,
      natinality,
      birthday,
      issue_conutry,
      password_number,
      expired_date
    });
   return res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create home" });
  }
});
app.get("/home", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});


app.post("/users", async (req, res) => {
  try {
    const { username, password, fullname } = req.body;
    const newUser = await User.create({ username, password, fullname });
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve user" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
