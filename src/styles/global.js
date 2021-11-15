import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      transition:.3s;
    }
    ::-webkit-scrollbar-thumb {
      background: #2FDA2B;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: #fff;
      border-radius: 10px;
    }
  }

  body {
    background: #232623;
    color: #fff;
  }

  body,
  input,
  textarea,
  button {
    font: 500 1.3rem 'Source Sans Pro', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  
  ul{
    list-style:none;
  }

  img {
    width: 100%;
    max-width: 100%;
  }
`