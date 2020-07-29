import React, {useState} from 'react';
import { Container, Row, Col, Card, CardBody, CardSubtitle, Modal, ModalHeader, ModalBody, ListGroup, ListGroupItem, UncontrolledCollapse  } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import steve from '../../../assets/img/consultant/steve.jpg'
import rina from '../../../assets/img/consultant/rina.jpg'
import oscar from '../../../assets/img/consultant/oscar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faDotCircle, faGraduationCap, faCaretDown, faBriefcase, faTasks, faFileAlt, faUsers, faAward } from '@fortawesome/free-solid-svg-icons'

const Consultant = (props) => {
    // const {
    //     buttonLabel,
    //     className
    // } = props;
    
    const [modalSteve, setModalSteve] = useState(false);
    const [modalRina, setModalRina] = useState(false);
    const [modalOscar, setModalOscar] = useState(false);
    // const [caret, setCaret] = useState(false)
    
    const toggleSteve = () => setModalSteve(!modalSteve);
    const toggleRina = () => setModalRina(!modalRina);
    const toggleOscar = () => setModalOscar(!modalOscar);

    return (
        <div className="bg-light py-5" id="consultant">
            <Container>
                <h4 className="text-center font-weight-bold">OUR CONSULTANT</h4>
                <div className="hr-line bg-danger mx-auto mb-2"></div>
                <Row className="text-center">

                    {/* Pak Steve */}
                    <Col sm={4} className="mt-3">
                        <ScrollAnimation animateIn="zoomInUp">
                            <Card className="coach">
                            <img src={steve} className="rounded-circle mt-4 mx-auto" width="50%" alt="steve-photos" />
                                <CardBody>
                                    <h5 className="font-weight-bold">STEVE SUDJATMIKO</h5>
                                    <CardSubtitle className="text-secondary">HR Expert & Coaching</CardSubtitle>
                                    <button onClick={toggleSteve} className="btn btn-outline-danger mt-3 btn-sm"><span className="p-3"><b>Detail <FontAwesomeIcon icon={faLongArrowAltRight} /></b></span></button>
                                </CardBody>
                            </Card>
                        </ScrollAnimation>
                    </Col>



                    {/* Bu Rina */}
                    <Col sm={4} className="mt-3">
                        <ScrollAnimation animateIn="zoomInUp">
                            <Card className="coach">
                                <img src={rina} className="rounded-circle mt-4 mx-auto" width="50%" alt="rina-photos" />
                                <CardBody>
                                    <h5 className="font-weight-bold">RINA PRASETYAWATY</h5>
                                    <CardSubtitle className="text-secondary">Hospitality & Transformation Coach</CardSubtitle>
                                    <button onClick={toggleRina} className="btn btn-outline-danger mt-3 btn-sm"><span className="p-3"><b>Detail <FontAwesomeIcon icon={faLongArrowAltRight} /></b></span></button>
                                </CardBody>
                            </Card>
                        </ScrollAnimation>
                    </Col>



                    {/* Pak Oscar */}
                    <Col sm={4} className="mt-3">
                        <ScrollAnimation animateIn="zoomInUp">
                            <Card className="coach">
                                <img src={oscar} className="rounded-circle mt-4 mx-auto" width="50%" alt="oscar-photos" />
                                <CardBody>
                                    <h5 className="font-weight-bold">OSCAR WIRAWAN</h5>
                                    <CardSubtitle className="text-secondary">Transformation Coach</CardSubtitle>
                                    <button onClick={toggleOscar} className="btn btn-outline-danger mt-3 btn-sm"><span className="p-3"><b>Detail <FontAwesomeIcon icon={faLongArrowAltRight} /></b></span></button>
                                </CardBody>
                            </Card>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>





            {/* Modal Pak Steve */}
            <Modal isOpen={modalSteve} toggle={toggleSteve} size="lg" className="modal-dialog-centered modal-dialog-scrollable">
                <ModalHeader toggle={toggleSteve}></ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-sm-4 mx-auto text-center border-right">
                            <img src={steve} className="rounded mb-2" width="100%" alt="" />
                            <h4 className="mb-0">Steve Sudjatmiko</h4>
                            <span className="text-secondary">HR Expert & Coaching</span>
                        </div>
                        <div className="col-sm-8">
                            <div className="education py-2">
                                <ListGroup flush>
                                    <ListGroupItem id="education" tag="a" href="#" className="text-decoration-none text-secondary p-2">
                                        <h6 className="float-left"><FontAwesomeIcon icon={faGraduationCap} /> Education</h6>
                                        <span className="float-right"><FontAwesomeIcon icon={faCaretDown}  /></span>
                                    </ListGroupItem>
                                    <UncontrolledCollapse toggler="#education">
                                        <div className="card p-1 border-0 table-responsive">
                                            <table className="table table-borderless table-sm text-secondary">
                                                <tbody>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>BA in Psychology & Sociology at UC Irvine (1985)</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>MBA in Finance & International  Marketing at Univ of Oregon (1987) </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Certified professional – System Design & Analysis UC Berkeley (2002)</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Behavioral Coaching Master – BC Institute , Australia (2008)</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>PhD Candidate in Strategic Management  - Trisakti (2020) </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </UncontrolledCollapse>
                                    <ListGroupItem id="experience" tag="a" href="#" className="text-decoration-none text-secondary p-2">
                                        <h6 className="float-left"><FontAwesomeIcon icon={faBriefcase} /> Professional Experiences</h6>
                                        <span className="float-right"><FontAwesomeIcon icon={faCaretDown}  /></span>
                                    </ListGroupItem>
                                    <UncontrolledCollapse toggler="#experience">
                                        <div className="card p-1 border-0 table-responsive">
                                            <table className="table table-borderless table-sm text-secondary">
                                                <tbody>
                                                <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Sr Mgr Change management - Accenture (1997-2000) </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>GM International Business  - UC Berkeley, USA (2002-2005)</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Strategic/ HR Director – Dima / Guinness Indonesia ((2007- 2012) </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Org/ Culture/ Strategic/HR Consultant – BIC Group (2013-now)</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>HR Director – Ace hardware (2013- 2016)</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>CFO/HR Director – Sababay (2016- 2019) </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </UncontrolledCollapse>
                                    <ListGroupItem id="skills" tag="a" href="#" className="text-decoration-none text-secondary p-2">
                                        <h6 className="float-left"><FontAwesomeIcon icon={faTasks} /> Skills/ Expertise</h6>
                                        <span className="float-right"><FontAwesomeIcon icon={faCaretDown}  /></span>
                                    </ListGroupItem>
                                    <UncontrolledCollapse toggler="#skills">
                                        <div className="card p-1 border-0 table-responsive">
                                            <table className="table table-borderless table-sm text-secondary">
                                                <tbody>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>HR Management </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Strategic Mgt </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Cognitive Behavioral Coaching </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Culture/ Organization Behavior </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Ozn/Leadership Training </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Change Management </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </UncontrolledCollapse>
                                </ListGroup>
                                
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>

            {/* Modal Bu Rina */}
            <Modal isOpen={modalRina} toggle={toggleRina} size="lg" className="modal-dialog-centered modal-dialog-scrollable">
                <ModalHeader toggle={toggleRina}></ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-sm-4 mx-auto text-center border-right">
                            <img src={rina} className="rounded mb-2" width="100%" alt="" />
                            <h4 className="mb-0">Rina Prasetyawaty</h4>
                            <span className="text-secondary">Hospitality & Transformation Coach</span>
                        </div>
                        <div className="col-sm-8">
                            <div className="education py-2">
                                <ListGroup flush>
                                    <ListGroupItem id="education" tag="a" href="#" className="text-decoration-none text-secondary p-2">
                                        <h6 className="float-left"><FontAwesomeIcon icon={faGraduationCap} /> Education</h6>
                                        <span className="float-right"><FontAwesomeIcon icon={faCaretDown}  /></span>
                                    </ListGroupItem>
                                    <UncontrolledCollapse toggler="#education">
                                        <div className="card p-1 border-0 table-responsive">
                                            <table className="table table-borderless table-sm text-secondary">
                                                <tbody>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>S1 Ekonomi Management, peminatan Human Resources</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>S2 Master Hukum, peminatan Hukum Industrial & MSDM </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </UncontrolledCollapse>
                                    <ListGroupItem id="experience" tag="a" href="#" className="text-decoration-none text-secondary p-2">
                                        <h6 className="float-left"><FontAwesomeIcon icon={faTasks} /> Specialization</h6>
                                        <span className="float-right"><FontAwesomeIcon icon={faCaretDown}  /></span>
                                    </ListGroupItem>
                                    <UncontrolledCollapse toggler="#experience">
                                        <div className="card p-1 border-0 table-responsive">
                                            <table className="table table-borderless table-sm text-secondary">
                                                <tbody>
                                                <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>28th practitioner in HR Generalist </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Performance Management</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Personnel Management </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Compensation & Benefit</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Talent Management</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Digital HR </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Talent Acquisition </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Group Coaching at Bob Hasan Group </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Bakmi GM </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Digital HR </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Jaddi Group </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Guinness and Air Asia </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </UncontrolledCollapse>
                                    <ListGroupItem id="skills" tag="a" href="#" className="text-decoration-none text-secondary p-2">
                                        <h6 className="float-left"><FontAwesomeIcon icon={faFileAlt} /> Certification</h6>
                                        <span className="float-right"><FontAwesomeIcon icon={faCaretDown}  /></span>
                                    </ListGroupItem>
                                    <UncontrolledCollapse toggler="#skills">
                                        <div className="card p-1 border-0 table-responsive">
                                            <table className="table table-borderless table-sm text-secondary">
                                                <tbody>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>EPC - Erickson Professional Coach Certified </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>CBHA - Certified Business Handwriting Analysist </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>CHRP - Certified Human Resources Professional </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>MPPoY – Master Practitioner Point of You </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>AC – Access Consciousness, Access Bars Facilitator </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </UncontrolledCollapse>
                                    <ListGroupItem id="organization" tag="a" href="#" className="text-decoration-none text-secondary p-2">
                                        <h6 className="float-left"><FontAwesomeIcon icon={faUsers} /> Organization</h6>
                                        <span className="float-right"><FontAwesomeIcon icon={faCaretDown}  /></span>
                                    </ListGroupItem>
                                    <UncontrolledCollapse toggler="#organization">
                                        <div className="card p-1 border-0 table-responsive">
                                            <table className="table table-borderless table-sm text-secondary">
                                                <tbody>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Head of NS Industry in Indonesia Applied Neuroscience Synergy (SINTESA) </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Deputy Program Director International Coach Federation  (ICF) </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </UncontrolledCollapse>
                                    <ListGroupItem id="award" tag="a" href="#" className="text-decoration-none text-secondary p-2">
                                        <h6 className="float-left"><FontAwesomeIcon icon={faAward} /> Award</h6>
                                        <span className="float-right"><FontAwesomeIcon icon={faCaretDown}  /></span>
                                    </ListGroupItem>
                                    <UncontrolledCollapse toggler="#award">
                                        <div className="card p-1 border-0 table-responsive">
                                            <table className="table table-borderless table-sm text-secondary">
                                                <tbody>
                                                    <tr>
                                                        <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                        <td>Best Inspiring Mentor, Role Model, Outstanding Willpower – Kementrian Pemberdayaan Perempuan Republik Indonesia (2017) </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </UncontrolledCollapse>
                                </ListGroup>
                                
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>

            {/* Modal Pak Oscar */}
            <Modal isOpen={modalOscar} toggle={toggleOscar} size="lg" className="modal-dialog-centered modal-dialog-scrollable">
                <ModalHeader toggle={toggleOscar}></ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-sm-4 mx-auto text-center border-right">
                            <img src={oscar} className="rounded mb-2" width="100%" alt="" />
                            <h4 className="mb-0">Oscar Wirawan</h4>
                            <span className="text-secondary">Transformation Coach</span>
                        </div>
                        <div className="col-sm-8">
                            <div className="education py-2">
                                <div className="card p-1 border-0 table-responsive">
                                    <table className="table table-borderless table-sm text-secondary">
                                        <tbody>
                                            <tr>
                                                <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                <td>Berpengalaman lebih dari 15 tahun bersama Red Piramida Consulting  memberikan berbagai pelatihan pengembangan kepemimpinan dan strategic HR development. </td>
                                            </tr>
                                            <tr>
                                                <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                <td>Sejak 2012 memberikan pelatihan khusus Behavioral Coaching hingga sekarang. Penulis dan editor buku kepemimpinan, manajemen SDM, dan manajemen kinerja terbitan Gramedia.</td>
                                            </tr>
                                            <tr>
                                                <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                <td>Bukunya berjudul “Awas Berubah!” – Coaching Words for a Great Achievement” telah diterbitkan penerbit Gramedia, tahun 2010. </td>
                                            </tr>
                                            <tr>
                                                <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                <td>Berlatar belakang pendidikan manajemen perhotelan dan pariwisata. </td>
                                            </tr>
                                            <tr>
                                                <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                <td>Berpengalaman sebagai senior manajer di beberapa perusahaan, Harvestindo Bahtera Advertising, Penerbit Salemba Empat, Krista Media Publishing, tim pelatih Human Capital Learning Development PT. Ace Hardware Indonesia Tbk.</td>
                                            </tr>
                                            <tr>
                                                <th className="text-danger" style={{maxWidth: "19px"}}><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                                <td>Berpengalaman mengembangkan program Rapid Growth Project, Executive Development, dan Knowledge Management di grup bisnis Kawan Lama. Sejak 2019, mengembangkan progam performance development coach  di bidang pengembangan diri, entrepreneurship, dan perilaku sukses. </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
            
        </div>
    );
};

export default Consultant;