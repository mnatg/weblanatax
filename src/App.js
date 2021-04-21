import React from 'react';
import Navbar from './components/pages/Home/Navbar';
import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/Home/SignUp';
import SignIn from './components/pages/SignIn/SignIn';



function App() {
  return (
    <>


      <Router>
     
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
    
      </Router>

     
    </>
  );
}

export default App;
