import React from "react";
import styled from "styled-components";

const StyleWrapper = styled.div`
  .home-container {
    text-align: center;
    font-family: Arial, sans-serif;
    background: #eef2f7;
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

  p {
    color: black;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    border-radius: 8px;
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

const Timings = () => {
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
              <img src="./assets/Med.png" alt="Feature 1" />
              <h3>Feature 1 Title</h3>
              <p>Description of Feature 1.</p>
            </div>
            <div className="feature-item">
              <img src="./assets/Meditation.png" alt="Feature 2" />
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
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
      </div>
    </StyleWrapper>
  );
};

export default Timings;
