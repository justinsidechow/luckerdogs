import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../login/LoginActions";
import { PagePush } from "../utils/PagePush";

function Header(props) {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    title: {
      "&:hover": {
        background: "transparent",
      },
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    toolbarTitle: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();
  const initialState = {
    user: "",
    auth: Boolean,
    error: "",
  };
  const [state, setState] = useState(initialState);
  let token = localStorage.getItem("token");

  //refreshes header whenever auth token is changed to animate the button switches
  useEffect(() => {
    let auth = token ? true : false;
    if (auth) {
      setTimeout(() => {
        setState({
          user: Object.values(JSON.parse(localStorage.getItem("user")))[1],
          auth: auth,
        });
      }, 50);
    } else {
      setState({ auth: auth });
    }
  }, [token]);

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
            <Button
              variant="text"
              underline="none"
              color="textPrimary"
              className={classes.title}
              onClick={() => props.PagePush("/")}
            >
              Luckerdogs
            </Button>
          </Typography>
          {!state.auth && (
            <Button
              color="primary"
              variant="outlined"
              className={classes.link}
              onClick={() => props.PagePush("/register")}
            >
              Register
            </Button>
          )}
          {!state.auth && (
            <Button
              color="primary"
              variant="outlined"
              className={classes.link}
              onClick={() => props.PagePush("/login")}
            >
              Login
            </Button>
          )}
          {state.auth && (
            <h3
              color="black"
              variant="text"
              className={classes.link}
              //onClick={}
            >
              {state.user}
            </h3>
          )}
          {state.auth && (
            <Button
              color="primary"
              variant="outlined"
              className={classes.link}
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
  PagePush,
})(Header);
