import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact</LinkTitle>
          <LinkItem href="mailto:brian.texts@gmail.com">brian.texts@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Always enhancing, pioneering, and innovating</Slogan>
        </CompanyContainer>
        <SocialIcons href="github.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="brian_van_pham@yahoo.com">
          <AiOutlineMail size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper >
  );
};

export default Footer;
