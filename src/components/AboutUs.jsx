import React from "react";
import "./AboutUs.css"; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>Welcome to HAYYIN Park!</h1>
      <p>Where Adventure Awaits!</p>

      <div className="image-gallery">
        <div className="gallery-item">
          <img src="https://cdn.pixabay.com/photo/2019/10/09/15/43/star-flyer-4537668_1280.jpg" alt="Thrilling Rides" />
          <h3>Thrilling Rides</h3>
          <p>Experience the rush on our amazing rides!</p>
        </div>
        <div className="gallery-item">
          <img src="https://media.istockphoto.com/id/1051006012/photo/happy-family-having-fun-in-an-amusement-park.jpg?s=612x612&w=0&k=20&c=pa2CKxzp6OUeCPX9wD38el2E5THEJ6F5edYKGl6twvM=" alt="Family Fun" />
          <h3>Family Fun</h3>
          <p>Enjoy fun activities for the whole family!</p>
        </div>
        <div className="gallery-item">
          <img src="https://media.istockphoto.com/id/1294060074/photo/portrait-of-little-girl-eating-cotton-candy.jpg?s=612x612&w=0&k=20&c=4jcPua9aY3JDA5TS-GiAOiQSu_S8jlUyI53DEO9fSUs=" alt="Delicious Treats" />
          <h3>Delicious Treats</h3>
          <p>Savor the taste of our delicious cotton candy and snacks!</p>
        </div>
      </div>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>To provide a safe and joyful environment for families to create unforgettable memories together.</p>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>Adventure</li>
          <li>Family</li>
          <li>Safety</li>
          <li>Fun</li>
          <li>Community</li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://images.pexels.com/photos/19270854/pexels-photo-19270854/free-photo-of-redhead-model-in-coat-on-city-street.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Member 1" />
            <h3>Alex Russo</h3>
            <p>Park Manager</p>
          </div>
          <div className="team-member">
            <img src="https://images.pexels.com/photos/27914297/pexels-photo-27914297/free-photo-of-fuerza-en-la-mirada.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Member 2" />
            <h3>Julia Stone</h3>
            <p>Operations Manager</p>
          </div>
          <div className="team-member">
            <img src="https://images.pexels.com/photos/29179695/pexels-photo-29179695/free-photo-of-young-woman-with-headphones-sitting-indoors.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Member 3" />
            <h3>Emily Addams</h3>
            <p>Guest Experience Director</p>
          </div>
        </div>
      </section>

      <footer className="about-us-footer">
        <p>Join us for a day full of adventure, laughter, and happiness!</p>
      </footer>
    </div>
  );
};

export default AboutUs;
