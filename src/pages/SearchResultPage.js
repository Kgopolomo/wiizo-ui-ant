import React, { useState } from "react";
import { Input, DatePicker, Radio, Slider } from "antd";

import HorizontalItemsCard from "../components/horizontalItemsCard";
import ItemCard from "../components/ItemCard";
import RequestItemCard from "../components/RequestItemCard";
import UserRequestItemCard from "../components/UserRequestItemCard";
const SearchResultPage = () => {

    const [itemName, setItemName] = useState("");
    const [availableDate, setAvailableDate] = useState(null);
    const [condition, setCondition] = useState(null);
    const [rentalPriceRange, setRentalPriceRange] = useState([0, 100]);

    const handleFilter = () => {
        const filters = {
          itemName,
          availableDate,
          condition,
          rentalPriceRange,
        };
      
      };
    
      const filterContainerStyle = {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        padding: "10px",
        borderRadius: "8px",
        justifyContent: "space-between"
      };
    
      const conditionRadioStyle = {
        margin: "0 10px",
      };
    
      const priceRangeStyle = {
        margin: "0 10px",
        display: "flex",
        width:'50vh',
        alignItems: "center",
      };
    
      const filterButtonStyle = {
        marginLeft: "auto",
        padding: "6px 16px",
        backgroundColor: "#1890ff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      };
      const cardStyle = {
        flex: "0 0 calc(33.45% - 1px)", // Distribute cards equally in a row with spacing
        marginBottom: "0px", // Add space below each card
      };
    return (
        <div style={{ width: '55%', margin: '0 auto', marginTop: '50px' }}>

            <div>
            <div style={filterContainerStyle}>
            <div style={{width:'50vh'}}>
            <p>Filter by name</p>
      <Input
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      </div>

    

    <div style={{width:'25vh'}}>
    <p>Item Condition</p>
            <Radio.Group value={condition} onChange={(e) => setCondition(e.target.value)} defaultValue="a" buttonStyle="solid">
      <Radio.Button value="NEW">New</Radio.Button>
      <Radio.Button value="USED_GOOD">Used</Radio.Button>
      <Radio.Button value="USED_FAIR">Fair</Radio.Button>
    </Radio.Group>
            </div>
            <div style={{width:'30vh'}}>
                <p>Rental Terms</p>
            <Radio.Group value={condition} onChange={(e) => setCondition(e.target.value)} defaultValue="a" buttonStyle="solid">
      <Radio.Button value="DAILY">Daily</Radio.Button>
      <Radio.Button value="MONTHLY">Monthly</Radio.Button>
      <Radio.Button value="YEARLY">Yearly</Radio.Button>
    </Radio.Group>
            </div>

  
    </div>
            </div>
<UserRequestItemCard />
<RequestItemCard />
           
           <ItemCard />
            
        </div>
    );
};

export default SearchResultPage;