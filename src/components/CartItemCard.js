import React from 'react';
import { Col, Row, Tag, Divider } from 'antd';
import image from '../img/pexels-brett-sayles-2472272.jpg';

const CartItemCard = () => {
  return (
    <div>
    <Row gutter={16} style={{ padding: '20px' }}>
      {/* Left side with image */}
      <Col span={8}>
        <img
          src={image}
          style={{
            height: 'auto',
            width: '30vh',
            borderRadius: '4px',
          }}
          alt="Item"
        />
      </Col>

      {/* Middle side with details */}
      <Col span={12} style={{ marginLeft: '20px' }}>
        <h3>Title of the item</h3>
        <p>Item description goes here</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
          <div>Request Status: <Tag color="green">APPROVED</Tag></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
          <div>Request Dates: 12, March - 30 March</div>
        </div>
      </Col>
   
    </Row>
     {/* Right side with pricing */}
 
    
   
     <div style={{width:'30vh', float:'right'}}>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
    <div>Rental Price:</div>
    <div>R100</div>
  </div>
  <Divider style={{ margin: '10px 0' }} />
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
    <div>No. of request days:</div>
    <div>5</div>
  </div>
  <Divider style={{ margin: '10px 0' }} />
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
    <div>Total subtotal:</div>
    <div>R154</div>
  </div>
  <Divider style={{ margin: '10px 0' }} />
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div><h3>Total cost: </h3></div>
    <div><h3>R500</h3></div>
  </div>
</div>
   
   
    </div>
  );
};

export default CartItemCard;