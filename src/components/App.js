import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//Components
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";

import theme from "../styles/theme";
import GlobalStyle from "../styles/global";
export default function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/quiz" component={Quiz} />
					<Route>
						<Home />
					</Route>
				</Switch>
			</ThemeProvider>
		</BrowserRouter>
	);
}
