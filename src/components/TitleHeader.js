import React from 'react';

const TitleHeader = (props) => {
    return (
        <div style={{height:50, width: "55%",margin: "0 auto"}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex',}}> <props.icon style={{marginRight:10, fontSize:'50px'}}/><h2>{props.title}</h2></div>
                <div><h5>{props.caption}</h5></div>
            </div>
           
        </div>
    );
};

export default TitleHeader;