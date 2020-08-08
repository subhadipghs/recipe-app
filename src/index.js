import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import App from './App';
import theme from './utils/theme';
import GlobalStyle from './utils/global';

const jsx = (
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
			<GlobalStyle />
		</ThemeProvider>
	</React.StrictMode>
)

const root = document.getElementById('root');

ReactDOM.render(jsx, root);