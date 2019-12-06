import React from 'react';
import {
  Container,
  Alert,
} from 'reactstrap';
import NavBar from '../NavBar'

class Home extends React.Component {

  render() { 
    return (
        <div>
          <NavBar/>
          <Container className="page">
            <Alert color="danger">
                <h1 className="alert-heading center-message-error-dvd">Cette page n'existe pas !</h1>
            </Alert>
          </Container>
        </div>
    );
  }
}

export default Home;