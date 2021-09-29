import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import {IoDocumentTextSharp} from 'react-icons/io5'

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { SectionDivider } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionDivider/>
      <LinkList>
        <LinkColumn>
          <LinkTitle style={{fontSize:'1.5rem'}}>Contact</LinkTitle>
          <LinkItem href="mailto:brian.texts@gmail.com" style={{fontSize:'2.5rem'}}>brian.texts@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Always learning, improving, and innovating</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/brianhung7/" data-tip="Github" target="_blank"> 
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/brianpham-se/" data-tip="LinkedIn" target="_blank"> 
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
      <SocialIcons href="mailto:brian_van_pham@yahoo.com" data-tip="Email"> 
        <AiOutlineMail size="4rem" />
      </SocialIcons>
      <SocialIcons href="/BrianPhamResume.pdf" data-tip="Resume" target="_blank"> 
        <IoDocumentTextSharp size="4rem" />
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper >
  );
};

export default Footer;
