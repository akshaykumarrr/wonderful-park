import React from 'react';
import Vehicle from './Vehicle'; 
import vehiclesData from '../../javascript/vehiclesData'; 

function Vehicles() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vehiclesData.map(vehicle => (
                <Vehicle key={vehicle.id} vehicle={vehicle} />
            ))}
        </div>
    );
}

export default Vehicles;
