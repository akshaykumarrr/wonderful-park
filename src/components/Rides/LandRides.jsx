import React from "react";
import DynamicView from "../DynamicViewComp";

const LandRides = () => {
    return (
      <div>
        <DynamicView collectionName="rides" heading={"Land Rides"} pricing={"true"}/>
      </div>
    );
  };
  
  export default LandRides;