import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./Pages/login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Bali from "./Pages/tour_places/bali";
import Kyoto from "./Pages/tour_places/kyoto";
import Dubai from "./Pages/tour_places/dubai";
import MachuPicchu from "./Pages/tour_places/machupichu";
import Paris from "./Pages/tour_places/paris";
import NewYork from "./Pages/tour_places/newyork";
import PaymentDetails from "./Pages/tour_places/payment";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour_places/bali" element={<Bali />} />
          <Route path="/tour_places/kyoto" element={<Kyoto />} />
          <Route path="/tour_places/dubai" element={<Dubai />} />
          <Route path="/tour_places/machupichu" element={<MachuPicchu />} />
          <Route path="/tour_places/paris" element={<Paris />} />
          <Route path="/tour_places/newyork" element={<NewYork />} />
          <Route path="/tour_places/payment/:place" element={<PaymentDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
