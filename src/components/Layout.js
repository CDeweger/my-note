import React from "react";
import { makeStyles } from "@mui/styles";
import { Drawer } from "@mui/material";
import { Typography } from "@mui/material";

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        className={classes.drawer}
      >
        <div>
          <Typography variant="h5">My Notes</Typography>
        </div>
      </Drawer>
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
