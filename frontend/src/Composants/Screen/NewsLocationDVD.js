import React from 'react';
import NavBar from '../NavBar'
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from 'reactstrap';
import DatePicker from "react-datepicker";
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux';

class NewsLocationDVD extends React.Component {
    constructor() {
        super();
        this.state = {
            openAlertRed : false,
            openAlertBlue : false,
            messageError : "",
            messageOK : "",
            name : "",
            adresse : "",
            nameFilm : "",
            redirect : false,
            dateLocation: new Date(),
            dateLocationEnd: new Date(),
        };
    }

    handleChangeLocation = date => {
        this.setState({
            dateLocation: date
        });
    };

    handleChangeLocationEnd = date => {
        this.setState({
            dateLocationEnd: date
        });
    };

    handleClick = () => {

        if (this.state.name === ""){
            this.setState({
                openAlertRed: true,
                messageError : "Vous n'avez pas rempli le champ du nom !"
            });
        }else if(this.state.name.length < 4){
            this.setState({
                openAlertRed: true,
                messageError : "Vous devez écrire minimun 4 caractère pour le champ du nom !"
            });
        }else if(this.state.adresse === ""){
            this.setState({
                openAlertRed: true,
                messageError : "Vous n'avez pas rempli le champ de l'adresse !"
            });
        }else if(this.state.adresse.length < 4){
            this.setState({
                openAlertRed: true,
                messageError : "Vous devez écrire minimun 4 caractère pour le champ de l'adresse !"
            });
        }else if(this.state.nameFilm === ""){
            this.setState({
                openAlertRed: true,
                messageError : "Vous n'avez pas rempli le champ du nom du film !"
            });
        }else{
            console.log("Nom", this.state.name)
            console.log("Adresse", this.state.adresse)
            console.log("Nom du film", this.state.nameFilm)
            console.log("Date Location", this.state.dateLocation)
            console.log("Date Fin de location", this.state.dateLocationEnd)

            var dvd = {
                name: this.state.name,
                adresse: this.state.adresse,
                nameFilm: this.state.nameFilm,
                dateLocation : this.state.dateLocation,
                dateLocationEnd : this.state.dateLocationEnd,
              }
            var ctx = this;
            fetch('https://locationdvdbackend.herokuapp.com/dvd/add', {method : "POST", headers : { "Content-Type": "application/json" }, body : JSON.stringify(dvd)})
            .then(function(response){
              return response.json();
            }).then(function(dvds) {
                console.log("dvds", dvds.dvd)
                ctx.setState({
                    openAlertRed: false,
                    openAlertBlue : true,
                    messageError : "",
                    messageOK : "Chargement en cours...",
                });

                var dateFormat = function(date){
                    var newDate =  new Date(date)
                    var format = newDate.getDate()+'/'+(newDate.getMonth()+1+"/"+newDate.getFullYear())
                    return format
                }

                ctx.props.addDVD(dvd.name, dvd.adresse, dvd.nameFilm, dateFormat(dvd.dateLocation), dateFormat(dvd.dateLocationEnd))

                setTimeout(function() {
                    ctx.setState({
                        openAlertRed: false,
                        openAlertBlue : false,
                        messageError : "",
                        messageOK : "",
                        redirect : true,
                    });
                }, 5000);  
            }).catch(function(error) {
                console.log("Fetch error", error);
                ctx.setState({
                    openAlertRed: true,
                    openAlertBlue : false,
                    messageError : "Désolé notre serveur ne répond pas..."
                });
            });
        }
    }

  render() {   
    const { redirect } = this.state;
    if (redirect === true) {
      return <Redirect to='/'/>;
    }
    return (
        <div>
          <NavBar/>
          <Container className="page">
            <Alert color="danger" isOpen={this.state.openAlertRed}>
                {this.state.messageError}
            </Alert>
            <Alert color="info" isOpen={this.state.openAlertBlue}>
                {this.state.messageOK}
            </Alert>
            <Form>
                <FormGroup>
                    <Label for="exampleNom">Nom :</Label>
                    <Input type="text" id="exampleNom" placeholder="Entrer votre nom dans le champ de saisie" onChange={event=>this.setState({name:event.target.value})} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAdresse">Adresse :</Label>
                    <Input type="text" id="exampleAdresse" placeholder="Entrer votre adresse dans le champ de saisie" onChange={event=>this.setState({adresse:event.target.value})}/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleNameFilm">Nom du Film :</Label>
                    <Input type="text" id="exampleNameFilm" placeholder="Entrer le nom du film dans le champ de saisie" onChange={event=>this.setState({nameFilm:event.target.value})}/>
                </FormGroup>
                <Label for="exampleDateLocation">Date location :</Label>
                <FormGroup>
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={this.state.dateLocation}
                        onChange={this.handleChangeLocation}
                    />
                </FormGroup>
                <Label for="exampleDateLocationEnd">Date fin de la Location :</Label>
                <FormGroup>
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={this.state.dateLocationEnd}
                        onChange={this.handleChangeLocationEnd}
                    />
                </FormGroup>
                <Button color="success" onClick={this.handleClick}>Enregistrer la location du DVD</Button>
            </Form>
          </Container>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        addDVD(name, adresse, nameFilm, dateLocation, dateLocationEnd) { 
            dispatch({
            type: 'addDVD',
            name : name,
            adresse : adresse,
            nameFilm : nameFilm,
            dateLocation : dateLocation,
            dateLocationEnd : dateLocationEnd,
            }) 
        },
    }
}

export default connect(null, mapDispatchToProps)(NewsLocationDVD);