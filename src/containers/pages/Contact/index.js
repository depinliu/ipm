import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = (props) => {
    return (
        <Fragment>
            <div className="container bg-white py-5" id="contact">
                <h4 className="text-center"><b>CONTACT US</b></h4>
                <div className="hr-line bg-danger mx-auto mb-2"></div>
                <div className="row">
                        <div className="col-sm-4 mt-3 bg-danger text-white p-5">
                            <ScrollAnimation animateIn="bounceInLeft" duration={1}>
                            <h3>JAKARTA</h3>
                            <table className="table table-borderless text-white">
                                <tbody>
                                    <tr>
                                        <th><FontAwesomeIcon icon={faMapMarkedAlt} /></th>
                                        <td>
                                        PT. Piramida Makmur Abadi <br/>
                                        Jl. Janur Elok II/QB/5 <br/>
                                        Kelapa Gading, Jakarta 14240 <br/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><FontAwesomeIcon icon={faPhone} flip="horizontal" /></th>
                                        <td>0896 2864 9067</td>
                                    </tr>
                                    <tr>
                                        <th><FontAwesomeIcon icon={faEnvelope} /></th>
                                        <td>iniredp2000@gmail.com</td>
                                    </tr>
                                </tbody>
                            </table>
                            </ScrollAnimation>
                        </div>
                        <div className="col-sm-8 mt-3">
                            <ScrollAnimation animateIn="bounceIn" duration={2}>
                                    <iframe title="piramidaMap" className="col-sm-12 mx-auto  border-0 p-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8560281037594!2d106.90175991458838!3d-6.150029495547276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5491bb4af7d%3A0x5f6b379f34134e35!2sJanur%20Elok%20Residence!5e0!3m2!1sid!2sid!4v1577891294850!5m2!1sid!2sid" height="400" ></iframe>
                            </ScrollAnimation>
                        </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Contact;