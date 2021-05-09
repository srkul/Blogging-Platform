const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home");
});

app.listen(8000, () => {
  console.log("Listening on http://localhost:8000");
});
