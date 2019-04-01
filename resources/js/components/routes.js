import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Create from './Create';
// import Passed from './Passed';
import Home from './Home';


const Routes = () => (
        
          <Switch>
                <Route exact path ='/' component={Home}/>
                {/* <Route exact path ='/Create' component={Create}/>
                <Route exact path='/Passed' component={Passed}/> */}
          </Switch>
      

)
export default Routes;