import React from 'react';
import { FeatureContainer } from './FeatureElements';
import styled from 'styled-components';

const ContactSection = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

const ContactContent = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 0.5rem;
  color: #333;
  border-radius: 5px;
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.8);

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const ContactFormContainer = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 0.5rem;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const FormTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.input`
  width: 100%;
  padding: 1.2rem 1.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;

  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #999;
  }
`;

const FormMessage = styled.textarea`
  width: 100%;
  padding: 1.2rem 1.5rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  font-size: 1rem;
  resize: none;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #999;
  }
`;

const FormButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  background-color: #fdc500;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e31837;
  }
`;

const Feature = () => {
  return (
    <div id='contact'>
      <FeatureContainer>
        <ContactSection>
          <ContactFormContainer>
            <FormTitle>Contact Us</FormTitle>
            <Form>
              <FormField type='text' placeholder='Your Name' />
              <FormField type='email' placeholder='Your Email' />
              <FormMessage rows='4' placeholder='Your Message' />
              <FormButton type='submit'>Send Message</FormButton>
            </Form>
          </ContactFormContainer>
          <ContactContent>
            <h3>WE'RE OPEN</h3>
            <p style={{ fontSize: '1rem' }}>Monday-Sunday: 5:40am-12:30pm</p>
            <p style={{ fontSize: '1rem' }}>37MP+QV9 - Al Hayl Industrial - Fujairah - United Arab Emirates</p>
            <p style={{ fontSize: '1rem' }}>LandLine: 096062944</p>
            <p style={{ fontSize: '1rem' }}>Mobile: 0528439606</p>
            <p style={{ fontSize: '1rem' }}>Email: daraltayeb7@gmail.com</p>
          </ContactContent>
        </ContactSection>
      </FeatureContainer>
    </div>
  );
};

export default Feature;
