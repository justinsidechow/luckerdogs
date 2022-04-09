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

import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  Alert,
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

function ResendActivation() {
  const useStyles = makeStyles((theme) => ({
    container: { padding: "2em", backgroundColor: "#36454F", color: "white" },
    forms: {
      paddingBottom: "1em",
    },
  }));

  const initialState = {
    email: "",
    emailError: "",
    status: "",
  };
  const [state, setState] = useState(initialState);

  const classes = useStyles();

  const handleChange = (e) => {
    setState({
      ...state,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  //useEffect(() => {}, []);

  const onResendClick = () => {
    setState({ emailError: "" });
    setState({ status: "" });

    const userData = {
      email: state.email,
    };

    axios
      .post("/api/v1/users/resend_activation/", userData)
      .then((response) => {
        setState({ status: "success" });
      })
      .catch((error) => {
        if (error.response && error.response.data.hasOwnProperty("email")) {
          setState({ emailError: error.response.data["email"] });
        } else {
          setState({ status: "error" });
        }
      });
  };

  let errorAlert = (
    <Alert variant="danger">
      <Alert.Heading>Problem during activation email send </Alert.Heading>
      Please try again or contact service support for further help.
    </Alert>
  );

  let successAlert = (
    <Alert variant="success">
      <Alert.Heading>Email sent </Alert.Heading>
      <p>We send you an email with activation link. Please check your email.</p>
      <p>
        Please try again or contact us if you do not receive it within a few
        minutes.
      </p>
    </Alert>
  );

  let form = (
    <div>
      <Form className={classes.forms}>
        <Form.Group controlId="emailId">
          <Form.Label>
            Your account is inactive. Please activate account by sending the
            email with activation link:
          </Form.Label>
          <Form.Control
            isInvalid={state.emailError}
            type="text"
            name="email"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
          <FormControl.Feedback type="invalid">
            {state.emailError}
          </FormControl.Feedback>
        </Form.Group>
      </Form>
      <Button color="primary" onClick={onResendClick}>
        Send activation email
      </Button>
    </div>
  );

  let alert = "";
  if (state.status === "error") {
    alert = errorAlert;
  } else if (state.status === "success") {
    alert = successAlert;
  }

  return (
    <Container className={classes.container}>
      <Row>
        <Col md="6">
          <h1>Resend Activation Email</h1>
          {alert}
          {state.status !== "success" && form}
        </Col>
      </Row>
    </Container>
  );
}

ResendActivation.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ResendActivation);
