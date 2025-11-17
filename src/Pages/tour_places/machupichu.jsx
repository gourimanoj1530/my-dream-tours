import React from 'react';
import Navbar from '../../components/Navbar'; // Adjust the path as needed
import './machupichu.css'; // Ensure this file exists
import { Link } from 'react-router-dom';

const MachuPicchu = () => {
  return (
    <div className="machu-picchu-wrapper">
      <Navbar />
      <div className="machu-picchu-main-content">
        <h2>MACHU PICCHU, PERU</h2>
        <div className="machu-picchu-day machu-picchu-day1">
          <div className="machu-picchu-text-content">
            <h3>Day 1: Arrival in Cusco</h3>
            <p><strong>Morning:</strong> Arrive in Cusco and transfer to your hotel.</p>
            <p><strong>Afternoon:</strong> Explore the historic center of Cusco, visiting Plaza de Armas and the Cathedral.</p>
            <p><strong>Evening:</strong> Enjoy a traditional Peruvian dinner.</p>
          </div>
          <div className="machu-picchu-day-image"></div>
        </div>
        <div className="machu-picchu-day machu-picchu-day2">
          <div className="machu-picchu-text-content">
            <h3>Day 2: Sacred Valley Tour</h3>
            <p><strong>Morning:</strong> Visit Pisac Market and explore the ruins of Ollantaytambo.</p>
            <p><strong>Afternoon:</strong> Lunch in Urubamba and visit the Maras Salt Mines.</p>
            <p><strong>Evening:</strong> Return to Cusco for dinner and relaxation.</p>
          </div>
          <div className="machu-picchu-day-image"></div>
        </div>
        <div className="machu-picchu-day machu-picchu-day3">
          <div className="machu-picchu-text-content">
            <h3>Day 3: Train to Aguas Calientes</h3>
            <p><strong>Morning:</strong> Take the scenic train ride to Aguas Calientes.</p>
            <p><strong>Afternoon:</strong> Explore Aguas Calientes and visit the local hot springs.</p>
            <p><strong>Evening:</strong> Prepare for the Machu Picchu visit.</p>
          </div>
          <div className="machu-picchu-day-image"></div>
        </div>
        <div className="machu-picchu-day machu-picchu-day4">
          <div className="machu-picchu-text-content">
            <h3>Day 4: Machu Picchu Exploration</h3>
            <p><strong>Morning:</strong> Early morning visit to Machu Picchu for sunrise.</p>
            <p><strong>Afternoon:</strong> Guided tour of Machu Picchu, exploring the ruins and learning about its history.</p>
            <p><strong>Evening:</strong> Return to Aguas Calientes for dinner and overnight stay.</p>
          </div>
          <div className="machu-picchu-day-image"></div>
        </div>
        <div className="machu-picchu-day machu-picchu-day5">
          <div className="machu-picchu-text-content">
            <h3>Day 5: Return to Cusco</h3>
            <p><strong>Morning:</strong> Free time in Aguas Calientes. Optional hike to Huayna Picchu.</p>
            <p><strong>Afternoon:</strong> Train back to Cusco.</p>
            <p><strong>Evening:</strong> Farewell dinner in Cusco.</p>
          </div>
          <div className="machu-picchu-day-image"></div>
        </div>

        {/* Day 6 */}
        <div className="machu-picchu-day machu-picchu-day6">
          <div className="machu-picchu-text-content">
            <h3>Day 6: Cusco Culture & Departure</h3>
            <p><strong>Morning:</strong> Explore San Blas neighborhood with its artisan shops and galleries. Visit the San Pedro Market for local snacks.</p>
            <p><strong>Afternoon:</strong> Visit Qorikancha (Temple of the Sun) and enjoy a relaxed lunch sampling Peruvian cuisine.</p>
            <p><strong>Evening:</strong> Transfer to the airport for your onward flight, or enjoy an extra evening in Cusco if your schedule allows.</p>
          </div>
          <div className="machu-picchu-day-image"></div>
        </div>
        <Link to="/tour_places/payment/machupichu" className="btn explore-btn">Pay</Link>
      </div>
    </div>
  );
};

export default MachuPicchu;
