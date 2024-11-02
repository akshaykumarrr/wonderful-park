import React, { useState, useEffect } from "react";

const AppointmentForm = ({ addAppointment }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);
    const [studentCount, setStudentCount] = useState(0);
    const [adultBirthdayCount, setAdultBirthdayCount] = useState(0);
    const [childBirthdayCount, setChildBirthdayCount] = useState(0);
    const [selectedPackage, setSelectedPackage] = useState("None");
    const [totalAmount, setTotalAmount] = useState(0);

    const adultTicketPrice = 350;
    const childTicketPrice = 300;

    useEffect(() => {
        calculateTotal();
    }, [adultCount, childCount, studentCount, adultBirthdayCount, childBirthdayCount, selectedPackage]);

    const calculateTotal = () => {
        let finalAmount = 0;

        switch (selectedPackage) {
            case "None":
                finalAmount = (adultCount * adultTicketPrice) + (childCount * childTicketPrice);
                break;
            case "Student ID":
                finalAmount = studentCount * 200; 
                break;
            case "Birthday":
                finalAmount = (adultCount * adultTicketPrice) + (childCount * childTicketPrice) 
                    - (adultBirthdayCount * adultTicketPrice + childBirthdayCount * childTicketPrice);
                break;
            default:
                break;
        }

        setTotalAmount(finalAmount);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointment({
            name,
            date,
            adultCount,
            childCount,
            selectedPackage,
            studentCount,
            adultBirthdayCount,
            childBirthdayCount,
            totalAmount,
        });

        // Reset form fields
        resetForm();
    };

    const resetForm = () => {
        setName("");
        setDate("");
        setAdultCount(0);
        setChildCount(0);
        setStudentCount(0);
        setAdultBirthdayCount(0);
        setChildBirthdayCount(0);
        setSelectedPackage("None");
        setTotalAmount(0);
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
                            placeholder="Your name.."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="appointmentDate">Appointment Date:</label>
                    </div>
                    <div className="col-75">
                        <input
                            id="appointmentDate"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Select Package</label>
                    </div>
                    <div className="col-75">
                        <select
                            value={selectedPackage}
                            onChange={(e) => setSelectedPackage(e.target.value)}
                        >
                            <option value="None">Normal Payment</option>
                            <option value="Student ID">Student ID Package</option>
                            <option value="Birthday">Birthday Package</option>
                        </select>
                    </div>
                </div>

                {selectedPackage === "None" && (
                    <>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="numAdults">Number of Adults</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="number"
                                    id="numAdults"
                                    placeholder="Number of adults..."
                                    value={adultCount}
                                    onChange={(e) => setAdultCount(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="numKids">Number of Kids (below 7)</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="number"
                                    id="numKids"
                                    placeholder="Number of kids..."
                                    value={childCount}
                                    onChange={(e) => setChildCount(Number(e.target.value))}
                                />
                            </div>
                        </div>
                    </>
                )}

                {selectedPackage === "Student ID" && (
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="numStudents">Number of Students</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="number"
                                id="numStudents"
                                placeholder="Number of students..."
                                value={studentCount}
                                onChange={(e) => setStudentCount(Number(e.target.value))}
                            />
                        </div>
                    </div>
                )}

                {selectedPackage === "Birthday" && (
                    <>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="numAdults">Number of Adults</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="number"
                                    id="numAdults"
                                    placeholder="Number of adults..."
                                    value={adultCount}
                                    onChange={(e) => setAdultCount(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="numKids">Number of Kids (below 7)</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="number"
                                    id="numKids"
                                    placeholder="Number of kids..."
                                    value={childCount}
                                    onChange={(e) => setChildCount(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="numAdultBirthdays">Number of Adult Birthdays</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="number"
                                    id="numAdultBirthdays"
                                    placeholder="Number of adult birthdays..."
                                    value={adultBirthdayCount}
                                    onChange={(e) => setAdultBirthdayCount(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="numKidBirthdays">Number of Kid Birthdays</label>
                            </div>
                            <div className="col-75">
                                <input
                                    type="number"
                                    id="numKidBirthdays"
                                    placeholder="Number of kid birthdays..."
                                    value={childBirthdayCount}
                                    onChange={(e) => setChildBirthdayCount(Number(e.target.value))}
                                />
                            </div>
                        </div>
                    </>
                )}

                <div className="row">
                    <div className="col-25">
                        <label>Total Amount</label>
                    </div>
                    <div className="col-75">
                        <input
                            type="text"
                            readOnly
                            value={`$${totalAmount}`}
                        />
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;
