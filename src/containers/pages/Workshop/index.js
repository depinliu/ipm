import React, { Fragment } from 'react';
import { Card, Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader, faRocket } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'

const Workshop = (props) => {
    return (
        <Fragment>
            <div className="container py-5" id="workshop">
                <h4 className="text-center text-white"><b>WORKSHOP</b></h4>
                <div className="hr-line bg-white mx-auto mb-2"></div>
                <Row className="mt-2">
                    <Col sm="5" className="mt-3 ml-auto">
                        <ScrollAnimation animateIn="bounceInRight" duration={1}>
                            <NavLink to="/cognitive-behavior-coaching-for-leaders" target="__blank" className="text-dark text-decoration-none">
                                <Card body className="shadow rounded-pill text-center workshop">
                                <h6 className="mb-0"><FontAwesomeIcon className="text-danger mr-2" icon={faBookReader} />Cognitive Behavior Coaching for Leaders</h6>
                                </Card>
                            </NavLink>
                        </ScrollAnimation>
                    </Col>
                    <Col sm="5" className="mt-3 mr-auto">
                        <ScrollAnimation animateIn="bounceInRight" duration={1} delay={300}>
                            <NavLink to="/artifical-intelligence-for-business-leaders" target="__blank" className="text-dark text-decoration-none">
                                <Card body className="shadow rounded-pill text-center workshop">
                                <h6 className="mb-0"><FontAwesomeIcon className="text-danger mr-2" icon={ faRocket} flip="horizontal" />Artifical Intelligence for Business Leaders</h6>
                                </Card>
                            </NavLink>
                        </ScrollAnimation>
                    </Col>
                </Row>

            </div>
        </Fragment>
    );
};

export default Workshop;