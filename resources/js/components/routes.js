import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Create from '../Create';
 import Passed from '../Passed';
 import Register from './Register';
import Home from './Home';
import SpecificEvent from './SpecificEvent';

const Routes = () => (

          <Switch>
                <Route exact path ='/' component={Home}/>
                <Route exact path ='/Create' component={Create}/>
                <Route exact path="/Event/:id" component={SpecificEvent} />
                <Route exact path='/Passed' component={Passed}/>
                <Route exact path='/Register' component={Register} />
          </Switch>
)
export default Routes;
