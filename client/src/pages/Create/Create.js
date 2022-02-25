import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
//import { makeStyles } from "@mui/styles";
import { FormControlLabel, TextField } from "@mui/material";
import { Radio } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const API_URL = process.env.REACT_APP_API_URL;

console.log(API_URL);

const Create = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      axios
        .post(`http://localhost:5000/notes/`, {
          title: e.target.title.value,
          details: e.target.details.value,
          category: e.target.category.value,
        })
        .then((res) => {
          history.push("/");
        })
        .catch((err) => {
          console.log("error");
        });
      // fetch("http://localhost:8080/users/", {
      //   method: "POST",
      //   headers: { "Content-type": "application/json" },
      //   body: JSON.stringify({ title, details, category }),
      // }).then(() => history.push("/"));
    }
  };
  return (
    <Container container>
      <Typography
        align="left"
        varient="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Post
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={{ mt: 2 }}
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
          value={title}
        />
        <TextField
          sx={{ mt: 2 }}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
          value={details}
        />
        <FormControl sx={{ display: "block", mt: 2 }}>
          <FormLabel
            sx={{ display: "block", mt: 2, mb: 1 }}
            align="left"
            color="secondary"
          >
            Note Category
          </FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="bills"
              control={<Radio color="secondary" />}
              label="Bills"
            />
            <FormControlLabel
              value="todos"
              control={<Radio color="secondary" />}
              label="Todos"
            />
            <FormControlLabel
              value="reminder"
              control={<Radio color="secondary" />}
              label="Reminder"
            />
            <FormControlLabel
              value="work"
              control={<Radio color="secondary" />}
              label="Work"
            />
          </RadioGroup>
        </FormControl>
        <Button
          sx={{ display: "flex", mt: 2 }}
          align="left"
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
