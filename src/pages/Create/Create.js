import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Create.scss";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
  },
});

const Create = () => {
  const classes = useStyles();
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
        className={classes.btn}
        type="submit"
        variant="contained"
        color="secondary"
        onClick={() => console.log("clicked")}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
