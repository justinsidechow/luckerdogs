import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sign_in.css";

// reference for base code: https://react-bootstrap.github.io/components/forms/

function sign_in() {
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  function LoadingButton() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
      <Button
        variant="primary"
        className="submit-button"
        size="lg"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? "Loading…" : "Submit"}
      </Button>
    );
  }

  return (
    <Container>
      <Row className="justify-content-md-center title">Sign in</Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-3 check-box"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <br></br>
            <LoadingButton />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default sign_in;
