import React, { useState } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Top extends React.Component {

    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render () {
        const { sign_in_route, signed_in, sign_out_route } = this.props
        return(
            <React.Fragment>
                {signed_in &&
                <Navbar className="navbar navbar-expand-md navbar-collapse-xs navbar-dark bg-primary">
                <NavbarBrand href="/">Trip Planner</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/trips/">Trips</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/pasttrips">Past Trips</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/newtrip">Add New Trip</NavLink>
                    </NavItem>
                    </Nav>
                    <Button className="btn btn-secondary" href={sign_out_route}>Sign Out</Button>
                </Collapse>
                </Navbar>
                }
                {!signed_in &&
                    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" light expand="md">
                    <NavbarBrand href="/">Trip Planner</NavbarBrand>
                        <Nav className="mr-auto" navbar>
                        </Nav>
                        <Button className="btn btn-secondary" href={sign_in_route}>Sign In</Button>
                    </Navbar>
                }
          </React.Fragment>
        )
    }
}

export default Top;