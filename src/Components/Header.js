import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "./logo3.jpg"
export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand={"md"} bg="black" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height={90}
                            width={90}
                            className={"d-inline-block align-top"}
                             alt={'logo'}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/gallery"> Gallery </Nav.Link>
                            <Nav.Link href="/sounds"> Sounds </Nav.Link>
                            <Nav.Link href="/education"> Education </Nav.Link>
                            <Nav.Link href="/basket"> Basket </Nav.Link>
                        </Nav>
?                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

