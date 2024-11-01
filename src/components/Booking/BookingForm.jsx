import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [numPersons, setNumPersons] = useState(""); // New state for number of persons
    const [price, setPrice] = useState(""); // New state for price

    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointment({ name, date, numPersons, price }); // Include numPersons and price in the appointment object
        setName("");
        setDate("");
        setNumPersons(""); // Reset number of persons
        setPrice(""); // Reset price
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="fname">Full Name</label>
                    </div>
                    <div className="col-75">
                        <input
                            type="text"
                            id="fname"
                            name="firstname"
                            placeholder="Your name.."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="appointmentDate">Appointment Date: </label>
                    </div>
                    <div className="col-75">
                        <input
                            id="appointmentDate"
                            name="appointmentDate"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="numPersons">Number of Persons</label>
                    </div>
                    <div className="col-75">
                        <input
                            type="number"
                            id="numPersons"
                            name="numPersons"
                            placeholder="Number of persons..."
                            value={numPersons}
                            onChange={(e) => setNumPersons(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="price">Price</label>
                    </div>
                    <div className="col-75">
                        <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Price..."
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <input className="primary-btn" type="submit" value="Add Appointment" />
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;
