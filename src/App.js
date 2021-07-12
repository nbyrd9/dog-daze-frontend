import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home'
import NavBar from './components/NavBar';
import Dogs from './components/Dogs/Dogs';
import Resources from './components/Resources';
import DogInfo from './components/Dogs/DogInfo'
import About from './components/About'

 
function App (){  
    return (
      <div className="App">
        <Switch>
          <Router>
            <div>
              <NavBar />
              <Route exact path="/" component={Home} />
              <Route path="/dogs" render={props => <Dogs {...props}/>}/>
              <Route exact path="/dogInfo" component={DogInfo} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/about" component={About} />
              </div>
            </Router>
          </Switch>
      </div> 
    );
}

export default App;