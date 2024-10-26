import React from 'react';
import styled from 'styled-components';

import course1 from '../../assets/images/Python Fullstack.jpg';
import course2 from '../../assets/images/Fullstack Development.jpg';  
import course3 from '../../assets/images/Human resources.jpg';  

const courses = [
  {
    delay: "0.1s",
    imgSrc: course1,
    price: "₹5500",
    title: "Python Fullstack Course",
    duration: "6 Months",
    students: "70 Students"
  },
  {
    delay: "0.3s",
    imgSrc: course2,
    price: "₹5500",
    title: "Fullstack Development",
    duration: "4 Months",
    students: "40 Students"
  },
  {
    delay: "0.5s",
    imgSrc: course3,
    price: "₹3000",
    title: "Human resources",
    duration: "3 Months",
    students: "28 Students"
  }
];

const ScrollContainer = styled.div`
  max-height: 600px; /* Adjust the height as needed */
  overflow-y: auto;
`;

const CourseItem = styled.div`
  background-color: light;
  height: 400px; /* Adjust the height as needed */
  max-width: 280px; /* Adjust the width as needed */
  margin: 0 auto; /* Center the card horizontally */
  display: flex;
  flex-direction: column;
  border: 1px solid #dee2e6;
`;

const CourseImage = styled.img`
  height: 300px; /* Adjust the height of the image */
  object-fit: cover; /* Ensure the image covers the container */
`;

const Courses = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h3 className="section-title bg-white text-center fw-bold " style={{ color: '#06A3DA' }}>Courses</h3>
          <h4 className="mb-5">Popular Courses</h4>
        </div>
        <ScrollContainer className="row g-4 justify-content-center">
          {courses.map((course, index) => (
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={course.delay} key={index}>
              <CourseItem>
                <div className="position-relative overflow-hidden flex-grow-1">
                  <CourseImage src={course.imgSrc} alt="" />
                  
                </div>
                <div className="text-center p-4 pb-0 flex-grow-0">
                  <h3 className="mb-0">{course.price}</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                    <small className="fa fa-star text-primary"></small>
                  </div>
                  <h5 className="mb-4">{course.title}</h5>
                </div>
                <div className="d-flex border-top flex-grow-0">
                  <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>{course.duration}</small>
                  <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>{course.students}</small>
                </div>
              </CourseItem>
            </div>
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Courses;
