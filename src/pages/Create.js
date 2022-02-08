import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const Create = () => {
  return (
    <div>
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
    </div>
  );
};

export default Create;
