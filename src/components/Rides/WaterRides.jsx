import React from "react";
import DynamicView from "../DynamicViewComp";

const WaterRides = () => {
    return (
      <div>
        <DynamicView collectionName="rides" heading={"Water Rides"} pricing={true}/>
      </div>
    );
  };
  
  export default WaterRides;