const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const reportingsRoutes = require("./routes/reportings");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", reportingsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur a été lancé sur le port ${PORT}`);
});
