import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './NaviBar.css'

const NaviBar = () => {

    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Road to Jazz Freak</a>
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
                    <NavItem eventKey={2} href="#">Contact</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NaviBar
