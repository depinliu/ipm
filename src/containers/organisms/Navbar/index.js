import React, {useState} from 'react';
// import {NavLink} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';
import { Link } from "react-scroll";
import logo from "../../../assets/logo/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const NavbarMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
    <div className="sticky-top shadow-sm">
        <div className="bg-danger text-white">
            <Container>
                <Row>
                    <Col sm={12}>
                        <small className="float-right"><FontAwesomeIcon icon={faPhone} flip="horizontal" /> 0896 2864 9067</small>
                    </Col>
                </Row>
            </Container>
        </div>
        <Navbar color="white" light expand="md">
            <Container>
            <NavbarBrand href="/">
                <img src={logo} className="p-0" width="200" alt="logo" />
            </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {/* <Link activeClass="active" to="services" spy={false} smooth={true} offset={-83} duration={500} className="nav-item item-menu">
                            <div className="nav-link">Services</div>
                        </Link> */}
                        <Link activeClass="active" to="workshop" spy={false} smooth={true} offset={-83} duration={500} className="nav-item item-menu">
                            <div className="nav-link">Workshop</div>
                        </Link>
                        <Link activeClass="active" to="consultant" spy={false} smooth={true} offset={-83} duration={500} className="nav-item item-menu">
                            <div className="nav-link">Consultant</div>
                        </Link>
                        <Link activeClass="active" to="clients" spy={false} smooth={true} offset={-83} duration={500} className="nav-item item-menu">
                            <div className="nav-link">Clients</div>
                        </Link>
                        <Link activeClass="active" to="contact" spy={false} smooth={true} offset={-83} duration={500} className="nav-item item-menu">
                            <div className="nav-link">Contact</div>
                        </Link>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
    );
};

export default NavbarMenu;