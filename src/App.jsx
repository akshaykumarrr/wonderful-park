import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rides from "./components/Rides/Rides";
import LoginWrapper from "./components/Auth/LoginWrapper";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import HighRides from "./components/Rides/HighRides";
import ClearSignage from "./components/ClearSignage/ClearSignage";
import SignageCard from "./components/SignageCard";
import BookingMain from "./components/Booking/BookingMain";
import BookingView from "./components/Booking/BookingsView";
import WaterRides from "./components/Rides/WaterRides";
import KidsRides from "./components/Rides/KidsRides";
import LandRides from "./components/Rides/LandRides";
import Facilities from "./components/Facilities/facilities"; 
import CameraBooking from "./components/CamBooking/CameraBooking";
import ScreenReader from "./components/Facilities/ScreenReader";
import Vehicles from './components/Facilities/Vehicles';
import WheelChair from "./components/Facilities/WheelChair";
import Dining from "./components/Restaurants/Dining";
import Chatbot from "./components/ChatBot";
import DealCalendar from './components/DealCalendar';
import AboutUs from "./components/AboutUs";
import { CartProvider } from "./components/CartContext"; 
import CartPage from './components/CartPage';
import ContactUs from './components/ContactUs';
import PaymentPage from './components/PaymentPage'; 

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginWrapper />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/clearSignage" element={<ClearSignage />} />
          <Route path="/bookings" element={<BookingMain />} />
          <Route path="/highRides" element={<HighRides />} />
          <Route path="/waterRides" element={<WaterRides />} />
          <Route path="/kidsRides" element={<KidsRides />} />
          <Route path="/landRides" element={<LandRides />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/admin" element={<BookingView />} />
          <Route path="/cameraBooking" element={<CameraBooking />} />
          <Route path="/screenreader" element={<ScreenReader />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/wheelchair" element={<WheelChair />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/calendar" element={<DealCalendar />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/signagecard" element={<SignageCard />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
          

        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;