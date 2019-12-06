import React from 'react';
import {
  Container,
  Row,
} from 'reactstrap';

class Home extends React.Component {

  render() { 
    return (
        <div>
          <Container className="page">
            <Row>
              <h1>Home</h1>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Home;