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
            width: 14px;
            height: 8px;
        }
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(0deg, rgba(153,138,116,1) 0%, rgba(219,196,161,1) 50%);
            border-radius: 100px;
			border: 3px solid ${({ theme }) => theme.colors.white};
			background-clip: padding-box;
        }
    }

    body, button, a{
        font-size: ${({ theme }) => theme.fontSize.paragraph};
		font-family: ${({ theme }) => theme.fontFamily.noto};
    }
	
	button, a{
		cursor: pointer;
	}

	h2, h3, h4, h5, h6{
		font-size: ${({ theme }) => theme.fontSize.paragraph};
        margin-bottom: 0.6rem;

		${({ theme }) => theme.mq.desktop} {
            font-size: 1.8rem;
            margin-bottom: 1rem;
    	}
	}
`;
