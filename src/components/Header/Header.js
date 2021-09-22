import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom:'20' }}>
        <DiCssdeck size="3rem" /> <Span>Brian Pham</Span>
      </a>
    </Link>
  </Div1>
  <Div2>
  <li>
      <Link href="#projects">
        <NavLink>
          Projects
        </NavLink>
      </Link>
    </li>
    <li>
      <Link href="#technologies">
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
  <Div3>
    <SocialIcons href="github.com">
      <AiFillGithub size="3 rem"/>
    </SocialIcons>
    <SocialIcons href="linkedin.com">
      <AiFillLinkedin size="3 rem"/>
    </SocialIcons>
    <SocialIcons href="brian_van_pham@yahoo.com">
      <AiOutlineMail size="3 rem"/>
    </SocialIcons>
  </Div3>
</Container >
);

export default Header;
