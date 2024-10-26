import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import CarouselComponent from "../../components/crsl/CarouselComponent";
import Courses from "../../components/courses/Courses";
import About from "../../components/about/About";
import Service from "../../components/service/Service";
import Certificate from "../../components/certificate/certificate";
const Home = () => {
  return (
    <div>
      
      <CarouselComponent />
      <Service/>
       <About/>
       <Courses/>
      <Testimonials />
      <Certificate />
   
    </div>
  );
};

export default Home;
