import React, { useState } from "react";
import { Card, Button, Input, Form, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  //   const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // You can dispatch the login action here
    // dispatch(loginUser());
  };

  const handleFormSubmit = (values) => {
    console.log("Form values:", values);
    handleLogin(); // Call your login logic here
  };

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
        <img
          src="/path-to-your-logo/logo.png" // Replace with the actual path to your logo
          alt="Logo"
          style={{ width: 80, marginBottom: 20 }}
        />
        <h1>Login</h1>
        <p>Enter your credentials to log in.</p>
        <Form onFinish={handleFormSubmit}>
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
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" block htmlType="submit" disabled={!password}>
              Log In
            </Button>
          </Form.Item>
        </Form>
        <Row>
          <Col span={12}>
            <p style={{ textAlign: "left" }}>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </Col>
          <Col span={12}>
            <p style={{ textAlign: "right" }}>
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default LoginPage;
