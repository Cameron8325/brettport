import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import backgroundImage from '../img/facts2.jpg';

const FactsContainer = styled.section`
  padding: 100px 20px;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 70px 15px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  background: #f4f4f4;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FactsHeading = styled(Typography)`
  font-size: 3rem !important;
  color: #002b5b;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.2rem !important;
  }
`;

const FactsSubtitle = styled(Typography)`
  font-size: 1.2rem;
  color: #000;
  font-style: italic;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledPaper = styled(motion(Paper))`
  margin: 1rem 0;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: none;
  border-left: 5px solid #007b8a;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const FactItemText = styled(ListItemText)`
  .MuiTypography-root {
    font-size: 1.2rem;
    color: #002b5b;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  .MuiTypography-secondary {
    color: #4e4e4e;
    margin-top: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const CallToActionBox = styled(Box)`
  margin-top: 3rem;
  padding: 20px;
  background-color: #617391;
  border-radius: 10px;
  color: white;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding: 15px;
  }
`;

const CallToActionButton = styled(Link)`
  font-size: 1.2rem;
  background-color: #37474f;
  color: #ffffff;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
  display: inline-block;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #2b3a42;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1.5rem;
  }
`;

export const FactsForYou = () => {
  return (
    <FactsContainer id="facts">
      <ContentWrapper>
        <FactsHeading>Facts for You</FactsHeading>
        <FactsSubtitle>
          Let Brett Nelson guide you through your health insurance options. Here are important insights that can save you time and money.
        </FactsSubtitle>

        <List>
          {[
            {
              primary: 'Employer Coverage',
              secondary:
                'Provided through job benefits. Usually inexpensive or free for employees, but costly for family members.',
            },
            {
              primary: 'Underwritten Coverage',
              secondary:
                'Ideal for self-employed individuals or small business workers. Requires good health to qualify.',
            },
            {
              primary: 'COBRA Coverage',
              secondary:
                'Allows continuation of employer coverage at your expense. Typically costly—consider alternatives like Underwritten plans.',
            },
            {
              primary: 'Medical Sharing Plans',
              secondary:
                'Not traditional insurance. Only use when no other affordable options exist, as these plans are not obligated to pay your bills.',
            },
            {
              primary: 'Short Term Plans',
              secondary:
                'Best for short coverage gaps, but beware of deceptive marketing. Coverage often lacks long-term benefits.',
            },
            {
              primary: 'ACA Plans',
              secondary:
                'Also known as "Obamacare." Ideal for those with pre-existing conditions or qualifying for subsidies. Can be expensive without financial assistance.',
            },
          ].map((fact, index) => (
            <StyledPaper key={index} whileHover={{ scale: 1.05 }}>
              <ListItem>
                <FactItemText primary={fact.primary} secondary={fact.secondary} />
              </ListItem>
            </StyledPaper>
          ))}
        </List>

        <CallToActionBox>
          <Typography variant="h5" style={{ marginBottom: '1rem' }}>
            Ready to take control of your health coverage?
          </Typography>
          <CallToActionButton to="contact" smooth={true} duration={800}>
            Contact Brett for a Personalized Quote
          </CallToActionButton>
        </CallToActionBox>
      </ContentWrapper>
    </FactsContainer>
  );
};

export default FactsForYou;
