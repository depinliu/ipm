import React,{useEffect} from 'react';
import {Container, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import leader from '../../../assets/img/workshop/leader.svg'

const Behavior = (props) => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div style={{minHeight: "100vh"}} className="bg-danger">
            <Container className="py-4">
                <Row>
                    <Col sm={3} className="mx-auto static-top">
                        <NavLink to="/" className="text-dark text-decoration-none">
                            <Card body className="shadow rounded-pill text-center workshop mt-2 p-2">
                                <h6 className="mb-0">
                                    <FontAwesomeIcon className="text-danger mr-2" icon={faHome} />
                                    Back to Home
                                </h6>
                            </Card>
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="mt-3">
                        <Card className="shadow">
                            <CardHeader>

                                <h4>Cognitive Behavior Coaching for Leaders</h4>
                                Workshop: <span className="font-weight-bold text-success">2 Day</span>
                                {/* <hr /> */}
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm={4}>
                                        <img src={leader} width="100%" alt="" />
                                    </Col>
                                    <Col sm={8} className="text-= mt-2">
                                        <p>Tahukah Anda bahwa semua perusahaan besar di dunia sepakat bahwa ada satu keahlian yang harus dikuasai oleh semua pemimpin?</p>
                                        <p>Inilah keahlian yang membuat produktifitas anakbuah meningkat berkali-kali lipat sementara kemampuan dan semangat mereka juga meningkat drastis. Inilah keahlian melakukan coaching pada anak buah.</p>
                                        <p> Namun Coaching bukan hanya meningkatkan produktifitas seseorang, coaching membuat orang-orang yang Anda peduli menjadi dahsyat. Anda akan belajar bahwa menjadi dahsyat tidak perlu sulit, bahwa ada beberapa hal sederhana yang membuat orang biasa menjadi luarbiasa.</p>

                                        <p> <span className="text-danger font-weight-bold">Cognitive Behavioral Coaching</span> menjelaskan bagaimana merubah tingkah laku (behavior) orang dengan merubah kerja otaknya (cognitive). CBC adalah coaching yang diadaptasi dari Cognitive Behavioral Therapy (CBT) yang merupakan salah satu terapi paling efektif di dunia psikologi.</p>
                                        <span>
                                        Lebih dari 4.000 orang pemimpin telah belajar coaching dari workshop kami. Berikut adalah beberapa komentar mereka:
                                        <ol>
                                            <li>Jangan kencing, jangan mengangkat telpon, jangan berbicara. Setiap menit di kelas ini sangat berharga.</li>
                                            <li>Kelas ini telah merubah hidup saya selamanya.</li>
                                            <li>Satu-satunya yang saya sesalkan dengan workshop ini adalah mengapa tidak saya pelajari 20 tahun yang lalu.</li>
                                            <li>Workshop ini berguna bagi saya, tetapi lebih penting lagi, workshop ini berguna bagi seluruh keluarga saya.</li>
                                            <li>Workshop ini membuat saya percaya diri dalam memimpin anakbuah yang jauh lebih pandai daripada saya.</li>
                                        </ol>
                                        </span>
                                        Gunakan 2-3 hari dari waktu Anda demi kedahsyatan orang-orang yang Anda sayangi seumur hidup.
                                        <p className="font-weight-bold text-dark">Baca: <NavLink to="/artifical-intelligence-for-business-leaders" target="__blank">Membangun Kapabilitas Artifical Intelligence di Organisasi</NavLink></p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 text-center mt-4">
                        <span className="text-white text-center">Copyright © 2020 Red Piramida All rights reserved.</span>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default Behavior;