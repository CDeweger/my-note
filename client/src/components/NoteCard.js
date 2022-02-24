import React from "react";
import { CardHeader, IconButton, Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { Card } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { green, pink, blue, yellow } from "@mui/material/colors";

const avatarBgColor = (note) => {
  if (note.category === "work") {
    return yellow[700];
  }
  if (note.category === "bills") {
    return green[700];
  }
  if (note.category === "todos") {
    return pink[500];
  } else {
    return blue[500];
  }
};
const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: avatarBgColor(note) }}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
