const knex = require("knex")(require("./knexfile"));
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Read - get all the notes
app.get("/notes", (req, res) => {
  knex
    .select("*")
    .from("note")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send("Error getting users");
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
      res.status(500).send("Error creating users");
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

//get all users
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

//get single user by id
app.get("/users/:id", (req, res) => {
  knex
    .select("*")
    .from("user")
    .where({ id: req.params.id })
    .then((data) => {
      if (data.length === 0) {
        throw new Error("No user found");
      }
      res.status(200).json(data[0]);
    })
    .catch((err) => {
      res.status(500).send("Error getting users");
    });
});

//get posts by user id
app.get("/users/:id/posts", (req, res) => {
  knex
    .select("*")
    .from("post")
    .where({ user_id: req.params.id })
    .then((data) => {
      if (data.length === 0) {
        throw new Error("No user found");
      }
      res.status(200).json(data[0]);
    })
    .catch((err) => {
      res.status(500).send("Error getting posts");
    });
});

// CREATE - create a new user
app.post("/users", (req, res) => {
  knex("user")
    .insert(req.body)
    .then((userId) => {
      knex("user")
        .where({ id: userId[0] })
        .then((data) => res.status(201).json(data[0]));
    })
    .catch((err) => {
      res.status(500).send("Error creating users");
    });
});
// update a user by id
app.put("/users/:id", (req, res) => {
  knex("user")
    .where({ id: req.params.id })
    .update(req.body)
    .then(() => {
      knex("user")
        .where({ id: req.params.id })
        .then((data) => res.status(200).json(data[0]));
    })
    .catch((err) => {
      res.status(500).send("Error getting users");
    });
});

// delete user by id
app.delete("/users/:id", (req, res) => {
  knex("user")
    .where({ id: req.params.id })
    .del()
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(500).send("Error deleting");
    });
});

//get all posts
app.get("/posts", (req, res) => {
  knex
    .select("*")
    .from("post")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send("Error getting posts");
    });
});

app.listen(PORT, console.log(`🚀🚀server running at http://localhost:${PORT}`));
