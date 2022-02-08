import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const Create = () => {
  return (
    <Container>
      <Typography
        varient="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Post
      </Typography>

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        onClick={() => console.log("clicked")}
      >
        Submit
      </Button>
      <AcUnitIcon color="secondary" />
    </Container>
  );
};

export default Create;
