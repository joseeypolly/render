const app = require("./app");
const express = require("express");

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Started express server at port 3000");
});
