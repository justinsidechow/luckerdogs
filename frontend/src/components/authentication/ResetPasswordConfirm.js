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
import PagePush from "./ActivateActions";

function ResetPasswordConfirm(props) {
  const useStyles = makeStyles((theme) => ({
    container: {
      padding: "3em",
      paddingBottom: "5em",
      backgroundColor: "#36454F",
      color: "white",
    },
    forms: {
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
        console.log("confirmed");
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data.hasOwnProperty("new_password")
        ) {
          setState({ passwordError: error.response.data["new_password"] });
        } else {
          setState({ status: "error" });
        }
        console.log("error");
      });
  };

  const errorAlert = (
    <Alert variant="danger">
      <Alert.Heading>Problem during new password set </Alert.Heading>
      <p>
        Please try reset password again or contact service support for further
        help.
      </p>
    </Alert>
  );

  const successAlert = (
    <Alert variant="success">
      <Alert.Heading>New Password Set</Alert.Heading>
      <p>You can Login to your account with new password.</p>
    </Alert>
  );

  const form = (
    <div>
      <Form className={classes.forms}>
        <Form.Group controlId="emailId">
          <Form.Label>Your New Password: </Form.Label>
          <Form.Control
            isInvalid={state.passwordError}
            type="password"
            name="new_password"
            placeholder="Enter new password"
            value={state.new_password}
            onChange={handleChange}
          />
          <FormControl.Feedback type="invalid">
            {state.passwordError}
          </FormControl.Feedback>
        </Form.Group>
      </Form>
      <Button color="primary" onClick={onSaveClick}>
        Save
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
          <h1>Set a New Password</h1>
          {alert}
          {state.status !== "success" && form}
        </Col>
      </Row>
    </Container>
  );
}

ResetPasswordConfirm.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ResetPasswordConfirm);
