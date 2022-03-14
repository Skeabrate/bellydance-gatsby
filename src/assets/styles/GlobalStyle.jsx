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
            background-color: ${({ theme }) => theme.colors.sand};
        }
        ::-webkit-scrollbar-track {
            background-color: ${({ theme }) => theme.colors.white};
        }
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.colors.sand};
            border-radius: 100px;
        }
    }

    body{
        margin: 0;
        font-size: 1.6rem;
		font-family: ${({ theme }) => theme.fontFamily.noto};
    }
	
	button, a{
		cursor: pointer;
	}
`;
