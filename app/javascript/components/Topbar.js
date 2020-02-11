import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Button } from 'reactstrap';

const Topbar = (props) => {

  return (
    <div>
		{props.signed_in &&
		  <Navbar className="navbar navbar-expand-md navbar-collapse-xs navbar-dark bg-primary">
	        <NavbarBrand href="/">Trip Planner</NavbarBrand>
	          <Nav className="mr-auto" navbar>
	            <NavItem>
	            	<NavLink href="/trips">Trips</NavLink>
	            </NavItem>
	            <NavItem>
	            	<NavLink href="/pasttrips">Past Trips</NavLink>
	            </NavItem>
				<NavItem>
	            	<NavLink href="/newtrip">Add New Trip</NavLink>
	            </NavItem>
	          </Nav>
				<Button className="btn btn-secondary" href={props.sign_out_route}>Sign Out</Button>
	      </Navbar>
		}
		{!props.signed_in &&
			<Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" light expand="md">
			  <NavbarBrand href="/">Trip Planner</NavbarBrand>
				<Nav className="mr-auto" navbar>
		        </Nav>
				<Button className="btn btn-secondary" href={props.sign_in_route}>Sign In</Button>
		    </Navbar>
	  	}
    </div>
  );
}

export default Topbar;
