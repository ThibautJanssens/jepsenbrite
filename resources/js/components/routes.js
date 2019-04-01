import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Create from './Create';
import Passed from './Passed';



const Routes = () => (
        
          <Switch>
                <Route exact path ='/' component={Home}/>
                <Route exact path ='/Create' component={Create}/>
                <Route exact path='/Passed' component={Passed}/> 
          </Switch>
      

)
export default Routes;