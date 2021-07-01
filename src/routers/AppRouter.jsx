import React from 'react';
import Home from '../components/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QueHacemos from '../components/pages/QueHacemosV2/QueHacemos';
import Products from '../components/pages/QuienesSomos/QuienesSomos';
import SignUp from '../components/pages/SignIn/SignUp';
import SignIn from '../components/pages/SignIn/SignIn';
import QuienesSomos from '../components/pages/QuienesSomos/QuienesSomos';
import EmpiezaGratis from '../components/pages/EmpiezaGratis/EmpiezaGratis';
import EmpiezaGratisVideollamada from '../components/pages/EmpiezaGratis/EmpiezaGratisVideoLlamada';
import VideoCall from '../components/pages/Videollamada/VideoCall';
import VideoCallConsultor from '../components/pages/Videollamada/VideoCallConsultor';
import Loading from '../components/loading/loadingEmotic';
import Tax from '../components/pages/Tax/index';
import Taxes from '../components/pages/Taxes/index';
import Lobby from '../components/pages/Lobby/index';


//--firebase
//Auth
import { FirebaseAppProvider } from 'reactfire';
import fireConfig from '../firebase-config';
import { useUser } from 'reactfire';

import {
  preloadScript
} from 'opentok-react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './../themeConfig'
import ContainerGeneral from '../components/pages/Home/ContainerGeneral';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import BackToTop from '../components/pages/Home/BackToTop';

function AppRouter() {
  var user = useUser();

  return (
    <FirebaseAppProvider firebaseConfig={fireConfig}>
      <Router>
        <ThemeProvider theme={theme}>
          <ContainerGeneral />
        </ThemeProvider>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/que-hacemos' component={QueHacemos} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/quienes-somos' component={QuienesSomos} />
          <Route path='/empieza-gratis' component={EmpiezaGratis} />
          <Route path='/empieza-gratis-videollamada/' component={EmpiezaGratisVideollamada} />
          <Route path="/video-call" component={VideoCall} />
          <Route path="/video-call-consultor" component={VideoCallConsultor} />
          <Route path='/tax' component={Tax} />
          <Route path='/taxes' component={Taxes} />
          <Route path='/lobby' component={Lobby} />
        </Switch>
          <BackToTop>
            <Fab color="green" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </BackToTop>
      </Router>
    </FirebaseAppProvider>


  );
}

export default AppRouter;