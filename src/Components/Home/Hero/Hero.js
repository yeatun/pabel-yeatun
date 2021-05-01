import React from 'react';
import './Hero.css';
import Typical from 'react-typical';
import pdf from "../../../resume/pabel's resume.pdf";


const Hero = () => {

    return (
        <div className="py-5 my-4">
            <p className="mono-text mono-color">
            <Typical
        steps={['Hi,This is',500 ]}
        loop={Infinity}
        wrapper="p"
      />
            </p>
            <h1 className="title-name element">
            <Typical
        steps={[1300,'Md Nowseen Yeatun Pabel',500 ]}
        loop={Infinity}
        wrapper="p"
      />
      </h1>
          
            <h1 className="hero-subtitle text-white-50">
            <Typical
        steps={[3000,'Full Stack Web Developer', 1000, ]}
        loop={Infinity}
        wrapper="p"
      />
            </h1>
            
         
            <p className="hero-text text-white-50 py-3 mono-text">I'm a full stack developer based in Dhaka Bangladesh specializing <br className="d-none d-md-block" />This is my personal portfolio website that showcases my  education,<br className="d-none d-md-block" /> recent projects, contact information,  and a little bit more about me.</p>

            <div className="hero-buttons mono-text">
                <a target="_blank" rel="noopener noreferrer" className="btn hero-btn about-btn m-2 px-3 mr-2 py-md-3 px-md-4 mr-md-4" href={pdf}><b>Download Resume</b></a>
                <a className="btn hero-btn touch-btn py-2 px-3 py-md-3 px-md-4" href="/contact">Get In Touch</a>
            </div>
        </div>
    );
};

export default Hero;