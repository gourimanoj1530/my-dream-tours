import React from 'react';
import Navbar from '../../components/Navbar'; // Adjust the path as needed
import './bali.css'; // Ensure this file exists
import { Link } from 'react-router-dom';

const Bali = () => {
  return (
    <div className="bali-wrapper">
      <Navbar />
      <div className="bali-main-content">
        <h2>BALI, INDONESIA</h2>
        
        {/* Day 1 */}
        <div className="bali-day bali-day1">
          <div className="bali-text-content">
            <h3>Day 1: Arrival and Relaxation</h3>
            <p><strong>Morning:</strong> Arrive in Bali and check into your resort. Relax by the pool or beach.</p>
            <p><strong>Afternoon:</strong> Explore local markets and sample traditional Balinese cuisine.</p>
            <p><strong>Evening:</strong> Enjoy a sunset dinner by the beach.</p>
          </div>
          <div className="bali-day-image bali-day1"></div>
        </div>

        {/* Day 2 */}
        <div className="bali-day bali-day2">
          <div className="bali-text-content">
            <h3>Day 2: Ubud - Cultural Heart of Bali</h3>
            <p><strong>Morning:</strong> Visit Ubud Monkey Forest and explore the local temples.</p>
            <p><strong>Afternoon:</strong> Discover traditional Balinese art at Ubud Art Market and nearby galleries.</p>
            <p><strong>Evening:</strong> Attend a traditional dance performance.</p>
          </div>
          <div className="bali-day-image bali-day2"></div>
        </div>

        {/* Day 3 */}
        <div className="bali-day bali-day3">
          <div className="bali-text-content">
            <h3>Day 3: Beach Day and Water Activities</h3>
            <p><strong>Morning:</strong> Relax at Nusa Dua Beach or take part in water sports like snorkeling or surfing.</p>
            <p><strong>Afternoon:</strong> Visit Uluwatu Temple and enjoy the stunning ocean views.</p>
            <p><strong>Evening:</strong> Sunset dinner at a cliffside restaurant.</p>
          </div>
          <div className="bali-day-image bali-day3"></div>
        </div>

        {/* Day 4 */}
        <div className="bali-day bali-day4">
          <div className="bali-text-content">
            <h3>Day 4: Mount Batur and Hot Springs</h3>
            <p><strong>Morning:</strong> Early morning hike to Mount Batur for sunrise views.</p>
            <p><strong>Afternoon:</strong> Relax in natural hot springs at Toya Devasya.</p>
            <p><strong>Evening:</strong> Return to your hotel for a farewell dinner.</p>
          </div>
          <div className="bali-day-image bali-day4"></div>
        </div>

        {/* Purchase Button with Kyoto in the URL */}
        <Link to={`/tour_places/payment/bali`} className="btn explore-btn">Pay</Link>
      </div>
    </div>
  );
};

export default Bali;
