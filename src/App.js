import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/products' component={Products} />
          <Route path='/contactus' component={ContactUs} />
          
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;