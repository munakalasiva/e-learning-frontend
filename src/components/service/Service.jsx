import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const services = [
  {
    delay: "0.1s",
    icon: "fa-graduation-cap",
    title: "Skilled Instructors",
    description: "Our instructors are industry experts with years of experience. They bring real-world knowledge to the classroom, ensuring you gain the skills needed to excel in your career."
  },
  {
    delay: "0.3s",
    icon: "fa-globe",
    title: "Online Classes",
    description: "We offer a range of online classes that you can take from the comfort of your home. Our interactive platform provides a seamless learning experience."
  },
  {
    delay: "0.5s",
    icon: "fa-home",
    title: "Home Projects",
    description: "Engage in hands-on home projects that complement our courses. These projects are designed to reinforce your learning and give you practical experience."
  },
  {
    delay: "0.7s",
    icon: "fa-book-open",
    title: "Book Library",
    description: "Access our extensive library of books and resources. Our library is curated to support your learning journey and provide additional insights into your field of study."
  }
];

const Service = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={service.delay} key={index}>
              <div 
                className="service-item text-center pt-3" 
                style={{ 
                  border: '3px solid #ddd', 
                  borderRadius: '10px solid grey',
                  height:"250px", 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                }}
              >
                <div className="p-4">
                  <i className={`fa fa-3x ${service.icon} text-primary mb-4`}></i>
                  <h5 className="mb-3">{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
