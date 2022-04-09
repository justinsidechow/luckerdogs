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

function ResetPassword(props) {
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
    email: "",
    emailError: "",
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

  const onSendClick = () => {
    setState({ emailError: "" });
    setState({ status: "" });

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
          setState({ emailError: error.response.data["email"] });
        } else {
          setState({ status: "error" });
        }
      });
  };

  let errorAlert = (
    <Alert variant="danger">
      <Alert.Heading>Problem during reset password email send</Alert.Heading>
      Please try again or contact service support for further help.
    </Alert>
  );

  let successAlert = (
    <Alert variant="success">
      <Alert.Heading>Email sent </Alert.Heading>
      <p>
        We send you an email with reset password link. Please check your email.
      </p>
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
          <Form.Label>Your Email: </Form.Label>
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
      <Button color="primary" onClick={onSendClick}>
        Send email with reset link
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
          <h1>Reset Password</h1>
          {alert}
          {state.status !== "success" && form}
        </Col>
      </Row>
    </Container>
  );
}

ResetPassword.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ResetPassword);
