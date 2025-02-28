import React from 'react';
import styled from 'styled-components';

const Sbutton = () => {
  return (
    <StyledWrapper>
      <button>
        <span className="span-mother">
          <span>B</span>
          <span>u</span>
          <span>t</span>
          <span>t</span>
          <span>o</span>
          <span>n</span>
        </span>
        <span className="span-mother2">
          <span>B</span>
          <span>u</span>
          <span>t</span>
          <span>t</span>
          <span>o</span>
          <span>n</span>
        </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
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

  button .span-mother span:nth-child(6) {
    transition: 0.7s;
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

  button .span-mother2 span:nth-child(6) {
    transition: 0.7s;
  }`;

export default Sbutton;
