import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { ImSpinner9 } from "react-icons/im";
import {IoDocumentTextSharp} from "react-icons/io5";
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
<<<<<<< HEAD
=======
import ReactTooltip from 'react-tooltip';
>>>>>>> main

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '8px' }}>
<<<<<<< HEAD
          <ImSpinner9 size="4rem" /> <span style={{paddingLeft:'10px'}}>Brian Pham</span>
=======
          <ImSpinner9 size="4rem" /> <span style={{paddingLeft:'10px',fontSize:'2rem'}}>Brian Pham</span>
>>>>>>> main
        </a>
      </Link>
    </Div1>
    <Div2 style={{marginTop:"10px"}}>
      <li>
        <Link href="#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3 style={{marginBottom:"0px"}} > 
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
        <IoDocumentTextSharp size="4rem" />
      </SocialIcons>
    </Div3>
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
        <IoDocumentTextSharp size="4rem" />
      </SocialIcons>
    </Div3>
    
    <ReactTooltip place="bottom" effect="solid" backgroundColor="grey"/>
>>>>>>> main
  </Container>
);

export default Header;
