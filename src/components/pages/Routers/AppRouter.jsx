// React
import React from 'react';
// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// Components
import { Grid } from '@material-ui/core';

// Pages
import SignIn from '../SignIn/SignIn';

// Auth
import { useUser } from 'reactfire';


const { innerHeight: height } = window;

function AppRouter() {
  var user = useUser();
console.log("usuario: ",user.data);
  return (
    <Router>
      <Switch>
        {user.data ?
          <>
            
              <div>
                <h1>ingreso exitoso</h1>
              </div>
            
          </>
          :
          <Route path="/sign-in" component={SignIn} />
        }
      </Switch>

    </Router>
  );
}

export default AppRouter;