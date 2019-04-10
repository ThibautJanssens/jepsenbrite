import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Create from '../Create';
 import Passed from '../Passed';
 import Register from './Register';
import Home from './Home';
import SpecificEvent from './SpecificEvent';
import Dashboard from './Dashboard';
import Login from './login';
import MyEvents from './myEvents';
import Edit from './Edit';
import Logout from './logout';

const Routes = () => (

          <Switch>
                <Route exact path ='/' component={Home}/>
                <Route exact path ='/Create' component={Create}/>
                <Route exact path="/Event/:id" component={SpecificEvent} />
                <Route exact path='/Dashboard' component={Dashboard} />
                <Route exact path='/myEvents' component={MyEvents} />
                <Route exact path='/Edit/:id' component={Edit} />
                <Route exact path='/logout' component={Logout}/>
                <Route exact path='/Login' component={Login}/>
                <Route exact path='/Passed' component={Passed}/>
                <Route exact path='/Register' component={Register} />
          </Switch>
)
export default Routes;
