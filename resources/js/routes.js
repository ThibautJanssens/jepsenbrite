import React, { Component } from 'react';
import { Route, Switch, HashRouter, Link} from 'react-router-dom';


class routing extends Component {
    render() {
      return (
        <HashRouter>
          <div>
             <Switch>
                <Route exact path ='/' component={Home}/>
            //   <Route exact path ='/Create/:id' component={Create}/>
               <Route exact path='/Passed' component={Passed}/>
             </Switch>
          </div>

        </HashRouter>
      )
    }
}

export default routing;
