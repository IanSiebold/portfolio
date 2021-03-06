import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/work' component={Work} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
