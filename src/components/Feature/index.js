import React, { useState } from 'react';
import { FeatureContainer } from './FeatureElements';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { useAlert } from 'react-alert';

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
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

const ContactText = styled.span`
  margin: 0.3rem 0;
  font-size: 1rem;
  @media screen and (max-width: 767px) {
    font-size: 0.85rem;
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

  @media screen and (max-width: 767px) {
    // margin-top: 10rem;
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  margin-bottom: 0.8rem;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  font-size: 1rem;

  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #999;
  }

  @media screen and (max-width: 767px) {
    padding: 0.5rem 0.8rem;
    margin-bottom: 0.4rem;
    font-size: 0.6rem;
  }
`;

const FormMessage = styled.textarea`
  width: 100%;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
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

  @media screen and (max-width: 767px) {
    padding: 0.5rem 0.8rem;
    margin-bottom: 0.6rem;
    font-size: 0.6rem;
  }
`;

const FormButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: #fdc500;
  color: #fff;
  font-size: 1.4rem;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e31837;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
    padding: 0.6rem 0.8rem;
  }
`;

const Feature = () => {
  const alert = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = 'service_4zx5e75';
    const templateId = 'template_hrmv5m3';

    const userId = 'D6Wv5hbZQ5uz8qxXv';

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        alert.success('Email send successfully');
      })
      .catch((error) => {
        alert.error('Error while sending email');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div id='contact'>
      <FeatureContainer>
        <ContactSection>
          <ContactFormContainer>
            <FormTitle>Contact Us</FormTitle>
            <Form onSubmit={handleSubmit}>
              <FormField type='text' name='name' placeholder='Your Name' />
              <FormField type='email' name='email' placeholder='Your Email' />
              <FormMessage rows='4' name='message' placeholder='Your Message' />
              <FormButton type='submit' disabled={isLoading}>
                {' '}
                {isLoading ? 'Loading...' : 'Send Message'}
              </FormButton>
            </Form>
          </ContactFormContainer>
          <ContactContent>
            <ContactText>Monday-Sunday: 5:40am-12:30pm</ContactText>
            <ContactText>37MP+QV9 - Al Hayl Industrial - Fujairah - United Arab Emirates</ContactText>
            <ContactText>LandLine: 096062944</ContactText>
            <ContactText>Mobile: 0528439606</ContactText>
            <ContactText>Email: daraltayeb7@gmail.com</ContactText>
          </ContactContent>
        </ContactSection>
      </FeatureContainer>
    </div>
  );
};

export default Feature;
