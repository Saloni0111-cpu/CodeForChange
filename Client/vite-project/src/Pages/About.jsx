import React from 'react';
import Features from '../Components/Features';
import styled from 'styled-components';

const ChatContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 380px;
  height: 440px;
  background: transparent;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  z-index: 1000; /* Ensures it stays above other elements */
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
`;

const About = () => {
  return (
    <>
      <Features />
      <ChatContainer>
        <Iframe src="https://new-folder-tau-two.vercel.app/" title="Chatbox" />
      </ChatContainer>
    </>
  );
};

export default About;
