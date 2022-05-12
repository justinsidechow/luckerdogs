/*
MIT License

Copyright (c) 2020 SaaSitive

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormControl } from "@material-ui/core";
import { connect } from "react-redux";

function ResetPassword(props) {
  const useStyles = makeStyles((theme) => ({
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
    text: {
      textAlign: "center",
      width: "100%",
    },
  }));
  const classes = useStyles();

  const initialState = {
    email: "",
    emailError: "",
    status: "",
  };

  const [state, setState] = useState(initialState);

  let alert = "Please enter your email for a password reset.";

  const handleChange = (e) => {
    setState({
      ...state,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onSendClick = () => {
    setState({ emailError: "", status: "" });

    const userData = {
      email: state.email,
    };
    axios
      .post("/api/v1/users/reset_password/", userData)
      .then((response) => {
        setState({ status: "success" });
      })
      .catch((error) => {
        if (error.response && error.response.data.hasOwnProperty("email")) {
          setState({
            emailError: error.response.data["email"],
            status: "error",
          });
        } else {
          setState({ status: "error" });
        }
      });
  };

  let errorAlert = (
    <Alert varient="danger" className={classes.text}>
      <Alert.Heading>Problem during reset password email send</Alert.Heading>
      Please try again or contact service support for further help.
    </Alert>
  );

  let successAlert = (
    <Alert variant="success" className={classes.text}>
      <Alert.Heading>Email sent. </Alert.Heading>
      We send you an email with reset password link. Please check your email.
      Please try again or contact us if you do not receive it within a few
      minutes.
    </Alert>
  );

  if (state.status === "error") {
    alert = errorAlert;
  } else if (state.status === "success") {
    alert = successAlert;
  }

  useEffect(() => {}, [state.status]);

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <FormControl className={classes.form}>
          <Grid container spacing={2}>
            {alert}
            <Grid item xs={12}>
              <TextField
                isInvalid={state.emailError}
                variant="outlined"
                required
                fullWidth
                type="email"
                id="email"
                name="email"
                label="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSendClick}
          >
            Send Reset Password
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item></Grid>
          </Grid>
        </FormControl>
      </div>
    </Container>
  );
}

ResetPassword.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ResetPassword);
