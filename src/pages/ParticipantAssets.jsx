import React , {useState} from 'react';

import PageTitle from '../components/pagetitle/PageTitle';
import Faqs from '../components/faqs/Faqs';
import Footer from '../components/footer/Footer';
import dataFaqs from '../assets/fake-data/data-faq';

import img from '../assets/images/layouts/map.png'
import img1 from '../assets/images/layouts/par-01.png'
import img2 from '../assets/images/layouts/par-02.png'
import img3 from '../assets/images/layouts/par-03.png'
import { Link } from 'react-router-dom';

function ParticipantAssets(props) {

    const [data] = useState([
        {
            id: 1,
            img: img1,
        },
        {
            id: 2,
            img: img2,
        },
        {
            id: 3,
            img: img3,
        }
    ])
    return (
        <div className='wrapper'>

            <PageTitle title='Participants & Assets' />

            <section className="participants">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h3 className="heading">Participants </h3>
                            </div>

                        </div>

                        {
                            data.map(idx => (
                                <div key={idx.id} className="col-md-4">
                                    <div className="blog-box">
                                        <div className="image">
                                            <Link to="#"><img src={idx.img} alt="ZehnAfzar" /></Link>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }


                        <div className="col-12">
                            <div className="par-bot center">
                                <p className="mb-17">At DANI TECH we are not just developers; we are digital architects, problem solvers, and creators of cutting-edge solutions. Our passion for programming and technology drives us to push boundaries, transform ideas into reality, and deliver software that exceeds expectations.</p>
                                <p className="mb-28">All members in system can choose for themselves a 3D Avatar with many styles, skin colors, shapes, hair, clothes, shoes, glasses, hats... according to their preferences as soon as they join Bizverse and it is also a vrNFT asset class.</p>
                                <Link to="#" className="action-btn"><span>
                                    Join us</span></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="assets">
            <div className="shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h3 className="heading">Assets</h3>
                                <p>At DANI TECH we are not just developers; we are digital architects, problem solvers, and creators of cutting-edge solutions. Our passion for programming and technology drives us to push boundaries, transform ideas into reality, and deliver software that exceeds expectations.</p>
                            </div>

                            <div className="assets__main center">
                                <h5>Assets (NFTs) tree</h5>
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Faqs data={dataFaqs} />

            <Footer />
            
        </div>
    );
}

export default ParticipantAssets;