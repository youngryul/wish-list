import styled, {createGlobalStyle} from "styled-components";
import Country from "./components/CountryForm";
import CountryList from "./components/CountryList";
import CountryForm from "./components/CountryForm";
import {Category} from "./atom";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *{
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    line-height: 1.2;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    padding: 20px;
    max-width: 480px;
    margin: 0 auto;

  }
  a{
    text-decoration: none;
    color: inherit;
  }
`

const Title = styled.h1`
    font-weight: bolder;
    font-size: larger;
    margin-bottom: 10px;
    margin-top: 10px;
`;

function App() {
  return (
      <>
          <GlobalStyle/>
          <Title>내가 가고싶은 나라들</Title>
          <CountryForm />
          <CountryList tag={Category.WANT}/>
          <Title>내가 가본 나라들</Title>
          <CountryList tag={Category.HAVE_BEEN}/>
          <Title>내가 좋아하는 나라들</Title>
          <CountryList tag={Category.LIKE}/>
      </>
  );
}

export default App;
