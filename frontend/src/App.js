import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Composants/Screen/Home';
import NotFound from './Composants/Screen/NotFound';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>  
          <Route exact path="/" component={Home}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
