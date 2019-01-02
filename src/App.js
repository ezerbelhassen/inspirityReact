import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBContainer,  } from "mdbreact";
import Main from './components/Main';

class App extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });
  render() {
    const overlay = (
      <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.handleTogglerClick} />
    );
    return (
      
      <div>


        <Router>
<div id="apppage">
<MDBNavbar color="unique-color" dark expand="md" fixed="top" scrolling>
  <MDBContainer>
    <MDBNavbarBrand>
      <strong className="white-text loggo">INSPIRITY</strong>
    </MDBNavbarBrand>
    <MDBNavbarToggler onClick={this.handleTogglerClick} />
    <MDBCollapse isOpen={this.state.collapsed} navbar>
      <MDBNavbarNav left>
        <MDBNavItem active>
          <MDBNavLink to="/BlogPage">Home</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/Gallery">Gallery</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/Stories">Stories</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/Quotes">Quotes</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/Contact">Contact</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink to="https://www.facebook.com/ezer.belhassen16">
            <MDBIcon icon="facebook" />
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="!#">
            <MDBIcon icon="twitter" />
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="!#">
            <MDBIcon icon="instagram" />
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>

    </MDBCollapse>
  </MDBContainer>
</MDBNavbar>
{this.state.collapsed && overlay}
</div>

</Router>
<Main />

      </div>
      
      
    );
  }
}

export default App;
