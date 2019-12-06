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
            dateLocation: new Date(),
            dateLocationEnd: new Date(),
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

  render() {   
    return (
        <div>
          <NavBar/>
          <Container className="page">
            <Form>
                <FormGroup>
                    <Label for="exampleNom">Nom :</Label>
                    <Input type="text" id="exampleNom" placeholder="Entrer votre nom dans le champ de saisie" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAdresse">Adresse :</Label>
                    <Input type="text" id="exampleAdresse" placeholder="Entrer votre adresse dans le champ de saisie"/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleNameFilm">Nom du Film :</Label>
                    <Input type="text" id="exampleNameFilm" placeholder="Entrer le nom du film dans le champ de saisie"/>
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

export default NewsLocationDVD;