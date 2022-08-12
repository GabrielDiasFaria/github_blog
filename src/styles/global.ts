import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["blue"]};
  }

  body {
    background: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme["base-text"]}; 
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, 'sans-serif';
  }
  
    /* width */
::-webkit-scrollbar {
  width: 10px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${(props) => props.theme["base-profile"]};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.blue};
}

pre{
  background-color: #222222;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 1rem;
  padding: 1rem;
}
`;
