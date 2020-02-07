import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Topbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Trip Planner</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
		  {signed_in &&
			  
			   <div>
            <NavItem>
              <NavLink href="/trips">Trips</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pasttrips">Past Trips</NavLink>
            </NavItem>
			<NavItem>
              <NavLink href="newtrip">Add New Trip</NavLink>
            </NavItem>
			</div>
		}
          </Nav>
		  {!signed_in &&
			<div>
			  <NavLink href={sign_in_route}>Sign In</NavLink>
			</div>
	  }
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Topbar;
