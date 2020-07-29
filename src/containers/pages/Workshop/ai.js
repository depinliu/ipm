import React, {useEffect} from 'react';
import {Container, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ai from '../../../assets/img/workshop/ai.svg'

const Ai = (props) => {
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

                                <h4>Membangun Kapabilitas Artifical Intelligence di Organisasi</h4>
                                Workshop: <span className="font-weight-bold text-success">2 Day</span>
                                {/* <hr /> */}
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm={4}>
                                        <img src={ai} width="100%" alt="" />
                                    </Col>
                                    <Col sm={8} className="text-= mt-2">
                                        <p>Bagaimana seandainya pesaing Anda yang terbesar menggunakan <span className="text-danger font-weight-bold">Artificial Intelligence</span> untuk bersaing dengan Anda? Bagaimana Anda akan tahu? Dan apakah yang akan Anda lakukan?  </p>
                                        
                                        <p>Kalau Anda tidak tahu jawabannya, dan mungkin Anda bahkan tidak tahu apakah arti Artificial Intelligence dalam bisnis Anda, maka Anda belum menyiapkan perusahaan Anda untuk masa depan yang pasti tiba.  Para ahli mengatakan bahwa hanya dalam beberapa tahun mendatang Artificial Intelligence akan sama umumnya dengan word processor, Spreadsheet dan berbagai alat yang digunakan di komputer hari ini. Dapatkah Anda bayangkan seandainya perusahaan Anda hari ini masih menggunakan surat dan pensil sementara pesaing Anda sudah menggunakan email dan komputer?</p>

                                        <p>Mungkin Anda banyak mendengar contoh Artificial Intelligence yang sangat canggih dan membuat Anda ragu bahwa perusahaan Anda akan dapat melakukannya. Namun sesungguhnya AI dapat mulai dibangun hari ini juga.  Bahkan walaupun Anda tidak bermaksud membangunnya saat ini, paling tidak Anda harus mencegah organisasi Anda membuang-buang waktu dan sumberdaya perusahaan yang murah namun sangat berharga untuk kemampuan AI di masa yang akan datang.</p>

                                        <p>Langkah penting pertama yang dapat Anda lakukan adalah mengajak para pemimpin lainnya untuk hadir dalam workshop 2 hari ini.  Anda akan belajar segala hal yang perlu Anda ketahui tentang AI. Anda akan menjadi sadar bahwa walaupun AI sangat penting namun tidak sulit dimengerti. Bukan hanya itu, Anda juga akan melakukan beberapa latihan yang membantu organisasi Anda mulai membangun AI di industry Anda.</p>

                                        <p className="font-weight-bold text-dark">Baca: <NavLink to="/cognitive-behavior-coaching-for-leaders" target="__blank">Cognitive Behavior Coaching for Leaders</NavLink></p>
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

export default Ai;