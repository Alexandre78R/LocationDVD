import React from 'react';
import {
  Container,
  Row,
  Table,
  Alert,
} from 'reactstrap';
import NavBar from '../NavBar'
import {connect} from 'react-redux';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          dvdData : [ 
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
            {name : "Nom", adresse : "adresse", nameFilm : "Nom du film", dateLocation : "jj/mm/yyyy", dateFin : "jj/mm/yyyy"},
         ],
        };
    }

    componentWillMount = () => {

        var dvds = this.state.dvdData;

        var dvdData = dvds.map(dvd => {
        return {
        name : dvd.name,
        adresse : dvd.adresse,
        nameFilm : dvd.nameFilm,
        dateLocation : dvd.dateLocation,
        dateFin : dvd.dateFin,
        }
        })
        console.log("dvdBdd", dvdData)

        this.props.setDVD(dvdData)

    }

  render() { 
    var dvdData = this.props.DVDS.map(
        (message, i) => {
          return (
              <tr key={i}>
                <td>{message.name}</td>
                <td>{message.adresse}</td>
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
                      <th>adresse</th>
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

function mapStateToProps(state) {
    // console.log("DVDs::::",state.Messages) 
    console.log("state", state)
    return ({
    DVDS: state.DVDS,
    })
}

function mapDispatchToProps(dispatch) {
    return {
        setDVD(dvds) { 
            dispatch({
            type: 'setDVD',
            dvds : dvds,
            }) 
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);