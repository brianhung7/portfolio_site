import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  ::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
    background-color: #0F1624;
  }

  ::-webkit-scrollbar{
	width: 8px;
	background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb{
	border-radius: 10px;
	background-color: #FFF;
	background-image: -webkit-linear-gradient(top,#945DD6 21%, #2ab0ed 100%);
}

`;

export default GlobalStyles;