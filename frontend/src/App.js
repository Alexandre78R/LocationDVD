import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import DocumentTitle from 'react-document-title';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Composants/Screen/Home';
import NewsLocationDVD from './Composants/Screen/NewsLocationDVD';
import NotFound from './Composants/Screen/NotFound';

class App extends React.Component {

  render() {
    return (
      <DocumentTitle title='Location de DVD'>
        <Router>
          <Switch>  
            <Route exact path="/" component={Home}/>
            <Route exact path="/new-location-dvd" component={NewsLocationDVD}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </DocumentTitle>
    );
  }
}

export default App;
