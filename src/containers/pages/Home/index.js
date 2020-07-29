import React from 'react';
import { Button, Container, Row, Col, Jumbotron} from 'reactstrap'
import {Link} from 'react-scroll'
import NavbarMenu from '../../organisms/Navbar';
// import NavbarMenu from '../../organisms/Navbar/index.txt';
import Consultant from '../Consultant';
import Footer from '../../organisms/Footer';
import Clients from '../Clients';
import Contact from '../Contact';
import Services from '../Services';
// import Workshop from '../Workshop';
import ScrollAnimation from 'react-animate-on-scroll';

const Home = (props) => {
    return (
        <div>
            <NavbarMenu />
            <div className="bg-secondary text-white information" id="top">
                <Container>
                    <Row className="">
                    <Col sm={6} className="">
                    <ScrollAnimation animateIn="fadeInLeft" duration={1}>
                        <h1 className="display-5"><b>Professional Business Consulting</b></h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInRight" duration={1}>
                        <p className="lead">Is a consulting firm dedicated to help its clients achieving their peak performance since 2006.</p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" duration={1}>
                        <Link activeClass="active-item" to="services" spy={true} smooth={true} offset={-70} duration={500}>
                            <Button color="light" className="rounded-pill p-2 mt-2"><span className="p-3"><b>Read More</b></span></Button>
                        </Link>
                        <Link activeClass="active-item" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                            <Button color="danger" className="ml-2 rounded-pill p-2 mt-2"><span className="p-3"><b>Contact Us</b></span></Button>
                        </Link>
                    </ScrollAnimation>
                    </Col>
                    </Row>
                </Container>
            </div>

            <ScrollAnimation animateIn="bounceIn" duration={1}>
                <Services />
            </ScrollAnimation>

            {/* <div className="bg-danger">
                <Workshop />
            </div> */}

            <Consultant />
            
            <Clients />
            
            <Jumbotron className="subscribe text-white text-center font-italic">
                <Container>
                <h3 className="display-5"><b>“There is no such thing as management. There is only change management.”</b></h3>
                </Container>
            </Jumbotron>
            <Contact />
            <div className="mt-5">
                <Footer />
            </div>
        </div>
    );
};

export default Home;