import React from "react";
import styled from "styled-components";
import MedImage from "./assets/Med.png";
import MeditationImage from "./assets/Meditation.png";

const StyleWrapper = styled.div`
  .home-container {
    text-align: center;
  }
  header {
    background: #f8f9fa;
    padding: 20px;
  }
  .features {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }
  .feature-item {
    margin: 10px 0;
  }
  footer {
    background: #333;
    color: white;
    padding: 10px;
  }
`;

const Features = () => {
  return (
    <StyleWrapper>
      <div className="home-container">
        <header>
          <h1>Welcome to Our Website</h1>
          <p>Your one-stop solution for all your needs.</p>
        </header>
        <main>
          <section className="features">
            <h2>Features</h2>
            <div className="feature-item">
              <img src={MedImage} alt="Feature 1" />
              <h3>Feature 1 Title</h3>
              <p>Description of Feature 1.</p>
            </div>
            <div className="feature-item">
              <img src={MeditationImage} alt="Feature 2" />
              <h3>Feature 2 Title</h3>
              <p>Description of Feature 2.</p>
            </div>
            <div className="feature-item">
              <h3>Feature 3 Title</h3>
              <p>Description of Feature 3.</p>
            </div>
          </section>
          <section className="about">
            <h2>About Us</h2>
            <p>We are dedicated to providing the best service possible.</p>
          </section>
        </main>
        <footer>
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </StyleWrapper>
  );
};

export default Features;
