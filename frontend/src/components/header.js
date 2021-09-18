import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "./header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: "static",
    backgroundColor: "white",
    color: "black",
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar}>
        <Toolbar>
          <div className={classes.title}>
            <Link className="title-link" to="/">
              <Typography variant="h6">Luckerdogs</Typography>
            </Link>
          </div>
          <Link className="title-link" to="/register">
            <Button color="inherit">Register</Button>
          </Link>
          <Link className="title-link" to="/login">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
