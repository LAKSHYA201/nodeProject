const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use("/static", express.static(path.join(__dirname, "static files")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static files", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "static files", "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "static files", "contact-me.html"));
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
