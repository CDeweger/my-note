const knex =
  process.env.NODE_ENV === "production"
    ? require("knex")(require("./knexfile").production)
    : require("knex")(require("./knexfile").development);

const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

// Read - get all the notes
app.get("/notes", (req, res) => {
  knex
    .select("*")
    .from("note")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send("Error getting notes");
    });
});

// CREATE - create a new note
app.post("/notes", (req, res) => {
  knex("note")
    .insert(req.body)
    .then((id) => {
      knex("note")
        .where({ id: id[0] })
        .then((data) => res.status(201).json(data[0]));
    })
    .catch((err) => {
      res.status(500).send("Error creating notes");
    });
});

//DELETE - delete a note by id
app.delete("/notes/:id", (req, res) => {
  knex("note")
    .where({ id: req.params.id })
    .del()
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(500).send("Error deleting");
    });
});

app.listen(PORT, console.log(`🚀🚀server running at http://localhost:${PORT}`));
