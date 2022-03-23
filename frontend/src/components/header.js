import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "./login/LoginActions";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();
  const initialState = {
    user: "",
    auth: false,
    error: "",
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({ auth: localStorage.getItem("token") ? true : false });
  }, [localStorage.getItem("token")]);

  const onLogOutClick = () => {
    props.logout();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link
              component={NavLink}
              to="/"
              underline="none"
              color="textPrimary"
            >
              Luckerdogs
            </Link>
          </Typography>
          {!state.auth && (
            <Button
              href="#"
              color="primary"
              variant="outlined"
              className={classes.link}
              component={NavLink}
              to="/register"
            >
              Register
            </Button>
          )}
          {!state.auth && (
            <Button
              href="#"
              color="primary"
              variant="outlined"
              className={classes.link}
              component={NavLink}
              to="/login"
            >
              Login
            </Button>
          )}
          {state.auth && (
            <Button
              href="#"
              color="primary"
              variant="outlined"
              className={classes.link}
              component={NavLink}
              to="/"
              onClick={onLogOutClick}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logout,
})(Header);
