import React from "react";
import "./Contact.css"; // Import CSS file for additional styles
import Navbar from "../components/Navbar"; // Assuming you have a Navbar component

const Contact = () => {
  return (
    <div className="app-contact-container">
      {/* Navbar import */}
      <Navbar />

      {/* Full-width Banner Image with Heading */}
      <div className="contact-banner">
        <div className="banner-text">
          <h1>CONTACT US</h1>
          <p>We're here to help you with any questions or concerns you may have.</p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info-section container my-5">
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <h3>Customer Service</h3>
            <p>Email: support@dreamtours.com</p>
            <p>Phone: +91 918579056</p>
            <p>Hours: Mon-Fri, 7AM - 8PM</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Corporate Office</h3>
            <p>Address: 123 Dream St, City, Country</p>
            <p>Phone: +91 912345678</p>
            <p>Hours: Mon-Fri, 9AM - 6PM</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Sales Team</h3>
            <p>Email: sales@dreamtours.com</p>
            <p>Phone: +91 987654321</p>
            <p>Hours: Mon-Fri, 7AM - 7PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
