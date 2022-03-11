import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormControl } from "@material-ui/core";
import axios from "axios";
import { toast } from "react-toastify";
import {
  CREATE_USER_ERROR,
  CREATE_USER_SUBMITTED,
  CREATE_USER_SUCCESS,
} from "../signup/SignupTypes";

const useStyles = makeStyles((theme) => ({
  container: {},
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Register() {
  const initialState = Object.freeze({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({
      ...state,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (dispatch) => {
    const userData = {
      username: state.username,
      password: state.password,
      confirm_password: state.confirm_password,
    };

    if (userData.password !== userData.confirm_password) {
      toast.error("The password and confirm password do not match.");
    } else {
      axios
        .post("/api/v1/users/", userData)
        .then((response) => {
          toast.success(
            "Account for " +
              userData.username +
              " created successfully. Please login."
          );
          <Navigate to="/login" />;
        })
        .catch((error) => {
          if (!error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            toast.error(JSON.stringify(error.message));
          } else if (error.message) {
            const keys = Object.keys(error.response.data);
            const values = Object.values(error.response.data);
            const result = Object.assign(
              ...keys.map((k, i) => ({ [k]: values[i] }))
            );
            for (let key in result) {
              //Cleaning up the array message by removing ',' from API so it looks cleaner
              let message = String(result[key]).replace(",", " ");
              toast.error(key + " - " + message);
            }
          } else {
            // all other error
            toast.error(JSON.stringify(error));
          }
        });
    }
  };

  const classes = useStyles();

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <FormControl className={classes.form} noValidate>
          <Grid container spacing={2}>
            {/*
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="email"
                id="email"
                name="email"
                label="Email Address"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                id="username"
                name="username"
                label="Username"
                autoComplete="username"
                //value={state.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="password"
                id="password"
                name="password"
                label="Password"
                autoComplete="current-password"
                //value={state.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="password"
                id="confirm_password"
                name="confirm_password"
                label="Confirm Password"
                //value={state.confirm_password}
                onChange={handleChange}
              />
            </Grid>
            {/* 
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          */}
          </Grid>
          <Button
            //type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    </Container>
  );
}

export default Register;
