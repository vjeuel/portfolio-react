import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
   return (
      <div className="App">
         <Navbar />
         <Switch>
            <Route path="/about">
               <About />
            </Route>
            <Route path="/portfolio">
               <Portfolio />
            </Route>
            <Route path="/contact">
               <Contact />
            </Route>
         </Switch>
      </div>
   );
}

export default App;
