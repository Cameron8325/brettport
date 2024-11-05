import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import brettImage from '../img/HS.jpg'; // Use the actual image path
import backgroundImage from '../img/bg.jpeg';

const AboutSection = styled.section`
  background-color: #f4f4f4;
  padding: 100px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;
  color: #002b5b;
  width: 90%;
  max-width: 1200px;
  gap: 50px;
`;

const TextContainer = styled.div`
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.9); /* Subtle background behind text */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Heading = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-top: 10px;
`;

const ListContainer = styled.div`
  margin-top: 20px;
`;

const BioList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const BioItem = styled(motion.li)`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const ImageContainer = styled(motion.div)`
  width: 500px;
  height: auto;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const MissionStatement = styled(motion.div)`
  background-color: #002b5b;
  padding: 30px;
  margin-top: 50px;
  border-radius: 10px;
  text-align: center;
  max-width: 900px;
  color: white;
  font-size: 1.2rem;
`;

export const About = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <TextContainer>
          <Heading
            initial={{ x: -100 }} // Slide in from the left
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            About Brett Nelson
          </Heading>
          <Paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            With over a decade of experience in the health insurance industry, Brett Nelson offers an unparalleled approach to finding the right plans for his clients.
          </Paragraph>
          <ListContainer>
            <BioList>
              {[
                "✔️ Licensed in 20+ states",
                "✔️ Specializing in Medicare, Health, and Life Insurance",
                "✔️ 10+ years of experience guiding clients",
                "✔️ Client-first approach focused on building relationships"
              ].map((item, index) => (
                <BioItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                >
                  {item}
                </BioItem>
              ))}
            </BioList>
          </ListContainer>
        </TextContainer>
        <ImageContainer
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Image src={brettImage} alt="About Brett" />
        </ImageContainer>
      </AboutContent>

      <MissionStatement
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        "Our mission is to provide peace of mind through expert insurance solutions, personalized to meet the needs of each individual and family."
      </MissionStatement>
    </AboutSection>
  );
};
