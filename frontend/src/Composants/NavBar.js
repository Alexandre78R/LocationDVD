import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, 
} from 'reactstrap';
import { Link } from "react-router-dom";

class NavBar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false,
        };
      }

      toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
    });
    }

  render() {
    return (
        <div>
            <Navbar color="dark" dark expand="md">
            <NavbarBrand className="titleNavBar"><Link className="titleNavBar" to={'/'}>Location DVD</Link></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink className="linkNavBar" ><Link className="linkNavBar" to={'/new-location-dvd'}>Ajouter une Location DVD</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="linkNavBar" href="https://github.com/Alexandre78R/LocationDVD">Code Source (GitHub)</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
    );
  }
}

export default NavBar;