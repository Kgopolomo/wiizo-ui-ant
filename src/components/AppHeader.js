import React, { useState } from "react";
import { Layout, Input, Menu, Dropdown, Avatar, Badge, Button } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, BellOutlined, SearchOutlined,LoginOutlined   } from "@ant-design/icons";

const { Header } = Layout;

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const AppHeader = ({ username, notifications }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const loggedIn = true; // Set to true or false based on your authentication state

  const handleSearch = () => {
    // Your search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{ marginRight: "auto", display: "flex", alignItems: "center" }}
      >
        <img
          src="/path-to-your-logo/logo-horizontal.png"
          alt="Logo"
          style={{ width: 120 }}
        />
 
      </div>
      {loggedIn ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: 30, marginTop: 10 }}>
            <Badge count={notifications} showZero>
              <BellOutlined style={{ fontSize: 20 }} />
            </Badge>
          </div>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            arrow
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Avatar icon={<UserOutlined />} />
              <span style={{ marginLeft: 8 }}>{username}</span>
            </div>
          </Dropdown>
        </div>
      ) : (
        <Button type="link" href="/login"  icon={<LoginOutlined />}>
            
            Login</Button>
      )}
    </Header>
  );
};

export default AppHeader;
