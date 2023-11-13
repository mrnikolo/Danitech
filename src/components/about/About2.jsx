import React , {useState} from 'react';

import Button from '../button/Button';
import Partner from '../partner/Partner';

import img from '../../assets/images/layouts/about-06.png'


function About2(props) {

    const [dataBlock] = useState(
        {
            subheading: 'About us',
            heading: 'Where Ideas Become Reality',
            title1: `Who We Are`,
            desc1: `At the core of DANI TECH lies a team of dedicated and talented software engineers, designers, and project managers who are committed to crafting the finest software solutions. With years of experience in various industries, we've honed our skills to provide bespoke software development services that align perfectly with our clients' needs.`,
            title2: `Our Approach`,
            desc2 :`Innovation is in our DNA. We believe in staying ahead of the curve by adopting the latest technologies and methodologies. We don't just write code; we engineer solutions that optimize efficiency, enhance user experiences, and drive business growth. Our collaborative approach ensures that we work closely with our clients at every stage, from ideation to deployment, to ensure their vision becomes a reality.`

        }
    )
    return (
        <section className="about s2">
                    <div className="shape"></div>
                    <div className="shape right"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="block-text center pd-0">
                                    <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                    <h3 className="heading pd">{dataBlock.heading}</h3>
                                        
                                </div>

                                <div className="about__main center" data-aos="fade-up" data-aos-duration="3000">
                                    <img src={img} alt="DANITECH" />
                                    <p className="mb-17">{dataBlock.title1}</p>
                                    <p className="mb-17">{dataBlock.desc1}</p>
                                    <p className="mb-17">{dataBlock.title2}</p>
                                    <p className="mb-26">{dataBlock.desc2}</p>
                                    <Button title='More About Us' link='/about' />
                                </div>

                                <Partner />
                            </div>
                        </div>
                    </div>
                </section>
    );
}

export default About2;