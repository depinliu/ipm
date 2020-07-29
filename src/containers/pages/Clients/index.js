import React, { Fragment } from 'react';
import {Row} from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll';
import Swiper from 'react-id-swiper';
import client1 from '../../../assets/img/clients/1.jpg'
import client2 from '../../../assets/img/clients/2.jpg'
import client3 from '../../../assets/img/clients/3.jpg'
import client4 from '../../../assets/img/clients/4.jpg'
import client5 from '../../../assets/img/clients/5.jpg'
import client6 from '../../../assets/img/clients/6.jpg'
import client7 from '../../../assets/img/clients/7.jpg'
import client8 from '../../../assets/img/clients/8.jpg'
import client9 from '../../../assets/img/clients/9.jpg'
import client10 from '../../../assets/img/clients/10.jpg'
import client11 from '../../../assets/img/clients/11.jpg'
import client12 from '../../../assets/img/clients/12.jpg'
import client13 from '../../../assets/img/clients/13.jpg'
import client14 from '../../../assets/img/clients/14.jpg'
import client15 from '../../../assets/img/clients/15.jpg'
import client16 from '../../../assets/img/clients/16.jpg'
import client17 from '../../../assets/img/clients/17.jpg'
import client18 from '../../../assets/img/clients/18.jpg'
import client19 from '../../../assets/img/clients/19.jpg'
import client20 from '../../../assets/img/clients/20.jpg'
import client21 from '../../../assets/img/clients/21.jpg'
import client22 from '../../../assets/img/clients/22.jpg'
import client23 from '../../../assets/img/clients/23.jpg'
import client24 from '../../../assets/img/clients/24.jpg'
import client25 from '../../../assets/img/clients/25.jpg'
import client26 from '../../../assets/img/clients/26.jpg'
import client27 from '../../../assets/img/clients/27.jpg'
import client28 from '../../../assets/img/clients/28.jpg'
import client29 from '../../../assets/img/clients/29.jpg'
import client30 from '../../../assets/img/clients/30.jpg'
import client31 from '../../../assets/img/clients/31.jpg'
import client32 from '../../../assets/img/clients/32.jpg'
import client33 from '../../../assets/img/clients/33.jpg'
import client34 from '../../../assets/img/clients/34.jpg'
import client35 from '../../../assets/img/clients/35.jpg'
import client36 from '../../../assets/img/clients/36.jpg'
import client37 from '../../../assets/img/clients/37.jpg'
import client38 from '../../../assets/img/clients/38.jpg'
import client39 from '../../../assets/img/clients/39.jpg'
import client40 from '../../../assets/img/clients/40.jpg'
import client41 from '../../../assets/img/clients/41.jpg'
import client42 from '../../../assets/img/clients/42.jpg'
import client43 from '../../../assets/img/clients/43.jpg'
import client44 from '../../../assets/img/clients/44.jpg'
import client45 from '../../../assets/img/clients/45.jpg'

const Clients = (props) => {

    const params = {
        grabCursor: true,
        lazy: true,
        slidesPerView: 8,
        slidesPerColumn: 2,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        //   navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev'
        //   }
    }
    return (
        <Fragment>
            <div className="container bg-white py-5" id="clients">
                <h4 className="text-center"><b>OUR CLIENTS</b></h4>
                <div className="hr-line bg-danger mx-auto mb-2"></div>
                <ScrollAnimation animateIn="bounceInRight" duration={1}>
                    <Row>
                        <div className="col-sm-12 mt-3">
                            <Swiper {...params}>
                                <div className="mx-auto pb-3"><img src={client1} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client2} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client3} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client4} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client5} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client6} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client7} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client8} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client9} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client10} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client11} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client12} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client13} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client14} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client15} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client16} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client17} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client18} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client19} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client20} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client21} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client22} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client23} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client24} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client25} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client26} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client27} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client28} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client29} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client30} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client31} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client32} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client33} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client34} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client35} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client36} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client37} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client38} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client39} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client40} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client41} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client42} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client43} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client44} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                <div className="mx-auto pb-3"><img src={client45} width="100" className="img-thumbnail border-0 swiper-lazy" alt="." /></div>
                                
                            </Swiper>
                        </div>
                    </Row>
                </ScrollAnimation>
            </div>
        </Fragment>
    );
};

export default Clients;