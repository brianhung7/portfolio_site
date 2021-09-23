import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '8px' }}>
          <DiCssdeck size="4rem" /> <span>Brian Pham</span>
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
      <SocialIcons href="https://github.com/brianhung7/">
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/brianpham-se/">
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
      <SocialIcons href="mailto:brian_van_pham@yahoo.com">
        <AiOutlineMail size="4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
