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
import PagePush from "./ActivateActions";

function ResetPasswordConfirm(props) {
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
      paddingBottom: "1em",
    },
  }));
  const classes = useStyles();

  const initialState = {
    new_password: "",
    passwordError: "",
    status: "",
  };
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({
      ...state,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onSaveClick = () => {
    setState({ passwordError: "" });
    setState({ status: "" });

    const { uid, token } = props.match.params;
    const data = {
      uid: uid,
      token: token,
      new_password: state.new_password,
    };
    axios
      .post("/api/v1/users/reset_password_confirm/", data)
      .then((response) => {
        setState({ status: "success" });
        props.PagePush("/login");
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data.hasOwnProperty("new_password")
        ) {
          setState({
            passwordError: error.response.data["new_password"],
            status: "error",
          });
        } else {
          setState({ status: "error" });
        }
      });
  };

  const errorAlert = (
    <Alert variant="danger" className={classes.text}>
      <Alert.Heading>
        Problem occured with setting the new password.
      </Alert.Heading>
      Please try reset password again or contact service support for further
      help.
    </Alert>
  );

  const successAlert = (
    <Alert variant="success" className={classes.text}>
      <Alert.Heading>New Password Set</Alert.Heading>
      You can Login to your account with new password.
    </Alert>
  );

  let alert = (
    <Alert variant="success" className={classes.text}>
      <Alert.Heading>Please enter your new password.</Alert.Heading>
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
          New Password
        </Typography>
        <FormControl className={classes.form}>
          <Grid container spacing={2}>
            {alert}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="password"
                id="new_password"
                name="new_password"
                label="new_password"
                autoComplete="password"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSaveClick}
          >
            Submit New Password
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

ResetPasswordConfirm.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ResetPasswordConfirm);
