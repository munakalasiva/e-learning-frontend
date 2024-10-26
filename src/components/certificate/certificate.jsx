import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Certificate.css'; 

import Logo1 from '../../assets/images/AICTE-Logo-Design-removebg-preview.png';
import Logo2 from '../../assets/images/apsche.png';
import Logo3 from '../../assets/images/national career service.png';
import Logo4 from '../../assets/images/iso.png';

const Certificate = () => {
  const logos = [
    { imgSrc: Logo1, text: 'All India Council for Technical Education', className: 'logo1' },
    { imgSrc: Logo2, text: 'Andhra Pradesh State Council of Higher Education', className: 'logo2' },
    { imgSrc: Logo3, text: 'National Career Service', className: 'logo3' },
    { imgSrc: Logo4, text: 'ISO 9001:2015 Certified', className: 'logo4' },
  ];

  return (
    <Container>
      <Row className="text-center">
        {logos.map((logo, index) => (
          <Col key={index} xs={6} md={3} className="mb-4">
            <img
              src={logo.imgSrc}
              alt={`Logo ${index + 1}`}
              className={`img-fluid ${logo.className}`} // Apply the individual class
            />
            <p>{logo.text}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certificate;
