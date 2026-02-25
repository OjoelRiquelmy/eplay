import { createGlobalStyle } from 'styled-components'
export const cores = {
    primary: '#333',
    secundary: '#a3a3a3',
    tag: '#10ac84',
    background: '#111',
    text: '#eeeeee',
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    }
    body {
        background-color: ${cores.background};
        color: ${cores.text};
        padding-top: 40px;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`


