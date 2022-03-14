import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before{
        box-sizing: border-box;
        -webkit-font-smothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
		padding: 0;
		margin: 0;
    }
    
    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
        
        *::selection {
            background-color: blue;
        }
        ::-webkit-scrollbar-track {
            background-color: white;
        }
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-thumb {
            background: grey;
            border-radius: 100px;
        }
    }

    body{
        margin: 0;
        font-size: 1.6rem;
    }
	
	button, a{
		cursor: pointer;
	}
`;
