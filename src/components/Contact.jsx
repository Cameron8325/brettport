import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #1e2d38 0%, #2c3e50 100%);
  position: relative;
  color: #ffffff;
  text-align: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 70px 0;
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  background-color: rgba(50, 90, 100, 0.2);
  width: ${(props) => props.size || '150px'};
  height: ${(props) => props.size || '150px'};
  border-radius: 50%;
  top: ${(props) => props.top || '10%'};
  left: ${(props) => props.left || '10%'};
  z-index: 1;
  filter: blur(8px);

  @media (max-width: 768px) {
    display: none;
  }
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 50px;
  color: #ffffff;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #37474f;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  border: 2px solid #455a64;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 30px 20px;
    max-width: 90%;
  }
`;

const Input = styled.input`
  padding: 15px;
  margin: 10px 0;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #b0bec5;
  font-size: 1.1rem;
  background-color: #546e7a;
  color: #ffffff;

  &::placeholder {
    color: #cfd8dc;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px;
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  margin: 10px 0;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #b0bec5;
  font-size: 1.1rem;
  background-color: #546e7a;
  color: #ffffff;
  resize: none;

  &::placeholder {
    color: #cfd8dc;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: #007b8a;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #005f6b;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 25px;
  }
`;

export const Contact = () => {
  return (
    <ContactSection id="contact">
      <FloatingShape size="200px" top="5%" left="10%" />
      <FloatingShape size="100px" top="80%" left="85%" />
      <FloatingShape size="150px" top="50%" left="40%" />
      <Heading>Get in Touch</Heading>
      <Form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea rows="5" placeholder="Your Message" required />
        <SubmitButton>Send Message</SubmitButton>
      </Form>
    </ContactSection>
  );
};

export default Contact;
