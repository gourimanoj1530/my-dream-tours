import React from 'react';
import Navbar from '../../components/Navbar'; // Adjust the path as needed
import './newyork.css'; // Ensure this file exists
import { Link } from 'react-router-dom';

const NewYork = () => {
  return (
    <div className="newyork-wrapper">
      <Navbar />
      <div className="newyork-main-content">
        <h2>NEW YORK CITY, USA</h2>

        {/* Day 1 */}
        <div className="newyork-day newyork-day1">
          <div className="newyork-text-content">
            <h3>Day 1: Arrival in New York City</h3>
            <p><strong>Morning:</strong> Arrive in NYC and transfer to your hotel.</p>
            <p><strong>Afternoon:</strong> Visit Times Square and explore Broadway.</p>
            <p><strong>Evening:</strong> Dinner at a rooftop restaurant with views of the skyline.</p>
          </div>
          <div className="newyork-day-image"></div>
        </div>

        {/* Day 2 */}
        <div className="newyork-day newyork-day2">
          <div className="newyork-text-content">
            <h3>Day 2: Exploring Manhattan</h3>
            <p><strong>Morning:</strong> Visit Central Park and take a leisurely stroll.</p>
            <p><strong>Afternoon:</strong> Explore Museum Mile including the MET and Guggenheim.</p>
            <p><strong>Evening:</strong> Dinner in Little Italy or Chinatown.</p>
          </div>
          <div className="newyork-day-image"></div>
        </div>

        {/* Day 3 */}
        <div className="newyork-day newyork-day3">
          <div className="newyork-text-content">
            <h3>Day 3: Statue of Liberty and Ellis Island</h3>
            <p><strong>Morning:</strong> Statue of Liberty ferry tour and visit Ellis Island.</p>
            <p><strong>Afternoon:</strong> Explore Wall Street and the 9/11 Memorial.</p>
            <p><strong>Evening:</strong> Broadway show or evening cruise along the Hudson River.</p>
          </div>
          <div className="newyork-day-image"></div>
        </div>

        {/* Day 4 */}
        <div className="newyork-day newyork-day4">
          <div className="newyork-text-content">
            <h3>Day 4: Brooklyn & High Line</h3>
            <p><strong>Morning:</strong> Walk the Brooklyn Bridge and explore DUMBO for iconic photo spots and coffee shops.</p>
            <p><strong>Afternoon:</strong> Stroll the High Line, visit Chelsea Market for lunch and boutique shopping.</p>
            <p><strong>Evening:</strong> Enjoy skyline views from Brooklyn Heights Promenade and dinner at a local eatery.</p>
          </div>
          <div className="newyork-day-image"></div>
        </div>

        {/* Purchase Button */}
        <Link to="/tour_places/payment/newyork" className="btn explore-btn">Pay</Link>
      </div>
    </div>
  );
};

export default NewYork;
