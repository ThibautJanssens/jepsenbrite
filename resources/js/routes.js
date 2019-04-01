import React, { Component } from 'react';
import { Route, Switch, HashRouter} from 'react-dom';
import Create from './Create';
import Home from './Home';

class App extends Component {
render() {
return (
<HashRouter>
<div>
<Switch>
<Route exact path='/Create' component={Create}/>

         </Switch>
      </div>

    </HashRouter>
  )
}

}

export default App;
