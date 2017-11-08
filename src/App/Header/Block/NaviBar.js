import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './NaviBar.css'

const NaviBar = () => {

    return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/jazzgiant">Road to Jazz Freak</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">Instruments</NavItem>
                    <NavItem eventKey={2} href="#">Discography</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">About</NavItem>
                    <NavItem eventKey={1} href="/jazzgiant/request/">Request</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

//<NavItem href="#">Request</NavItem>
export default NaviBar
