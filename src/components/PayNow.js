import React, { useState } from 'react';
import { Card, Button, Form, List } from 'antd';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const PayNow = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 20 },
  ]);

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      console.error(error);
    } else {
      // Handle the token (e.g., send it to your server for payment processing)
      console.log(token);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px', // Adjust the font size
        color: '#333',    // Change the text color
        '::placeholder': {
          color: '#aaa',  // Change the placeholder color
        },
      },
      invalid: {
        color: '#e74c3c', // Change the invalid input color
      },
    },
  };

  return (
    <Card title="Pay Now">
      <List
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            {item.name} - ${item.price}
          </List.Item>
        )}
      />
      <p>Total Price: ${totalPrice}</p>
      <Form onSubmit={handleSubmit}>
        <Form.Item label="Card Details">
        <CardElement options={cardElementOptions} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Pay Now
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default PayNow;
