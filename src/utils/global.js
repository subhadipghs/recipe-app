import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Metropolis", serif;
		-webkit-font-smoothing: antialias;
		-moz-osx-font-smoothing: grayscale;
	}

	:root {
		--white-color: ${props => props.theme.colors.whiteColor};
		--black-color: ${props => props.theme.colors.blackColor};
		--ultimate-green: ${props => props.theme.colors.ultimateGreen};
		--ultimate-green-theme: ${props => props.theme.colors.ultimateGreenTheme};
		--main-background: ${props => props.theme.colors.mainBackground};
		--box-shadow: ${props => props.theme.utils.boxShadow};
		--border-radius: ${props => props.theme.utils.borderRadius};
	}

	html {
		font-size: 16px;
		font-weight: 400;
		box-sizing: border-box;
	}	

	a, button {
		cursor: pointer;
		&:focus {
			outline: none;
		}
	}
	
	code {
		font-family: "Monaco", "Consolas", "Courier Prime", "Source Code Pro", monospace;
	}

`;
export default GlobalStyle;