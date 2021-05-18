import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import ProjectInfo from '../components/ProjectInfo';
import PageNotFound from '../components/PageNotFound';
import TestPage from '../components/TestPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter = () => (

	<Router>
		<div className="wrapper">
			<Header />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/project/:id'}><ProjectInfo /></Route>
				<Route path={'/testpage'}><TestPage /></Route>
				<Route path={'/*'}><PageNotFound /></Route>
			</Switch>
			<Footer />
		</div>
	</Router>	
);

export default AppRouter;
