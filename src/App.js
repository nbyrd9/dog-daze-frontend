import React from 'react';
import { BrowserRouter as Router, Route
 } from "react-router-dom";
 import Home from './components/Home'
 import NavBar from './components/NavBar';
 import Dogs from './components/Dogs/Dogs';
 import Resources from './components/Resources';
 import DogInfo from './components/Dogs/DogInfo'

class App extends React.Component {
  render() {  
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/dogs" render={props => <Dogs {...props}/>}/>
            <Route exact path="/dogInfo" component={DogInfo} />
            <Route exact path="/resources" component={Resources} />
            </div>
          </Router>
      </div> 
    );
  }
}

export default App;