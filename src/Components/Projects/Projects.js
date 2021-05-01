import React from 'react';
import './Projects.css'
import project1 from '../../images/p1.png'
import project2 from '../../images/p2.png'
import project3 from '../../images/p3.png'
import project4 from '../../images/p4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <div>
            <div className="project-section-padding">
                <h2 className="projects-title mb-4 p-5"><span className="mono-text mono-color">My Projects</span></h2>
                <div className="projects ">
                    <div className="row row-cols-md-4">
                        <div className="col card  card col-md-6 col-lg-4 my-4  bg-color">
                            <a target="_blank" rel="noopener noreferrer" className="text-white" href="https://car-service-40270.web.app/">
                                <img className="card-img-top" src={project1} alt="Card image cap" />
                                <div className="card-body blog-text">
                                    <h5 className="card-title ">Car's Home</h5>
                                    <div className="card-text ">
                                        <ul>
                                            <li className="py-1">Very organized and single web page application</li>
                                            <li className="py-1">Authentication with google(Sign In/Sign Up)</li>
                                            <li className="py-1">User can write there opinion and updated on the page</li>
                                            <li className="py-1"> Admin Panel (Make new service, make new Admin, Service)</li>
                                           
                                        </ul>
                                       <div id="div_top_hypers">
                                       <ul id="ul_top_hypers" className="project-skills text-light">
                                    
                                    <li className="skill-item btn btn-dark ">JavaScript</li>
                                        <li className="skill-item btn btn-dark m-2 ">React.js</li>
                                      
                       
                                    <li className="skill-item btn btn-dark ">Node.js</li>
                                        <li className="skill-item btn btn-dark">Express.js</li>
                                        <li className="skill-item btn btn-dark m-2">MongoDB</li>
                                        <li className="skill-item btn btn-dark">Firebase</li>
                                        <li className="skill-item btn btn-dark m-2">Bootstrap</li>
                                    </ul>
                                       </div>
                                    </div>
                                </div>
                                <div className="card-footer blog-footer d-flex">
                                    <div className="project-links  mono-text m-3">
                                        <a className="mono-text mono-color m-2" href="https://github.com/yeatun/car-s-home-client"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a className="mono-text mono-color m-2" href="https://github.com/yeatun/car-s-home-server"><small>Server: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a className="mono-text mono-color m-2" href="https://car-service-40270.web.app/"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card  single-blog col-md-6 my-4 col-lg-4 bg-color">
                            <a target="_blank" rel="noopener noreferrer" className="text-white" href="https://fresh-shop-83f9d.web.app/">
                                <img className="card-img-top" src={project2} alt="Card image cap" />
                                <div className="card-body blog-text">
                                    <h5 className="card-title blog-title">Daily Bazar</h5>
                                    <p className="card-text blog-description ">
                                        <ul className="ml-3">
                                            <li className="py-1">Very organized and single web page application</li>
                                            <li className="py-1">Authentication with google(Sign In/Sign Up)</li>
                                            <li className="py-1">Admin can updated product on the page</li>
                                            <li className="py-1">User can see there order List</li>
                                            <li className="py-1">Have to create account for order any product,</li>
                                        </ul>
                                        <ul className="project-skills text-light">
                                            <li className="skill-item btn btn-dark ">React.js</li>
                                            <li className="skill-item btn btn-dark m-2">Node.js</li>
                                            <li className="skill-item btn btn-dark btn btn-dark m-2  ">Express.js</li>
                                            <li className="skill-item btn btn-dark btn btn-dark ">MongoDB</li>
                                            <li className="skill-item btn btn-dark btn btn-dark btn btn-dark m-2 ">Firebase</li>
                                            <li className="skill-item btn btn-dark btn btn-dark m-2">Bootstrap4</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="card-footer blog-footer d-flex">
                                    <div className="project-links mono-text m-3">
                                        <a className="mono-text mono-color "  href="https://github.com/yeatun/Daily-Bazar-client-"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a className="mono-text mono-color m-2" href="https://github.com/yeatun/daily-bazar-server"><small>Server: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a className="mono-text mono-color m-2" href="https://fresh-shop-83f9d.web.app/"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card my-4 single-blog col-md-6 col-lg-4 bg-color">
                            <a target="_blank" rel="noopener noreferrer" className="text-white" href="https://urban-riders-c390e.web.app/">
                                <img className="card-img-top" src={project3} alt="Card image cap" />
                                <div className="card-body blog-text">
                                    <h5 className="card-title blog-title">Happy Traveller</h5>
                                    <p className="card-text blog-description ">
                                        <ul className="ml-3">
                                            <li className="py-1">Very organized and single web page application</li>
                                            <li className="py-1">Authentication with google(Sign In/Sign Up)</li>
                                            <li className="py-1">Added google map.</li>
                                        </ul>
                                        <ul className="project-skills text-light">
                                            <li className="skill-item btn btn-dark m-2">React.js</li>
                                            <li className="skill-item btn btn-dark ">Node.js</li>
                                            <li className="skill-item btn btn-dark m-2">Express.js</li>
                                            <li className="skill-item btn btn-dark m-2">MongoDB</li>
                                            <li className="skill-item btn btn-dark ">Firebase</li>
                                            <li className="skill-item btn btn-dark m-2">Bootstrap4</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="card-footer blog-footer d-flex">
                                    <div className="project-links mono-text p-3 mt-5">
                                        <a className="mono-text mono-color m-2" href="https://github.com/yeatun/HAPPY-TRAVELLER"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a className="mono-text mono-color m-5" href="https://urban-riders-c390e.web.app/"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="card my-4 bg-color single-blog col-md-6 col-lg-4">
                            <a target="_blank" rel="noopener noreferrer" className="text-white" href="https://6049d970e5773b6b57ae64a8--kind-rosalind-42a154.netlify.app/">
                                <img className="card-img-top" src={project4} alt="Card image cap" />
                                <div className="card-body blog-text">
                                    <h5 className="card-title blog-title">Yeatun League</h5>
                                    <p className="card-text blog-description ">
                                        <ul className="ml-3">
                                            <li className="py-1">A fully responsive  website built from scratch.</li>
                                            <li className="py-1">used API</li>
                                            <li className="py-1">all the information are dynamic</li>
                                        </ul>
                                        <ul className="project-skills text-light">
                                        <li className="skill-item btn btn-dark m-2">React.js</li>
                                            <li className="skill-item btn btn-dark m-2">Bootstrap4</li>
                                            <li className="skill-item btn btn-dark ">HTML5</li>
                                            <li className="skill-item btn btn-dark m-2">CSS3</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="card-footer blog-footer d-flex">
                                    <div className="project-links mono-text m-3">
                                        <a className="mono-text mono-color m-2" href="https://github.com/yeatun/football-leauge"><small>Client: </small><FontAwesomeIcon icon={faGithub} /></a>
                                        <a className="mono-text mono-color m-2" href="https://abuhasanrumi.github.io/RayBim-New/"><small>Live: </small><FontAwesomeIcon icon={faLink} /></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;