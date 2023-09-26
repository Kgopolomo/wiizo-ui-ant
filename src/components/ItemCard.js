import React from "react";
import {
  Button,
  Tag,
} from "antd";
import {
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import {
  MoreOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import image from "../img/pexels-brett-sayles-2472272.jpg";
const ItemCard = () => {
  const [liked, setLiked] = React.useState(false);

  // Sample data
  const cardData = {
    title: "Product Title",
    description: "Product Description",
    category: "Product Category",
    brand: "Product Brand",
    model: "Product Model",
    image: "/images/product-image.png",
    rentalPrice: "$10/day",
    minRentalDuration: "1 day",
    maxRentalDuration: "7 days",
    lateReturnPolicy: "10% per day",
    rentalPeriod: "Daily",
    availableDate: "Available Now",
    pickupInfo: "Pickup at XYZ location",
    condition: "New",
    usageInstructions: "Usage instructions here",
    cancellationPolicy: "Cancellation policy here",
    refundPolicy: "Refund policy here",
    deliveryOptions: "Delivery options available",
  };

  return (
    <div
      style={{
        width: 250,
        height: 380,
        border: "1px solid #f0f0f0",
        borderRadius: "8px",
        position: "relative", // Add this line to make the container a positioning context
      }}
    >
      <div style={{ margin: 10 }}>
        <div style={{ position: "relative" }}>
          <img
            src={image}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "15%", // Adjust this value to vertically center the button
              right: 10, // Adjust this value to position the button on the right
              transform: "translateY(-50%)", // Center the button vertically
              zIndex: 1,
            }}
          >
            <Button
              text="text"
              size="small"
              shape="circle"
              icon={<MoreOutlined />}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "85%", // Adjust this value to vertically center the button
              right: 0, // Adjust this value to position the button on the right
              transform: "translateY(-50%)", // Center the button vertically
              zIndex: 1,
            }}
          >
            <Tag color="#87d068">R 105.00</Tag>
          </div>
        </div>
        <div
          style={{ height: "15vh", borderRadius: 5 }}
        >
          <div style={{ marginTop: "5px" }}>
            <Tag bordered={false}>GAMES</Tag>
          </div>

          <div className="title" style={{ marginTop: "-5px" }}>
            <h4>EveryOne Bit</h4>
          </div>
          <div className="description" style={{ marginTop: "-5px" }}>
            <p>{cardData.description} kjlkas kasjda lakjsd jsjs kjhsdf </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "grey",
            marginTop: "10px" 
          }}
        >
          <div>
            <EnvironmentOutlined style={{ marginRight: 8 }} />
            Cape Town
          </div>
          <div>
            <Tag bordered={false} style={{ marginRight: "-1px" }}>
              GAMES
            </Tag>
          </div>
        </div>

        <div
          style={{
            height: "5vh",
            borderRadius: 5,
            marginTop: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "grey",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "80%"}}>
              <Button type="primary" icon={<ShoppingCartOutlined />} block>
                Request
              </Button>
            </div>
            <div style={{ width: "15%" }}>
              <Button type="text" shape="circle" icon={<HeartOutlined />} />
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default ItemCard;
