import React from "react";
import DynamicView from "../DynamicViewComp";

const HighRides = () => {
    return (
      <div>
        <DynamicView collectionName="rides" heading={"High Thrill Rides"} pricing="true"/>
      </div>
    );
  };
  
  export default HighRides;