import React from 'react'
import styles, {ThemeProvider, createGlobalStyle} from 'styled-components'
import Header from './Header'
import Meta from './Meta';


const theme = {
  red: '#FF0000',
  black: '#393939',
  gray: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidht: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.09)',
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/radnikanext-medium-webfont.woff2');
    font-weitt: normal;
    font-style: normal;
  }
  *, *:before, *:after {
    box-sizing: inharit;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.black};
  }
`

const StyledPage = styles.div`
  background-color: white;
  color: ${props => props.theme.black};
`
const Container = styles.div`
  max-width: ${props => props.theme.maxWidht};
  margin: 0 auto;
  padding: 2rem;
`

const Page = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Container>
          <Meta />
          <Header />
          {children}
        </Container>
      </StyledPage>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default Page

