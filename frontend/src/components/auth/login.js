import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import { useHistory } from "react-router-dom";
//MaterialUI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { getLogin, getSession } from "../auth/auth_function";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const history = useHistory();
  const initialState = {
    csrf: "",
    email: "",
    password: "",
    error: "",
    isAuthenticated: false,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    getSession();
  }, []);

  const getCSRF = () => {
    fetch("/api/csrf/", {
      credentials: "same-origin",
    })
      .then((res) => {
        let csrfToken = res.headers.get("X-CSRFToken");
        setState({ csrf: csrfToken });

        console.log("res", res);
        console.log("res.headers", res.headers.get("X-CSRFToken"));
        console.log("csrfToken", csrfToken);
        console.log("state.csrfToken", state.csrf);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSession = () => {
    fetch("/api/session/", {
      credentials: "same-origin", //"same-origin"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.isAuthenticated) {
          setState({ isAuthenticated: true });
        } else {
          setState({ isAuthenticated: false });
          getCSRF();
        }
        console.log("getSession - isAuthenticated", state.isAuthenticated);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = (event) => {
    event.preventDefault();
    console.log("email: ", state.email);
    console.log("password: ", state.password);
    console.log("csrf: ", state.csrf);
    console.log("isAuth: ", state.isAuthenticated);
    console.log("error: ", state.error);
    fetch("/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": state.csrf,
        credentials: 'include',
      },
      credentials: "same-origin",
      body: JSON.stringify({
        email: state.email,
        password: state.password,
      }),
    })
      .then(isResponseOk)
      .then((data) => {
        console.log(data);
        setState({
          isAuthenticated: true,
          email: "",
          password: "",
          error: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setState({ error: "Wrong email or password." });
      });
  };

  const handlePasswordChange = (event) => {
    setState({ password: event.target.value });
  };

  const handleEmailChange = (event) => {
    setState({ email: event.target.value });
  };

  const isResponseOk = (response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  };

  //console.log(login);
  //console.log(session);

  //console.log(formData.isAuthenticated);
  //console.log(formData.csrf);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            onSubmit={login}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
