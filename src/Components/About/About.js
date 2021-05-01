import React from 'react';
import './About.css';
import pabel from '../../images/pabel-pro.jpg';
import Typical from 'react-typical'

const About = () => {
    return (
        <div>
            <div className="section-padding">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="mono-text mono-color">Hello!</h3><br />
                        <p className="text-light about-text">
                            I'm Pabel,a full stack web Developer in Bangladesh. <br /><br />

                            To gain confidence and fame using my potential in the field of “Web Development”, As well as love to work as a Team and
express my innovative creative skills for self and company growth.
                    </p>
                    <h3 className="mono-text mono-color">
                    <Typical
        steps={[,'here is my skills.....',500 ]}
        loop={Infinity}
        wrapper="p"
      />
                    </h3><br />
                        <ul className="project-skills text-light py-2 ">
                            <li className="skill-item btn btn-dark m-2 ">React.js</li>
                            <li className="skill-item btn btn-dark m-2">Node.js</li>
                            <li className="skill-item btn btn-dark m-2">Express.js</li>
                            <li className="skill-item btn btn-dark m-2">MongoDB</li>
                            <li className="skill-item btn btn-dark m-2">Firebase</li>
                            <li className="skill-item btn btn-dark m-2">Bootstrap4</li>
                            <li className="skill-item btn btn-dark m-2">HTML5</li>
                            <li className="skill-item btn btn-dark m-2">CSS3</li>
                            <li className="skill-item btn btn-dark m-2">JavaScript</li>
                            <li className="skill-item btn btn-dark m-2">ES6</li>
                            <li className="skill-item btn btn-dark m-2">Material UI</li>
                            <li className="skill-item btn btn-dark m-2">REST API</li>
                            <li className="skill-item btn btn-dark m-2">CRUD Operation</li>
                            <li className="skill-item btn btn-dark m-2 ">Heroku</li>
                            <li className="skill-item btn btn-dark m-2">Netlify</li>
                            <li className="skill-item btn btn-dark m-2">Redux</li>
                            <li className="skill-item btn btn-dark m-2">VSCode</li>
                            <li className="skill-item btn btn-dark m-2">Git</li>
                           
                        </ul>
                    </div>
                    <div className="col-md-6 d-flex align-items-center my-5 pt-2">
                        <div className="wrapper m-auto ">
                            <img className="img-fluid about-img" src={pabel} alt="Abu Hasan Rumi - Frontend Developer" />
                        </div>

                    </div>
                </div>
            </div>
        </div >

    );
};

export default About;