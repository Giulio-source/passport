require("dotenv").config();
const express = require("express");
const app = express();

app.set("view-engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Kyle" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.post("/register", (req, res) => {
  console.log(req.body.username);
  console.log(req.body.password);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
