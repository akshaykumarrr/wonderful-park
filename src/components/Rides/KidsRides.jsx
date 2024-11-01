import React from "react";
import DynamicView from "../DynamicViewComp";

const KidsRides = () => {
    return (
      <div>
        <DynamicView collectionName="rides" heading={"Kids Rides"} pricing={"true"}/>
      </div>
    );
  };
  
  export default KidsRides;