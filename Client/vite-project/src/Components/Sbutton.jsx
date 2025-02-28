import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SButton = () => {
  const navigate = useNavigate(); // Corrected useNavigate hook

  const About = () => {
    navigate('/about'); // Corrected navigation function
  };

  return (
    <StyledWrapper>
      <div className="button-container">
        <button onClick={About}>
          <span className="span-mother">
            <span>S</span>
            <span>T</span>
            <span>A</span>
            <span>R</span>
            <span>T</span>
          </span>
          <span className="span-mother2">
            <span>S</span>
            <span>T</span>
            <span>A</span>
            <span>R</span>
            <span>T</span>
          </span>
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: transparent;
  position: fixed;
  width: 100%;
  top: 0;

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    font-weight: bold;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    width: 95.02px;
    height: 42.66px;
    border: none;
    background-color: #3653f8;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  button .span-mother {
    display: flex;
    overflow: hidden;
  }

  button:hover .span-mother {
    position: absolute;
  }

  button:hover .span-mother span {
    transform: translateY(1.2em);
  }

  button .span-mother span:nth-child(1) {
    transition: 0.2s;
  }

  button .span-mother span:nth-child(2) {
    transition: 0.3s;
  }

  button .span-mother span:nth-child(3) {
    transition: 0.4s;
  }

  button .span-mother span:nth-child(4) {
    transition: 0.5s;
  }

  button .span-mother span:nth-child(5) {
    transition: 0.6s;
  }

  button .span-mother2 {
    display: flex;
    position: absolute;
    overflow: hidden;
  }

  button .span-mother2 span {
    transform: translateY(-1.2em);
  }

  button:hover .span-mother2 span {
    transform: translateY(0);
  }

  button .span-mother2 span {
    transition: 0.2s;
  }

  button .span-mother2 span:nth-child(2) {
    transition: 0.3s;
  }

  button .span-mother2 span:nth-child(3) {
    transition: 0.4s;
  }

  button .span-mother2 span:nth-child(4) {
    transition: 0.5s;
  }

  button .span-mother2 span:nth-child(5) {
    transition: 0.6s;
  }
`;

export default SButton;
