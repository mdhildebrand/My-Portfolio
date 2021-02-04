import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import Projects from '../components/Projects';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (

	<Router>
		<div className="wrapper">
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/project/:id'}><Projects /></Route>
				<Route path={'/*'}><PageNotFound /></Route>
			</Switch>
		</div>
	</Router>	
);

export default AppRouter;
