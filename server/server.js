const knex = require("knex")(require("./knexfile"));
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());

app.get("/users", (req, res) => {
  knex
    .select("*")
    .from("user")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send("Error getting users");
    });
});

app.listen(PORT, console.log(`🚀🚀server running at http://localhost:${PORT}`));
