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
          dvdData : [],
        };
    }

    componentWillMount = () => {
        var ctx = this;
        fetch('https://locationdvdbackend.herokuapp.com/dvd/view', {method : "POST", headers : { "Content-Type": "application/json" }})
        .then(function(response){
          return response.json();
        }).then(function(dvds) {
            console.log("props redux", ctx.props.DVDS)
            if (ctx.props.DVDS.length === 0){
                console.log("Fetch dvds", dvds)
                var dvds = dvds.dvdList;

                var dateFormat = function(date){
                    var newDate =  new Date(date)
                    var format = newDate.getDate()+'/'+(newDate.getMonth()+1+"/"+newDate.getFullYear())
                    return format
                }

                var dvdData = dvds.map(dvd => {
                return {
                    name : dvd.name,
                    adresse : dvd.adresse,
                    nameFilm : dvd.nameFilm,
                    dateLocation : dateFormat(dvd.dateLocation),
                    dateLocationEnd : dateFormat(dvd.dateLocationEnd),
                }
                })
                console.log("dvdBdd", dvdData)
                ctx.props.setDVD(dvdData)
                ctx.setState({
                    stop: true,
                });
            } 
        }).catch(function(error) {
          console.log("Fetch error", error);
        });
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
                <td>{message.dateLocationEnd}</td>      
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