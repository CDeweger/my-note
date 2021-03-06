import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";

const API_URL = process.env.REACT_APP_API_URL;

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get(`https://quiet-brook-54502.herokuapp.com/notes`)
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://quiet-brook-54502.herokuapp.com/notes/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div item key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
