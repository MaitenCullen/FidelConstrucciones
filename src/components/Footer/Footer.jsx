import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

const Footer = () => {

  const date = new Date();

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Contactanos por cualquiera de estos medios
        </FooterSubHeading>
        <FooterSubText>o dejanos tu mail y te escribimos</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Email' />
          <Button >dejanos tu mail</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Sobre nosotros</FooterLinkTitle>
            <FooterLink to='/services'>Servicios</FooterLink>
            {/* <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink> */}
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contactanos</FooterLinkTitle>
            <FooterLink to='/'>WhatsApp</FooterLink>
            <FooterLink to='/'>fidelcullen@gmail.com</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/home'>
            <SocialIcon />
            Cullen Construcciones
          </SocialLogo>
          <WebsiteRights>Fidel Cullen Construcciones © {date.getFullYear()} </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/home' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/home' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            {/* <SocialIconLink href='/' target='_blank' aria-label='YouTube' >
              <FaYoutube />
            </SocialIconLink> */}
            {/* <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink> */}
            <SocialIconLink href='/home' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;