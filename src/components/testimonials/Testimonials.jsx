import React, { useEffect, useRef } from "react";
import "./testimonials.css";

import profile1 from '../../assets/images/profile-1.jpeg';
import profile2 from '../../assets/images/profile-2.jpeg';  
import profile3 from '../../assets/images/profile-3.jpeg';  
import profile4 from '../../assets/images/profile-4.jpeg';  
import profile5 from '../../assets/images/profile-5.jpeg';  
import profile6 from '../../assets/images/profile-6.jpeg';  
import profile7 from '../../assets/images/profile-7.jpeg';  
import profile8 from '../../assets/images/profile-8.jpeg';  
import profile9 from '../../assets/images/profile-9.jpeg';  



const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Varshini",
      position: "Student",
      message:
       "Vaarush eLearning has been a game changer for my studies. The course content is comprehensive, and the instructors are highly knowledgeable.",
      imgSrc: profile1,
    },
    {
      id: 2,
      name: "Kavya",
      position: "Student",
      message:
       "The interactive quizzes and assignments have made learning fun and engaging. I feel more confident in my skills now.",
      imgSrc: profile2,
    },
    {
      id: 3,
      name: "Naveen Kumar",
      position: "Student",
      message:
       "The variety of courses offered is amazing. I found everything I needed to excel in my exams. Highly recommend Vaarush eLearning!",
      imgSrc: profile3,
    },
    {
      id: 4,
      name: "Bhargav",
      position: "Student",
      message:
      "The platform is user-friendly and the content is very well organized. It has made my learning experience smooth and efficient.",
      imgSrc: profile4,
    },
    {
      id: 5,
      name: "Pranay",
      position: "Student",
      message:
        "The video lectures are clear and concise. The instructors do a great job of explaining complex concepts in an easy-to-understand manner.",
      imgSrc: profile5,
    },
    {
      id: 6,
      name: "Naveen",
      position: "Student",
      message:
       "The flexibility to learn at my own pace is fantastic. Vaarush eLearning has allowed me to balance my studies with other commitments.",
      imgSrc: profile6,
    },
    {
      id: 7,
      name: "Lohit",
      position: "Student",
      message:
       "The support team is very responsive and helpful. Anytime I had a question, they were quick to assist me.",
      imgSrc: profile7,
    },
    {
      id: 8,
      name: "Usha Rani",
      position: "Student",
      message:
       "The certification courses have added great value to my resume. I feel more prepared for my career thanks to Vaarush eLearning.",
      imgSrc: profile8,
    },
    {
      id: 9,
      name: "Jagadeesh",
      position: "Student",
      message:
       "The practical assignments and projects have helped me gain hands-on experience. I feel more confident in applying what I've learned.",
      imgSrc: profile9,
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      const scrollInterval = setInterval(() => {
        scrollElement.scrollBy({
          left: scrollElement.offsetWidth,
          behavior: 'smooth'
        });

        if (scrollElement.scrollLeft + scrollElement.offsetWidth >= scrollElement.scrollWidth) {
          setTimeout(() => {
            scrollElement.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          }, 1000); // Delay to show the last card before resetting
        }
      }, 5000); // Adjust the interval time as needed

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards" ref={scrollRef}>
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.imgSrc} alt={e.name} />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;




