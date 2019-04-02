import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, HashRouter} from 'react-router-dom';
import Create from './Create';

class App extends Component {
render() {
return (
<HashRouter>
<div>
<Switch>
<Route exact path='/Create' component={Create}/>
<Route exact path='/character/:id' component={character}/>

         </Switch>
      </div>

    </HashRouter>
  )
}

}

export default App;
