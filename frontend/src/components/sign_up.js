import React, { Component, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sign_up.css";

import API from "../utils/API";

// reference for base code: https://react-bootstrap.github.io/components/forms/

class Sign_up extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      user: {
        username: "",
        email: "",
        password: "",
        remember_me: false,
      },
    };
  }

  async componentDidMount() {}
  componentWillUnmount() {}
  handleStatusChange(status) {}

  simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  handleSubmit = () => {
    console.log(JSON.stringify(this.state.user));
    this.setState({
      isLoading: true,
    });
    this.simulateNetworkRequest().then(() => {
      this.setState({
        isLoading: false,
      });
    });
  };

  handleUsernameChange = (event) => {
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        username: event.target.value,
      },
    }));
  };

  handleEmailChange = (event) => {
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        email: event.target.value,
      },
    }));
  };

  handlePasswordChange = (event) => {
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        password: event.target.value,
      },
    }));

    //Your password must contain at least 8 characters.
    //Your password can’t be entirely numeric.
  };

  handleRememberMeChange = (event) => {
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        remember_me: !this.state.user.remember_me,
      },
    }));
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center title">Sign up</Row>
        <Row className="justify-content-md-center">
          <Col className="column" md="auto">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                />
              </Form.Group>
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

export default Sign_up;
