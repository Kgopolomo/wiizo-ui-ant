import React, { useRef } from "react";
import { Carousel, Button } from "antd";
import {
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import HorizontalItemsCard from "./horizontalItemsCard";
const featuredItems = [
  {
    id: 1,
    title: "Item 1",
    image: "item1-image-url",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Item 2",
    image: "item2-image-url",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Item 2",
    image: "item2-image-url",
    description: "Description 2",
  },
  {
    id: 4,
    title: "Item 2",
    image: "item2-image-url",
    description: "Description 2",
  },
  {
    id: 5,
    title: "Item 2",
    image: "item2-image-url",
    description: "Description 2",
  },
  {
    id: 6,
    title: "Item 2",
    image: "item2-image-url",
    description: "Description 2",
  },
  {
    id: 7,
    title: "Item 2",
    image: "item2-image-url",
    description: "Description 2",
  },
  {
    id: 8,
    title: "Item 2",
    image: "item2-image-url",
    description: "Description 2",
  },
  // ... add more featured items
];
const CarouselComponent = () => {
  const carouselRef = useRef(null);

   // Define breakpoints and corresponding slideToShow values
   const responsiveSettings = [
    { breakpoint: 1200, slidesToShow: 5 },
    { breakpoint: 992, slidesToShow: 4 },
    { breakpoint: 768, slidesToShow: 3 },
    { breakpoint: 576, slidesToShow: 2 },
    { breakpoint: 0, slidesToShow: 1 },
  ];

  const getSlidesToShow = () => {
    const { innerWidth: width } = window;

    for (const setting of responsiveSettings) {
      if (width >= setting.breakpoint) {
        return setting.slidesToShow;
      }
    }

    return 1; // Fallback to 1 slide if no matching breakpoint found
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Carousel
        ref={carouselRef}
        slidesToShow={getSlidesToShow()}
        style={{
          margin: "0 auto",
          backgroundColor: "#f0f2f5",
          padding: "20px",
        }}
      >
        {featuredItems.map((item) => (
          <HorizontalItemsCard
            title="Smartphone"
            image="we"
            description="High-quality smartphone with advanced features."
            status="AVAIABLE"
            rentalPrice="150.00"
            city="Cape Town"
            condition="GOOD"
            category="MOBLE"
          />
        ))}
      </Carousel>
      <div style={{ marginTop: 10 }}>
        <Button
          icon={<LeftCircleOutlined />}
          style={{ marginRight: 10 }}
          type="primary"
          onClick={handlePrev}
        >
          Previous
        </Button>
        <Button
         
          type="primary"
          onClick={handleNext}
        >
          Next <RightCircleOutlined />
        </Button>
      </div>
    </div>
  );
};

export default CarouselComponent;
