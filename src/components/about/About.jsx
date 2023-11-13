import React , {useState} from 'react';

import img1 from '../../assets/images/layouts/about-01.png'
import img2 from '../../assets/images/layouts/about-02.png'
import img3 from '../../assets/images/layouts/about-03.png'
import img4 from '../../assets/images/layouts/about-04.png'
import img5 from '../../assets/images/layouts/about-05.png'
import Button from '../button/Button';



function About(props) {

    const [dataImg] = useState([
        {
            id: 1,
            img : img1,
            class: 'img1'
        },
        {
            id: 2,
            img : img2,
            class: 'img2'
        },
        {
            id: 3,
            img : img3,
            class: 'img3'
        },
        {
            id: 4,
            img : img4,
            class: 'img4'
        },
        {
            id: 5,
            img : img5,
            class: 'img5'
        },
    ])

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
        <section className="about">
                <div className="shape"></div>
                <div className="container">
                    <div className="row rev">
                        <div className="col-xl-6 col-md-12">
                            <div className="about__right">
                                <div className="images">
                                    {
                                        dataImg.map(idx => (
                                            <img key={idx.id} className={idx.class} src={idx.img} alt="DANI TECH" />
                                        ))
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="block-text" >
                                <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                <h3 className="heading">{dataBlock.heading}</h3>
                                    <p className="mb-17">{dataBlock.title1}</p>
                                    <p className="mb-17">{dataBlock.desc1}</p>
                                    <p className="mb-17">{dataBlock.title2}</p>
                                    <p className="mb-26">{dataBlock.desc2}</p>
                                    <Button link='/about' title='More About Us' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default About;