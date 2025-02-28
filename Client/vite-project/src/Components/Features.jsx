import React from "react";
import styled from "styled-components";

const StyleWrapper = styled.div`
  .home-container {
    text-align: center;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg,rgb(23, 4, 56) 0%, #025e4c 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header {
    background: #007bff;
    color: white;
    padding: 20px;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
p{
color:black;
}
  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 images per row */
    gap: 20px;
    max-width: 800px;
    margin: 20px auto;
  }

  .feature-item {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .feature-item img {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }

  .about {
    background: #ffffff;
    padding: 20px;
    margin: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
  }

  footer {
    background: #333;
    color: white;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;

const Features = () => {
  return (
    <StyleWrapper>
      <div className="home-container">
        <header>
          <h1>What brings you</h1>
          <p>To Silent Moon.</p>
        </header>

        <main>
          <section className="features">
            <div className="feature-item">
              <img src="/assets/Med.png" alt="Feature 1" />
              <h3>Feature 1</h3>
              <p>Reduce Stress</p>
            </div>
            <div className="feature-item">
              <img src="/assets/Meditation.png" alt="Feature 2" />
              <h3>Feature 2</h3>
              <p>Improve Performance</p>
            </div>
            <div className="feature-item">
              <img src="/assets/Relax.jpeg" alt="Feature 3" />
              <h3>Feature 3</h3>
              <p>Increase Happiness</p>
            </div>
            <div className="feature-item">
              <img src="/assets/Focus.jpeg" alt="Feature 4" />
              <h3>Feature 4</h3>
              <p>Description of Feature 4.</p>
            </div>
            <div className="feature-item">
              <img src="/assets/Sleep.png" alt="Feature 5" />
              <h3>Feature 5</h3>
              <p>Description of Feature 5.</p>
            </div>
            <div className="feature-item">
              <img src="/assets/Exercise.png" alt="Feature 6" />
              <h3>Feature 6</h3>
              <p>Description of Feature 6.</p>
            </div>
          </section>

          <section className="about">
            <h2>About Us</h2>
            <p>We are dedicated to providing the best service possible.</p>
          </section>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
      </div>
    </StyleWrapper>
  );
};

export default Features;
