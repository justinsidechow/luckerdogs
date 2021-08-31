import React, { Component, useEffect } from "react";
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
        email: "",
        password: "",
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
