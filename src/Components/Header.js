import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from "./Picsart.png"
import {BrowserRouter as Router, Route, Routes,  Link} from "react-router-dom";
import Home from "../Pages/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Sounds from "../Pages/Sounds";
import Education from "../Pages/Education";
import Basket from "../Pages/Basket";

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed={'top'} collapseOnSelect expand={"md"} bg="black" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height={30}
                                width={30}
                                className={"d-inline-block align-top"}
                                alt={'logo'}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                {/*<Nav.Link href="/"> Home </Nav.Link>*/}
                                <Nav.Link href="/gallery"> Gallery </Nav.Link>
                                <Nav.Link href="/sounds"> Sounds </Nav.Link>
                                <Nav.Link href="/education"> Education </Nav.Link>
                                <Nav.Link href="/basket"> Basket </Nav.Link>
                            </Nav>
                            ? </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/gallery' element={<Gallery/>}/>
                        <Route path='/sounds' element={<Sounds/>}/>
                        <Route path='/education' element={<Education/>}/>
                        <Route path='/basket' element={<Basket/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}

