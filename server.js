const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
const host = "0.0.0.0"; // Allow external access

app.get("/", (req, res) => {
  res.send("Hello from the dummy app!");
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});