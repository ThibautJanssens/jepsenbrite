import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, HashRouter} from 'react-router-dom';
import Header from './Header';
import Create from './Create';
import Passed from './Passed';


class App extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <Header/>
             <Switch>
                <Route exact path ='/' component={Home}/>
               <Route exact path ='/Create/:id' component={Create}/>
               <Route exact path='/Passed' component={Passed}/>
             </Switch>
          </div>

        </HashRouter>
      )
    }
}

export default App;