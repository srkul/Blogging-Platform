const express = require("express");
const app = express();

// Routes Declaration
const authRouter = require("./api/auth");

// Routes
app.use(authRouter);
app.get("/", (req, res) => {
  res.status(200).send("Home");
});

app.listen(8000, () => {
  console.log("Listening on http://localhost:8000");
});
