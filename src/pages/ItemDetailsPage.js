import React, { useState } from 'react';
import { Row, Col, Button, Tabs, Tag, Table } from 'antd';
import { SendOutlined} from '@ant-design/icons';

import img from '../img/images.jpg';
const { TabPane } = Tabs;

const ItemDetailsPage = () => {
  const item = {
    title: 'Example Item',
    image: 'item-image-url',
    description: 'This is a description of the item.',
    brand: 'Brand',
    model: 'Model ABC',
    rentalPrice: 25.99,
    minRentalDuration: 1,
    maxRentalDuration: 7,
    lateReturnPolicy: 'Late return policy details.',
    rentalPeriod: 'Per Day',
    condition: 'New',
    securityDeposit: 50.0,
    cancellationPolicy: 'Cancellation policy details.',
    deliveryOptions: ['Pickup', 'Delivery'],
    category: 'Electronics',
    additionalAccessories: 'Additional accessories included.',
    contactInfo: 'Contact information for inquiries.',
    termsAndConditions: 'Terms and conditions for renting.',
  };

  const handleRentRequest = () => {
    // Implement the logic to handle the rent request here
  };

  const detailsColumns = [
    {
      title: 'Attribute',
      dataIndex: 'attribute',
      key: 'attribute',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  const detailsData = [
    { key: '1', attribute: 'Brand', value: item.brand },
    { key: '2', attribute: 'Model', value: item.model },
    {
      key: '3',
      attribute: 'Rental Price',
      value: <Tag color="#f50">${item.rentalPrice} {item.rentalPeriod}</Tag>,
    },
    {
      key: '4',
      attribute: 'Rental Duration',
      value: `${item.minRentalDuration} - ${item.maxRentalDuration} days`,
    },
    { key: '5', attribute: 'Late Return Policy', value: item.lateReturnPolicy },
    { key: '6', attribute: 'Condition', value: item.condition },
  ];

  const additionalInfoColumns = [
    {
      title: 'Attribute',
      dataIndex: 'attribute',
      key: 'attribute',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  const additionalInfoData = [
    { key: '1', attribute: 'Security Deposit', value: `$${item.securityDeposit}` },
    { key: '2', attribute: 'Cancellation Policy', value: item.cancellationPolicy },
    {
      key: '3',
      attribute: 'Delivery Options',
      value: item.deliveryOptions.join(', '),
    },
    { key: '4', attribute: 'Category', value: item.category },
    { key: '5', attribute: 'Additional Accessories', value: item.additionalAccessories },
    { key: '6', attribute: 'Contact Info', value: item.contactInfo },
    { key: '7', attribute: 'Terms and Conditions', value: item.termsAndConditions },
  ];

  const renderDetailsTabs = () => {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Details" key="1">
          <Table
            columns={detailsColumns}
            dataSource={detailsData}
            pagination={false}
            showHeader={false}
          />
        </TabPane>
        <TabPane tab="Additional Info" key="2">
          <Table
            columns={additionalInfoColumns}
            dataSource={additionalInfoData}
            pagination={false}
            showHeader={false}
          />
        </TabPane>
      </Tabs>
    );
  };

  return (
    <div style={{  width: '55%', margin: '0 auto', marginTop: '50px' }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} lg={8}>
          <img src={img} alt={item.title} style={{ width: '100%', height: 'auto' }} />
        </Col>
        <Col xs={24} md={12} lg={16}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          {renderDetailsTabs()}
          <Button type="primary" icon={<SendOutlined />} style={{marginTop:15}}onClick={handleRentRequest}>
            Request to Rent
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ItemDetailsPage;