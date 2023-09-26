import React, { useState } from 'react';
import { Input, Button, Row, Col, Typography } from 'antd';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Handle search logic here
        console.log('Searching for:', searchQuery);
    };

    const handleClear = () => {
        setSearchQuery('');
    };

    return (
        <Row justify="end" align="left" >
            <Col xs={22} sm={20} md={16} lg={12} xl={8}>
                <Title level={2}>Welcome to Our Website</Title>
                <Text>Find what you're looking for</Text>
                <div style={{ marginTop: 24, display: 'flex', alignItems: 'center' }}>
                    <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for items"
                        suffix={
                            searchQuery ? (
                                <CloseCircleOutlined onClick={handleClear} style={{ cursor: 'pointer' }} />
                            ) : null
                        }
                    />
                    <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch} style={{ marginLeft: 8 }}>
                        Search
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default SearchBar;