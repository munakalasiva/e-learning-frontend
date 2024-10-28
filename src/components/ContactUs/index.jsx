

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css"

const ContactUs = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: '600px' }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
          <h1 className="mb-0 ">If You Have Any Query, Feel Free To Contact Us</h1>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
              <a href="tel:+7799902141">
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: '60px', height: '60px' }}
                >
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
              </a>
              <div className="ps-4">
                <h5 className="text-primary mb-2">Call to ask any question</h5>
                <h6 className="mb-0">+91 7799902140</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: '60px', height: '60px' }}
              >
                <i className="fa fa-envelope-open text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-primary mb-2">Email to get free quote</h5>
                <h6 className="mb-0">info@Vaarush.com</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: '60px', height: '60px' }}
              >
                <i className="fa fa-map-marker-alt text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-primary mb-2">Visit our office</h5>
                <h6 className="mb-0">NH-16, Plot 9, Marikavalasa Rd, beside PMR Function Hall</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
            <form action="https://formsubmit.co/hrvaarush@gmail.com" method="POST">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control border-0 bg-light px-4"
                    name="name"
                    placeholder="Your Name"
                    style={{ height: '55px' }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control border-0 bg-light px-4"
                    placeholder="Your Email"
                    style={{ height: '55px' }}
                    required
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="Subject"
                    className="form-control border-0 bg-light px-4"
                    placeholder="Subject"
                    style={{ height: '55px' }}
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control border-0 bg-light px-4 py-3"
                    name="Message"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
            <iframe
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.9494112708367!2d83.35641817628512!3d17.841006283125605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21b06add228b37ed%3A0xdaa7138b5f4e7ac0!2sVaarush%20Technologies!5e0!3m2!1ste!2sin!4v1715064540372!5m2!1ste!2sin"
              frameBorder="0"
              style={{ minHeight: '350px', border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
