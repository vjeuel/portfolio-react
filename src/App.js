import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route path='/portfolio-react/about' exact component={About} />
					<Route path='/portfolio-react/portfolio' component={Portfolio} />
					<Route path='/portfolio-react/contact' component={Contact} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
