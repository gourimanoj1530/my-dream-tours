import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import { Link, Routes, Route } from 'react-router-dom';
import Bali from './tour_places/bali';
import Kyoto from './tour_places/kyoto';
import Dubai from './tour_places/dubai';
import MachuPicchu from './tour_places/machupichu';
import Paris from './tour_places/paris';
import NewYork from './tour_places/newyork';
import PaymentDetails from './tour_places/payment';

const Home = () => {
  return (
    <div className="home-page-content">
      <Navbar />

      {/* ⭐ ADD HERO SECTION HERE ⭐ */}
      <section className="hero-container">
        <h1 className="hero-title">TRAVEL</h1>
        <p className="hero-subtitle">AND LEARN THE BEST WAY TO DO IT</p>

        <Link to="/home">
          <button className="hero-btn">START NOW</button>
        </Link>
      </section>
      {/* ⭐ END HERO SECTION ⭐ */}

      <div className="content-container">
        <div className="card-row">

          {/* Kyoto Card */}
          <div className="travel-card">
            <img src="pexels-belle-co-99483-402028.jpg" className="travel-card-img" alt="Kyoto" />
            <div className="travel-card-body">
              <h3 className="travel-card-title">Kyoto, Japan</h3>
              <p className="travel-card-text">
                Kyoto, Japan's cultural heart, dazzles with historic temples, traditional wooden houses, and beautiful gardens.
                Highlights include Kinkaku-ji, Arashiyama Bamboo Grove, and Fushimi Inari Shrine.
              </p>
              <Link to="/tour_places/kyoto" className="btn explore-btn">Learn More</Link>
            </div>
          </div>

             {/* Bali Card */}
          <div className="travel-card">
            <img src="pexels-valeriiamiller-2587004.jpg" className="travel-card-img" alt="Bali" />
            <div className="travel-card-body">
              <h3 className="travel-card-title">Bali, Indonesia</h3>
              <p className="travel-card-text">
                Bali, Indonesia's tropical paradise, offers lush landscapes, pristine beaches, and vibrant culture.
                Highlights include Ubud's rice terraces, Tanah Lot Temple, and the stunning beaches of Kuta and Seminyak.
              </p>
              <Link to="/tour_places/bali" className="btn explore-btn">Learn More</Link>
            </div>
          </div>

          {/* Dubai Card */}
          <div className="travel-card">
            <img src="pexels-jeshoots-com-147458-442579.jpg" className="travel-card-img" alt="Dubai" />
            <div className="travel-card-body">
              <h3 className="travel-card-title">Dubai, UAE</h3>
              <p className="travel-card-text">
                Dubai, a modern marvel in the UAE, dazzles with its futuristic skyline, luxury shopping, and vibrant nightlife.
                Highlights include the towering Burj Khalifa, the opulent Palm Jumeirah, and the expansive Dubai Mall.
                Experience thrilling desert safaris, world-class entertainment, and a unique blend of tradition and innovation.
              </p>
              <Link to="/tour_places/dubai" className="btn explore-btn">Learn More</Link>
            </div>
          </div>

          {/* Paris Card */}
          <div className="travel-card">
            <img src="pexels-thorsten-technoman-109353-338515.jpg" className="travel-card-img" alt="Paris" />
            <div className="travel-card-body">
              <h3 className="travel-card-title">Paris, France</h3>
              <p className="travel-card-text">
                Paris, France's enchanting capital, captivates with its romantic ambiance, iconic landmarks, and rich culture.
                Must-sees include the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.
                Stroll along the Seine, explore charming cafes, and experience world-class art and cuisine in this timeless city of lights and love.
              </p>
              <Link to="/tour_places/paris" className="btn explore-btn">Learn More</Link>
            </div>
          </div>

          {/* New York City Card */}
          <div className="travel-card">
            <img src="pexels-michalmarek-1774389.jpg" className="travel-card-img" alt="New York City" />
            <div className="travel-card-body">
              <h3 className="travel-card-title">New York City</h3>
              <p className="travel-card-text">
                New York City, the vibrant heart of the USA, teems with iconic landmarks, cultural diversity, and nonstop energy.
                Explore Times Square, Central Park, and the Statue of Liberty.
                Enjoy world-class museums, Broadway shows, and diverse cuisine.
                NYC's unique blend of ambition and creativity makes it an unforgettable urban adventure.
              </p>
              <Link to="/tour_places/newyork" className="btn explore-btn">Learn More</Link>
            </div>
          </div>

          {/* Machu Picchu Card */}
          <div className="travel-card">
            <img src="pexels-carlos-santiago-421908853-18388176.jpg" className="travel-card-img" alt="Machu Picchu" />
            <div className="travel-card-body">
              <h3 className="travel-card-title">Machu Picchu, Peru</h3>
              <p className="travel-card-text">
                Machu Picchu, Peru's ancient Incan citadel, mesmerizes with its breathtaking mountain scenery and intricate stone structures.
                Set high in the Andes, it offers stunning views and a sense of mystery.
              </p>
              <Link to="/tour_places/machupichu" className="btn explore-btn">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/tour_places/bali" element={<Bali />} />
        <Route path="/tour_places/kyoto" element={<Kyoto />} />
        <Route path="/tour_places/dubai" element={<Dubai />} />
        <Route path="/tour_places/machupichu" element={<MachuPicchu />} />
        <Route path="/tour_places/paris" element={<Paris />} />
        <Route path="/tour_places/newyork" element={<NewYork />} />
        <Route path="/tour_places/payment" element={<PaymentDetails />} />
      </Routes>
    </div>
  );
};

export default Home;
