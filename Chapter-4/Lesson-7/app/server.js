const express = require("express");
const dbConnection  = require("./config/config");
const routes = require("./routes/book");

const app = express();
dbConnection();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log("Server started");
});

// MONGODB_URL = "mongodb://localhost:27017/sampledb";
// PORT = 3000