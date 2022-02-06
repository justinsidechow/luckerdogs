import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Luckerdogs
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function Sign_In() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Sign_In;

/*
import React, { Component, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sign_in.css";

// reference for base code: https://react-bootstrap.github.io/components/forms/

class Sign_in extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      login: {
        email: null,
        password: null,
        remember_me: false,
      },
    };
  }

  componentDidMount() {}
  componentWillUnmount() {}
  handleStatusChange(status) {}

  simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  handleSubmit = () => {
    console.log(JSON.stringify(this.state.login));
    this.setState({
      isLoading: true,
    });
    this.simulateNetworkRequest().then(() => {
      this.setState({
        isLoading: false,
      });
    });
  };

  handleEmailChange = (event) => {
    this.setState((prevState) => ({
      login: {
        ...prevState.login,
        email: event.target.value,
      },
    }));
  };

  handlePasswordChange = (event) => {
    this.setState((prevState) => ({
      login: {
        ...prevState.login,
        password: event.target.value,
      },
    }));
  };

  handleRememberMeChange = (event) => {
    this.setState((prevState) => ({
      login: {
        ...prevState.login,
        remember_me: !this.state.login.remember_me,
      },
    }));
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center title">Sign in</Row>
        <Row className="justify-content-md-center">
          <Col className="column" md="auto">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 check-box"
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  value={this.state.remember_me}
                  onChange={this.handleRememberMeChange}
                />
              </Form.Group>
              <br></br>
              <Button
                type="submit"
                variant="primary"
                disabled={this.state.isLoading}
                onClick={this.handleSubmit}
              >
                {this.state.isLoading ? "Loading…" : "Submit"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Sign_in;

*/
