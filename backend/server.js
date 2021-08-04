const express = require("express");
const connectDB = require("./conifg/connectDB");
require("dotenv").config();
const authorise = require("./helpers/jwt");
const errorHandler = require("./helpers/errorHandler");
var cors = require("cors");

const app = express();
app.use(cors());
connectDB();

// Middlewares
app.use(express.json());
app.use(authorise());
app.use(errorHandler);

// Routes
const usersRoutes = require("./routes/usersRoutes");
const tripRoutes = require("./routes/tripsRoutes");
const requestTripRoutes = require("./routes/requestsRoutes");

app.use("/users", usersRoutes);
app.use("/trips", tripRoutes);
app.use("/request_trip", requestTripRoutes);

app.listen(5000, () => {
  console.log("the server is listening on port 5000");
});
