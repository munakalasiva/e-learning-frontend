import React from 'react';
import pencil from '../../assets/images/pencil.jpg';
import certificate from "../../assets/images/certificate.jpg";
import Aboutpick from '../../assets/images/chose_us.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPassport } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { faDiscourse } from '@fortawesome/free-brands-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';

import { FaArrowRight } from "react-icons/fa";
import "./about.css";
import aboutImg from "../../assets/images/10783790_19197357.jpg";
import {useNavigate} from "react-router-dom";

const About = ({isAuth}) => {

  const navigate = useNavigate();
  const handleNavigation = (pathIfLoggedIn, pathIfNotLoggedIn) => {
    if (isAuth) {
      navigate(pathIfLoggedIn);
    } else {
      navigate(pathIfNotLoggedIn);
    }
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
          <h3 className="fw-bold " style={{ color: '#06A3DA',textAlign:"center"}}> ABOUT US</h3>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ maxHeight: "300px",maxWidth:"600px" }}>
              <div className="position-relative h-100">
                <img className="img-fluid position-absolute w-100 h-100 mt-2" src={pencil} alt="" style={{ objectFit: "cover", height: "90% !important" }} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              
              <h4 className="mb-4">All the skills you need in one place</h4>
              <p className="mb-4">At Apra Nova eLearning, our mission is to provide high-quality, accessible, and engaging educational content to learners worldwide. We are dedicated to empowering individuals through education, enabling them to achieve their personal and professional goals.</p>
              <div className="row gy-2 gx-4">
                <div className="col-sm-6">
                  <p className="mb-0"><FaArrowRight /> Skilled Instructors</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0"><FaArrowRight /> Online Classes</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0"><FaArrowRight /> International Certificate</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0"><FaArrowRight /> Community Engagement</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0"><FaArrowRight /> Continuous Improvement</p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0"><FaArrowRight /> User-Friendly Platform</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
          <h3 className="fw-bold" style={{ color: '#06A3DA' }}>WHY CHOOSE US</h3>
          <h4 className="mb-0">Interested in a career with us?</h4>

          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                <div className="rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: '#EEF9FF' }}>
                  <FontAwesomeIcon icon={faPassport} style={{color: "#06a3da",}} />
                  </div>
                  <h4 style={{ color: '#06A3DA' }}>Strong Brand Identity</h4>
                  <p className="mb-0">Trust in a professional platform known for its high standards and commitment to delivering top-quality education.                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                <div className="rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: '#EEF9FF' }}>
                  <FontAwesomeIcon icon={faChalkboardUser} style={{ color: "#06a3da" }} />
                  </div>
                  <h4 style={{ color: '#06A3DA' }}>Engaging Learning Experience</h4>
                  <p className="mb-0">Enjoy interactive, multimedia-rich content designed to keep you motivated and deeply engaged.</p>
                </div>
                
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: '350px' }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src={Aboutpick} style={{ objectFit: 'cover' }} alt="Why Choose Us" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                <div className="rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: '#EEF9FF' }}>
                  <FontAwesomeIcon icon={faDiscourse} style={{ color: "#06a3da" }} />
                  </div>
                  <h4 style={{ color: '#06A3DA' }}>Choice of Subjects/Courses for Learning</h4>
                  <p className="mb-0">Explore a wide variety of subjects and courses tailored to your interests and career aspirations.</p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                <div className="rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: '#EEF9FF' }}>
                  <FontAwesomeIcon icon={faDiagramProject} style={{ color: "#06a3da" }} />
                  </div>
                  <h4 style={{ color: '#06A3DA' }}>Challenging Projects</h4>
                  <p className="mb-0">Boost your skills with hands-on projects that prepare you for real-world applications and professional success.</p>
                </div>
                
              </div>
            </div>


            <div className="certificate-container">
            <h3 className="fw-bold mt-5" style={{ color: '#06A3DA' }}>Course Completion Certificate</h3> 
              <div className="certificate-sty">
                <div>
                    <img src={certificate} alt="certificate"/>
                    <p>Completion certificate awarded on every course completion</p>
                 </div> 
                 <div className="certificate-content">
                      <h3>Courses focused on building strong foundational skills for career growth</h3>
                      <div className="advantages">
                          <div>
                              <h4>Learn from industry experts</h4>
                              <p>Comprehensive self-paced courses created with top practitioners</p>
                          </div>

                          <div>
                              <h4>Free resources</h4>
                              <p>Free guides on career paths,interview tips and more</p>
                          </div>                          

                          <div>
                              <h4>Skills based learning</h4>
                              <p>Job ready skills on offer in today's most in-demand domains</p>
                          </div>

                          <div>
                              <h4>Learn anytime, anywhere</h4>
                              <p>Learn while working or studying from any place,across any device</p>
                          </div>
                      </div>
                 </div>
                 </div> 
            </div>


          <div className="learn-container">    
            <div>
              <h4>LEARNERS AND STUDENTS</h4>
              <h1>You can learn<br/>anything</h1>
              <p>Build a deep,solid understanding in PythonFullStack,<br/>
                 web development,human resources and more..
              </p>
              <button onClick={() => handleNavigation('/courses','/account')} style={{borderRadius:"5px"}}>Learners,start here</button>
            </div> 

              <img src={aboutImg} alt="img" style={{marginRight:"50px"}}/>
          </div>  

          </div>
        </div>
      </div>
     
    </>
  );
};

export default About;
