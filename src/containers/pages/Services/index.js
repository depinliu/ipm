import React, { Fragment, useState } from 'react';
import Swiper from 'react-id-swiper';
import leader from '../../../assets/img/training/leader.svg'
import ai from '../../../assets/img/training/ai.svg'
import growth from '../../../assets/img/training/growth.svg'
import microsoft from '../../../assets/img/training/microsoft.svg'
import { Link } from "react-scroll";
import organization from '../../../assets/img/training/organization.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'reactstrap';
import {NavLink} from 'react-router-dom'

const Services = (props) => {
    const params = {
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }
    }
    const [swiper, updateSwiper] = useState(null);
    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    return (
        <Fragment>
            <div className="bg-white py-5" id="workshop">
                {/* <h4 className="text-center"><b>TRAINING WE DO</b></h4> */}
                <h4 className="text-center"><b>WORKSHOP</b></h4>
                <div className="hr-line bg-danger mx-auto mb-2"></div>
                <Container className="mt-4">
                    <Swiper {...params} getSwiper={updateSwiper}>
                        <div id="swiper">
                            <div className="col-sm-5 float-left p-3 mx-auto">
                                <img src={leader} className="col-12 swiper-lazy" alt="leader" height="100%" />
                            </div>
                            <div className="col-sm-7 float-left">
                                <h4 className="" id="leader">Cognitive Behavior Coaching for Leaders <small className="text-danger">(2-3 days)</small></h4>
                                <p className="">Teach the best way to develop the power of subordinates.</p>
                                <table className="table table-borderless text-secondary table-sm">
                                    <tbody>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td>Apakah rahasia sukses dari Bill Gates? Steve Jobs? JK Rowling, Muhammad Ali, dll?</td>
                                        </tr>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td>Maukah Anda belajar cara membimbing orang-orang yang Anda sayangi untuk menjadi jauh lebih sukses daripada bila mereka hidup tanpa Anda?</td>
                                        </tr>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td>Kami telah memberikan training pada lebih dari 4000 executive untuk membuat mereka mampu mendahsyatkan Orang-orang mereka maupun keluarga mereka.</td>
                                        </tr>
                                        <tr>
                                            <th></th>
                                            <td colSpan=""><NavLink to="/cognitive-behavior-coaching-for-leaders" target="__blank" className="btn btn-outline-danger text-decoration-none font-weight-bold">Read More</NavLink></td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <button className="btn btn-outline-danger text-center">Learn More</button> */}
                            </div>
                        </div>

                        <div>
                            <div className="col-sm-5 float-left p-3 mx-auto">
                                <img src={microsoft} className="col-12 swiper-lazy" alt="leader" height="100%" />
                            </div>
                            <div className="col-sm-7 float-left">
                                <h4 className="" id="leader">Sales Skills Microsoft Way <small className="text-danger"></small></h4>
                                <p className="">Subtitle here.</p>
                                <table className="table table-borderless text-secondary table-sm">
                                    <tbody>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <button className="btn btn-outline-danger text-center">Learn More</button> */}
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="col-sm-5 float-left p-3 mx-auto">
                                <img src={ai} className="col-12 swiper-lazy" alt="ai" />
                            </div>
                            <div className="col-sm-7 float-left">
                                <h4 className="" id="ai">Artificial Intelligence for Business Leaders <small className="text-danger">(2 days)</small></h4>
                                <p className="">Preparing AI capabilities in our organization.</p>
                                <table className="table table-borderless text-secondary table-sm">
                                    <tbody>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td>Apakah yang akan dilakukan oleh para pemimpin di perusahaan Anda bila para pesaing Anda memiliki kemampuan Artificial Intelligence? Apakah mereka siap untuk menghadapi hal itu? </td>
                                        </tr>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td>Apa yang akan mereka lakukan untuk mempersiapkan diri dalam menghadapi ilmu yang PASTI akan datang itu? Kapan sebaiknya mereka mulai mempersiapkan diri?</td>
                                        </tr>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td>Workshop 2 hari ini akan membuat setiap pemimpin jauh lebih siap dalam menghadapi era masa depan itu. Kelas ini dengan mudah mengajari pemimpin apa yang perlu mereka siapkan untuk memiliki kemampuan ini dalam organisasi mereka.</td>
                                        </tr>
                                        <tr>
                                            <th></th>
                                            <td colSpan=""><NavLink to="//artifical-intelligence-for-business-leaders" target="__blank" className="btn btn-outline-danger text-decoration-none font-weight-bold mb-3">Read More</NavLink></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <div className="col-sm-5 float-left p-3 mx-auto">
                                <img src={organization} className="col-12 swiper-lazy" alt="organization" />
                            </div>
                            <div className="col-sm-7 float-left">
                                <h4 className="" id="growth">How to Change People’s Behavior in Organization</h4>
                                <p className="">Master the sure ways to create positive change in organizations.</p>
                                <table className="table table-borderless text-secondary table-sm">
                                    <tbody>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td>Tahukah Anda bahwa lebih dari 70% proyek perubahan gagal? Mengapa?</td>
                                        </tr>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td>Workshop ini menjelaskan dengan mudah mengapa pemimpin seringkali gagal dalam memimpin perubahan. Lalu diteruskan dengan kiat memastikan keberhasilan perubahan.</td>
                                        </tr>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td>Telah diajarkan pada puluhan organisasi yang mempraktekkan kiat-kiat yang diajarkan dengan hasil yang spektakular.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <div className="col-sm-5 float-left p-3 mx-auto">
                                <img src={growth} className="col-12 swiper-lazy" alt="growth" />
                            </div>
                            <div className="col-sm-7 float-left">
                                <h4 className="" id="growth"><span className="text-danger">100 DAYS</span> Rapid Growth Project</h4>
                                <p className="">Achieve Extraordinary Business Growth in 100 days!</p>
                                <table className="table table-borderless text-secondary table-sm">
                                    <tbody>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td>Apakah pesaing Anda terus tumbuh sementara Anda mengalami stagnasi?</td>
                                        </tr>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td>Percayakah Anda bahwa perusahaan Anda masih bisa tumbuh lebih dari sekarang? Maukah Anda melakukan pertumbuhan itu sekarang juga?</td>
                                        </tr>
                                        <tr>
                                            <th className="text-danger"><FontAwesomeIcon icon={faDotCircle} size="xs" /></th>
                                            <td>Lakukan Proyek ini dan amati hasilnya setiap hari selama 100 hari proyek ini telah dilakukan pada 12 perusahaan dan 32 perusahaan retail dengan kesuksesan mendekati 100%.</td>
                                        </tr>
                                        <tr>
                                            <th className="text-danger"> </th>
                                            <td><b>Note:</b> Jangan percaya, buktikan saja.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </Swiper>

                    {/* button mode desktop */}
                    <div className="col-sm-12 text-center d-none d-lg-block btn-service">
                        <Link to="swiper" spy={false} smooth={true} duration={500} offset={-193}>
                            <button onClick={goPrev} className="btn  btn-danger mr-5"><FontAwesomeIcon icon={faAngleLeft} size="lg"/></button>
                        </Link>
                        <Link to="swiper" spy={false} smooth={true} duration={500} offset={-193}>
                            <button onClick={goNext} className="btn  btn-danger"><FontAwesomeIcon icon={faAngleRight} size="lg"/></button>
                        </Link>
                    </div>
                    {/* button mode hp */}
                    <div className="col-sm-12 text-center d-lg-none d-xl-none btn-service">
                        <Link to="swiper" spy={false} smooth={true} duration={500} offset={-83}>
                            <button onClick={goPrev} className="btn  btn-danger mr-5"><FontAwesomeIcon icon={faAngleLeft} size="lg"/></button>
                        </Link>
                        <Link to="swiper" spy={false} smooth={true} duration={500} offset={-83}>
                            <button onClick={goNext} className="btn  btn-danger"><FontAwesomeIcon icon={faAngleRight} size="lg"/></button>
                        </Link>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
};

export default Services;