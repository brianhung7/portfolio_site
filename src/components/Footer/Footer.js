import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import {IoDocumentTextSharp} from 'react-icons/io5'

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
<<<<<<< HEAD
=======
import { SectionDivider } from '../../styles/GlobalComponents';
>>>>>>> main

const Footer = () => {
  return (
    <FooterWrapper>
<<<<<<< HEAD
=======
      <SectionDivider/>
>>>>>>> main
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact</LinkTitle>
          <LinkItem href="mailto:brian.texts@gmail.com">brian.texts@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Always learning, improving, and innovating</Slogan>
        </CompanyContainer>
<<<<<<< HEAD
        <SocialIcons href="https://github.com/brianhung7/" title="Github">
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/brianpham-se/" title="LinkedIn">
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
      <SocialIcons href="mailto:brian_van_pham@yahoo.com" title="Email">
        <AiOutlineMail size="4rem" />
      </SocialIcons>
      <SocialIcons href="resume" title="Resume">
=======
        <SocialIcons href="https://github.com/brianhung7/" data-tip="Github"> 
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/brianpham-se/" data-tip="LinkedIn"> 
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
      <SocialIcons href="mailto:brian_van_pham@yahoo.com" data-tip="Email"> 
        <AiOutlineMail size="4rem" />
      </SocialIcons>
      <SocialIcons href="resume" data-tip="Resume"> 
>>>>>>> main
        <IoDocumentTextSharp size="4rem" />
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper >
  );
};

export default Footer;
