import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';
import { ImSpinner9 } from "react-icons/im";
import { IoDocumentTextSharp } from "react-icons/io5";
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import ReactTooltip from 'react-tooltip';

const Header = () => (
  <Container id="navbar" style={{ position: 'fixed', top: '0', left: '0', zIndex: '2', backgroundColor: 'rgba(15, 22, 36, 0.9)', boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.5)', transition: 'top .3s', width: '100%', backdropFilter: 'blur(10px)', background: 'rgb(15, 22, 36)' }}>
    {/* <Container id="navbar" style={{position:'fixed',top:'0', transition:'top .3s', zIndex:'2'}}>  */}
    {/* <Container> */}
    <Div1 style={{ marginLeft: '2rem' }}>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '8px' }}>
          <ImSpinner9 size="4rem" /> 
          <span style={{ paddingLeft: '2rem', fontSize: '2rem' }}>Brian Pham</span>
        </a>
      </Link>
    </Div1>
    <Div2 style={{ marginTop: "10px" }}>
      <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
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
    </Div2>
    <Div3 style={{ marginBottom: "0px" }} >
      <SocialIcons href="https://github.com/brianhung7/" data-tip="Github" target="_blank">
        <AiFillGithub size="4rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/brianpham-se/" data-tip="LinkedIn" target="_blank">
        <AiFillLinkedin size="4rem" />
      </SocialIcons>
      <SocialIcons href="mailto:brianpham.dev@gmail.com" data-tip="Email" >
        <AiOutlineMail size="4rem" />
      </SocialIcons>
      <SocialIcons href="/BrianPhamResume.pdf" data-tip="Resume" target="_blank">
        <IoDocumentTextSharp size="4rem" />
      </SocialIcons>
    </Div3>

    {/* <ReactTooltip  place="bottom" effect="solid" backgroundColor="grey"/> */}
  </Container>
);

export default Header;
