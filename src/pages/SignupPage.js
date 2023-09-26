import React, { useState, useEffect } from "react";
import { Card, Button, Input, Form, Row, Col, Alert } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  // const dispatch = useDispatch();

  const handleSignup = () => {
    // You can dispatch the signup action here
    // dispatch(signupUser({ email, firstName, password }));
  };

  useEffect(() => {
    // Check if password and confirm password match
    setPasswordMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card style={{ width: 400, padding: 20, textAlign: "center" }}>
        <h1>Sign Up</h1>
        <p>Create a new account by filling in the details below.</p>
        <Form onFinish={handleSignup}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,

                message: "First name is required",
              },
            ]}
          >
            <Input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            validateStatus={passwordMatch ? "success" : "error"}
            help={!passwordMatch && "Passwords do not match"}
          >
            <Input.Password
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              onClick={handleSignup}
              disabled={!passwordMatch}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <Row>
          <Col span={24}>
            <p>
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SignupPage;
