import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg,rgb(23, 4, 56) 0%, #025e4c 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  background: #007bff;
  color: white;
  padding: 20px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  background: #f1f8ff;
  padding: 12px;
  margin: 10px 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.3s ease;

  &:before {
    content: "✔";
    color: #007bff;
    font-weight: bold;
  }

  &:hover {
    background: #dbeafe;
  }
`;



const Footer = styled.footer`
  background: #333;
  color: white;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Home1 = () => {
  return (
    <HomeContainer>
      <Header>
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for all your needs.</p>
      </Header>

      

      <Footer>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </Footer>
    </HomeContainer>
  );
};

export default Home1;
