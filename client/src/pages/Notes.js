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
      // .get(`${API_URL}notes`)
      .get(`http://localhost:5000/notes`)
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http:localhost:5000/notes/${id}`)
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
            {/* <NoteCard note={note} /> */}
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
