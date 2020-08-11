import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import GlobalStyle from "./utils/global";
import App from "./App";
import "./index.css";

const jsx = (
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
				<GlobalStyle />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);

const root = document.getElementById("root");

ReactDOM.render(jsx, root);

