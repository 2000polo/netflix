import React from 'react';
import Home from './Pages/Home/Home';
import Landing from './Pages/Landing/Landing';
import Signin from './Pages/Signin/Signin';
import View from './Pages/View/View';
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Router>
        <Route exact path = '/'>
          <Landing />
        </Route>
        <Route path = '/home'>
          <Home />
        </Route>
        <Route path = '/signin'>
          <Signin />
        </Route>
        <Route path = '/view'>
          <View />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
