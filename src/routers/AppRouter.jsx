import React from 'react';
import Navbar from '../components/pages/Home/Navbar';
import Home from '../components/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QueHacemos from '../components/pages/QueHacemos/QueHacemos';
import Products from '../components/pages/QuienesSomos/QuienesSomos';
import SignUp from '../components/pages/SignIn/SignUp';
import SignIn from '../components/pages/SignIn/SignIn';
import QuienesSomos from '../components/pages/QuienesSomos/QuienesSomos';
import EmpiezaGratis from '../components/pages/EmpiezaGratis/EmpiezaGratis';
import EmpiezaGratisVideollamada from '../components/pages/EmpiezaGratis/EmpiezaGratisVideoLlamada';
import VideoCall from '../components/pages/Videollamada/VideoCall';
import Loading from '../components/loading/loadingEmotic';
import Index from '../components/pages/Tax/Index';


//--firebase
//Auth
import { FirebaseAppProvider } from 'reactfire';
import fireConfig from '../firebase-config';
import { useUser } from 'reactfire';
import {
  TaxController
} from '../components/pages/Tax/Index';

import {
 preloadScript
} from 'opentok-react';

function AppRouter() {
  var user = useUser();
  

  return (
   

<FirebaseAppProvider firebaseConfig={fireConfig}>
      <Router>
     
        <Navbar user={user} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/que-hacemos' component={QueHacemos} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/quienes-somos' component={QuienesSomos} />
          <Route path='/empieza-gratis' component={EmpiezaGratis} />
          <Route path='/empieza-gratis-videollamada/'  component={EmpiezaGratisVideollamada} />
          <Route path="/video-call"  component={VideoCall}/>
          <Route path='/documents' component={Index} />
        </Switch>
      </Router>
      </FirebaseAppProvider>
     
 
  );
}

export default AppRouter;