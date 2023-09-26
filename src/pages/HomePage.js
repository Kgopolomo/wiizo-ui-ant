import React from 'react';

import { SearchOutlined, ShoppingCartOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Layout, Menu, Card, Button, Typography } from 'antd';

import CarouselComponent from '../components/CarouselComponent';

import ItemsCard from '../components/horizontalItemsCard';
import SearchBar from '../components/SearchBar';
import CategoryComponent from '../components/CategoryComponent';
const { Title } = Typography;
const categories = [
    { id: 1, name: 'Electronics', image: 'electronics-image-url' },
    { id: 2, name: 'Clothing', image: 'clothing-image-url' },
    { id: 3, name: 'Books', image: 'books-image-url' },
    // ... add more categories
  ];

  const items = [
    ['Item 1', 'Item 2', 'Item 3'],
    ['Item 4', 'Item 5', 'Item 6'],
    ['Item 7', 'Item 8', 'Item 9'],
  ];
  
  const featuredItems = [
    { id: 1, title: 'Item 1', image: 'item1-image-url', description: 'Description 1' },
    { id: 2, title: 'Item 2', image: 'item2-image-url', description: 'Description 2' },
    { id: 3, title: 'Item 2', image: 'item2-image-url', description: 'Description 2' },
    { id: 4, title: 'Item 2', image: 'item2-image-url', description: 'Description 2' },
    { id: 5, title: 'Item 2', image: 'item2-image-url', description: 'Description 2' },
    { id: 6, title: 'Item 2', image: 'item2-image-url', description: 'Description 2' },
    { id: 7, title: 'Item 2', image: 'item2-image-url', description: 'Description 2' },
    { id: 8, title: 'Item 2', image: 'item2-image-url', description: 'Description 2' },
    // ... add more featured items
  ];

const HomePage = () => {
    return (
        <>
        <SearchBar />

{/* Categories */}


{/* Featured Items */}
<div>
          <Title level={3}>Featured Items</Title>

          <CarouselComponent />

          {/* <Carousel
            autoplay
            dots={false}
           
            slidesToShow={4}
            prevArrow={<span className="carousel-arrow"><LeftOutlined style={{ fontSize: 24 }} /></span>}
            nextArrow={<span className="carousel-arrow"><RightOutlined style={{ fontSize: 24 }} /></span>}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 5,
                },
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 5,
                },
              },
            ]}
            // Add custom styles for spacing
            style={{ margin: '0 50px' }}
          >
            {featuredItems.map(item => (
              <ItemsCard style={{ margin: '0 50' }} title='Smartphone' image='we' description='High-quality smartphone with advanced features.' status='AVAIABLE' rentalPrice='R 150.00' city='Cape Town' condition='GOOD' category='MOBLE' />
            ))}
          </Carousel> */}
        </div>
{/* Join and Rent Out */}
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '50px 0' }}>
          <Card title="Join" style={{ width: 300 }}>
            <p>Join our platform to explore and rent items from others.</p>
            <Button type="primary">Learn More</Button>
          </Card>
          <Card title="Rent Out" style={{ width: 300 }}>
            <p>Rent out your items and earn extra income.</p>
            <Button type="primary">Learn More</Button>
          </Card>
        </div>
        {/* Advertising Cards */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Add advertising cards */}
        </div>

      
            
             
        </>
    );
};

export default HomePage;