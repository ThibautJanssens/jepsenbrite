import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Create from './Create';
// import Passed from './Passed';
import Home from './Home';


const Routes = () => (

          <Switch>
                <Route exact path ='/' component={Home}/>
          </Switch>


)
export default Routes;