import '../App.css';
// import React, { useState } from 'react';

function ChangeColor(props) {
    

    return (
      <div>
        <div className="text-center header-change-size">
            <h3 className="">Change Color</h3>
        </div>
        <div className="text-center content">
         {props.colors.map((color) => (
           <button className={"btn btn-"+color.css} color={color}></button>
         ))}
        </div>
      </div>
    );
  }
  
  export default ChangeColor;