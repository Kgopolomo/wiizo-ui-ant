import React from 'react';
import { Card, Tabs, Button, Tag  } from 'antd';
import { DollarCircleOutlined, EnvironmentOutlined, CheckCircleOutlined } from '@ant-design/icons';
import image from '../img/images.jpg';

const { TabPane } = Tabs;

const HorizontalItemsCard = ({ title, description, rentalPrice, city, condition }) => {
    const handleRentRequest = () => {
        // Handle rent request logic here
        console.log(`Requesting to rent: ${title}`);
    };

    return (
        <Card
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: 16,
        width: 250,
        height: 420,
      }}
    >
      <Tag
        color="#2db7f5"
        style={{
          position: "absolute",
          top: 15,
          right: 10,
          zIndex: 1,
        }}
      >
        R {rentalPrice} daily
      </Tag>
      <img
        src={image}
        alt={title}
        style={{ width: 150, alignSelf: "center", marginTop: 16 }}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "0 10px",
        }}
      >
        <h3>{title}</h3>
        <div style={{ marginTop: -10 }}>
          <p>{description}</p>
        </div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Rental Details" key="1">
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <EnvironmentOutlined style={{ marginRight: 8 }} />
                  City:
                </div>
                <div>{city}</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <CheckCircleOutlined style={{ marginRight: 8 }} />
                  Condition:
                </div>
                <div>{condition}</div>
              </div>
            </div>
            {/* Add more rental details if needed */}
          </TabPane>
        </Tabs>
        <Button
          type="primary"
          onClick={handleRentRequest}
          style={{
            alignSelf: "flex-end",
            marginTop: "auto",
            marginBottom: 16,
          }}
          block
        >
          Request to rent
        </Button>
      </div>
    </Card>
    );
};

export default HorizontalItemsCard;