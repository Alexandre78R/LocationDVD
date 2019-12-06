import React from 'react';
import {
  Container,
  Row,
  Table,
  Alert,
} from 'reactstrap';
import NavBar from '../NavBar'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          dvdData : [ 
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", Adresse : "Adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
         ],
        };
    }

  render() { 
    var dvdData = this.state.dvdData.map(
        (message, i) => {
          return (
              <tr key={i}>
                <td>{message.name}</td>
                <td>{message.Adresse}</td>
                <td>{message.nameFilm}</td>
                <td>{message.dateLocation}</td>   
                <td>{message.dateFin}</td>      
              </tr>
          )
        }
    );    
    return (
        <div>
          <NavBar/>
          <Container className="page">
            <Row>
            <Table>
                {
                  dvdData.length === 0 ? 
                    <div>
                      <Alert color="danger">
                        <h1 className="alert-heading center-message-error-dvd">Aucune Location DVD est disponible pour l'instant !</h1>
                      </Alert>
                    </div>
                  :
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Adresse</th>
                      <th>Nom du film</th>
                      <th>Date Location</th>
                      <th>Date Fin</th>
                    </tr>
                  </thead>
                }
                {
                  dvdData.length === 0 ?
                  null
                  :
                  <tbody>
                  {dvdData}
                  </tbody>
                }
              </Table>
            </Row>
          </Container>
        </div>
    );
  }
}

export default Home;