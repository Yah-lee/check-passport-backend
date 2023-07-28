const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");


app.use(cors());
app.use(express.json());


//import routes
const machineRoutes = require("./routes/machine.routes");

const userRoutes = require("./routes/user.routes");

// const manualRoutes = require("./routes/manual.routes");

const userController = require("./routes/create.routes");



//use routes
app.use('/machine',machineRoutes);

app.use('/user',userRoutes);

// app.use('/manual',manualRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
