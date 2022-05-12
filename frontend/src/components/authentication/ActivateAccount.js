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

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { PagePush } from "./ActivateActions";

function ActivateAccount(props) {
  const initialState = {
    status: "",
  };
  const [state, setState] = useState(initialState);

  let errorAlert = (
    <Alert variant="danger">
      <Alert.Heading>Problem during account activation</Alert.Heading>
      Please try again or contact service support for further help.
    </Alert>
  );

  let successAlert = (
    <Alert variant="success">
      <Alert.Heading>Your account has been activated</Alert.Heading>
    </Alert>
  );

  let alert = "";
  if (state.status === "error") {
    alert = errorAlert;
  } else if (state.status === "success") {
    alert = successAlert;
  }

  useEffect(() => {
    const { uid, token } = props.match.params;

    axios
      .post("/api/v1/users/activation/", { uid, token })
      .then((response) => {
        setState({ status: "success" });
        toast.success("Your account has been activated, please login.");
        props.PagePush("/login");
      })
      .catch((error) => {
        setState({ status: "error" });
        toast.error(
          "Problem during account activation. Please try again or contact service support for further help."
        );
        props.PagePush("/");
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col md="6">{alert}</Col>
      </Row>
    </Container>
  );
}

ActivateAccount.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  PagePush,
})(ActivateAccount);
