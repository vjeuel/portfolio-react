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
					<Route exact path='/' component={About} />
					<Route path='/portfolio' component={Portfolio} />
					<Route path='/contact' component={Contact} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
