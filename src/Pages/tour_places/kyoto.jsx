import React from 'react';
import Navbar from '../../components/Navbar'; // Adjust the path as needed
import './kyoto.css'; // Ensure this file exists
import { Link } from 'react-router-dom';

const Kyoto = () => {
  return (
    <div className="kyoto-wrapper">
      <Navbar />
      <div className="kyoto-main-content">
        <h2>KYOTO, JAPAN</h2>

        {/* Day 1 */}
        <div className="kyoto-day kyoto-day1">
          <div className="kyoto-text-content">
            <h3>Day 1: Arrival and Initial Exploration</h3>
            <p><strong>Morning:</strong> Arrive in Kyoto and check into your accommodation. Visit Yasaka Shrine to see the impressive architecture and grab a local snack.</p>
            <p><strong>Afternoon:</strong> Explore Nishiki Market for local food and souvenirs. Walk through Gion District, the famous geisha area.</p>
            <p><strong>Evening:</strong> Enjoy a traditional kaiseki dinner in Gion. Stroll along the Shirakawa Canal for a picturesque night view.</p>
          </div>
          <div className="kyoto-day-image"></div>
        </div>

        {/* Day 2 */}
        <div className="kyoto-day kyoto-day2">
          <div className="kyoto-text-content">
            <h3>Day 2: Eastern Kyoto - Temples and Shrines</h3>
            <p><strong>Morning:</strong> Visit Kinkaku-ji (Golden Pavilion). Head to Ryoan-ji to see the famous rock garden.</p>
            <p><strong>Afternoon:</strong> Explore Ginkaku-ji (Silver Pavilion) and walk the Philosopher's Path.</p>
            <p><strong>Evening:</strong> Visit Nanzen-ji Temple for a peaceful experience. Dinner in a local izakaya (Japanese pub).</p>
          </div>
          <div className="kyoto-day-image"></div>
        </div>

        {/* Day 3 */}
        <div className="kyoto-day kyoto-day3">
          <div className="kyoto-text-content">
            <h3>Day 3: Arashiyama and Western Kyoto</h3>
            <p><strong>Morning:</strong> Take a scenic train ride to Arashiyama. Visit the Arashiyama Bamboo Grove.</p>
            <p><strong>Afternoon:</strong> Walk across the Togetsukyo Bridge. Visit the Iwatayama Monkey Park for city views and to see the monkeys.</p>
            <p><strong>Evening:</strong> Relax in an onsen (hot spring) or visit a traditional tea house.</p>
          </div>
          <div className="kyoto-day-image"></div>
        </div>

        {/* Day 4 */}
        <div className="kyoto-day kyoto-day4">
          <div className="kyoto-text-content">
            <h3>Day 4: Southern Kyoto and Fushimi Inari</h3>
            <p><strong>Morning:</strong> Start early at Fushimi Inari Taisha, famous for its thousands of torii gates.</p>
            <p><strong>Afternoon:</strong> Explore Tofuku-ji Temple and its gardens. Visit the Sake District for tastings at a local brewery and sample local sake.</p>
            <p><strong>Evening:</strong> Enjoy a river cruise on the Hozu River.</p>
          </div>
          <div className="kyoto-day-image"></div>
        </div>

        {/* Day 5 */}
        <div className="kyoto-day kyoto-day5">
          <div className="kyoto-text-content">
            <h3>Day 5: Northern Kyoto and Cultural Experiences</h3>
            <p><strong>Morning:</strong> Visit Nijo Castle and its beautiful gardens. Explore Kyoto Imperial Palace.</p>
            <p><strong>Afternoon:</strong> Head to Kyoto International Manga Museum to explore Japanese manga culture. Participate in a traditional tea ceremony.</p>
            <p><strong>Evening:</strong> Visit Pontocho Alley for a memorable final dinner in Kyoto. Take a leisurely evening stroll along the Kamogawa River.</p>
          </div>
          <div className="kyoto-day-image"></div>
        </div>

        {/* Purchase Button */}
        <Link to="/tour_places/payment/kyoto" className="btn explore-btn">Pay</Link>
      </div>
    </div>
  );
};

export default Kyoto;
