import React, { useState } from "react";
import {
  Button,
  Tag,
} from "antd";
import {
  CloseOutlined,
  UserOutlined,
  CheckOutlined
} from "@ant-design/icons";
import {
  MoreOutlined,
} from "@ant-design/icons";

import image from "../img/pexels-brett-sayles-2472272.jpg";
const UserRequestItemCard = () => {

    const [status, setStatus] = useState("IN REVIEW")
   
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

          <div className="title" style={{ marginTop: "-5px" }}>
            <h4>EveryOne Bit</h4>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            
            marginTop: "-75px" 
          }}
        >
          <div>
            Request Status:
          </div>
          <div>
          <Tag bordered={false} style={{ marginRight: "-1px" }}>REVIEW</Tag>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
         
            marginTop: "10px" 
          }}
        >
          <div>
            Request Dates:
          </div>
          <div>
            12, March - 30 March
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
           
            marginTop: "10px" 
          }}
        >
          <div>
            No. of Days:
          </div>
          <div>
            12 
          </div>
        </div>
   


        <div
          style={{
            height: "5vh",
            borderRadius: 5,
            marginTop: "20px",
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
            <div style={{ width: "49%"}}>
              <Button danger type="text" icon={<CloseOutlined />} block>
                Cancel
              </Button>
            </div>
            <div style={{ width: "49%" }}>
  {status === "APPROVED" ? (
    <Button primaryColor='green' type="primary" block>
      Pay Now
    </Button>
  ) : (
    <Button primaryColor='green' type="primary" block disabled>
      IN REVIEW
    </Button>
  )}
</div>

          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
           fontSize:10,
            marginTop: "10px" 
          }}
        >
          <div>
           
          </div>
          <div>
            Date Requested: 12 March
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default UserRequestItemCard;