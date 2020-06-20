import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class MainMenu extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" onSelect={this.props.onSelectMenuElement}>
            <Nav.Link disabled={false} eventKey="open">Open</Nav.Link>
            <Nav.Link disabled={false} eventKey="properties">Properties</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainMenu;
