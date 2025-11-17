import React from 'react';
import Navbar from '../../components/Navbar'; // Adjust the path as needed
import { Link } from 'react-router-dom';
import './dubai.css'; // Ensure this file exists

const Dubai = () => {
  return (
    <div className="dubai-wrapper">
      <Navbar />
      <div className="dubai-main-content">
        <h2>DUBAI, UAE</h2>

        {/* Day 1 */}
        <div className="dubai-day dubai-day1">
          <div className="dubai-text-content">
            <h3>Day 1: Arrival in Dubai</h3>
            <p><strong>Morning:</strong> Arrive in Dubai and transfer to your hotel.</p>
            <p><strong>Afternoon:</strong> Visit Dubai Mall and see the famous Dubai Fountain show.</p>
            <p><strong>Evening:</strong> Dinner at a local restaurant with views of Burj Khalifa.</p>
          </div>
          <div className="dubai-day-image"></div>
        </div>

        {/* Day 2 */}
        <div className="dubai-day dubai-day2">
          <div className="dubai-text-content">
            <h3>Day 2: Dubai City Tour</h3>
            <p><strong>Morning:</strong> Explore Jumeirah Mosque and the Jumeirah Beach.</p>
            <p><strong>Afternoon:</strong> Visit the Dubai Museum and explore the historic Al Fahidi District.</p>
            <p><strong>Evening:</strong> Dhow cruise dinner along Dubai Creek.</p>
          </div>
          <div className="dubai-day-image"></div>
        </div>

        {/* Day 3 */}
        <div className="dubai-day dubai-day3">
          <div className="dubai-text-content">
            <h3>Day 3: Desert Safari Adventure</h3>
            <p><strong>Morning:</strong> Relax at the hotel or visit the Dubai Miracle Garden.</p>
            <p><strong>Afternoon:</strong> Desert safari with dune bashing, camel riding, and sandboarding.</p>
            <p><strong>Evening:</strong> BBQ dinner and traditional entertainment at a desert camp.</p>
          </div>
          <div className="dubai-day-image"></div>
        </div>

        {/* Day 4 */}
        <div className="dubai-day dubai-day4">
          <div className="dubai-text-content">
            <h3>Day 4: Modern Dubai</h3>
            <p><strong>Morning:</strong> Visit Atlantis The Palm and Aquaventure Waterpark.</p>
            <p><strong>Afternoon:</strong> Shop at the Dubai Marina Mall and enjoy lunch at a waterfront restaurant.</p>
            <p><strong>Evening:</strong> Visit Burj Khalifa observation deck for sunset views.</p>
          </div>
          <div className="dubai-day-image"></div>
        </div>

        {/* Day 5 */}
        <div className="dubai-day dubai-day5">
          <div className="dubai-text-content">
            <h3>Day 5: Departure</h3>
            <p><strong>Morning:</strong> Optional visit to Souk Madinat Jumeirah for souvenirs.</p>
            <p><strong>Afternoon:</strong> Transfer to Dubai Airport for departure.</p>
            <p><strong>Evening:</strong> End of the tour.</p>
          </div>
          <div className="dubai-day-image"></div>
        </div>

        {/* Day 6 */}
        <div className="dubai-day dubai-day6">
          <div className="dubai-text-content">
            <h3>Day 6: Abu Dhabi Day Trip</h3>
            <p><strong>Morning:</strong> Drive to Abu Dhabi to visit the Sheikh Zayed Grand Mosque and admire its stunning architecture.</p>
            <p><strong>Afternoon:</strong> Explore the Louvre Abu Dhabi and, time permitting, visit Qasr Al Watan (Presidential Palace) to learn about Emirati culture.</p>
            <p><strong>Evening:</strong> Return to Dubai for an evening at leisure or transfer to the airport if on departure day.</p>
          </div>
          <div className="dubai-day-image"></div>
        </div>

        {/* Purchase Button */}
        <Link to="/tour_places/payment/dubai" className="btn explore-btn">Pay</Link>
      </div>
    </div>
  );
};

export default Dubai;