import React from 'react';
import { Typography, Carousel } from 'antd';

const { Title } = Typography;

const categories = [
    { id: 1, name: 'Electronics', image: 'electronics-image-url' },
    { id: 2, name: 'Clothing', image: 'clothing-image-url' },
    { id: 3, name: 'Books', image: 'books-image-url' },
    { id: 4, name: 'Books', image: 'books-image-url' },
    { id: 5, name: 'Books', image: 'books-image-url' },
    { id: 6, name: 'Books', image: 'books-image-url' },
    { id: 7, name: 'Books', image: 'books-image-url' },
    { id: 8, name: 'Books', image: 'books-image-url' },
    // ... add more categories
];

const CategoryList = () => {
    return (
        <div style={{ padding: '16px' }}>
            <Title level={3}>Categories</Title>
            <Carousel dots={false} arrows={true} slidesToShow={8} responsive={[
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 6,
                    }
                }
            ]}>
                {categories.map(category => (
                    <div key={category.id} style={{ padding: '0 8px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: 50, height: 50, borderRadius: '50%', overflow: 'hidden', margin: '0 auto' }}>
                                <img src={category.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <p style={{ marginTop: 8 }}>{category.name}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CategoryList;