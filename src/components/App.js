import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//Components
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";

import theme from "../styles/theme";
import GlobalStyle from "../styles/global";
export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyle />
				<Route path="/" exact component={Home} />
				<Route path="/quiz" component={Quiz} />
			</BrowserRouter>
		</ThemeProvider>
	);
}
