import React from 'react';
import Navbar from '../../components/Navbar'; // Adjust the path as needed
import './paris.css'; // Ensure this file exists
import { Link} from 'react-router-dom';

const Paris = () => {
  return (
    <div className="paris-wrapper">
      <Navbar />
      <div className="paris-main-content">
        <h2>PARIS, FRANCE</h2>

        {/* Day 1 */}
        <div className="paris-day paris-day1">
          <div className="paris-text-content">
            <h3>Day 1: Arrival in Paris</h3>
            <p><strong>Morning:</strong> Arrive in Paris and transfer to your hotel.</p>
            <p><strong>Afternoon:</strong> Visit the Louvre Museum and see the Mona Lisa.</p>
            <p><strong>Evening:</strong> Dinner cruise along the Seine River.</p>
          </div>
          <div className="paris-day-image"></div>
        </div>

        {/* Day 2 */}
        <div className="paris-day paris-day2">
          <div className="paris-text-content">
            <h3>Day 2: Exploring Historic Paris</h3>
            <p><strong>Morning:</strong> Visit Notre-Dame Cathedral and climb to the top for city views.</p>
            <p><strong>Afternoon:</strong> Explore the Latin Quarter and enjoy lunch at a local bistro.</p>
            <p><strong>Evening:</strong> Sunset at Montmartre and visit Sacré-Cœur Basilica.</p>
          </div>
          <div className="paris-day-image"></div>
        </div>

        {/* Day 3 */}
        <div className="paris-day paris-day3">
          <div className="paris-text-content">
            <h3>Day 3: Palace of Versailles Day Trip</h3>
            <p><strong>Morning:</strong> Visit the Palace of Versailles and its gardens.</p>
            <p><strong>Afternoon:</strong> Lunch in Versailles town and explore the local market.</p>
            <p><strong>Evening:</strong> Return to Paris and free time for shopping or leisure.</p>
          </div>
          <div className="paris-day-image"></div>
        </div>

        {/* Day 4 */}
        <div className="paris-day paris-day4">
          <div className="paris-text-content">
            <h3>Day 4: Modern Paris</h3>
            <p><strong>Morning:</strong> Visit the Eiffel Tower and ascend to the top for panoramic views.</p>
            <p><strong>Afternoon:</strong> Explore Champs-Élysées and visit Arc de Triomphe.</p>
            <p><strong>Evening:</strong> Farewell dinner at a Michelin-starred restaurant.</p>
          </div>
          <div className="paris-day-image"></div>
        </div>

        {/* Day 5 */}
        <div className="paris-day paris-day5">
          <div className="paris-text-content">
            <h3>Day 5: Giverny & Monet's Garden (Day Trip)</h3>
            <p><strong>Morning:</strong> Take a short train ride to Vernon and visit Claude Monet's house and stunning gardens in Giverny.</p>
            <p><strong>Afternoon:</strong> Explore the water lily ponds and the famous Japanese bridge. Return to Paris and visit Musée de l'Orangerie if time permits.</p>
            <p><strong>Evening:</strong> Last-minute shopping in Le Marais or a relaxed dinner before departure.</p>
          </div>
          <div className="paris-day-image"></div>
        </div>

        {/* Purchase Button */}
        <Link to="/tour_places/payment/paris" className="btn explore-btn">Pay</Link>
      </div>
    </div>
  );
};

export default Paris;
