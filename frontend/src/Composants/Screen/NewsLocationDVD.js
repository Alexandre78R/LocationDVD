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

class NewsLocationDVD extends React.Component {
    constructor() {
        super();
        this.state = {
            openAlert : false,
            messageError : "",
            name : "",
            adresse : "",
            nameFilm : "",
            startDateLocation: new Date(),
            startDateLocationEnd: new Date(),
        };
    }

    handleChangeLocation = date => {
        this.setState({
          startDateLocation: date
        });
    };

    handleChangeLocationEnd = date => {
        this.setState({
          startDateLocationEnd: date
        });
    };

    handleClick = () => {

        if (this.state.name === ""){
            this.setState({
                openAlert: true,
                messageError : "Vous n'avez pas rempli le champ du nom !"
            });
        }else if(this.state.name.length < 4){
            this.setState({
                openAlert: true,
                messageError : "Vous devez écrire minimun 4 caractère pour le champ du nom !"
            });
        }else if(this.state.adresse === ""){
            this.setState({
                openAlert: true,
                messageError : "Vous n'avez pas rempli le champ de l'adresse !"
            });
        }else if(this.state.adresse.length < 4){
            this.setState({
                openAlert: true,
                messageError : "Vous devez écrire minimun 4 caractère pour le champ de l'adresse !"
            });
        }else if(this.state.nameFilm === ""){
            this.setState({
                openAlert: true,
                messageError : "Vous n'avez pas rempli le champ du nom du film !"
            });
        }else{
            console.log("Nom", this.state.name)
            console.log("Adresse", this.state.adresse)
            console.log("Nom du film", this.state.nameFilm)
            console.log("Date Location", this.state.startDateLocation)
            console.log("Date Fin de location", this.state.startDateLocationEnd)
            this.setState({
                openAlert: false,
                messageError : ""
            });
        }
    }

  render() {   
    return (
        <div>
          <NavBar/>
          <Container className="page">
            <Alert color="danger" isOpen={this.state.openAlert}>
                {this.state.messageError}
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
                        selected={this.state.startDateLocation}
                        onChange={this.handleChangeLocation}
                    />
                </FormGroup>
                <Label for="exampleDateLocationEnd">Date fin de la Location :</Label>
                <FormGroup>
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={this.state.startDateLocationEnd}
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

export default NewsLocationDVD;