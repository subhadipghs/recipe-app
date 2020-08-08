import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Layout from './components/UI/Layout/Layout';
import Home from './pages/Home/Home';


function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" component={Home} exact />
			</Switch>
		</Layout>
	)
}

export default App;
