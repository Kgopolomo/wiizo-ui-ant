import React, { useState, useEffect } from "react";
import { Card, Button, Input, Form, Row, Col, Alert } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ChangePasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // const dispatch = useDispatch();

  const handleChangePassword = () => {
    // You can dispatch the change password action here
    // dispatch(changePassword(newPassword));
  };

  useEffect(() => {
    // Check if new password and confirm new password match
    setPasswordsMatch(newPassword === confirmNewPassword);
  }, [newPassword, confirmNewPassword]);

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
        <h1>Change Password</h1>
        <p>Enter your new password below.</p>
        <Form>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your new password",
              },
            ]}
          >
            <Input.Password
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            validateStatus={passwordsMatch ? "success" : "error"}
            help={!passwordsMatch && "Passwords do not match"}
          >
            <Input.Password
              placeholder="Confirm New Password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              onClick={handleChangePassword}
              disabled={!passwordsMatch}
            >
              Change Password
            </Button>
          </Form.Item>
        </Form>
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

export default ChangePasswordPage;
