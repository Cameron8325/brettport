import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #1e2d38 0%, #2c3e50 100%); /* Darker, rich gradient background */
  position: relative;
  color: #ffffff;
  text-align: center;
  min-height: 100vh;
`;

const FloatingShape = styled.div`
  position: absolute;
  background-color: rgba(50, 90, 100, 0.2); /* Subtle teal-blue floating shapes */
  width: ${(props) => props.size || '150px'};
  height: ${(props) => props.size || '150px'};
  border-radius: 50%;
  top: ${(props) => props.top || '10%'};
  left: ${(props) => props.left || '10%'};
  z-index: 1;
  filter: blur(8px); /* Slight blur for softer shapes */
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 50px;
  color: #ffffff;
  z-index: 2;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #37474f; /* Darker form background */
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  border: 2px solid #455a64; /* Dark accent border */
  z-index: 2;
`;

const Input = styled.input`
  padding: 15px;
  margin: 10px 0;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #b0bec5;
  font-size: 1.1rem;
  background-color: #546e7a; /* Dark input field background */
  color: #ffffff;

  &::placeholder {
    color: #cfd8dc; /* Lighter placeholder color */
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  margin: 10px 0;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #b0bec5;
  font-size: 1.1rem;
  background-color: #546e7a; /* Darker textarea background */
  color: #ffffff;

  &::placeholder {
    color: #cfd8dc;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: #007b8a; /* Teal color */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #005f6b; /* Slightly darker teal for hover */
    transform: scale(1.05);
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
