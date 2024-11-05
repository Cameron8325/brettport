import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import bgPattern from '../img/servbg.jpg'; // Use your actual background image

const ServicesSection = styled.section`
  background: url(${bgPattern}) no-repeat center center; /* Background image */
  background-size: cover;
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Heading = styled(motion.h2)`
  font-size: 3rem;
  color: white; /* Changed the heading color to white for better readability */
  margin-bottom: 50px;
  text-align: center;
  z-index: 2;
`;

const DecorativeLine = styled.div`
  width: 200px;
  height: 4px;
  background-color: #007b8a;
  margin-bottom: 30px;
  z-index: 2;
`;

const ServiceGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  z-index: 2;
`;

const ServiceCard = styled(motion.div)`
  background-color: #f4f4f4;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease;
  border-top: 5px solid #007b8a;

  &:hover {
    transform: scale(1.05);
  }
`;

const IconBackground = styled.div`
  background-color: #002b5b;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px auto;
`;

const Icon = styled.div`
  font-size: 3rem;
  color: white;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #002b5b;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
`;

export const Services = () => {
  return (
    <ServicesSection id="services">
      <Heading
      >
        Our Services
      </Heading>
      <DecorativeLine />
      <ServiceGrid>
        <ServiceCard whileHover={{ scale: 1.05 }}>
          <IconBackground>
            <Icon>💼</Icon>
          </IconBackground>
          <ServiceTitle>Health Insurance Plans</ServiceTitle>
          <ServiceDescription>
            Comprehensive plans to cover individuals and families, ensuring peace of mind.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard whileHover={{ scale: 1.05 }}>
          <IconBackground>
            <Icon>🏥</Icon>
          </IconBackground>
          <ServiceTitle>Medicare Solutions</ServiceTitle>
          <ServiceDescription>
            Expert guidance through Medicare options and supplemental plans tailored to you.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard whileHover={{ scale: 1.05 }}>
          <IconBackground>
            <Icon>💪</Icon>
          </IconBackground>
          <ServiceTitle>Disability Insurance</ServiceTitle>
          <ServiceDescription>
            Protect your income with robust disability insurance in the event of illness or injury.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard whileHover={{ scale: 1.05 }}>
          <IconBackground>
            <Icon>🏠</Icon>
          </IconBackground>
          <ServiceTitle>Life Insurance</ServiceTitle>
          <ServiceDescription>
            Safeguard your family's future with flexible and affordable life insurance plans.
          </ServiceDescription>
        </ServiceCard>
      </ServiceGrid>
    </ServicesSection>
  );
};
