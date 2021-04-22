import React from 'react';
import Navbar from './components/pages/Home/Navbar';
import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services/Services';
import Products from './components/pages/QuienesSomos/QuienesSomos';
import SignUp from './components/pages/Home/SignUp';
import SignIn from './components/pages/SignIn/SignIn';
import AppRouter from './components/pages/Routers/AppRouter';
import QuienesSomos from './components/pages/QuienesSomos/QuienesSomos';

//--firebase
//Auth
import { FirebaseAppProvider } from 'reactfire';
import fireConfig from './firebase-config';


function App() {
  return (
    <>

<FirebaseAppProvider firebaseConfig={fireConfig}>
      <Router>
     
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/app-router' component={AppRouter} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/quienes-somos' component={QuienesSomos} />
        </Switch>
    
      </Router>
      </FirebaseAppProvider>
     
    </>
  );
}

export default App;
