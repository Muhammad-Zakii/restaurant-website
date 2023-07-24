import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>DAR-UL-TAYEB RESTAURANT & SWEETS</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/profile.php?id=100094902678570&mibextid=ZbWKwL' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://instagram.com/daraltayeb7?igshid=MzNlNGNkZWQ4Mg==' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://wa.me/0567476148' target='_blank' rel='noopener noreferrer'>
                <FaWhatsapp />
              </SocialIconLink>
              {/* <SocialIconLink href='//www.twitter.com/briandesignz' target='_blank' aria-label='Twitter' rel='noopener noreferrer'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
