import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { Paper } from "@mui/material";
import NoteCard from "../components/NoteCard";

const Notes = () => {
  const [notes, setNote] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNote(data));
  }, []);
  return (
    <Container>
      <Grid container>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
