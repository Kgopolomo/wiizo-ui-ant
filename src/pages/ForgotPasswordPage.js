import React, { useState } from "react";
import { Card, Button, Input, Form, Row, Col, Alert } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  // const dispatch = useDispatch();

  const handleSendLink = () => {
    // You can dispatch the action to send the reset password link here
    // dispatch(sendResetPasswordLink(email));
    setEmailSent(true);
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
        <h1>Forgot Password</h1>
        <p>Enter your email address to receive a password reset link.</p>
        <Form onFinish={handleSendLink}>
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
          <Form.Item>
            <Button type="primary" block onClick={handleSendLink}>
              Send Reset Link
            </Button>
          </Form.Item>
        </Form>
        {emailSent && (
          <Alert
            message="Check Your Email"
            description="A password reset link has been sent to your email address. Please check your inbox."
            type="success"
            showIcon
          />
        )}
        <Row>
          <Col span={12}>
            <p style={{ textAlign: "left" }}>
              Remember your password? <Link to="/login">Log In</Link>
            </p>
          </Col>
          <Col span={12}>
            <p style={{ textAlign: "right" }}>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
